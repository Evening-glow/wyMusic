const { defineConfig } = require('@vue/cli-service')
var webpack = require('webpack');
var vue = require('vue-loader');
var path = require('path');

module.exports = defineConfig({
  publicPath: './',
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
        // target: 'https://autumnfish.cn/',
        changeOrigin: true,
        pathRewrite: { "^/api": "" }//路径重写
      },
      "/get": {
        target: 'http://music.163.com/api',
        changeOrigin: true,
        pathRewrite: { "^/get": "" }
      }
    }
  },
  assetsDir: "static"
})
