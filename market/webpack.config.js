var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    overlay: { warnings: true, errors: true }, // 开发时遇到错误，把错误显示到浏览器上
    compress: true,
    port: 6979,
    proxy: {
      // '/proxy': {
      //   // http://www.baidu.com
      //   "target": "",
      //   "secure": false,
      //   "changeOrigin": true,
      //   "logLevel": "debug",
      //   "pathRewrite": {
      //     "^/proxy": "/"
      //   }
      // },
    }, //　代理在这里修改
  }
}