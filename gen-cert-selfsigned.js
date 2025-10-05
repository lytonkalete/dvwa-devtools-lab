import fs from "fs";
import selfsigned from "selfsigned";

const attrs = [{ name: "commonName", value: "localhost" }];
const opts = {
    keySize: 4096,
    days: 365,
    algorithm: "sha256",
    extensions: [{
        name: "subjectAltName",
        altNames: [
            { type: 2, value: "localhost" },
            { type: 7, ip: "127.0.0.1" }
        ]
    }]
};

const pems = selfsigned.generate(attrs, opts);

fs.writeFileSync("key.pem", pems.private);
fs.writeFileSync("cert.pem", pems.cert);
console.log("Wrote key.pem and cert.pem");