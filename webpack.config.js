const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
      { test: /\.s[ac]ss$/, use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"] },
      { test: /\.md$/, loader: "file-loader", options: { name: "posts/[name].[ext]" } },
      { test: /\.gif$/, loader: "file-loader", options: { name: "gifs/[name].[ext]" } }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "./bundle.js"
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    static: { directory: "./dist/" },
    historyApiFallback: { index: '/index.html' },
    hot: true
  },
  optimization: { minimizer: [new TerserPlugin({ extractComments: false })] }
};