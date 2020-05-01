const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniExtractCssPlugin = require("mini-css-extract-plugin");
const CompresionWebpackPlugin = require("compression-webpack-plugin");

module.exports = () => ({
  output: {
    filename: "[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniExtractCssPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniExtractCssPlugin(),
    new CompresionWebpackPlugin(),
  ],
});
