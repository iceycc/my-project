// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";
import "../plugins/Vendors.js"; //引入组件 字体图标 样式scss 什么的

import pages from '../pages/index.js'//引入页面

//404提示
var NotFound = {
  template: `
   <div>
      您要查看的页面取旅行了
   </div>`
};

Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
  // 重定向
  {
    path: "/",
    redirect: {name:"apply"},
    mate: {keepAlive:true}
  },
  // 登陆
  {
    path: "/login",
    name:"login",
    component: pages.Login,
    meta: {check:false,keepAlive:true}
  },
  // 申请入住
  {
    name: "apply",
    path: "/apply",
    component: pages.BeforeJoin,
    redirect:{
      name:"apply.join"
    },
    meta:{check:true,keepAlive:true},
    children: [
      // 入住申请 1 -
      {name: "apply.join", path: "join", component: pages.ApplyJoin, meta:{check:true,keepAlive:true}},
      // 申请提示
      {name: "apply.info", path: "info", component: pages.ApplyInfo},
      // 填写基础信息
      {name: "apply.baseinfo", path: "baseinfo", component: pages.BaseInfo},
      // 填写资质信息
      {name: "apply.detailinfo", path: "detailinfo", component: pages.DetailInfo},
      // 申请成功
      {name: "apply.success", path: "success", component: pages.ApplySuccess},
      // 意见反馈
      {name: "apply.options", path: "options", component: pages.Options}
    ]
  },
  // 登陆成功后侧边栏的
  {
    name: "joined",
    path: "/joined",
    component: pages.AfterJoin,
    redirect:{
      name:"joined.index"
    },
    // 订单管理页面 ==============
    children: [
      // 首页 登陆后的默认页面
      {
        name: "joined.index",
        path: "index",
        component: pages.JoinedIndex
      },
      // 通知=================
      {
        name: "info",
        path: "info",
        component: pages.Notice
      },
      // 订单管理==============
      {
        name: "order",
        path: "order",
        component: pages.OrderManagement
      },
      // 填写基础信息
      {name: "joined.baseinfo", path: "baseinfo", component: pages.BaseInfo},
      // 填写资质信息
      {name: "joined.detailinfo", path: "detailinfo", component: pages.DetailInfo},

      // 账户中心=================
      {
        name: "account.center", path: "account_center", component: pages.AccountCenter,
        redirect:{name:'account.account'},
        children: [
          //账户
          {name: 'account.account', path: "account", component: pages.Account},
          //账单
          {name: "account.bill", path: "bill", component: pages.Bill},
        ]
      },


      // 设置板块的页面================
      {name: "setting.take", path: "setting_take", component: pages.Undertake}, // 承接管理
      {name: "settingalter.", path: "setting_alter", component: pages.AlterUndertake},// 修改承接信息
      {name: "setting.data", path: "setting_data", component: pages.AccountData}, //账户资料
      {name:"setting.safe",path:'safe',component:pages.SafeCenter,
        redirect:{name:'safe.addwx'},//重定向
        children:[
          {name: "safe.addwx", path: "wx", component: pages.BindingWx},
          {name: "safe.password", path: "password", component: pages.ModifyPassword},
        ]},
      // 意见反馈
      {name: "options", path: "options", component: pages.Options}
    ]
  },
  // 通知详情1 单独
  {
    name: "notice.detail",
    path: "/joined/notice_detail",
    component: pages.NoticeDetail
  },
  {
    name: "index.detail",
    path: "/joined/index_detail",
    component: pages.OrderDetail1
  },
  //订单详情2  单独
  {
    name: "order.detail",
    path: "/joined/order_detail",
    component: pages.OrderDetail2
  },
  // 充值中心  单独
  {
    name: "account.recharge",
    path: "/joined/acount_recharge",
    component: pages.Recharge
  },
  // 扫描二维码绑定
  {name: "safe.code", path: "/joined/safe_code", component: pages.ScanCode},

  //  404页面
  {
    path: "*",
    component: NotFound
  }
]);



// 全局导航过滤（其实就是拦截路由请求）
router.beforeEach((to,from,next) => {
  let uid = localStorage.getItem('uid')
  next()
})

export default router;
