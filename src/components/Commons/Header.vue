<template>
<div>
  <div class="bc-header1">
      <div class="bc-logo">
         <a href="javascript:;">优装美家</a>          
      </div>
      <div class="bc-user-info">
          <a href="javascript:;">账号111</a>
          <i class="line"></i>
          <a href="javascript:;">退出</a>
      </div>
  </div>
</div>

</template>
<script>
export default {
  name: "bc-header",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
@import '../../assets/scss/main.scss';
.bc-header1 {
  width: $containerWith;
  height: 52px;
  margin: 15px auto;
  background: $headerBgColor;
}

.bc-logo {
  float: left;
  font-size: 0px;
  width: 313px;
  height: 52px;
  background: url("../../assets/img/logo.png") no-repeat 0 0;
}
.bc-user-info {
  float: right;
  height: 52px;
  line-height: 52px;
}
.bc-user-info .line {
  display: inline-block;
  line-height: 52px;
  height: 15px;
  width: 1px;
  background: #333;
  margin: -2px 12px;
}
</style>
