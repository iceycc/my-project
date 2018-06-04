<template>
    <div class="bf">
        <el-row>
          <el-col :span="4" style="height: 100%">
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
          <el-col :span="20">
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
  watch:{
    '$route'(to, from) {
      // console.log(to)
    }
  },
  created(){
    switch (this.$route.name){
      case 'apply.options':
        this.active_index = '2';
        break;
      default:
        this.active_index = '1';
    }
  },
  methods: {
    selectHandle(index){
      console.log(index);
      switch (index){
        case '1':
          this.$router.push({
            name:'apply.join'
          });
          break;
        case '2':
          this.$router.push({
            name:'apply.options'
          });
          break;
        default:
          break

      }
    },
  }
};
</script>

<style lang="scss" scoped >
.el-col{
  min-height: 100%;
}
.w-1000 {
  margin: 0 auto;
  /*min-width: 800px;*/
  padding:0 50px;
}
</style>
