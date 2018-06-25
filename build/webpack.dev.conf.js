// 开发环境配置文件 webpack.dev.conf.js 
//启动项目时用的到这个    
//1 将webpack的热重载客户端代码添加到每个entry对应的应用
//2 合并基础的webpack配置
//3 配置样式文件的处理规则，styleLoaders
//4 配置Source Maps
//5 配置webpack插件


'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')//基本配置参数
const merge = require('webpack-merge')//用于合并webpack的配置文件 ！!!是一个可以合并数组和对象的插件
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf') //webpack基本配置文件（开发时都用用的到）

/**
 * copy-webpack-plugin  拷贝资源插件
 * 作用：把public 里面的内容全部拷贝到编译目录
 */
const CopyWebpackPlugin = require('copy-webpack-plugin') //拷贝资源插件

/**
 * [HtmlWebpackPlugin description]
 * @type {[type]}
 * 这个插件的作用是依据一个简单的模板，帮你生成最终的Html5文件，
 * 这个文件中自动引用了你打包后的JS文件。每次编译都在文件名中插入一个不同的哈希值
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')//用于更友好地输出webpack的警告、错误等信息
const portfinder = require('portfinder') //自动检索下一个可用端口  

const HOST = process.env.HOST //读取系统环境变量的host  
const PORT = process.env.PORT && Number(process.env.PORT) //读取系统环境变量的port

// 合并baseWebpackConfig配置
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    // 对一些独立的css文件以及它的预处理文件做一个编译
    // 样式文件的处理规则，对css/sass/scss等不同内容使用相应的styleLoaders
    // 由utils配置出各种类型的预处理语言所需要使用的loader，例如sass需要使用sass-loader
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,  // 添加元信息(meta info)增强调试

  // these devServer options should be customized in /config/index.js
  devServer: {  //webpack-dev-server服务器配置
    clientLogLevel: 'warning',// console 控制台显示的消息，可能的值有 none, error, warning 或者 info
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,//开启热加载
    contentBase: false, // since we use CopyWebpackPlugin.  TODO:这个什么作用呢
    compress: true,//开启压缩
    host: HOST || config.dev.host,// process.env 优先
    port: PORT || config.dev.port,// process.env 优先
    open: config.dev.autoOpenBrowser,//自动打开浏览器，这里是默认是false，所以不会自动打开
    overlay: config.dev.errorOverlay // warning 和 error 都要显示
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,//代理设置用于前后端分离
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {  //启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改
      poll: config.dev.poll,//通过传递 true 开启 polling，或者指定毫秒为单位进行轮询。默认为false
    }
  },

  plugins: [//webpack一些构建用到的插件
    new webpack.DefinePlugin({//
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),//模块热替换它允许在运行时更新各种模块，而无需进行完全刷新
    new webpack.NamedModulesPlugin(),  // 热加载时直接返回更新的文件名，而不是id   // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(), //跳过编译时出错的代码并记录下来，主要作用是使编译后运行时的包不出错  
    new HtmlWebpackPlugin({ //生产html   https://github.com/ampedandwired/html-webpack-plugin
      filename: 'index.html',// 指定编译后生成的html文件名
      template: 'index.html',// 需要处理的模板
      // 打包过程中输出的js、css的路径添加到html文件中
      // css文件插入到head中
      // js文件插入到body中，可能的选项有 true, 'head', 'body', false
      inject: true
    }),
    new CopyWebpackPlugin([// copy custom static assets   作用：把public 里面的内容全部拷贝到编译目录
      {
        from: path.resolve(__dirname, '../static'),//from    定义要拷贝的源目录           from: __dirname + ‘/src/public’
        to: config.dev.assetsSubDirectory,//定义要拷贝到的目标目录     to: __dirname + ‘/dist’
        ignore: ['.*']//忽略拷贝指定的文件           可以用模糊匹配
        // toType   //file 或者 dir         可选，默认是文件
        // force    //强制覆盖先前的插件     可选 默认false
        // context  //                      可选 默认base context可用specific context
        // flatten  //只拷贝文件不管文件夹     默认是false
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port  // 获取当前设定的端口
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests 
      // process 发布端口
      process.env.PORT = port
      // add port to devServer config
      // 设置 devServer 端口
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({// 错误提示插件
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
