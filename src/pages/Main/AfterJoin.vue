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
        { icon: "icon-shouye", title: "首页", name: "joined.index" },
        { icon: "icon-yijianfankui", title: "订单管理", name: "order" },
        { icon: "icon-shouye", title: "账户中心", name: "account.center" },
        { icon: "icon-yijianfankui", title: "设置", name: "setting.take", 
          children: [
            {title:"承接管理",name: "setting.take"}
            ,{title:"账户资料",name: "setting.data"},
            {title:"安全中心",name: "safe.addwx"}]},
        { icon: "icon-shouye", title: "意见反馈",name: 'options' }
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
