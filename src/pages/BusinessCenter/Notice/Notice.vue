<template>
  <div>
    <!--顶部通知-->
    <div class="small-title">通知</div>
    <!--通知信息展示区域-->
    <div class="main-box">
      <ul class="info-lists">
        <div style="text-align: center" v-show="notice_list.length == 0">暂无数据</div>
        <li class="info-detail" v-for="item,index in notice_list" :key="index">
          <router-link :to="{name:'notice.detail'}" :class="{new:item.is_read && item.is_read == 1, 'go-detail':true}">{{item.title}} <i>NEW</i> </router-link><span class="time">{{item.addtime | momentTime}}</span>
        </li>
      </ul>
      <!--分页-->
      <small-pagination class="info-fenye"></small-pagination>
    </div>

  </div>
</template>
<script>
  import {getNoticeList} from '@/api/api'
  export default{
    name:'',
    data(){
      return{
        notice_list:[]
      }
    },
    created(){
      let params = {}
      getNoticeList(params)
        .then((result)=>{
          console.log(result);
          this.notice_list = result
          // this.totalpage = result.totalpage
        })
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped >

  /*顶部*/
  .small-title{
    margin:20px 0;
    font-size:18px;
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
