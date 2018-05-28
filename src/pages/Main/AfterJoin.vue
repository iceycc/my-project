<template>
  <div class="bf">
    <el-row>
      <el-col :span="6" style="height: 100%;">
        <el-menu
          @select="selectHandle($event)"
          :default-active="active_index"
          class="el-menu-vertical-demo"
          background-color="#eeeeee">
          <el-menu-item index="1">
            <i class="icon-shouye iconfont"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="icon-dingdanguanli iconfont"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="icon-zhanghuguanli iconfont"></i>
            <span slot="title">账户中心</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="icon-shezhi iconfont"></i>
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
        active_index: '1',
      };
    },
    watch: {
      '$route'(to, from) {
        // console.log(to)
      }
    },
    created() {
      // 用于刷新时 侧边导航默认高亮的正确
      switch (this.$route.name) {
        case 'order':
          this.active_index = '2';
          break;
        case 'account.account':
          this.active_index = '3';
          break;
        case 'account.bill':
          this.active_index = '3';
          break;
        case 'joined.baseinfo':
          this.active_index = '4-1';
          break;
        case 'joined.detailinfo':
          this.active_index = '4-1';
          break;
        case 'setting.take':
          this.active_index = '4-1';
          break;
        case 'setting.data':
          this.active_index = '4-2';
          break;
        case 'safe.addwx':
          this.active_index = '4-3';
          break;
        case 'safe.password':
          this.active_index = '4-3';
          break;
        case 'options':
          this.active_index = '5';
          break;
        default:
          this.active_index = '1';

      }
    },
    methods: {
      selectHandle(index) {
        console.log(index)
        switch (index) {
          case '1':
            this.$router.push({
              name: 'joined.index'
            });
            break;
          case '2':
            this.$router.push({
              name: 'order'
            });
            break;
          case '3':
            this.$router.push({
              name: 'account.center'
            });
            break;
          case '4-1':
            this.$router.push({
              name: 'setting.take'
            });
            break;
          case '4-2':
            this.$router.push({
              name: 'setting.data'
            });
            break;
          case '4-3':
            this.$router.push({
              name: 'safe.addwx'
            });
            break;
          case '5':
            this.$router.push({
              name: 'options'
            });
            break;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .el-col {
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
