const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, './build')
const APP_DIR = path.resolve(__dirname, './src')

const config = {
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
           cacheDirectory: true,
           presets: [
            [
              '@babel/preset-react',
              {
                development: true,
                throwIfNamespace: false
              }
            ]
          ]
         }
       }]
      }
    ]
  }
}

module.exports = config
