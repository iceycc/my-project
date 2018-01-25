'use strict'
//node核心模块path
const path = require('path')
//构建工具相关
const utils = require('./utils')
//项目开发框架
const config = require('../config')
//webpack loader配置
const vueLoaderConfig = require('./vue-loader.conf')
//处理路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
//
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})
//
module.exports = {
  //基础目录
  context: path.resolve(__dirname, '../'),
  //入口文件
  entry: {
    app: './src/main.js'
  },
  // 出口
  output: {
    path: config.build.assetsRoot,//输出文件 默认‘../dist’
    filename: '[name].js',//输出文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath//生产环境publicpath
      : config.dev.assetsPublicPath//开发模式 publicpath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],//解析确定的拓展名
    alias: {//创建别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),//如 '@/components/HelloWorld'
    }
  },
  module: {//模块相关配置  包括loader,plugin 等
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,//vue要在bable之前 
        loader: 'vue-loader',//vue转普通的html
        options: vueLoaderConfig//可选项 vue-loader选择配置
      },
      {
        test: /\.js$/,//bable
        loader: 'babel-loader',//es6转es5 loader
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {//url-loader限制文件大小  低于限制时 返回的是DataURL  即base64
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,//图片
        loader: 'url-loader',
        options: {//兼容性问题 将query换成 options
          limit: 10000,//默认无限制
          name: utils.assetsPath('img/[name].[hash:7].[ext]')//hash:7  代表七位的hash值 
        }
      },
      {//url-音视频
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: { // 是否 polyfill 或 mock   解决兼容性 和 接口测试
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
