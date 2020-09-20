import fs from "fs"

export const ENV = process.env.ENV || "development"
export const PORT = process.env.SERVER_PORT || 443

export const CREDENTIALS = {
  key: fs.readFileSync("/home/node/app/certs/privkey.pem", "utf-8"),
  cert: fs.readFileSync("/home/node/app/certs/cert.pem", "utf-8"),
  ca: fs.readFileSync("/home/node/app/certs/chain.pem", "utf8"),
}
