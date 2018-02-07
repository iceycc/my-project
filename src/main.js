// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'// 入口文件
import router from './config/routers' // 引入路由配置文件  里面是index 默认可以省略
import Axios from 'axios' // 引入 axios 出来ajax
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import BcHeader from './components/Commons/Header.vue'
import BcLfBar from './components/Commons/LeftBar.vue'
import Footer from './components/Commons/Footer.vue'
import AreaSelect from './components/Commons/AreaSelect.vue'
import MyCheckBox from './components/Commons/MyCheckBox.vue'
import InfoBox from './components/Commons/InfoBox.vue'



import './assets/iconfont/iconfont.css'
import './assets/scss/main.scss'

// 启用第三方插件
Vue.use(ElementUI)

// 生产环境提示，这里设置成了false
Vue.config.productionTip = false

// 注册全局过滤器  开始

// 注册全局过滤器 结束

// 注册全局组件 开始

Vue.component(BcHeader.name, BcHeader)
Vue.component(BcLfBar.name, BcLfBar)
Vue.component(Footer.name, Footer)
Vue.component(AreaSelect.name,AreaSelect)
Vue.component(MyCheckBox.name,MyCheckBox)
Vue.component(InfoBox.name,InfoBox)



// 注册全局组件 结束

// 考虑未来可能样式覆盖 这里引入自己的css样式

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
  render: c => c(App)
  // components: { App },
  // template: '<App/>'
})
