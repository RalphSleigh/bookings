const fs = require('fs');
const secureStreams = require('node-secure-stream');

const key = fs.readFileSync('aws_backup_key.pem');
const enc = new secureStreams.Decrypter({key: key});
const file = fs.createReadStream(process.argv[2]);


file.pipe(enc);

const writable = fs.createWriteStream(process.argv[3]);

enc.pipe(writable);