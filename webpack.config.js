const path = require("path");
const Html = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const entryPath = "./development";


module.exports = {
  entry: `./${entryPath}/js/app.js`,

  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `./distribution`),
    publicPath: './distribution/',
  },
  devServer: {
    static: path.join(__dirname, `${entryPath}`),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      threshold: 0,
      minRatio: 0.8,
    }),
  ],
};
