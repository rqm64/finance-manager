const rules = require('./rules');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: __dirname + '/../index.html',
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      'src'
    ],
    extensions: ['.tsx', '.ts', '.js'],
  }
};
