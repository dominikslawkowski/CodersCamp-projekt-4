const path = require('path');

module.exports = {
  entry: ['./src/postsSection.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'commentMain.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
