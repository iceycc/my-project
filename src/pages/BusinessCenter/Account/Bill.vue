<template>
    <div>
        <el-collapse accordion v-model="select">
            <div v-if="countData.length == 0" style="padding-top: 60px;text-align: center">没有数据</div>
            <div class="card" v-for="item,index in countData" :key="index">
                <div class="bill-info-box">
                    <h3 class="">{{item.billtime | tiemFormat}}月账单</h3>
                    <el-row>
                        <el-col :span="12">
                            <p>共计扣款{{item.withdrawingnum}}笔</p>
                            <p>{{item.withdrawing}}元</p>
                        </el-col>
                        <el-col :span="12">
                            <p>共收退款{{item.refundnum}}笔</p>
                            <p>{{item.refund}}元</p>
                        </el-col>
                    </el-row>
                </div>
                <el-collapse-item :name="item.billtime">
                    <template slot="title">
                        <div style="padding-left: 20px;border-top: 1px solid #ccc">查看详情<span
                                style="float: right;padding-right: 20px">账单号：{{item.monthbillnumber}}</span>
                        </div>
                        <!--todo：-->
                    </template>
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="addtime"
                                label="时间">
                        </el-table-column>
                        <el-table-column
                                prop="order_no"
                                label="订单号">

                            <template slot-scope="scope">
                                <router-link :to="{name:'index.detail',params:{id:scope.row.orderid }}">
                                    {{scope.row.order_no}}
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="户型">
                            <template slot-scope="scope">
                                {{scope.row.hometyle | hometyleFilter}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                label="类型">
                        </el-table-column>
                        <el-table-column
                                prop="money"
                                label="金额">
                            <template slot-scope="scope">
                <span :class="{money_active:scope.row.sign =='+'}">
                  {{scope.row.money | moneyFilter(scope.row.sign)}}
                </span>
                            </template>
                        </el-table-column>
                    </el-table>

                </el-collapse-item>
            </div>
        </el-collapse>

    </div>
</template>
<script>
    import {getBillList, getMonthbil} from '@/api/api'
    import moment from 'moment'

    export default {
        name: '',
        data() {
            return {
                select: '',
                countData: [],
                tableData: []
            }
        },
        filters: {
            tiemFormat(val) {
                return val
            },
            hometyleFilter(val) {
                return val
            },
            moneyFilter(val, sign) {
                return sign + val
            }
        },
        watch: {
            select(newVal, oldVal) {
                if (newVal) {
                    let params = {
                        time: newVal
                    }
                    getMonthbil(params)
                        .then((result) => {
                            // console.log(result);
                            this.tableData = result
                            // console.log(this.tableData)
                        })
                }
            }
        },
        created() {
            this.getData()

        },
        methods: {
            showInfo(mouth) {
                // console.log(mouth)
                let params = {
                    time: mouth
                }
                getMonthbil(params)
                    .then((result) => {
                        // console.log(result);
                        this.tableData[mouth] = result
                        // console.log(this.tableData)
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
    .money_active {
        color: red;
    }

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
