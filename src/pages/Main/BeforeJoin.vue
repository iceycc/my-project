<template>
    <div class="bf">
        <div>
          <el-col :span="6" style="height: 100%">
            <!--<el-menu-->
              <!--default-active="2"-->
              <!--class="el-menu-vertical-demo"-->
              <!--@open="handleOpen"-->
              <!--@close="handleClose">-->
              <!--<el-submenu index="1">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-location"></i>-->
                  <!--<span>导航一</span>-->
                <!--</template>-->
                <!--<el-menu-item-group>-->
                  <!--<template slot="title">分组一</template>-->
                  <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                  <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-menu-item-group title="分组2">-->
                  <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-submenu index="1-4">-->
                  <!--<template slot="title">选项4</template>-->
                  <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                <!--</el-submenu>-->
              <!--</el-submenu>-->
              <!--<el-menu-item index="2">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">导航二</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="3" disabled>-->
                <!--<i class="el-icon-document"></i>-->
                <!--<span slot="title">导航三</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="4">-->
                <!--<i class="el-icon-setting"></i>-->
                <!--<span slot="title">导航四</span>-->
              <!--</el-menu-item>-->
            <!--</el-menu>-->
            <left-bar class="bf-left"></left-bar>

          </el-col>
          <el-col :span="18">
            <router-view class="w-1000"></router-view>
          </el-col>
        </div>
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

<style lang="scss">
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
