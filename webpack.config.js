const path = require('path');

module.exports = {
  entry: [
      path.join(__dirname, "src", "main.js")
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "build.js"
  },
  module: {
    rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
    ]
  }
}