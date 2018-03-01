// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";
import "@/vendors.js"; //引入组件 字体图标 样式scss 什么的

// 各个路由板块------B-----
// 申请页面哎
import Login from "@/pages/Main/Login";
// 未申请前的页面
import BeforeJoin from "@/pages/Main/BeforeJoin";
// 申请后的页面
import AfterJoin from "@/pages/Main/AfterJoin";
// apply板块
import ApplyJoin from "@/pages/BusinessCenter/ApplyJoin/ApplyJoin";
import ApplyInfo from "@/pages/BusinessCenter/ApplyJoin/ApplyInfo";
import BaseInfo from "@/pages/BusinessCenter/ApplyJoin/BaseInfo";
import ApplySuccess from "@/pages/BusinessCenter/ApplyJoin/ApplySuccess";
import DetailInfo from "@/pages/BusinessCenter/ApplyJoin/DetailInfo";
// 登陆后的首页
import JoinedIndex from "@/pages/BusinessCenter/Index/Index";
import OrderDetail1 from "@/pages/BusinessCenter/Index/OrderDetail";
// notice通知
import Notice from "@/pages/BusinessCenter/Notice/Notice";
import NoticeDetail from "@/pages/BusinessCenter/Notice/NoticeDetail";

// orderMangement 订单管理模块
import OrderManagement from "@/pages/BusinessCenter/OrderManagement/OrderManagement";
import OrderDetail2 from "@/pages/BusinessCenter/OrderManagement/OrderDetail";
// AccountCenter账户中心
import AccountCenter from "@/pages/BusinessCenter/Account/AccountCenter";
import Bill from "@/pages/BusinessCenter/Account/Bill";
import Recharge from "@/pages/BusinessCenter/Account/Recharge";
import Account from "@/pages/BusinessCenter/Account/Account";

// setting板块
import Undertake from "@/pages/BusinessCenter/Setting/Undertake"; // 承接管理
import AlterUndertake from "@/pages/BusinessCenter/Setting/AlterUndertake"; // 修改承接管理
import AccountData from "@/pages/BusinessCenter/Setting/AccountData";  // 账户资料
import SafeCenter from "@/pages/BusinessCenter/Setting/Safe/SafeCenter";  // 绑定微信
import BindingWx from "@/pages/BusinessCenter/Setting/Safe/BindingWx";  // 绑定微信
import ScanCode from "@/pages/BusinessCenter/Setting/Safe/ScanCode"; // 扫描二维码
import ModifyPassword from "@/pages/BusinessCenter/Setting/Safe/ModifyPassword";  // 修改密码

// 意见反馈
import Options from "@/pages/BusinessCenter/Options/Options" ; // 修改密码

// 各个路由板块------E-----

//404提示
var NotFound = {
  template: `
   <div>
      您要查看的页面取旅行了
   </div>`
};
Vue.use(VueRouter);
var router = new VueRouter();
router.addRoutes([
  // 重定向
  {
    path: "/",
    redirect: {name: "setting.take"},
    mate: {}
  },
  // 登陆
  {
    path: "/join",
    name: "login",
    component: Login,
    meta: {}
  },
  // 申请入住
  {
    name: "apply",
    path: "/apply",
    component: BeforeJoin,
    children: [
      // 入住申请 1 -
      {name: "apply.join", path: "join", component: ApplyJoin},
      // 申请提示
      {name: "apply.info", path: "info", component: ApplyInfo},
      // 填写基础信息
      {name: "apply.baseinfo", path: "baseinfo", component: BaseInfo},
      // 填写资质信息
      {name: "apply.detailinfo", path: "detailinfo", component: DetailInfo},
      // 申请成功
      {name: "apply.success", path: "success", component: ApplySuccess}
    ]
  },
  // 登陆成功后侧边栏的
  {
    name: "joined",
    path: "/joined",
    component: AfterJoin,
    // 订单管理页面 ==============
    children: [
      // 首页 登陆后的默认页面
      {
        name: "joined.index",
        path: "index",
        component: JoinedIndex
      },
      // 通知=================
      {
        name: "info",
        path: "info",
        component: Notice
      },
      // 订单管理==============
      {
        name: "order",
        path: "order",
        component: OrderManagement
      },

      // 账户中心=================
      {
        name: "account.center", path: "account_center", component: AccountCenter,
        redirect:{name:'account.account'},
        children: [
          //账户
          {name: 'account.account', path: "account", component: Account},
          //账单
          {name: "account.bill", path: "bill", component: Bill},
        ]
      },


      // 设置板块的页面================
      {name: "setting.take", path: "setting_take", component: Undertake}, // 承接管理
      {name: "setting.alter", path: "setting_alter", component: AlterUndertake},// 修改承接信息
      {name: "setting.data", path: "setting_data", component: AccountData}, //账户资料
      {name:"setting.safe",path:'safe',component:SafeCenter,
        redirect:{name:'safe.addwx'},//重定向
        children:[
          {name: "safe.addwx", path: "wx", component: BindingWx},
          {name: "safe.password", path: "password", component: ModifyPassword},
        ]},
      // 意见反馈
      {name: "options", path: "options", component: Options}
    ]
  },
  // 通知详情1 单独
  {
    name: "notice.detail",
    path: "/joined/notice_detail",
    component: NoticeDetail
  },
  {
    name: "index.detail",
    path: "/joined/index_detail",
    component: OrderDetail1
  },
  //订单详情2  单独
  {
    name: "order.detail",
    path: "/joined/order_detail",
    component: OrderDetail2
  },
  // 充值中心  单独
  {
    name: "account.recharge",
    path: "/joined/acount_recharge",
    component: Recharge
  },
  // 扫描二维码绑定
  {name: "safe.code", path: "/joined/safe_code", component: ScanCode},

  //  404页面
  {
    path: "*",
    component: NotFound
  }
]);

export default router;
