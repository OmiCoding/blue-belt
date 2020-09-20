const fs = require("fs")
const path = require("path")

console.log(fs.readFileSync("/home/node/app/certs/cert.pem", "utf-8"))
