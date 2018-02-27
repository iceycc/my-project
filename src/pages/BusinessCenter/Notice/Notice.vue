<template>
  <div>
    <!--顶部通知-->
    <div class="top-nav">通知</div>
    <!--通知信息展示区域-->
    <div class="main-box">
      <ul class="info-lists">
        <li class="info-detail">
          <router-link :to="{name:'notice.detail'}" class="new go-detail">平台新增申诉功能，点击查看 <i>NEW</i> </router-link><span class="time">2017-12-12</span>
        </li>
        <li class="info-detail">
          <router-link :to="{name:'notice.detail'}" class="go-detail">平台新增申诉功能，点击查看 <i>NEW</i> </router-link><span class="time">2017-12-12</span>
        </li>
      </ul>
      <!--分页-->
      <small-pagination class="info-fenye"></small-pagination>
    </div>

  </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>
<style lang="scss">

  /*顶部*/
  .top-nav{
    margin:20px 0;
    font-size:20px;
  }
  /*主体展示*/
  .main-box{
    position:relative;
    height: 600px;
    padding: 40px 30px 20px 30px;
    background: #fff;
    .info-detail{
      height: 40px;
      line-height: 40px;
      border-bottom:1px solid #d6d6d6;
      .go-detail{
        display: inline-block;
        width: 60%;
        font-size: 14px;
      }
      .time{
        display:inline-block;
        width: 40%;
        text-align: right;
        font-size: 14px;
      }
      i{
        display: none;
        padding-left:10px;
        color:red;
        font-size: 16px;
      }
      .new i{
        display: inline;
      }

    }
    .info-fenye{
      position: absolute;
      left: 50%;
      margin-left:-30px ;
      bottom:20px;
    }
  }
</style>
