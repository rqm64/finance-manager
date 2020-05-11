const rules = require('./rules');

const HtmlWebPackPlugin = require('html-webpack-plugin');
console.l
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
    extensions: ['.tsx', '.ts', '.js'],
  }
};
