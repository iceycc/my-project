import Vue from "vue";
// element ui外部组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 字体图标文件
import '@/assets/iconfont/iconfont.css'
// 样式文件
import '@/assets/scss/main.scss'

// 公共组件的引入
import BcHeader from '@/components/Commons/Header.vue'
import BcLfBar from '@/components/Commons/LeftBar.vue'
import Footer from '@/components/Commons/Footer.vue'
import SmallPagination from '@/components/Commons/SmallPagination.vue'
import AreaSelect from '@/components/Commons/AreaSelect.vue'
import MyCheckBox from '@/components/Commons/MyCheckBox.vue'
import InfoBox from '@/components/Commons/InfoBox.vue'
import BcTab from '@/components/Commons/BcTab.vue'
import MessageCode from '@/components/Commons/MessageCode.vue'

// 功能组件的引入
import IdCardBox from '@/components/Content/ApplyJoin/Detailnfo/IdCardBox.vue'
import InfoCard from '@/components/Content/Index/Index/InfoCard.vue'



// 启用第三方插件
Vue.use(ElementUI)

// 注册全局组件 开始
Vue.component(BcHeader.name, BcHeader)
Vue.component(BcLfBar.name, BcLfBar)
Vue.component(Footer.name, Footer)
Vue.component(AreaSelect.name, AreaSelect)
Vue.component(MyCheckBox.name, MyCheckBox)
Vue.component(InfoBox.name, InfoBox)
Vue.component(SmallPagination.name, SmallPagination)
Vue.component(BcTab.name, BcTab)
Vue.component(MessageCode.name, MessageCode)

// 注册全局组件 结束

// 注册功能组件 开始
Vue.component(IdCardBox.name, IdCardBox)
Vue.component(InfoCard.name, InfoCard)
// 注册功能组件 结束

