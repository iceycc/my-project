<template>
    <div class="bf">
      <el-col :span="6" style="height: 100%">
        <left-bar :left-bar="lists" class="bf-left"></left-bar>
      </el-col>

        <el-col :span="18" class="bf-main">
          <router-view class="w-1000"></router-view>
        </el-col>
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


  .el-col{
    min-height: 100%;
  }
  .bf-left {
    height: 100%;
  }
  .w-1000 {
    /*width: 80%;*/
    margin: 0 auto;
  }
</style>
