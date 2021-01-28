const path = require('path');
// const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  name: 'server',
  // Tell webpack the root file of our server application
  entry: [path.join(CURRENT_WORKING_DIR, './server/server.js')],
  target: 'node',
  output: {
    filename: 'server.generated.js',
    libraryTarget: 'commonjs2',
    path: path.join(CURRENT_WORKING_DIR, '/dist/'),
    publicPath: '/dist/',
  },

  // Tell webpack to not include all package into the bundle file
  // Readmore https://www.npmjs.com/package/webpack-node-externals
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};

module.exports = config;
