
<template>
  <div class="bc-lfbar">
      <ul>
          <li class="bc-lf-list" :class='{active:index==ai}' v-for= "(value,index) in leftbar" :key="index" >              
            <div class="bc-text">
              <i :class="value.icon" class="iconfont"></i>
              <router-link class="bc-a" :to="{name:value.name}" @click.native="ulCLick(index)">{{value.title}}</router-link>
            </div>
            <ol class="drowdown" ref="ols">
              <li v-for= "(item,i) in value.children" :key="i" :class='{active:i==oi}'>
                <router-link class="ol-a" :to="{name:item.name}" @click.native="olClick(i)">{{item.title}}</router-link>
              </li>
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
      oi: 0,
      children:[]
    };
  },
  methods: {  
     // 点击ul触发：
    ulCLick(index){
      // 判断是否有下拉ol
      // console.log(event.target);
      this.ai = index;
      // 点击展示下拉
      // if(!this.children.length) return;      
      var ols = this.$refs.ols;
      console.log(ols)
      // 排他
      for(var i=0;i<ols.length;i++){
        ols[i].style.display="none";
      }
      ols[index].style.display="block";
    },
    // 点击ol触发
    olClick(index){
      this.oi = index
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
    display: none;
    padding-left: 32px;
    li{
     padding-top:5px;
     height: 30px;
     line-height: 30px; 
      &.active a{    
          color: $activeColor;
      }     
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
