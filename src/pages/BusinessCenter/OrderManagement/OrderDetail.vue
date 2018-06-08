<template>

  <!--废弃-->
  <div style="padding: 0 100px;">
    <!--top-->
    <div class="top-nav"><a href="javascript:;" @click="go_back" class="go_home">返回</a><i class="iconfont icon-xiangyou"></i><a
      href="javascript:;">订单详情</a></div>
    <!-- 详情表单-->
    <div class="detail-box">
      <!-- 头部-->
      <div class="top">订单详情</div>
      <!--申请阶段展示 todo 申请阶段展示 申请完成隐藏-->
      <div class="info-box" v-if="false">
        <p class="status">已承接/申诉中/申诉失败/申诉成功</p>
      </div>
      <!-- 申诉进度 todo  申请阶段展示 申请完成隐藏-->
      <div class="info-box" v-if="false">
        <!-- 左侧盒子 -->
        <p class="box-left"><i class="iconfont icon-kehuxinxi icon1"></i>申请进度</p>
        <!-- 右侧盒子 申请进度-->
        <ul class="box-right order-rate">
          <li class="active">
            <i class="icon-rate"></i>
            <span class="time">2017-11-11 10:11</span>
            <span class="message">申诉失败</span>
            <p><span>原因：</span>客户表示已有装修公司设计师联系过是有装修需求的，需要考虑一下</p>
          </li>
        </ul>
      </div>
      <!-- 客户信息-->
      <div class="info-box">
        <!-- 左侧盒子 -->
        <p class="box-left"><i class="iconfont icon-kehuxinxi icon1"></i>客户信息</p>
        <!-- 右侧盒子 -->
        <div class="box-right">
          <p class="username">姓名：<span>{{detailData.title}}</span></p>
          <p class="tel">联系电话：<span>{{detailData.telephone}}</span></p>
          <div class="shensu">
            <a href="javascript:;">点击申诉</a>
            <p>72小时失效</p>
          </div>
        </div>
      </div>
      <!-- 房屋信息-->
      <div class="info-box">
        <!-- 左侧盒子 -->
        <p class="box-left"><i class="iconfont icon-fangwuxinxi icon2"></i>房屋信息</p>
        <!-- 右侧盒子 -->
        <div class="box-right">
          <p class="house-info"><span>面积：{{detailData.area}}m²</span> <span
            class="ml-xx">户型：{{detailData.homestyle}}</span></p>
          <p class="house-info">房屋类型：<span>{{detailData.housecategory}}</span></p>
          <p class="house-info">地址：<span>{{detailData.address}}</span></p>
        </div>
      </div>
      <!-- 装修需求 -->
      <div class="info-box">
        <!-- 左侧盒子 -->
        <p class="box-left"><i class="iconfont icon-zhuangxiuxuqiu icon3"></i>装修需求</p>
        <!-- 右侧盒子 -->
        <div class="box-right">
          <p class="house-info"><span>预算：{{detailData.budget}}万元</span> <span class="ml-xx">方式：{{detailData.way}}</span></p>
          <p class="house-info"><span>风格：{{detailData.style}}</span> <span class="ml-xx">装修类型：{{detailData.renovation | renovationFilter}}</span></p>
          <p class="house-infos"><span>装修需求：</span>{{detailData.content}}
          </p>
        </div>
      </div>
      <!-- 订单信息 -->
      <div class="info-box">
        <!-- 左侧盒子 -->
        <p class="box-left"><i class="iconfont icon-dingdanxinxi icon4"></i>订单信息</p>
        <!-- 右侧盒子 -->
        <div class="box-right">
          <p class="order-info"><span>订单时间</span>2017-11-11-10:30</p>
          <p class="order-info"><span>订单号</span>2345678765432</p>
          <p class="order-info"><span>金额</span>238元</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getOrderInfo} from '@/api/api'

  export default {
    name: "",
    data() {
      return {
        detailData: {
          telephone: '',//业主电话
          title: '', //业主名称
          area: '', // 装修面积
          housecategory: '',// 房屋类型
          homestyle: '',// 户型
          address: '',// 详细地址
          content: '', // 装修需求
          budget: '', //装修预算
          style: '', // 装修风格
          way:'', // 装修方式
          renovation:'', // 装修类型

        }
      };
    },
    filter:{
      renovationFilter(val){
        switch (Number(val)) {
          case 1:
            val = "家装"
          break;
          case 2:
            val = "工装"
          break
        }
        return 111
      }
    },
    created() {
      let id = this.$route.params.id
      let params = {
        id: id
      }
      getOrderInfo(params)
        .then((result) => {
          console.log(result);
          let data = result.data[0]
          this.detailData = {
            telephone: data.telephone,
            title: data.title,
            area: data.area,
            housecategory: data.housecategory,
            homestyle: data.homestyle,
            address: data.address,
            content: data.content,
            budget: data.budget,
            style: data.style,
            way:data.way,
            renovation:data.renovation


          }
        })
    },
    methods(){
      this.$route.go(-1)
    }
  };
