function isWeb(caller) {
  return Boolean(caller && caller.target === "web")
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === "babel-loader")
}

module.exports = (api) => {
  const web = api.caller(isWeb)
  const webpack = api.caller(isWebpack)

  return {
    presets: [
      ["@babel/preset-react"],
      [
        "@babel/preset-env",
        {
          useBuiltIns: web ? "usage" : undefined,
          corejs: web ? 3 : false,
          targets: !web
            ? {
                node: "current",
              }
            : undefined,
          modules: webpack ? false : "commonjs",
        },
      ],
    ],
    plugins: [
      ["@loadable/babel-plugin"],
      ["@babel/plugin-transform-destructuring"],
      [
        "emotion",
        {
          sourceMap: process.env.ENV === "production",
          autoLabel: process.env.ENV !== "production",
          labelForm: "[local]",
          cssPropOptimization: true,
        },
      ],
      ["@babel/plugin-syntax-dynamic-import"],
      ["@babel/plugin-proposal-object-rest-spread"],
      ["@babel/plugin-proposal-export-default-from"],
    ],
  }
}
