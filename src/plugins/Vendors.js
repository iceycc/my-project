import Vue from "vue";
// 字体图标文件
import '@/assets/iconfont/iconfont.css'
// 样式文件
import '@/assets/scss/main.scss'
// 自己组件的引入
import {commons} from '../components/index.js'
// element ui外部组件 按需引入
import 'element-ui/lib/theme-chalk/index.css'
import {
  TimePicker,
  Select,
  DatePicker,
  Input,
  Pagination
} from 'element-ui'
Vue.component(TimePicker.name, TimePicker)
Vue.component(Select.name, TimePicker)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Input.name,Input)
Vue.component(Pagination.name,Pagination)


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


