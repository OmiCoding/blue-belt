"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URI = exports.MONGO_OPTIONS = void 0;
let MONGO_OPTIONS;
exports.MONGO_OPTIONS = MONGO_OPTIONS;
let MONGODB_URI;
exports.MONGODB_URI = MONGODB_URI;

if (process.env.DBPATH === "docker") {
  const {
    MONGODB_ADMINUSER = "useromi",
    MONGODB_ADMINPASS = "omipublic123",
    MONGODB_DB = "blubelt",
    MONGODB_AUTHSOURCE = "blubelt"
  } = process.env;
  exports.MONGO_OPTIONS = MONGO_OPTIONS = {
    user: MONGODB_ADMINUSER,
    pass: MONGODB_ADMINPASS,
    dbName: MONGODB_DB,
    authSource: MONGODB_AUTHSOURCE,
    useNewUrlParser: true,
    autoIndex: false,
    useUnifiedTopology: true
  };
  exports.MONGODB_URI = MONGODB_URI = "mongodb://db:27017/blubelt";
} else {
  const {
    MONGODB_ADMINUSER = "useromi",
    MONGODB_ADMINPASS = "omipublic123",
    MONGODB_DB = "blubelt",
    MONGODB_AUTHSOURCE = "admin"
  } = process.env;
  exports.MONGO_OPTIONS = MONGO_OPTIONS = {
    user: MONGODB_ADMINUSER,
    pass: MONGODB_ADMINPASS,
    dbName: MONGODB_DB,
    authSource: MONGODB_AUTHSOURCE,
    useNewUrlParser: true,
    autoIndex: false,
    useUnifiedTopology: true
  };
  exports.MONGODB_URI = MONGODB_URI = "mongodb://localhost:27017";
}