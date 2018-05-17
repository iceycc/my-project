<template>
  <div class="info-card-box">
    <!--信息 包含字体图标和文字-->
    <div class="top-info">
      <h5><i class="iconfont icon-shenqingjindu"></i>{{info_titile}}</h5>
    </div>
    <slot name="info_text"></slot>
    <slot name="apply_time"></slot>
  </div>
</template>

<script>
  export default {
    name: "info-card",
    props: ["info_titile"],

  }
</script>

<style lang="scss" scoped>
  @import "../../../../assets/style/config.scss";
  .info-card-box{
    padding:20px 20px 20px 40px;
    margin-bottom:10px;
    background: #fff;
  }
  .top-info {
    h5 {
      position:relative;
      font-size: 16px;
      height: 25px;
      line-height: 25px;
    }
    i::before{
      position: absolute;
      top:0px;
      left:-25px;
      font-size: 20px;
      line-height: 25px;
      color:$aColor;
    }

  }

</style>
