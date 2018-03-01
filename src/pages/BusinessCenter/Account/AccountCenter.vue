<template>
  <div>
    <h3 class="small-title">账户管理</h3>
    <!--主要内容展示-->
    <div class="ac-mian">
      <!--tap切换-->
      <bc-tab :tabs="tabs"></bc-tab>
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
        num:0
      }
    },
    methods:{

    }
  }
</script>
<style lang="scss">
  @import '~@/assets/scss/main.scss';


</style>
