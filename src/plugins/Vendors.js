import Vue from "vue";
// 字体图标文件
import '@/assets/iconfont/iconfont.css'
// 样式文件
import '@/assets/scss/main.scss'
// 自己组件的引入
import {commons} from '../components/index.js'
// element ui外部组件 按需引入
// import 'element-ui/lib/theme-chalk/index.css'
// fade/zoom 等
// import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import {
  TimePicker,
  TimeSelect,
  Select,
  Option,
  DatePicker,
  Input,
  Pagination,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Col,
  Row,
  Header,
  Main,
  Footer,
  Upload,
  Form,
  FormItem,
  Radio,
  Checkbox,
  Alert,
  Cascader,
  Step,
  Steps,
  CheckboxGroup,
  CheckboxButton,
  Table,
  TableColumn,
  RadioGroup,
  RadioButton,
  Dialog,
  Collapse,
  CollapseItem,

  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'
Vue.component(TimePicker.name, TimePicker)
Vue.component(Select.name, Select)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Input.name,Input)
Vue.component(Pagination.name,Pagination)
Vue.component(Menu.name,Menu )
Vue.component(Submenu.name,Submenu )
Vue.component(MenuItemGroup.name,MenuItemGroup )
Vue.component(MenuItem.name,MenuItem )
Vue.component(Button.name,Button )
Vue.component(Col.name,Col)
Vue.component(Row.name,Row)
Vue.component(Header.name,Header)
Vue.component(Main.name,Main)
Vue.component(Footer.name,Footer)
Vue.component(Upload.name,Upload)
Vue.component(Alert.name,Alert)
Vue.component(Form.name,Form)
Vue.component(FormItem.name,FormItem)
Vue.component(Radio.name,Radio)
Vue.component(Checkbox.name,Checkbox)
Vue.component(Cascader.name,Cascader)
Vue.component(Step.name,Step)
Vue.component(Steps.name,Steps)
Vue.component(CheckboxGroup.name,CheckboxGroup)
Vue.component(CheckboxButton.name,CheckboxButton)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)
Vue.component(RadioGroup.name,RadioGroup)
Vue.component(RadioButton.name,RadioButton)
Vue.component(Dialog.name,Dialog)
Vue.component(Option.name,Option)
Vue.component(TimeSelect.name,TimeSelect)
Vue.component(Collapse.name,Collapse)
Vue.component(CollapseItem.name,CollapseItem)
Vue.component(CollapseTransition.name,CollapseTransition)
// Vue.use(Cascader);
// Vue.use(Steps);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

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


