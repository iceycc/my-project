<template>
  <div>
    <h3 class="small-title">安全中心</h3>
    <div class="sc-main">
      <!--tap切换-->
      <bc-tab :tabs="tabs" :activeNum="activeNum"></bc-tab>
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
        tabs:[{text:'绑定微信',url:'bindingwx'},{text:'修改密码',url:'modifypassword'}],
        activeNum:0
      }
    },
    created(){
      switch (this.$route.name){
        case 'modifypassword':
          this.activeNum = 1;
          break;
        default:
          this.activeNum = 0
      }
    }
  }
</script>

<style lang="scss" scoped >
  @import "../../../../assets/style/config";
  .safe-box{
    @extend .box-hover-shadow;
    background: #fff;

    .el-form-item__label{
      text-align: left;
    }
  }
</style>
