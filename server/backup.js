var config = require('../config.js');
const log = require("./logging.js");

const url = require('url').URL;
const {spawn} = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const secureStreams = require('node-secure-stream');

const dbURL = new url(config.DB_URL);

if (dbURL.protocol !== 'postgres:') {
    log.info("Not postgres, skipping backup");
    return;
}

function doBackup() {
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

    const key = `${config.AWS_BACKUP_PATH}/${Math.floor(new Date() / 1000)}.sql.enc`;

    const params = {
        Bucket: config.AWS_BACKUP_BUCKET,
        Key: key,
        Body: enc
    };

    s3.upload(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
        /*
        data = {
         ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
         VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
        }
        */
    });
}

doBackup();