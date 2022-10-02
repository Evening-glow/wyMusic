const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    // https:true,
    port: 5000,
    client: {
      webSocketURL: 'ws://0.0.0.0:5000/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "/api": {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { "^/api": "" }//路径重写
      },
      "/get": {
        target: 'http://music.163.com/api',
        changeOrigin: true,
        pathRewrite: { "^/get": "" }
      }
    }
  }
})
