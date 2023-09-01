const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const config = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:3000/",
    path: path.resolve(__dirname, "./dist"),
  },

  devServer: {
    port: "3000",
    static: {
      directory: path.resolve(__dirname, "dist/"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TerserPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      minify: false,
    }),

    new ModuleFederationPlugin({
      name: "HeaderApp",
      filename: "remoteEntry.js",
      exposes: {
        "./HeaderApp": "./src/index.js",
      },
    }),
  ],
};

module.exports = config;
