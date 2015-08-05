module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.coffee$/, loader: "coffee-loader" }
    ]
  }
};

