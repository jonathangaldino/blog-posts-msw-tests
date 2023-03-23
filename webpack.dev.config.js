const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ReloadServerPlugin = require("./webpack/ReloadServerPlugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({})]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  plugins: [
    new ReloadServerPlugin({
      script: path.resolve(__dirname, "build", "index.js")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
};
