"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashboard = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

exports.dashboard = router;
router.get("/dashboard", (req, res) => {});