const path = require("path");
const TkoolMvCommentPlugin = require("./src/lib/tkool-mv-comment-plugin");

module.exports = {
  mode: "development",
  optimization: {
    minimize: false, // 出力JSファイルを圧縮しない
  },
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../js/plugins"), // string
    filename: "firstTsPlugin.js", // string
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new TkoolMvCommentPlugin()],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
