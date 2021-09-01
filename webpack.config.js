const path = require("path");
const entryPath = ".";

module.exports = {
  entry: `./${entryPath}/js/app.js`,

  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
    publicPath: '/build/',
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
};
