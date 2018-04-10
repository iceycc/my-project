<template>
  <div>
    <div class="bc-header1">
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
    </div>
  </div>

</template>
<script>
  import {Constants} from '@/config/index'

  export default {
    name: "bc-header",
    props: ['isShow'],
    data() {
      return {
        uid:'',
        isLogin:this.isShow
      };
    },
    created(){


    },

    methods: {
      outLogin() {
        this.$ls.remove(Constants.LocalStorage.uid)
        this.isLogin = false
        this.$router.push({
          name: 'login'
        })
      }
    }
  };
</script>
<style lang="scss">
  @import '../../assets/scss/main.scss';
  @import '../../assets/scss/reset'; // 引入初始化文件
  .bc-header1 {
    width: $containerWith;
    height: $headerHeight;
    margin: 0 auto;
    background: $headerBgColor;
  }

  .bc-logo {
    float: left;
    font-size: 0px;
    width: 313px;
    height: $headerHeight;
    background: url("../../assets/img/logo.png") no-repeat center center;
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
</style>
