var config = require('../config.js');
const log = require("./logging.js");

const url = require('url').URL;
const {spawn} = require('child_process');
const crypto = require('crypto');
const fs = require('fs')

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

    const iv = crypto.randomBytes(16);
    console.log(iv);
    const cipher = crypto.createCipheriv('aes-256-ctr', "PASSWORD", iv);

    process.stdout.pipe(cipher);
    const writable = fs.createWriteStream('out.txt');
    cipher.pipe(writable);
}

doBackup();