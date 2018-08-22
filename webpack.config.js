const path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractPlugin = new ExtractTextPlugin({
  filename: "main.css"
});
module.exports = {
  entry: ['./indexsrc/main.js'],
    output: {
      path: path.resolve(__dirname, 'indexbuild/'),
      publicPath: 'indexbuild/',
      filename: 'indexboard.js',
    },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
          use: ["css-loader"]
        })
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [extractPlugin]
};
