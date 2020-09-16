const TerserPlugin = require("terser-webpack-plugin")

module.exports = () => ({
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: (url, resourcePath, context) => {
                if (/\.(jpe?g|png)$/.test(url)) {
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
                quality: 65,
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
  optimization: {
    runtimeChunk: "single",
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: (module) => {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]
            return `npm.${packageName.replace("@", "")}`
          },
          chunks: "all",
        },
      },
    },
  },
})
