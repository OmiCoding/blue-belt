import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"

const HALF_HOUR = 1000 * 60 * 30

const {
  SESSION_NAME = "Session",
  SESSION_IDLE_TIMEOUT = HALF_HOUR,
} = process.env

export const SESSION_OPTIONS = {
  name: SESSION_NAME,
  genid: function (req) {
    return uuidv4() // TODO: Hash session id?
  },
  secret: bcrypt.hashSync(bcrypt.genSaltSync(), 10),
  resave: false,
  saveUninitialized: false,
  rolling: true,
  proxy: false, // When HTTPS is being used
  cookie: {
    sameSite: true,
    httpOnly: true,
    maxAge: +SESSION_IDLE_TIMEOUT,
    secure: true, // Important for HTTPS
  },
}
