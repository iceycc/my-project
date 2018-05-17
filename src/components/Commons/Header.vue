<template>
  <div>
    <div class="bc-header1">

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
<style lang="scss" scoped>
  @import "../../assets/style/config";

  .bc-header1 {
    width: 100%;
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
