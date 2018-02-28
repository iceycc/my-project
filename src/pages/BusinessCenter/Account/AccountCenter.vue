<template>
  <div>
    <h3 class="ac-title">账户管理</h3>
    <!--主要内容展示-->
    <div class="ac-mian">
      <!--tap切换-->
      <ul class="acount-tap clearfix">
        <li
          v-for="(item,index) in tabs"
          :class="{active:index == num}"
          @click="tab(index)"
        ><a href="javascript:;">{{item}}</a></li>
      </ul>
      <!--切换展示区域-->
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        tabs:['账户','账单'],
        urls:['account.account','account.bill'],
        num:0
      }
    },
    methods:{
      tab(index){
        this.num = index;
        this.$router.push({name:this.urls[index]})
      }
    }
  }
</script>
<style lang="scss">
  @import '~@/assets/scss/main.scss';

  /*头部 抽离*/
  .ac-title {
    font-size: 18px;
  }

  /*tap切换*/
  .acount-tap {
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
