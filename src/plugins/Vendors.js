import Vue from "vue";
// element ui外部组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 字体图标文件
import '@/assets/iconfont/iconfont.css'
// 样式文件
import '@/assets/scss/main.scss'


// 启用第三方插件
Vue.use(ElementUI)
// todo : 抽空抽离需要的组件 按需加载

// 组件的引入
import {commons} from '../components/index.js'

// 注册全局组件 开始
Vue.component(commons.BcHeader.name, commons.BcHeader)
Vue.component(commons.BcLfBar.name, commons.BcLfBar)
Vue.component(commons.Footer.name, commons.Footer)
Vue.component(commons.AreaSelect.name, commons.AreaSelect)
Vue.component(commons.MyCheckBox.name, commons.MyCheckBox)
Vue.component(commons.InfoBox.name, commons.InfoBox)
Vue.component(commons.SmallPagination.name, commons.SmallPagination)
Vue.component(commons.BcTab.name, commons.BcTab)
Vue.component(commons.MessageCode.name, commons.MessageCode)

// 注册全局组件 结束


