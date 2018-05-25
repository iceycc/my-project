<template>
  <div>
    <!--上部的 充值框-->
    <div class="recharge">
      <ul class="clearfix">
        <li class="l">
          <p>余额<i class="wenhao">?</i></p>
          <span>{{balance}}元</span>
        </li>
        <li class="l">
          <p>质保金</p>
          <span>{{bond_money}}元</span>
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
        <el-date-picker
          v-model="search_time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <select name="" id="" v-model="search_type" class="select-box">
          <option value="1">余额消费</option>
          <option value="2">充值记录</option>
        </select>
      </div>
      <el-table
        :data="tableData"
        v-loading="loading"
        border
        style="width: 100%">
        <el-table-column
          prop="addtime"
          label="日期">
          <template slot-scope="scope">
            {{scope.row.addtime | momentTime}}
          </template>
        </el-table-column>
        <el-table-column
          :prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          :prop="orderno"
          :label="orderno_title">
        </el-table-column>
        <el-table-column
          :prop="money"
          label="金额">
        </el-table-column>
      </el-table>
      <!--分页-->
      <div class="block">
        <el-pagination
          @urrent-change="currentChange($event)"
          layout="prev, pager, next"
          :total="totalpage">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAssignmentRecord, getCompanyMoney, getRechargeRecord} from '@/api/api'

  export default {
    name: "account",
    data() {
      return {
        search_time: [null, null],
        search_type: 1,
        tableData: [],
        totalpage: 0,
        balance: 0,
        bond_money: 0,
        loading: true,
        // 列表渲染两个接口发挥的字段不同。。
        money: 'money', //  'money_order',
        orderno: 'orderno', //  'no_order',
        type: 'type', //  'name_goods'
        orderno_title: '订单号' // 银通订单号
      }
    },
    watch: {
      search_type: function (newVal, oldVal) {
        console.log('search_type改变了');
        if (newVal == 1) { // 余额消费
          this.money = 'money' //  'money_order',
          this.orderno = 'orderno' //  'no_order',
          this.type = 'type'//  'name_goods'
          this.orderno_title = '订单号'
        }
        if (newVal == 2) { // 充值记录
          this.money = 'money_order'
          this.orderno = 'no_order'
          this.type = 'name_goods'
          this.orderno_title = '银通订单号'
        }
        this.getDataList()
      },
      search_time: function (newVal, oldVal) {
        if (newVal === null) {
          this.getDataList()
        }
        console.log('tiem改变了');
        // console.log(newVal);
        // console.log(this.search_time)
        this.getDataList()
      }

    },
    created() {
      this.getCompanyMoneyData()
      this.getDataList()
    },
    methods: {
      getCompanyMoneyData() {
        let params = {}
        getCompanyMoney(params)
          .then((result) => {
            this.balance = result.balance
            this.bond_money = result.bond_money
          })
      },
      getDataList(page) {
        this.loading = true
        // 时间选择权 插件清空数据时 search_time会被强制重制为null
        if (this.search_time == null) {
          this.search_time = [null, null]
        }
        let params = {
          page: page || 1,
          sta_time: this.search_time[0] ? Date.parse(this.search_time[0]) * 0.001 : null,
          end_time: this.search_time[1] ? Date.parse(this.search_time[1]) * 0.001 : null,
        }
        let type = Number(this.search_type)
        if (type === 1) {
          // 获取商户余额消费记录
          this.getAssignmentRecordData(params)
        }
        if (type === 2) {
          // 获取商户充值记录
          this.getRechargeRecordData(params)
        }
      },
      // 获取商户余额消费记录
      getAssignmentRecordData(params) {
        getAssignmentRecord(params)
          .then((result) => {
            this.tableData = result.data
            this.totalpage = result.totalpage || 0
            this.loading = false
          })
      },
      // 获取商户充值记录
      getRechargeRecordData(params) {
        getRechargeRecord(params)
          .then((result) => {
            this.tableData = result.data
            this.totalpage = result.totalpage || 0
            this.loading = false
          })
      },
      //点击充值跳转 编程式导航
      goRecharge() {
        this.$router.push({name: 'account.recharge'})
      }
    },
    // 分页
    currentChange($event) {
      console.log($event)
      this.getDataList($event)
    },
  }
</script>

<style lang="scss" scoped>

  /*分页*/
  .el-pagination {
    padding: 10px 0;
    text-align: center;
  }

  /*充值框*/
  .recharge {
    background: #fff;
    text-align: center;
    margin-bottom: 30px;
    /**/
    ul {
      border-bottom: 1px solid #d6d6d6;
      padding: 30px 0;
      li {
        width: 50%;
        p {
          font-size: 18px;
          padding-bottom: 20px;
        }
        span {
          display: block;
          font-size: 25px;
          font-weight: bold;
        }
        .wenhao {
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
    .recharge-btn {
      margin: 20px 0;
      width: 150px;
    }

  }

  /*账户明细框*/
  .account-detail {
    height: 600px;
    background: #fff;
    position: relative;
    padding: 10px;
    .ad-top {
      margin-bottom: 20px;
    }
    .select-box {
      color: #999;
      margin-left: 20px;
      height: 40px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
    }
  }
</style>
