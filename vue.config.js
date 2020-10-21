module.exports = {
  configureWebpack : {
    resolve:{
      alias:{
        'assets':'@/assets',
        'api': '@/api',
        'components':'@/components',
        'styles':'@/styles',
        'views':'@/views',
        'utils':'@/utils',
      }
    }
  },
  outputDir:process.env.outputDir
}