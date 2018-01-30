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
      redirect: {name: 'login'},
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
      name: 'applly',
      path: '/applly',
      component: Apply,
      children:[
        {name:'apply.baseinof',path:'baseinfo',component:ApplyInfo},
        {name:'apply.baseinfo',path:'baseinfo',component:BaseInfo},
        {name:'apply.success.',path:'success',component:ApplySuccess},   
        {name:'apply.detailinfo',path:'detailinfo',component:DetailInfo},
        {name:'apply.join',path:'join',component:ApplyJoin}  
         
      ]
    }


  ]
})
