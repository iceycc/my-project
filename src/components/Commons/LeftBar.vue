
<template>
  <div class="bc-lfbar">
      <ul>
          <li class="bc-lf-list" :class='{active:index==ai}' v-for= "(value,index) in leftbar" :key="index" >              
            <div class="bc-text">
              <i :class="value.icon" class="iconfont"></i>
              <router-link class="bc-a" :to="{name:value.name}" @click.native="change(index)">{{value.title}}</router-link>
            </div>
            <ol class="drowdown" :ref="index" v-show="isShow">
              <li>承接管理</li>
              <li>账户资料</li>
              <li>安全中心</li>
            </ol>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "left-bar",
  // 需要从父组件接受包含 字体图标类名和标题的 对象
  props: ["leftbar"],
  data() {
    return {
      ai: 0,
      isShow:false
    };
  },
  methods: {
    change(index) {
      console.log(event.target);
      this.ai = index;
      this.isShow = !this.isShow

    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";

.bc-lfbar {
  width: 300px;
  height: 100%;
  ul {
    height: 100%;
    padding-left: 74px;
    padding-top: 7px;
  }
  ol {
    // display: none;    
    padding-left: 50px;
    padding-top: 10px;
    li{
     height: 30px;
     line-height: 30px; 
    }
  }
  .bc-lf-list {
    .bc-text {
      height: 68px;
      line-height: 68px;
    }
    font-size: 18px;
    color: $listColor;
    &.active .bc-text {
      color: $activeColor;
      a {
        color: $activeColor;
      }
    }
  }
  i{
    vertical-align: middle;
  }
  .bc-a {
    display: inline-block;
    width: 150px;
    height: 100%;
    margin-left: 10px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
