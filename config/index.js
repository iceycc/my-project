
// 述了开发和构建两种环境下的配置
'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    // 开发过程中使用的配置
    dev: {

    // Paths
    assetsSubDirectory: 'static',// 静态资源文件夹
    assetsPublicPath: '/',// 发布路径
    proxyTable: {
        '/api': {
            target: 'http://merchant.uzhuang.com/',//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
            }
        }
    },    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口  例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8081, // dev-server监听的端口 can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true, // 是否自动打开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true  // 是否开启 cssSourceMap
  },

  // 构建产品时使用的配置
  build: {
    // Template for index.html  html入口
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths  产品文件的存放路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    //二级目录，存放静态资源文件的目录，位于dist文件夹下
    assetsSubDirectory: 'static',
    // 发布路径，如果构建后的产品文件有用于发布CDN或者放到其他域名的服务器，可以在这里进行设置
    // 设置之后构建的产品文件在注入到index.html中的时候就会带上这里的发布路径
    assetsPublicPath: './',

    /**
     * Source Maps
     */
    // 是否使用source-map
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 是否开启gzip压缩
    productionGzip: false,
    // gzip模式下需要压缩的文件的扩展名，设置js、css之后就只会对js和css文件进行压缩
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 是否展示webpack构建打包之后的分析报告
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
