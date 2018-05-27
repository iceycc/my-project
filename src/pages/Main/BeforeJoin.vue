<template>
    <div class="bf">
        <el-row>
          <el-col :span="6" style="height: 100%;padding-right: 40px">
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
                <i class="icon-yijianfankui iconfont"></i>
                <span slot="title">意见反馈</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="18">
            <router-view class="w-1000"></router-view>
          </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active_index:'1'
    };
  },
  watch:{

  },
  created(){
    switch(this.$route.name){
      case 'apply.join':
        this.active_index = '1';
        break;
      case 'apply.info':
        this.active_index = '2';
        break;
      default:
        this.active_index = '1';
    }
  },
  methods: {
    selectHandle(index){
      console.log(index);
      switch (Number(index)){
        case 1:
          this.$router.push({
            name:'apply.join'
          });
          break;
        case 2:
          this.$router.push({
            name:'apply.info'
          });
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped >
.el-col{
  min-height: 100%;
}
.w-1000 {
  width: 100%;
  /*min-width: 800px;*/
}
</style>
