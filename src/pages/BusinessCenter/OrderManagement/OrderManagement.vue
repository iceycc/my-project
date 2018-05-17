<template>
  <div>
    <!--标题-->
    <h3 class="om-titile">订单管理</h3>
    <!--管理选择的标签-->
    <div class="om-select">
      <span class="left-tap">时间</span>
      <el-button>全部</el-button>
      <div class="right-box">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
    </div>
    <div class="om-select">
      <span class="left-tap">状态</span>
      <el-button>全部</el-button>
      <div class="right-box">
        <el-checkbox-group v-model="checkboxGroup2">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </div>
    <!--筛选搜索栏-->
    <div class="om-search">
      <el-select v-model="value" placeholder="请选择">

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
        placeholder="请输入内容"
        v-model="input23">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>

    </div>
    <!--详细信息盒子-->
    <div class="om-detail">
      <!--标题-->
      <div class="detail-top">详细数据 （124）</div>
      <!--详细数据列表 table-->
      <ul class="my-table">
        <li class="table-header">
          <span class="order-time">订单时间</span>
          <span class="order-num">订单编号</span>
          <span class="house-type">户型</span>
          <span class="holder-tel">业主电话</span>
          <span class="order-status">状态</span>
          <span class="order-detail"></span>
        </li>
        <li class="table-list detail-info">
          <span class="order-time">2017-11-11</span>
          <span class="order-num">123123123123</span>
          <span class="house-type">两局</span>
          <span class="holder-tel">15621185521</span>
          <span class="order-status">点击申诉</span>
          <span class="order-detail" @click="goDetail">详情</span>
        </li>
      </ul>
      <!--分页-->
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>

      </div>
    </div>
  </div>
</template>
<script>
  const cityOptions = ['可申诉', '已承接', '申诉中', '申诉成功','申诉失败'];
  export default {
    data() {
      return {
        input23: '',
        checkboxGroup2: ['可申诉'],
        cities: cityOptions,
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value:'选项1',
        value1: '',
        value2: '',
        value3: '',
      };
    },
    methods: {
      goDetail: function () {
        this.$router.push({name: 'order.detail'})
      }
    }
  };
</script>

<style lang="scss" scoped>
  /* 顶部标题*/
  .om-titile {
    vertical-align: middle;
  }
.el-checkbox-button{
  margin-right: 15px;
}
  /**/
  .om-select {
    padding-top: 20px;
    line-height: 40px;

    .right-box {
      display: inline-block;
      vertical-align: middle;
      margin-left: 30px;
      height: 40px;
    }
    .left-tap {
      display: inline-block;
      vertical-align: middle;
      line-height: 40px;
      width: 50px;
      height: 40px;
      font-size: 16px;
    }

  }

  .om-search {
    margin-top: 30px;
  }

  /*详细数据大盒子*/
  .om-detail {
    position: relative;
    height: 600px;
    padding: 10px;
    background: #fff;
    /*top*/
    .detail-top {
      height: 40px;
      line-height: 40px;
    }
    /*详细数据表格*/
    .my-table {
      border: 1px solid #f2f2f2;
      li {
        font-size: 0;

        span {
          text-indent: 10px;
          &:nth-child(n-5) {
            font-size: 16px;
            display: inline-block;
            width: 18%;
          }
          &:last-child {
            font-size: 16px;
            display: inline-block;
            width: 10%;
            color: #0099ff;
          }
          /*详情按钮*/
          &.order-detail {
            cursor: pointer;
          }
        }
      }
    }
    /*分页*/
    .el-pagination{
      padding: 10px 0;
      text-align: center;
    }
  }


</style>
