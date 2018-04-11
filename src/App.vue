<template>
  <div id="app">
    <el-header>
      <!--<bc-header :isShow="isLogin" @clicl="outLogin"></bc-header>-->
        <div class="bc-logo">
          <a href="javascript:;">优装美家</a>
        </div>
        <div class="bc-user-info">
          <div v-if="isLogin">
            <a href="javascript:;">{{uid}}</a>
            <i class="line"></i>
            <a href="javascript:;" @click="outLogin">退出</a>
          </div>
          <a href="" v-else>未登录</a>
        </div>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <p class="bc-div">
        <!-- <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/zhaoshang" rel="nofollow">招商入驻</a>&nbsp;| -->
        <a target="_blank" class="footer-menu-a" href="javascript:;">关于我们</a>&nbsp;|
        <a target="_blank" class="footer-menu-a" href="javascript:;">联系我们</a>&nbsp;|
        <!-- <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/about/join-us">诚聘英才</a>&nbsp;| -->
        <a target="_blank" class="footer-menu-a" href="javascript:;">法律声明</a>&nbsp;|
        <a target="_blank" class="footer-menu-a" href="javascript:;" style="cursor:default">优装美家 版权所有</a>
      </p>
    </el-footer>
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

    },
    methods:{
      outLogin(){
        createApp()
      }
    }


  };
</script>

<style scoped lang="scss">
  @import './assets/scss/main.scss';
  @import './assets/scss/_config.scss';
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    /*overflow-y: scroll;*/
  }
  .el-header{
    background: #fff;
    height:$headerHeight !important;
    padding: 0 100px;
  }
  .el-main{
    flex: 1;
    /*padding-top: 40px;*/
    padding:40px 10%;
  }
  .bc-logo {
    float: left;
    font-size: 0px;
    width: 313px;
    height: $headerHeight;
    background: url("./assets/img/logo.png") no-repeat center center;
  }

  .bc-user-info {
    float: right;
    height: $headerHeight;
    line-height: $headerHeight;
  }

  .bc-user-info .line {
    display: inline-block;
    line-height: $headerHeight;
    height: 15px;
    width: 1px;
    background: $headerFontColor;
    margin: -2px 12px;
  }
  .bc-div {
    width: $containerWith;
    color: $footerFontColor;
    font-size: $footerLineSize;
    margin: 0 auto;
    text-align: center;
    a {
      color: $footerFontColor;
      margin: $footerAMargin;
      display: inline-block;
      height: $footerHeight;
      line-height: $footerHeight;
      font-size: $footerFontSize;
      padding: $footerAPadding;
    }
  }
  .el-footer{
    background: #fff;
  }
  .center-box {
    width: 1000px;
  }
</style>
