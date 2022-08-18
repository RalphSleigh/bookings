const { config } = require('../config');
const log = require("./logging.js");

const url = require('url').URL;
const {spawn} = require('child_process');
const secureStreams = require('node-secure-stream');
const rotation = require('rotation');
const schedule = require('node-schedule');

const dbURL = new url(config.DB_URL);

function doBackup() {
    try {
        const process = spawn('pg_dump', [config.DB_URL]);

        process.stderr.on('data', (data) => {
            log.error(`Backup Error: ${data}`);
        });

        const enc = new secureStreams.Encrypter({public_key: config.BACKUP_PUBLIC_KEY});

        process.stdout.pipe(enc);

        const AWS = require('aws-sdk');
        AWS.config.update({
            region: 'eu-west-2',
            accessKeyId: config.AWS_BACKUP_KEY,
            secretAccessKey: config.AWS_BACKUP_SECRET
        });
        const s3 = new AWS.S3();

        const key = `${config.AWS_BACKUP_PATH}/${rotation()}.sql.enc`;

        const params = {
            Bucket: config.AWS_BACKUP_BUCKET,
            Key: key,
            Body: enc
        };

        s3.upload(params, function (err, data) {
            if (err) throw err; // an error occurred
            else log.info("Backup Successful");
        });

    } catch (e) {
        log.error(e);
    }
}

if (dbURL.protocol !== 'postgres:') {
    log.info("Not postgres, skipping backup");
} else {

    doBackup();
    const j = schedule.scheduleJob('0 1 * * *', doBackup);

}