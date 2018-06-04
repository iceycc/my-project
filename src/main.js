// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 入口文件
import router from './router' // 引入路由配置文件  里面是index 默认可以省略
import './assets/scss/_reset.scss'; // 全局引入初始化文件
import './store/index'
// 生产环境提示，这里设置成了false
Vue.config.productionTip = false


// 引入全局过滤器
import * as custom from './plugins/filter'
Object.keys(custom).forEach((key)=>{
  Vue.filter(key,custom[key])
})


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: (c) => c(App)
})
