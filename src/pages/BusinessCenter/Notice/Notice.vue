<template>
  <div>
    <!--顶部通知-->
    <div class="small-title">通知</div>
    <!--通知信息展示区域-->
    <div class="main-box">
      <ul class="info-lists">
        <div style="text-align: center" v-show="notice_list.length == 0">{{infoMsg}}</div>
        <li class="info-detail" v-for="item,index in notice_list" :key="index">
          <router-link :to="{name:'notice.detail',params:{id:item.id}}" :class="{new:item.is_read && item.is_read == 0, 'go-detail':true}">{{item.title | LimitText(30)}} <i>NEW</i> </router-link><span class="time">{{item.addtime | momentTime}}</span>
        </li>
      </ul>
      <!--分页-->
      <div class="block" style="margin: 0 auto;display: block;text-align: center">
        <el-pagination
          style="text-align: center"
          :page-size=1
          @current-change="currentChange($event)"
          :current-page="current_page"
          layout="prev, pager, next"
          :total="listTotal">
        </el-pagination>
      </div>
    </div>

  </div>
</template>
<script>
  import {getNoticeList} from '@/api/api'
  export default{
    name:'',
    data(){
      return{
        notice_list:[],
        listTotal:0,
        current_page:1,
        infoMsg:'正在加载中...',
      }
    },
    created(){
      this.getData(1)
    },
    methods:{
      getData(page){
        let params = {page}
        getNoticeList(params)
          .then((result)=>{
            // console.log(result);
            this.notice_list = result.data
            if(this.notice_list.length == 0){
              this.infoMsg ='没有数据'
            }
            this.listTotal = + result.totalpage
          })
      },
        currentChange($event) {
            this.getData($event)
        },
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
