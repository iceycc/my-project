<template>
  <div>
    <h3 class="small-title">安全中心</h3>
    <div class="sc-main">
      <!--tap切换-->
      <bc-tab :tabs="tabs"></bc-tab>
      <!--切换展示区域-->
      <router-view class="safe-box"></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: "safe-center",
    data(){
      return{
        tabs:[{text:'绑定微信',url:'safe.addwx'},{text:'修改密码',url:'safe.password'}],
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/scss/main.scss";
  .safe-box{
    @extend .box-hover-shadow;
    background: #fff;

    .el-form-item__label{
      text-align: left;
    }
  }
</style>
