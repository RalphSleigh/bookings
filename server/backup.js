var config = require('../config.js');
const log = require("./logging.js");

const url = require('url').URL;
const {spawn} = require('child_process');

const dbURL = new url(config.DB_URL);

console.log(dbURL.protocol);

if (dbURL.protocol !== 'postgres') {
    log.info("Not postgres, skipping backup");
    return;
}

function doBackup() {
    const process = spawn('pg_dump', [config.DB_URL]);

    process.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    process.stderr.on('data', (data) => {
        log.error(`Backup Error: ${data}`);
    });
}

doBackup();