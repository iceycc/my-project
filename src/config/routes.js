// 路由配置
import Vue from 'vue'
import Router from 'vue-router'
import Text from '@/components/Commons/header'
import HelloWorld from '@/components/index.vue'
import Login from '@/pages/Main/Login'
import WriteBaseInfo from '@/pages/ApplyJoin/WriteBaseInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {// 重定向
      path: '/',
      redirect: {name: 'login'}
    },
    {// 登陆
      path: '/join',
      name: 'login',
      component: Login
    },
    {// 测试路由
      path: '/text',
      component: Text
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/writebaseinfo',
      name: 'WriteBaseInfo',
      component: WriteBaseInfo
    }

  ]
})
