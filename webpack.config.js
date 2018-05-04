const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-eval-source-map ',
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '/exercises/main.js')
  ],
  output: {
    path: path.join(__dirname, 'exercises'),
    filename: 'client.bundle.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.join(__dirname, 'exercises')
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', ['@babel/preset-stage-1', {decoratorsLegacy: true}]],
          plugins: [
            require('@babel/plugin-proposal-class-properties')
          ],
          cacheDirectory: true
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js']
  }
}
