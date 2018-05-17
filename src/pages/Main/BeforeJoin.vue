<template>
    <div class="bf">
        <el-row>
          <el-col :span="6" style="height: 100%">
            <left-bar class="bf-left"></left-bar>
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
      // 侧边栏组件里设置校验规则了 有默认返回啦
      // lists: [
      //   { icon: "icon-shouye", title: "首页", name: 'apply.join' },
      //   { icon: "icon-yijianfankui", title: "意见反馈", name: 'apply.info' }
      // ]
    };
  },
  methods: {
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
.bf-left {
  height: 100%;
}
.w-1000 {
  width: 100%;
  /*min-width: 800px;*/
}
</style>
