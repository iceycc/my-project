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
        { icon: "icon-shouye", title: "首页", href: "1" },
        { icon: "icon-yijianfankui", title: "订单管理", href: "2" },
        { icon: "icon-shouye", title: "账户中心", href: "3" },
        { icon: "icon-yijianfankui", title: "设置", href: "4" },
        { icon: "icon-shouye", title: "意见反馈",href: '5' },
        { icon: "icon-yijianfankui", title: "意见反馈", href: '6' }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.bf {
  position: relative;
  padding-bottom: 30px;
  height: 100%;
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
