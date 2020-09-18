const fs = require("fs")
const path = require("path")

console.log(fs.readFileSync("/home/node/app/cert/cert.pem", "utf-8"))
