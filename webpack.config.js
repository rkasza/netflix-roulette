const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules:[
      {
        test : /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test : /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}