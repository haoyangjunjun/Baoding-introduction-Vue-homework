const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
  ? '/Baoding-introduction-Vue-homework/'  // 仓库名必须正确，前后斜杠不能少
  : '/',  // 开发环境保持根路径
  outputDir: 'dist',
  transpileDependencies: true,
  // 添加以下配置修改网站标题
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '保定是个好地方👍' 
      return args
    })
  }
})
