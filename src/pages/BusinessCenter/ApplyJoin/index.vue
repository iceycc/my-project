<template>
    <div class="bf">
        <left-bar :leftbar="lists" class="bf-left"></left-bar>
        <div class="bf-main">
          <router-view class="w-1000"></router-view>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        { icon: "icon-shouye", title: "首页" },
        { icon: "icon-yijianfankui", title: "意见反馈" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped >
.bf {
  position: relative;
  padding-bottom:30px;
}
.bf-main {
  width: 80%;
  margin-left: 300px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 20x;
  padding-top: 32px;
}
.bf-left {
  position: absolute;
  left: 0;
  top: 0;
}
.w-1000 {
  width: 80%;
  margin: 0 auto;
}
</style>
