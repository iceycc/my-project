<template>
  <div id="app">
    <bc-header class="bc-header"></bc-header>
    <div class='bc-main'>
      <router-view class="bc-1220"></router-view>
    </div>
    <bc-footer class="bc-footer"></bc-footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
#app {
  height: 100%;
  overflow:scroll;
}
.bc-header {
  width: 100%;
  padding-bottom:1px;
  padding-top: 6px;
  background: #fff;
}
.bc-main{
  /* height: 100%; */
}
.bc-1220 {
  /* background: #ddd; */
  width: 1220px;
  height: 100%;
  margin: 0 auto;
}
.bc-footer {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 52px;
  background: #fff;
}
</style>
