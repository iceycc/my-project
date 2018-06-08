// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";
import "../plugins/Vendors.js"; //引入第三方组件 字体图标 样式scss 什么的
// import EventBus from ''

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
    meta: {check:false,keepAlive:false}
  },
  // 注册
  {
    path: "/register",
    name:"register",
    component: pages.Register,
    meta: {check:false,keepAlive:false}
  },
  // 找回密码
  {
    path: "/findpassword",
    name:"findpassword",
    component: pages.FindPassWord,
    meta: {check:false,keepAlive:false}
  },
  // 校验邮箱是否激活
  {
    path: "/checkemail",
    name:"checkemail",
    component: pages.CheckEmail,
    meta: {check:false,keepAlive:false}
  },
  // 申请入住
  {
    name: "apply",
    path: "/apply",
    component: pages.BeforeJoin,
    redirect:{
      name:"apply.join"
    },
    meta:{check:true,keepAlive:true,needLogin:true},
    children: [
      // 入住申请 1 -
      {name: "apply.join", path: "applyjoin", component: pages.ApplyJoin, meta:{check:true,keepAlive:false,needLogin:true}},// keepAlive设置true后侧边导航点击事件出现异常
      // 申请提示
      {name: "apply.info", path: "applyinfo", component: pages.ApplyInfo,mate:{needLogin:true}},
      // 填写基础信息
      {name: "apply.baseinfo", path: "baseinfo", component: pages.BaseInfo,mate:{needLogin:true}},
      // 填写资质信息
      {name: "apply.detailinfo", path: "detailinfo", component: pages.DetailInfo,mate:{needLogin:true}},
      // 申请成功
      {name: "apply.success", path: "applysuccess", component: pages.ApplySuccess,mate:{needLogin:true}},
      // 意见反馈
      {name: "apply.options", path: "options", component: pages.Options,mate:{needLogin:true}}
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
        component: pages.JoinedIndex,
        mate:{needLogin:true}

      },
      // 通知=================
      {
        name: "info",
        path: "notice",
        component: pages.Notice
        ,mate:{needLogin:true}
      },
      // 订单管理==============
      {
        name: "ordermanagement",
        path: "ordermanagement",
        component: pages.OrderManagement
        ,mate:{needLogin:true}
      },
      // 填写基础信息
      {name: "joined.baseinfo", path: "baseinfo", component: pages.BaseInfo,mate:{needLogin:true}},
      // 填写资质信息
      {name: "joined.detailinfo", path: "detailinfo", component: pages.DetailInfo,mate:{needLogin:true}},

      // 账户中心=================
      {
        name: "account.center", path: "accountcenter", component: pages.AccountCenter,
        redirect:{name:'account.account'},
        children: [
          //账户
          {name: 'account.account', path: "account", component: pages.Account,mate:{needLogin:true}},
          //账单
          {name: "account.bill", path: "bill", component: pages.Bill,mate:{needLogin:true}},
        ]
      },


      // 设置板块的页面================
      {name: "undertake", path: "undertake", component: pages.Undertake,mate:{needLogin:true}}, // 承接管理
      {name: "alterundertake", path: "alterundertake", component: pages.AlterUndertake,mate:{needLogin:true}},// 修改承接信息
      {name: "accountdata", path: "accountdata", component: pages.AccountData,mate:{needLogin:true}}, //账户资料
      {name:"safecenter",path:'safecenter',component:pages.SafeCenter,
        redirect:{name:'bindingwx'},//重定向
        children:[
          {name: "bindingwx", path: "bindingwx", component: pages.BindingWx,mate:{needLogin:true}},
          {name: "modifypassword", path: "modifypassword", component: pages.ModifyPassword,mate:{needLogin:true}},
        ]},
      // 意见反馈
      {name: "options", path: "options", component: pages.Options,mate:{needLogin:true}}
    ]
  },
  // 通知详情1 单独
  {
    name: "notice.detail",
    path: "/joined/noticedetail",
    component: pages.NoticeDetail
    ,mate:{needLogin:true}
  },
  {
    name: "index.detail",
    path: "/joined/orderdetail1/:id",
    component: pages.OrderDetail1
    ,mate:{needLogin:true}
  },
  //订单详情2  单独
  {
    name: "order.detail",
    path: "/joined/orderdetail2",
    component: pages.OrderDetail2
    ,mate:{needLogin:true}
  },
  // 充值中心  单独
  {
    name: "account.recharge",
    path: "/joined/recharge",
    component: pages.Recharge
    ,mate:{needLogin:true}
  },
  // 扫描二维码绑定
  {name: "safe.code", path: "/joined/scancode", component: pages.ScanCode,mate:{needLogin:true}},

  //  404页面
  {
    path: "*",
    component: NotFound
  }
]);



// 全局导航过滤（其实就是拦截路由请求）
router.beforeEach((to,from,next) => {
  if(to.meta.needLogin){
    let uid = localStorage.getItem('uid')
    if(uid){
      next()
    }else {
      next()
    }
  }else {
    next()
  }

})

export default router;
