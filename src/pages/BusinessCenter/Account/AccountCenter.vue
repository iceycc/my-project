<template>
  <div>
    <h3 class="small-title">账户管理</h3>
    <!--主要内容展示-->
    <div class="ac-mian">
      <!--tap切换-->
      <bc-tab :tabs="tabs" :activeNum="activeNum"></bc-tab>
      <!--切换展示区域-->
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        tabs:[{text:'账户',url:'account.account'},{text:'账单',url:'account.bill'}],
        urls:['account.account','account.bill'],
        num:0,
        activeNum:0
      }
    },
    created(){
      switch (this.$route.name){
        case 'account.bill':
          this.activeNum = 1;
          break;
        default:
          this.activeNum = 0;
          break;
      }
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped >



</style>
