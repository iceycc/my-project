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

// setting板块
import Undertake from "@/pages/BusinessCenter/Setting/Undertake"; // 承接管理
import AlterUndertake from "@/pages/BusinessCenter/Setting/AlterUndertake"; // 修改承接管理
import AccountData from "@/pages/BusinessCenter/Setting/AccountData";  // 账户资料
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
    redirect: { name: "apply.success" },
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
      { name: "apply.join", path: "join", component: ApplyJoin },
      // 申请提示
      { name: "apply.info", path: "info", component: ApplyInfo },
      // 填写基础信息
      { name: "apply.baseinfo", path: "baseinfo", component: BaseInfo },
      // 填写资质信息
      { name: "apply.detailinfo", path: "detailinfo", component: DetailInfo },
      // 申请成功
      { name: "apply.success", path: "success", component: ApplySuccess }
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
      { name: "account.center", path: "account\/center", component: AccountCenter },
      { name: "account.bill", path: "account\/bill", component: Bill },

      // 设置板块的页面================
      { name: "setting.take", path: "setting\/take", component: Undertake },
      { name: "setting.alter", path: "setting\/alter", component: AlterUndertake },
      { name: "safe.addwx", path: "safe\/wx", component: BindingWx},
      { name: "safe.password", path: "safe.password", component: ModifyPassword},
      { name: "setting.data", path: "setting\/data", component: AccountData},
      // 意见反馈
      { name: "options", path: "options", component: Options}
    ]
  },
  // 通知详情1 单独
  {
    name: "notice.detail",
    path: "/joined/notice/detail",
    component: NoticeDetail
  },
  {
    name: "index.detail",
    path: "/joined/index/detail",
    component: OrderDetail1
  },
  //订单详情2  单独
  {
    name: "order.detail",
    path: "/joined/order/detail",
    component: OrderDetail2
  },
  // 充值中心  单独
  {
    name: "account.recharge",
    path: "/joined/acount/recharge",
    component: Recharge
  },
  // 扫描二维码绑定
  { name: "safe.code", path: "/joined/safe/code", component: ScanCode},

  //  404页面
  {
    path: "*",
    component: NotFound
  }
]);

export default router;
