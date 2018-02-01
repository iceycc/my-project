// 路由配置
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Main/Login'
// Apply相关路由及组件
import Apply from '@/pages/BusinessCenter/ApplyJoin/index'
import ApplyJoin from '@/pages/BusinessCenter/ApplyJoin/ApplyJoin'
import ApplyInfo from '@/pages/BusinessCenter/ApplyJoin/ApplyInfo'
import BaseInfo from '@/pages/BusinessCenter/ApplyJoin/BaseInfo'
import ApplySuccess from '@/pages/BusinessCenter/ApplyJoin/ApplySuccess'
import DetailInfo from '@/pages/BusinessCenter/ApplyJoin/DetailInfo'




Vue.use(Router)


export default new Router({
  routes: [
    {// 重定向
      path: '/',
      redirect: {name: 'apply.info'},
      mate:{}
    },
    {// 登陆
      path: '/join',
      name: 'login',
      component: Login,
      meta:{}
    },
    // {// 测试路由
    //   path: '/text',
    //   component: Text1
    // },
    {// 申请入住
      name: 'apply',
      path: '/apply',
      component: Apply,
      children:[
        // 入住申请 1 -
        {name:'apply.join',path:'join',component:ApplyJoin},
        // 申请提示
        {name:'apply.info',path:'info',component:ApplyInfo},
        // 填写基础信息 
        {name:'apply.baseinfo',path:'baseinfo',component:BaseInfo},  
        // 填写资质信息
        {name:'apply.detailinfo',path:'detailinfo',component:DetailInfo},
        // 申请成功
        {name:'apply.success.',path:'success',component:ApplySuccess},       
         
      ]
    },
    // 申请成功后的样式
    // {
    //   name:'setting',
    //   path: '/setting',
    //   component: Setting,
      
    // }


  ]
})
