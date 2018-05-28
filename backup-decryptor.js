const fs = require('fs');
const secureStreams = require('node-secure-stream');

const key = fs.readFileSync('key.pem');
const enc = new secureStreams.Decrypter({key: key});
const file = fs.createReadStream(process.argv[1]);


file.pipe(enc);

const writable = fs.createWriteStream(process.argv[2]);

enc.pipe(writable);