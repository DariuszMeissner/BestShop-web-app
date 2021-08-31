
const path = require("path");
const entryPath = ".";

module.exports = {
  entry: `./${entryPath}/js/app.js`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, `${entryPath}`),
      publicPath: "/build/",
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
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
