import fs from "fs"

export const ENV = process.env.ENV || "development"
export const HTTPPORT = process.env.HTTP.PORT || 8000
export const HTTPSPORT = process.env.HTTPS_PORT || 8443

export const CREDENTIALS = {
  key: fs.readFileSync("/home/node/app/certs/privkey.pem", "utf-8"),
  cert: fs.readFileSync("/home/node/app/certs/cert.pem", "utf-8"),
  ca: fs.readFileSync("/home/node/app/certs/fullchain.pem", "utf-8"),
}
