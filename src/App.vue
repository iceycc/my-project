<template>
  <div id="app">
    <el-header>
      <!--<bc-header :isShow="isLogin" @clicl="outLogin"></bc-header>-->
        <div class="bc-logo">
          <a href="javascript:;">优装美家</a>
        </div>
        <div class="bc-user-info">
          <el-button @click="open('notify')">未登录</el-button>
        </div>
    </el-header>

    <el-main>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
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
  import EventBus from '@/config/EventBus';

  export default {
    name: "App",
    data() {
      return {
        uid: "未登录",
        preUrl:'',
        isLogin:false
      }
    },
    created(){
      // 信息提示
      // todo 将信息提升抽离到mixin
      EventBus.$on('notice',(options)=> {
        switch (options.type){
          case 'confirm':
            this.showConfirm(options);
            break;
          case 'message':
            this.showMessage(options);
            break;
          case 'notify':
            this.showNotify(options);
            break;
        }
      })

    },
    methods:{
      open(options){
        EventBus.$emit('notice',options)
      },
      showMessage(options){
        let msg = options.message || '失败'
        this.$message(msg);
      },
      showConfirm(options){
        var title = options.title || '你确定吗？'
        var success = options.success
        this.$confirm(title, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功!'
          });
          success && success()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '退出'
          });
        });
      },
      showNotify(options){
        const h = this.$createElement;
        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '示文案这是提示文案')
        });
      },

      outLogin(){
        createApp()
      }
    }


  };
</script>

<style scoped lang="scss">
  @import './assets/style/common';
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
