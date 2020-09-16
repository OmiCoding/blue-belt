const { serverConfig } = require("./utils/configs/serverConfig")
const { clientConfig } = require("./utils/configs/clientConfig")

module.exports = ({ mode } = { mode: process.env.ENV, presets: [] }) => {
  return [
    clientConfig({
      entry: "./client/index.js",
      filename: "client.js",
      boolVal: true,
      env: mode,
      target: "web",
    }),
    serverConfig({
      entry: "./server/index.js",
      filename: "server.js",
      boolVal: false,
      env: mode,
      target: "node",
    }),
  ]
}
