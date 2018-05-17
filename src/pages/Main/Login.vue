<template>

  <div class="login-main">
    <el-col :span="12" class="banner">
      <img src="http://a3.topitme.com/c/e7/b3/11800188571e9b3e7co.jpg" alt="广告未">
    </el-col>
    <el-col :span="12">
      <div class="join-from">
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <br>
        <el-checkbox v-model="checked">下次自动登陆</el-checkbox>
        <br>
        <el-button type="primary" @click="goLogin">登陆</el-button>
      </div>
    </el-col>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  import store from '../../store'
  import {Request} from '../../config/index'

  export default {

    data() {
      return {
        username: '',
        password: '',
        checked: true
      }
    },
    computed: {
      count() {
        return store.state.count
      }
    },
    methods: {
      increment() {
        store.commit('increment')
      },
      decrement() {
        store.commit('decrement')
      },

      goLogin() {
        // 1 校验
        // 2 校验成功登陆
        // 3 登陆成功后 获取uid
        // 4 登陆成功，跳转到主页
        Request.get('http://merchant.uzhuang.com/v1/bill/bill',{})
          .then((result)=>{
            console.log(result);
          })
      },

    }
  }
</script>

<style lang="scss" scoped >
  .login-main {
    margin-top: 100px;
  }

  .banner {
    img {
      display: inline-block;
      width: 500px;
      height: 360px;
    }
  }

  .el-col {
    .join-from {
      padding: 50px 0;
      background: #fff;
      width: 100%;
      text-align: center;
    }
    .el-input {
      width: 300px;
      margin-bottom: 40px;
    }
    .el-button {
      margin-top: 40px;
      width: 300px;
    }

  }
</style>
