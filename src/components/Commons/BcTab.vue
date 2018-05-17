<template>
  <div>
    <!--tap切换-->
    <ul class="bc-tab clearfix">
      <li
        v-for="(item,index) in tabs"
        :class="{active:index == num}"
        :key=""
        @click="tab(index)"
      ><a href="javascript:;">{{item.text}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "bc-tab",
    props:['tabs'],
    data(){
      return{
        num:0,
        // tabs:[{text:'绑定微信',url:''},{text:'修改密码',url:''}]
      }
    },
    methods:{
      tab(index){
        this.num = index;
        this.$router.push({name:this.tabs[index].url})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/config";


  /*tap切换*/
  .bc-tab {
    padding-top:20px;
    border-bottom:1px solid #d6d6d6;
    height: 30px;
    padding-bottom: 20px;
    li {
      float: left;
      margin-right: 30px;
      font-size: 18px;
      line-height: 30px;
      &.active{
        position: relative;
        a{color:$aColor}
        &:after{
          position: absolute;
          display: block;
          content: '';
          bottom:0;
          left: 0;
          width: 100%;
          height: 2px;
          background:$aColor;
        }
      }
    }
  }
</style>
