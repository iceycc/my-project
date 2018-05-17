<template>
  <div>
    <p class="bc-div">
      <!-- <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/zhaoshang" rel="nofollow">招商入驻</a>&nbsp;| -->
      <a target="_blank" class="footer-menu-a" href="javascript:;">关于我们</a>&nbsp;|
      <a target="_blank" class="footer-menu-a" href="javascript:;">联系我们</a>&nbsp;|
      <!-- <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/about/join-us">诚聘英才</a>&nbsp;| -->
      <a target="_blank" class="footer-menu-a" href="javascript:;">法律声明</a>&nbsp;|
      <a target="_blank" class="footer-menu-a" href="javascript:;" style="cursor:default">优装美家 版权所有</a>
    </p>
  </div>
</template>
<script>
  export default {
    name: "bc-footer",
    data() {
      return {};
    }
  };
</script>

<style lang='scss' scoped>
  @import "../../assets/style/config";
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
</style>
