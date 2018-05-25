<template>
  <div>
    <el-collapse accordion v-model="select">
    <div class="card" v-for="item,index in countData" :key="index">
      <div class="bill-info-box">
        <h3 class="">{{item.billtime | tiemFormat}}月账单</h3>
        <el-row>
          <el-col :span="12">
            <p>共计扣款15笔</p>
            <p>{{item.withdrawing}}元</p>
          </el-col>
          <el-col :span="12">
            <p>共收退款{{item.refundnum}}笔</p>
            <p>{{item.refund}}元</p>
          </el-col>
        </el-row>
      </div>
        <el-collapse-item :name="item.billtime" >
          <template slot="title">
            <div style="padding-left: 20px">查看详情<span style="float: right;padding-right: 20px">账单号：{{item.monthbillnumber}}</span>
            </div>
          </template>

          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="时间">
            </el-table-column>
            <el-table-column
              prop="name"
              label="订单号">
            </el-table-column>
            <el-table-column
              prop="address"
              label="户型">
            </el-table-column>
            <el-table-column
              prop="address"
              label="类型">
            </el-table-column>
            <el-table-column
              prop="address"
              label="金额">
            </el-table-column>
          </el-table>

        </el-collapse-item>
    </div>
    </el-collapse>

  </div>
</template>
<script>
  import {getBillList,getMonthbil} from '@/api/api'
  import moment from 'moment'
  export default {
    name: '',
    data() {
      return {
        select:'',
        countData:[],
        tableData: []
      }
    },
    filters:{
      tiemFormat(val){
        return moment(val * 1000).format('YYYY年MM')
      }
    },
    watch:{
      select(newVal,oldVal){
        if(newVal){
          let params = {
            time:newVal
          }
          getMonthbil(params)
            .then((result) =>{
              console.log(result);
              this.tableData= result
              console.log(this.tableData)
            })
        }
      }
    },
    created() {
      this.getData()

    },
    methods: {
      showInfo(mouth){
        console.log(mouth)
        let params = {
          time:mouth
        }
        getMonthbil(params)
          .then((result) =>{
            console.log(result);
            this.tableData[mouth] = result
            console.log(this.tableData)
          })
      },
      getData() {
        let params = {}
        getBillList(params)
          .then((result) => {
            this.countData = result
          })
      },
    }
  }
</script>
<style lang="scss" scoped>

  .card {
    margin-bottom: 20px;
    background: #fff;
    h3 {
      padding: 10px;
      font-size: 20px;
    }
    .el-row {
      text-align: center;
      padding: 20px 0;
      font-size: 20px;
    }

  }
</style>
