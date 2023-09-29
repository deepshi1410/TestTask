const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/users-app/'
    : '/',
  outputDir: path.resolve(__dirname, './docs')
})
