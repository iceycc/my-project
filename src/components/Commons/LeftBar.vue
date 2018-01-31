
<template>
  <div class="bc-lfbar">
      <ul>
          <li class="bc-lf-list" :class='{active:index==ai}' v-for= "(value,index) in leftbar" :key="index" >              
              <i :class='value.icon' class="iconfont"></i>
              <a class="bc-a" href="javscript:;" @click="change(index)">{{value.title}}</a>
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
        ai:0
    };
  },
  methods:{
    change(index){
        // console.log(event.target)\
        this.ai = index
    }
  }
};
</script>

<style scoped>
.bc-lfbar {
  width: 300px;
  height: 100%;
}
.bc-lfbar ul {
  height: 100%;
  padding-left: 74px;
  padding-top: 7px;
}
.bc-lf-list {
  height: 68px;
  line-height: 68px;
  font-size: 18px;
  color: #5a5a5a;
}
.bc-a {
  display: inline-block;
  width: 150px;
  height: 100%;
  margin-left: 10px;
  border-bottom: 1px solid #ccc;
}
.bc-lf-list.active {
    color:#0099FF;
    
}
.bc-lf-list.active a{
    color:#0099FF;    
}
</style>
