<template>
  <div>
    <!--标题-->
    <h3 class="om-titile">订单管理</h3>
    <!--管理选择的标签-->
    <div class="om-select">
        <span class="">时间</span>
        <span class="all">全部</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          :picker-options="pickerOptions2">
        </el-date-picker>
    </div>
    <div class="om-select">
      <span>状态</span>
      <span class="all">全部</span>
      <ul class="status-list">
        <li>可申诉</li>
        <li>已承接</li>
        <li>申诉中</li>
        <li>申诉成功</li>
        <li>申诉失败</li>
      </ul>
    </div>
    <!--筛选搜索栏-->
    <div class="om-search">
      <el-select v-model="value2" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        class="search-box"
        style="width: 150px;"
        size="mini"
        placeholder="请输入内容"
        v-model="input23">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <!--详细信息盒子-->
    <div class="om-detail">
      <!--标题-->
      <div class="detail-top">详细数据  （124）</div>
      <!--详细数据列表 table-->
      <ul class="my-table">
          <li class="table-header">
            <span class="order-time">订单时间</span>
            <span class="order-num" >订单编号</span>
            <span class="house-type">户型</span>
            <span class="holder-tel">业主电话</span>
            <span class="order-status">状态</span>
            <span class="order-detail"></span>
          </li>
          <li class="table-list detail-info">
            <span class="order-time">2017-11-11</span>
            <span class="order-num" >123123123123</span>
            <span class="house-type">两局</span>
            <span class="holder-tel">15621185521</span>
            <span class="order-status">点击申诉</span>
            <span class="order-detail" @click="goDetail">详情</span>
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
  export default{
    data() {
      return {
        options2: [{
          value: '选项1',
          label: '订单号搜索'
        }, {
          value: '选项2',
          label: '手机号搜索'
        }, {
          value: '选项3',
          label: '业主姓名搜索'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
      };
    },
    methods:{
      goDetail:function () {
          this.$router.push({name:'order.detail'})
      }
    }
  };
</script>

<style lang="scss">
  /* 顶部标题*/
  .om-titile{
    font-size: 18px;
  }
  /**/
  .om-select{
    padding-top: 20px;
    font-size: 0;
    line-height: 30px;

    span{
      display:inline-block;
      vertical-align: top;
      margin-right: 30px;
      font-size: 16px;
      &.all{
        text-align: center;
        width: 60px;
        height: 30px;
        color:#fff;
        background: #0099ff;
      }
    }
    .el-date-editor{
      display:inline-block !important;
      vertical-align: top;
    }
    .status-list{
      display:inline-block;
      font-size: 0;
      li{
        font-size: 16px;

        padding-right: 30px;
        display: inline-block;
      }
    }
  }
  .om-search{
      margin-top: 30px;
  }
  /*详细数据大盒子*/
  .om-detail{
    position:relative;
    height: 600px;
    padding:10px;
    background: #fff;
    /*top*/
    .detail-top{
      height: 40px;
      line-height: 40px;
    }
    /*详细数据表格*/
    .my-table{
      border:1px solid #f2f2f2;
      li{
        font-size: 0;

        span{
          text-indent: 10px;
          &:nth-child(n-5){
            font-size: 16px;
            display: inline-block;
            width: 18%;
          }
          &:last-child{
            font-size: 16px;
            display: inline-block;
            width: 10%;
            color:#0099ff;
          }
          /*详情按钮*/
          &.order-detail{
            cursor:pointer;
          }
        }
      }
    }
    /*分页*/
    .my-pagination{

    }
  }



</style>
