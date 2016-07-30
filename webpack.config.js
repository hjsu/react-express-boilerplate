var webpack = require('webpack');
var path = require('path');

var config = {
  entry: path.join(__dirname + '/src/application.jsx'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
	presets: ['es2015', 'react']
      }
    }
    ]
  }
};

module.exports = config;
