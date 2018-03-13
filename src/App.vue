<template>
  <div id="app">
    <bc-header class="bc-header" :isShow="isLogin" @clicl="outLogin"></bc-header>
    <div class='bc-main'>
      <router-view class="bc-1220"></router-view>
      <bc-footer class="bc-footer"></bc-footer>
    </div>
    j
  </div>
</template>

<script>
  import {Constants} from '@/config'

  export default {
    name: "App",
    data() {
      return {
        uid: "未登录",
        preUrl:'',
        isLogin:false
      }
    },
    beforeUpdate(){
      // this.isLogin = this.$route.
      if(this.$ls.get(Constants.LocalStorage.uid)){
        this.uid = this.$ls.get(Constants.LocalStorage.uid)
        this.isLogin = true
        console.log(this.uid)
      }
    },
    methods:{
      outLogin(){
        createApp()
      }
    }


  };
</script>

<style scoped lang="scss">
  #app {
    height: 100%;
    overflow-y: scroll;
  }

  .bc-header {
    width: 100%;
    // padding-bottom:1px;
    // padding-top: 6px;
    background: #fff;
  }

  .bc-main {
    position: relative;
    padding-bottom: 80px;
    min-height: 87%;
  }

  .bc-1220 {
    background: #eee;
    width: 1220px;
    height: 100%;
    margin: 0 auto;
  }

  .bc-footer {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 52px;
    background: #fff;
  }

  .center-box {
    width: 1000px;
  }
</style>
