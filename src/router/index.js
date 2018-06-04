// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";
import "../plugins/Vendors.js"; //引入第三方组件 字体图标 样式scss 什么的

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
      {name: "apply.join", path: "applyjoin", component: pages.ApplyJoin, meta:{check:true,keepAlive:false}},// keepAlive设置true后侧边导航点击事件出现异常
      // 申请提示
      {name: "apply.info", path: "applyinfo", component: pages.ApplyInfo},
      // 填写基础信息
      {name: "apply.baseinfo", path: "baseinfo", component: pages.BaseInfo},
      // 填写资质信息
      {name: "apply.detailinfo", path: "detailinfo", component: pages.DetailInfo},
      // 申请成功
      {name: "apply.success", path: "applysuccess", component: pages.ApplySuccess},
      // 意见反馈
      {name: "apply.options", path: "options", component: pages.Options}
    ]
  },
  // 登陆成功后侧边栏的
  {
    name: "afterjoin",
    path: "/afterjoin",
    component: pages.AfterJoin,
    redirect:{
      name:"joined.index"
    },
    // 订单管理页面 ==============
    children: [
      // 首页 登陆后的默认页面
      {
        name: "joined.index",
        path: "joinedindex",
        component: pages.JoinedIndex
      },
      // 通知=================
      {
        name: "info",
        path: "notice",
        component: pages.Notice
      },
      // 订单管理==============
      {
        name: "ordermanagement",
        path: "ordermanagement",
        component: pages.OrderManagement
      },
      // 填写基础信息
      {name: "joined.baseinfo", path: "baseinfo", component: pages.BaseInfo},
      // 填写资质信息
      {name: "joined.detailinfo", path: "detailinfo", component: pages.DetailInfo},

      // 账户中心=================
      {
        name: "account.center", path: "accountcenter", component: pages.AccountCenter,
        redirect:{name:'account.account'},
        children: [
          //账户
          {name: 'account.account', path: "account", component: pages.Account},
          //账单
          {name: "account.bill", path: "bill", component: pages.Bill},
        ]
      },


      // 设置板块的页面================
      {name: "undertake", path: "undertake", component: pages.Undertake}, // 承接管理
      {name: "alterundertake", path: "alterundertake", component: pages.AlterUndertake},// 修改承接信息
      {name: "accountdata", path: "accountdata", component: pages.AccountData}, //账户资料
      {name:"safecenter",path:'safecenter',component:pages.SafeCenter,
        redirect:{name:'bindingwx'},//重定向
        children:[
          {name: "bindingwx", path: "bindingwx", component: pages.BindingWx},
          {name: "modifypassword", path: "modifypassword", component: pages.ModifyPassword},
        ]},
      // 意见反馈
      {name: "options", path: "options", component: pages.Options}
    ]
  },
  // 通知详情1 单独
  {
    name: "notice.detail",
    path: "/joined/noticedetail",
    component: pages.NoticeDetail
  },
  {
    name: "index.detail",
    path: "/joined/orderdetail1",
    component: pages.OrderDetail1
  },
  //订单详情2  单独
  {
    name: "order.detail",
    path: "/joined/orderdetail2",
    component: pages.OrderDetail2
  },
  // 充值中心  单独
  {
    name: "account.recharge",
    path: "/joined/recharge",
    component: pages.Recharge
  },
  // 扫描二维码绑定
  {name: "safe.code", path: "/joined/scancode", component: pages.ScanCode},

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
