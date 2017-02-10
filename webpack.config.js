const resolve = require('path').resolve
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const config = {
  entry: [
    './lib.es2015/index.js',
  ],

  output: {
    filename: 'index.js',
    path: 'lib/',
    library: 'stylishComponents',
    libraryTarget: 'umd'
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              'presets': [
                [
                  'latest',
                  {
                    'modules': false
                  }
                ]
              ]
            }
          }
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },
}

module.exports = config