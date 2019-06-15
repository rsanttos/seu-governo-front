module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    output: {
      filename: 'app-bundle.js'
    },
    optimization: {
      splitChunks: false
    },
  },
  filenameHashing: false,
  devServer: {
    // open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    noInfo: true,
    overlay: true,
    historyApiFallback: true,
  },
}
