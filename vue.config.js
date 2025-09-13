const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' 
  ? '/Baoding-introduction-Vue-homework/'  // 仓库名必须正确，前后斜杠不能少
  : '/',  // 开发环境保持根路径
  outputDir: 'dist',
  transpileDependencies: true
})
