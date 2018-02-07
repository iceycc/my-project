// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/pages/Main/Login";
// Apply相关路由及组件=============

// 未申请前的页面
import BeforeJoin from "@/pages/Main/BeforeJoin";
// 申请后的页面
import AfterJoin from "@/pages/Main/AfterJoin";
// 各个路由板块------B-----
// apply板块
import ApplyJoin from "@/pages/BusinessCenter/ApplyJoin/ApplyJoin";
import ApplyInfo from "@/pages/BusinessCenter/ApplyJoin/ApplyInfo";
import BaseInfo from "@/pages/BusinessCenter/ApplyJoin/BaseInfo";
import ApplySuccess from "@/pages/BusinessCenter/ApplyJoin/ApplySuccess";
import DetailInfo from "@/pages/BusinessCenter/ApplyJoin/DetailInfo";
// setting板块
import Undertake from "@/pages/BusinessCenter/Setting/Undertake"; // 承接管理
import AlterUndertake from "@/pages/BusinessCenter/Setting/AlterUndertake"; // 修改承接管理

// 各个路由板块------E-----


//404提示
 var NotFound = {
   template:`
   <div>
      您要查看的页面取旅行了
   </div>`
 }



Vue.use(VueRouter);

// export default new VueRouter({
//   routes: [
//     {// 重定向
//       path: '/',
//       redirect: {name: 'setting.alter'},
//       mate:{}
//     }
//   ]
// })

var router = new VueRouter();
router.addRoutes([
  {
    // 重定向
    path: "/",
    redirect: { name: "apply.baseinfo" },
    mate: {}
  },
  {
    // 登陆
    path: "/join",
    name: "login",
    component: Login,
    meta: {}
  },
  // {// 测试路由
  //   path: '/text',
  //   component: Text1
  // },
  {
    // 申请入住
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
      { name: "apply.success.", path: "success", component: ApplySuccess }
    ]
  },
  // 设置板块的页面
  {
    name: "setting",
    path: "/setting",
    component: AfterJoin,
    children: [
      //  承接管理
      { name: "setting.take", path: "take", component: Undertake },
      { name: "setting.alter", path: "alter", component: AlterUndertake }
    ]
  },
  //  404页面
  {
    path:'*',component:NotFound
  }
]);

export default router;
