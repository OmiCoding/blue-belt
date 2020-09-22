const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const LoadablePlugin = require("@loadable/webpack-plugin")

// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin

const BUILD_PATH = path.resolve(__dirname, "../../build")

exports.serverConfig = ({ entry, filename, env, target, boolVal }) => {
  return {
    name: "server",
    mode: env,
    entry: entry,
    target: target,
    output: {
      filename: filename,
      path: path.join(BUILD_PATH, "server"),
      publicPath: `/server`,
      libraryTarget: "commonjs2",
    },
    plugins: [
      new webpack.DefinePlugin({
        __IS_BROWSER__: boolVal,
      }),
      new LoadablePlugin(),
    ],
    externals: ["@loadable/component", nodeExternals()],
    module: {
      rules: [
        // env === "production"
        //   ? {}
        //   : {
        //       enforce: "pre",
        //       test: /\.(js|jsx)$/,
        //       exclude: /node_modules/,
        //       use: {
        //         loader: "eslint-loader",
        //         options: {
        //           emitWarning: true,
        //           formatter: require("eslint-friendly-formatter"),
        //           configFile: ".eslintrc.js",
        //         },
        //       },
        //     },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              caller: {
                target,
              },
            },
          },
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
                emitFile: false,
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
          use: [
            "@svgr/webpack",
            {
              loader: "file-loader",
              options: {
                emitFile: false,
                outputPath: (url, resourcePath, context) => {
                  if (/\.svg$/.test(resourcePath)) {
                    return `assets/${url}`
                  }
                },
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    devtool: env === "production" ? "cheap-module-source-map" : false,
  }
}
