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

    const key = fs.readFileSync('pub.pem');

    const enc = new secureStreams.Encrypter({public_key: key});

    process.stdout.pipe(enc);
    const writable = fs.createWriteStream('out.txt');
    cipher.pipe(writable);
}

doBackup();