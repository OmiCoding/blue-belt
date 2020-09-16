// const TerserPlugin = require("terser-webpack-plugin")

module.exports = () => ({
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "eslint-loader",
          options: {
            emitWarning: true,
            formatter: require("eslint-friendly-formatter"),
            configFile: ".eslintrc.js",
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: (url, resourcePath, context) => {
                if (/\.(jpe?g|png|webp)$/.test(url)) {
                  return `images/${url}`
                }
              },
              name: "[name].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 90,
              },
              optipng: {
                enabled: true,
                quality: 70,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
})
