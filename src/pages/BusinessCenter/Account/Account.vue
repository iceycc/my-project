<template>
  <div>
    <!--上部的 充值框-->
    <div class="recharge">
      <ul class="clearfix">
        <li class="l">
          <p>余额<i class="wenhao">?</i></p>
          <span>2000元</span>
        </li>
        <li class="l">
          <p>质保金</p>
          <span>0元</span>
        </li>
      </ul>
      <div>
        <el-button class="recharge-btn" size="small" type="primary" @click="goRecharge">充值</el-button>
      </div>
    </div>
    <!--账户明细框-->
    <div class="account-detail">
      <!--框的top-->
      <div class="ad-top">
        账户明细
      </div>
      <!--明细表格-->
      <ul class="my-table ">
        <li class="table-header">
          <ol>
            <li>时间</li>
            <li>类型</li>
            <li>订单号</li>
            <li>金额</li>
          </ol>
        </li>
        <!--可循环-->
        <li class="table-detail">
          <ol>
            <li><p>2017-11-11 </p><p>11:11</p></li>
            <li>扣款</li>
            <li>13123123123123</li>
            <li>-123</li>
          </ol>

        </li>
      </ul>
      <!--分页-->
      <div class="my-pagination">
        <small-pagination></small-pagination>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "account",
    data(){
      return{}
    },
    methods:{
      //点击充值跳转 编程式导航
      goRecharge(){
        this.$router.push({name:'account.recharge'})
      }
    }
  }
</script>

<style lang="scss">
  /*充值框*/
  .recharge{
    background: #fff;
    text-align: center;
    margin-bottom: 30px;
    /**/
    ul{
      border-bottom:1px solid #d6d6d6;
      padding: 30px 0;
      li{
        width: 50%;
        p{
          font-size: 18px;
          padding-bottom: 20px;
        }
        span{
          display: block;
          font-size: 25px;
          font-weight: bold;
        }
        .wenhao{
          display: inline-block;
          margin-left: 10px;
          width: 18px;
          height: 18px;
          font-size: 16px;
          text-align: center;
          background: #8a8a8a;
          line-height: 18px;
          color: #fff;
          border-radius: 9px;

        }
      }
    }
    /*充值按钮*/
    .recharge-btn{
      margin: 20px 0;
      width: 150px;
    }

  }
  /*账户明细框*/
  .account-detail{
    height: 600px;
    background: #fff;
    position: relative;
    padding: 10px;
    ol{
        li{
          text-indent: 10px;
          float: left;
          font-size: 16px;
          &:nth-child(1){width: 20%;}
          &:nth-child(2){width: 20%;}
          &:nth-child(3){width: 30%;}
          &:nth-child(4){width: 20%;}
          p{
            height: 25px;
            line-height: 25px;
          }

        }
      }
    .my-pagination{
      position: absolute;
    }
  }
</style>
