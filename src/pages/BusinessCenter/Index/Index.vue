<template>
  <div>
    <!--顶部信息栏-->
    <div class="infos">
      <i class="iconfont icon-gonggao"></i>
      <p class="news"><b>NEW</b>商户中心全面升级，点击查看详情功能介绍</p>
      <span class="time">2017-12-18</span>
      <a class="click-more" href="javascript:;">更多</a>
    </div>
    <!-- 进度 信息展示-->
    <info-card info_titile="修改账户中心">
      <!--<i slot="icon" class="iconfont icon-shanchu"></i>-->
      <p class="wenzi" slot="info_text">
        您已提交申请修改账户资料，平台将在提交日期后的1-3个工作日内完成审核，请注意登陆后台查看审核结果，审核期间无法接收新订单。如想加快审核速度，请联系平台工作人员</p>
      <p class="wenzi" slot="apply_time">提交时间：<span>2017/12/18</span></p>
    </info-card>
    <!--可以设置的选项卡-->
    <div>
      <info-card info_titile="完善承接信息">
        <p class="wenzi" slot="info_text">未完善承接信息将无法接单，点击设置<a>承接信息</a></p>
      </info-card>
      <info-card info_titile="充值提示">
        <p class="wenzi" slot="info_text">账户余额不足，暂时无法接单，点击充值<a>账户余额</a></p>
      </info-card>
      <info-card info_titile="绑定微信">
        <p class="wenzi" slot="info_text">当前账户未绑定微信，优装美家无法在微信中向你推送新订单通知，点击 <a>绑定微信</a></p>
      </info-card>
    </div>
    <!--近期订单-->
    <div class="order-info-box">
      <!--头部信息-->
      <div class="order-top">
        <div class="order-count">
          <h5 class="flex1 order-h5"><i class="iconfont icon-jinqidingdan order-icon"></i>近期订单（<i>15</i>）</h5>
          <div class="search-box flex1">
            <el-input
              size="mini"
            placeholder="订单号（可申诉订单）"
            prefix-icon="el-icon-search"
            v-model="input">
          </el-input>
          </div>
        </div>
      </div>
      <!--订单列表-->
      <ul class="order-list">
        <!--订单详情-->
        <li class="order-detail" v-for="(item,index) in orders" :key="index">
          <!--box1-->
          <div class="box1">
            <p>户型：<span>两局</span></p>
            <p>业主：<span>张三</span></p>
            <p>电话：<span>13555555555</span></p>
          </div>
          <!---->
          <div class="box1">
            <p>2017-11-11</p>
            <p>11:11</p>
            <p>订单号：<span>13555555555</span></p>
          </div>
          <!--点击申诉-->
          <div class="box3">
            <a class="shensu" href="javascript:;">点击申诉</a>
            <p>72h后失效</p>
          </div>
          <!--订单详情-->
          <div class="box4">
            <el-button @click="goDetail">订单详情</el-button>
          </div>
        </li>
      </ul>
    </div>
    <!--分页-->
    <small-pagination class="index-page"></small-pagination>
    <!--无订单时显示-->
    <p class="no-order">暂无订单</p>
  </div>
</template>
<script>
  import * as components  from '@/components/index.js'

  export default {
    components:{
      "info-card":components.contents.InfoCard
    },
    name: '',
    data() {
      return {
        input: '',
        orders:[{},{},{}]
      }
    },
    methods: {
      goDetail(){
          this.$router.push({name:'index.detail'})
      }
    }
  }
</script>
<style lang="scss">
  @import '~@/assets/scss/main.scss';

  .infos{
    height: 50px;
    background: #fff;
    margin-bottom: 20px;
    font-size:0;
    i{
      display: inline-block;
      width: 40px;
      line-height: 50px;
      text-align: center;
    }
    .news{
      display: inline-block;
      font-size: 16px;
      b{
        color:#ff0000;
        font-size: 20px;
        padding-right:10px;
      }
    }
    .time{
      padding-left:200px;
      font-size:16px;
      color: #5a5a5a;
    }
    .click-more{
      padding-left: 20px;
      font-size: 16px;
      color:$aColor;

    }
  }

  /* 信息卡中的p标签文字*/
  .wenzi {
    font-size: 16px;
    margin-top: 15px;
    span {
      color: #5a5a5a;
    }
    a {
      color: #0099ff;
      cursor: pointer
    }

  }
  .order-info-box{
    background: #fff;
    /*头部*/
    .order-top{
      height: 53px;
      border-bottom: 1px solid $gray;
      .order-h5{
        position: relative;
      }
      .order-icon::before{
        position: absolute;
        top:0px;
        left:-25px;
        font-size: 20px;
        line-height: 50px;
        color:#1afa29;
      }
      .order-count{
        display: flex;
        padding-left: 40px;
        line-height: 50px;
      }
      .search-box{
        box-sizing: border-box;
        padding: 5px 20px 0 50%;
      }
    }
    /*订单详情*/
    .order-list{
      background: #fff;
      font-size: 0;

      .order-detail{
        border-bottom: 1px solid #d6d6d6;
        >div{
          display: inline-block;
          font-size: 0;
          vertical-align: top;
          box-sizing: border-box;
          width: 25%;
        }
        .box1{
          font-size: 14px;
          padding-top:20px;
          padding-left:40px;
          box-sizing: border-box;
          color:#5a5a5a;
          p{
            padding-bottom: 15px;
          }
        }
        .box3{
          padding-top: 35px;
          font-size: 16px;
          text-align: center;
          /*申诉*/
          .shensu{
            color:#0099ff;
            box-sizing: border-box;
            display: inline-block;
            margin-bottom: 10px;
          }
        }
        .box4{
          padding-top: 36px;
          text-align: center;
        }
      }
    }

  }
  .no-order{
    margin-top: 30px;
    font-size: 18px;
    text-align: center;
  }
  /**/
  .index-page{
    margin-top: 30px;
    margin-left: 200px;
  }

</style>
