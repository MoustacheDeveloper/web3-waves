const path = require('path');

module.exports = {
  entry: [
      path.join(__dirname, "src", "main.js")
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "build.js"
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
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