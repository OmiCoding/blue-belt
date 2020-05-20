"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SESSION_OPTIONS = void 0;
const HALF_HOUR = 1000 * 60 * 30;
const {
  SESSION_NAME = "sid",
  SESSION_IDLE_TIMEOUT = HALF_HOUR,
  SESSION_SECRET = "secret"
} = process.env;
const SESSION_OPTIONS = {
  name: SESSION_NAME,
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  proxy: false,
  // When HTTPS is being used
  cookie: {
    maxAge: +SESSION_IDLE_TIMEOUT,
    secure: process.env.ENV === "development" ? false : true // Important for HTTPS

  }
};
exports.SESSION_OPTIONS = SESSION_OPTIONS;