</script>
<style lang="scss" scoped>
  /*导航*/
  .top-nav {
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 18px;
    i {
      color: #aaa;
      padding: 0 10px;
    }
    .go_home {
      color: #aaa;
      &:hover {
        color: #25c3ff;
      }
    }
  }

  /* 详情表单主体 */
  .detail-box {
    /*头部*/
    .top {
      height: 40px;
      padding-left: 10px;
      line-height: 40px;
      color: #f5f5f5;
      background: #999;
    }
    /*详情信息小板块*/
    .info-box {
      background: #fff;
      padding: 30px 30px 20px 30px;
      border-bottom: 2px solid #ccc;
      font-size: 0;
      /*左侧盒子通用*/
      .box-left {
        display: inline-block;
        vertical-align: top;
        width: 30%;
        font-size: 18px;
        color: #000;
        font-weight: 500;
        i {
          margin-right: 10px;
          font-size: 20px;
          /*iconfont样式分别控制 color*/
          &.icon1 {
            color: #ffd16d;
          }
          &.icon2 {
            color: #04d4e4;
          }
          &.icon3 {
            color: #db2c16;
          }
          &.icon4 {
            color: #2065f8;
          }
        }

      }
      /*右侧盒子通用*/
      .box-right {
        display: inline-block;
        vertical-align: top;
        width: 70%;
      }
      /*todo 申请阶段展示 */
      .status {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
      }
      /*申请进度添加*/
      .order-rate {
        font-size: 18px;
        li {
          position: relative;
          line-height: 30px;
          font-size: 0;
          span {
            font-size: 18px;
          }
          .icon-rate {
            position: relative;
            display: inline-block;
            width: 30px;
            &:before {
              display: inline-block;
              content: '';
              width: 16px;
              height: 16px;
              background: #5a5a5a;
              border-radius: 8px;
            }
          }

          &.active .icon-rate::before {
            background: #0099ff;
          }
          p {
            padding-left: 30px;
            font-size: 18px;
          }
        }
      }
      /*客户信息*/
      .username,
      .tel {
        display: inline-block;
        vertical-align: top;
        width: 35%;
        font-size: 18px;
      }
      .shensu {
        display: inline-block;
        vertical-align: top;
        width: 30%;
        font-size: 18px;
        text-align: center;
        a {
          display: inline-block;
          width: 80px;
          height: 30px;
          color: rgb(0, 255, 255);
          font-size: 16px;
          text-align: center;
          line-height: 30px;
          border: 1px solid rgb(0, 255, 255);
          border-radius: 3px;
        }
        p {
          font-size: 16px;
          color: #aaa;
        }
      }
      /*房屋信息 和 装修需求*/
      .house-info {
        font-size: 18px;
        height: 50px;
        .ml-xx {
          margin-left: 100px;
        }
      }
      .house-infos {
        font-size: 18px;
        span {
          color: rgb(255, 12, 12);
        }
      }

      /*订单信息*/
      .order-info {
        font-size: 18px;
        color: #696969;
        height: 50px;
        span {
          display: inline-block;
          width: 150px;
        }
      }
    }
  }
</style>

