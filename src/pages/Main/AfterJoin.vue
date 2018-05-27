<template>
    <div class="bf">
        <el-row>
          <el-col :span="6" style="height: 100%">
            <el-menu
              @select="selectHandle($event)"
              :default-active="1"
              class="el-menu-vertical-demo"
              background-color="#eeeeee">
              <el-menu-item index="1">
                <i class="icon-shouye iconfont"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="icon-yijianfankui iconfont"></i>
                <span slot="title">订单管理</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="icon-yijianfankui iconfont"></i>
                <span slot="title">账户中心</span>
              </el-menu-item>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>设置</span>
                </template>
                  <el-menu-item index="4-1">承接管理</el-menu-item>
                  <el-menu-item index="4-2">账户资料</el-menu-item>
                  <el-menu-item index="4-3">安全中心</el-menu-item>
              </el-submenu>
              <el-menu-item index="5">
                <i class="icon-yijianfankui iconfont"></i>
                <span slot="title">意见反馈</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="18" class="bf-main">
            <router-view class="w-1000"></router-view>
          </el-col>
        </el-row>
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
  methods: {
    selectHandle(index){
      console.log(index)
      switch (index){
        case '1':
          this.$router.push({
            name:'joined.index'
          });
          break;
        case '2':
          this.$router.push({
            name:'order'
          });
          break;
        case '3':
          this.$router.push({
            name:'account.center'
          });
          break;
        case '4-1':
          this.$router.push({
            name:'setting.take'
          });
          break;
        case '4-2':
          this.$router.push({
            name:'setting.data'
          });
          break;
        case '4-3':
          this.$router.push({
            name:'safe.addwx'
          });
          break;
        case '5':
          this.$router.push({
            name:'options'
          });
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped >


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
