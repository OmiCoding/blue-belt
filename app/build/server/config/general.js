"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.ENV = void 0;
const ENV = process.env.ENV || "development";
exports.ENV = ENV;
const PORT = process.env.SERVER_PORT || 8080;
exports.PORT = PORT;