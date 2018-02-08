import Vue from "vue";
// element ui外部组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 字体图标文件
import '@/assets/iconfont/iconfont.css'
// 样式文件
import '@/assets/scss/main.scss'

// 公共组件的引入和注册
import BcHeader from '@/components/Commons/Header.vue'
import BcLfBar from '@/components/Commons/LeftBar.vue'
import Footer from '@/components/Commons/Footer.vue'
import AreaSelect from '@/components/Commons/AreaSelect.vue'
import MyCheckBox from '@/components/Commons/MyCheckBox.vue'
import InfoBox from '@/components/Commons/InfoBox.vue'

// 启用第三方插件
Vue.use(ElementUI)

// 注册全局组件 开始
Vue.component(BcHeader.name, BcHeader)
Vue.component(BcLfBar.name, BcLfBar)
Vue.component(Footer.name, Footer)
Vue.component(AreaSelect.name,AreaSelect)
Vue.component(MyCheckBox.name,MyCheckBox)
Vue.component(InfoBox.name,InfoBox)
// 注册全局组件 结束