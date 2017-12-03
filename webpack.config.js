const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve("dist"),
    filename: 'bundle[hash].js',
    publicPath: "/"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": "./src"
    }
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.resolve('./src')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("./dist"),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    })
  ]
}