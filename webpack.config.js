const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    bundle: './src/index.ts'
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.ts$/,
        loader: 'eslint-loader',
        options: { configFile: '.eslintrc.js' }
      },
    ]
  },
  externals: [nodeExternals()]
}
