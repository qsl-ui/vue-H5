const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const pxtorem = require('postcss-pxtorem') // 移动端适配,px转为rem
const IS_PROD = ['production'].includes(process.env.NODE_ENV) // 判断是否是生成环境

module.exports = {
  productionSourceMap: !IS_PROD, // 生产环境的 source map(生成环境去掉map,减少代码体积,加入打包速度,加密压缩代码)
  lintOnSave: process.env.NODE_ENV === 'development', // 本地开发环境每次保存启用eslint校验代码
  // webpack链式配置
  chainWebpack: config => {
    config.externals({
      'wx': 'wx'
    })
    const cdn = {
      js: [
        'https://res2.wx.qq.com/open/js/jweixin-1.4.0.js'
      ]
    }
    // html中添加cdn
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@css', resolve('src/assets/css'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
    return config
  },
  // 自适应配置
  css: {
    requireModuleExtension: true,
    extract: process.env.NODE_ENV === 'production',
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.16.13.76:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    open: true,
    inline: true,
    host: '0.0.0.0',
    port: 8082
  }
}
