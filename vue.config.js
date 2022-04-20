const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },
<<<<<<< HEAD
  lintOnSave:false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
=======
  lintOnSave: false
>>>>>>> 139b1244f5b98a2cd33a9d3b84483f1687714f02
})
