<template>

  <div class="info-box">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: "info-box",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.info-box {
  position: relative;
  top: 0;
  width: 100%;
  border-radius: 3px;
  background: #fff;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  transition: all 0.2s;
  margin-top: 50px;
  &:hover {
    top: -5px;
    box-shadow: 5px 5px 5px #aaa;
  }
}
</style>
