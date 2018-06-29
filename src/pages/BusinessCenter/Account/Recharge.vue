<template>
    <div>
        <div class="rc-main">
            <!--单选框样式联动 todo：-->
            <!--类型选择-->
            <div class="select-box">
                <span class="titile">类型</span>
                <el-radio-group v-model="name_goods" size="medium">
                    <el-radio-button label="1">金额充值</el-radio-button>
                    <el-radio-button label="2">质保金充值</el-radio-button>
                </el-radio-group>
            </div>
            <!--充值金额选择-->
            <div class="select-box">
                <span class="titile">充值金额</span>
                <el-radio-group v-model="money_order" size="medium" v-if="name_goods == 1">
                    <el-radio-button label="10000">10000元</el-radio-button>
                    <el-radio-button label="5000">5000元</el-radio-button>
                    <el-radio-button label="3000">3000元</el-radio-button>
                </el-radio-group>
                <el-radio-group v-model="money_order" size="medium" v-if="name_goods == 2">
                    <el-radio-button label="10000">10000元</el-radio-button>
                </el-radio-group>
            </div>
            <!--去支付1-->
            <div class="go-pay">
                <el-button type="primary" class="pay-btn" @click="goReChange">去支付</el-button>
                <el-button type="primary" class="pay-btn" @click="goback">返回</el-button>
            </div>
        </div>

        <!--<div id="payform"></div>-->

        <el-dialog title="确认支付" :visible.sync="dialogTableVisible">
            <div class="payform" id="payform">
                <!--<el-button>取消</el-button>-->
            </div>
        </el-dialog>
    </div>

</template>
<script>
    import {doRecharge} from "@/api/api";
    import API from 'axios'
    import Qs from 'qs'
    import axios from "../../../assets/js/axios";
    import {EventBus} from "../../../config/Constants";

    let Base64 = require('js-base64').Base64;

    export default {
        name: '',
        data() {
            return {
                // checked1:true,
                name_goods: 1, //
                money_order: 10000, // 金额,
                dialogTableVisible: false,
            }
        },
        watch:{
            dialogTableVisible(newVal,oldVal) {
                if(newVal == false){
                    var payform = document.getElementById('payform')
                    var payDiv = document.getElementById('payDiv')
                    payDiv.style.display = "inline-block"
                    payform.removeChild(payDiv)
                }
            }
        },
        methods: {
            goback() {
                this.$router.go(-1)
            },
            goReChange() {
                //todo
                this.dialogTableVisible = true

                let params = {
                    money_order: this.money_order,
                    name_goods: this.name_goods
                }

                doRecharge(params)
                // .then((result)=>{
                //     console.log(result)
                //     const div = document.createElement('div')
                //     div.innerHTML = result
                //     document.body.appendChild(div)
                // })

                // API.post('http://merchant.uzhuang.com/v1/pay/llpay', params,{
                //     transformRequest: [function (data) {
                //         if (data) {
                //             data = Qs.stringify(data);
                //             return data;
                //         } else {
                //             return;
                //         }
                //     }],
                // })
                    .then((result) => {

                        let str = Base64.decode(result.data)
                        console.log(str);
                        var payform = document.getElementById('payform')
                        var payDiv = document.createElement('div')
                        console.log(payform)
                        // this.formStr = str
                        payDiv.innerHTML = str
                        payDiv.id = 'payDiv'
                        payform.append(payDiv)

                    })
                    .catch((err) => {
                        console.log(err);
                    })

            }
        }

    }
</script>
<style lang="scss" scoped>

    .rc-main {
        height: 600px;
        margin: 30px 50px;
        padding: 0 40px;
        background: #fff;
        .select-box {
            border-bottom: 1px solid #d6d6d6;
            padding: 60px 0;
            .titile {
                display: inline-block;
                width: 100px;
            }
        }
        .pay-btn {
            margin: 30px 0;
            width: 200px;
            height: 50px;
        }
    }
    #payform{
        text-align: center;
        cursor: pointer;
    }

</style>
