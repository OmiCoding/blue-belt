"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _redis = _interopRequireDefault(require("redis"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectRedis = _interopRequireDefault(require("connect-redis"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // Setting up session storage
// const app = express()
// const RedisStore = connectRedis(session)
// const redisClient = redis.createClient(REDIS_OPTIONS)
// Global middlewares that are used everywhere

app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)());
app.use((0, _morgan.default)("dev"));
app.use((0, _helmet.default)()); // app.use(
//   session({
//     store: new RedisStore({ client: redisClient }),
//     ...SESSION_OPTIONS,
//   })
// )

app.use(_express.default.static(_path.default.resolve(__dirname, "../client"))); // All frontend routes will point here

app.get("/*", (req, res) => {
  res.sendFile(_path.default.resolve(__dirname, "../client", "index.html"));
}); // Function to start the server

const start = async () => {
  try {
    app.listen(_config.PORT, () => {
      console.log(`Listening on port ${_config.PORT}....`);
    });
    await _mongoose.default.connect(_config.MONGODB_URI, { ..._config.MONGO_OPTIONS
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;