// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 入口文件
import router from './config/routers' // 引入路由配置文件  里面是index 默认可以省略
import Axios from 'axios' // 引入 axios 出来ajax

// 生产环境提示，这里设置成了false
Vue.config.productionTip = false

// 注册全局过滤器  开始

// 注册全局过滤器 结束
// Axios开始
Vue.prototype.$axios = Axios
// 设置基础的URL请求路径
Axios.defaults.baseURL = ''
// Axios.default.open({

// })

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: (c) => c(App)
	// components: { App },
	// template: '<App/>'
})
