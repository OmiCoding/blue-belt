const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const LoadablePlugin = require("@loadable/webpack-plugin")
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin

const BUILD_PATH = path.resolve(__dirname, "../../build")

exports.clientConfig = ({ entry, filename, boolVal, env, target }) => {
  return {
    name: target,
    mode: env,
    entry: entry,
    target: target,
    output: {
      filename: filename,
      path: path.join(BUILD_PATH, target),
      publicPath: `/${target}/`,
    },
    plugins: [
      new webpack.DefinePlugin({
        __IS_BROWSER__: boolVal,
      }),
      new LoadablePlugin(),
    ],
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
              caller: { target },
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpe?g|png|webp)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: (url, resourcePath, context) => {
                  if (/\.(jpe?g|png|webp)$/.test(resourcePath)) {
                    return `assets/${url}`
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
            // {
            //   loader: "file-loader",
            //   options: {
            //     outputPath: (url, resourcePath, context) => {
            //       if (/\.svg$/.test(resourcePath)) {
            //         return `assets/${url}`
            //       }
            //     },
            //     name: "[name].[ext]",
            //   },
            // },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            "@svgr/webpack",
            {
              loader: "file-loader",
              options: {
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
    optimization: {
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
  }
}
