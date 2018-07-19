<template>
    <div class="bf">
        <el-steps :active="1" simple>
            <el-step title="填写基本信息" icon="el-icon-edit"></el-step>
            <el-step title="填写资质信息" icon="el-icon-upload"></el-step>
        </el-steps>
        <div class="ai-main">
            <!--form信息盒子-->
            <div class="ai-box">
                <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="100px"
                         class="demo-ruleForm">
                    <!--公司名称-->
                    <div class="small-box">
                        <el-form-item label="公司名称" prop="companyname">
                            <el-input v-model="formData.companyname" placeholder="请与执照一致"
                                      auto-complete="off"></el-input>
                        </el-form-item>
                    </div>
                    <!--店铺负责人-->
                    <div class="small-box">
                        <el-form-item label="商铺负责人" prop="fzrxm">
                            <el-input v-model="formData.fzrxm" placeholder="业务对接人姓名" auto-complete="name"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="chargePersonPhone">

                            <el-input v-model="formData.chargePersonPhone" placeholder="手机号"
                                      auto-complete="off"></el-input>
                        </el-form-item>
                    </div>
                    <!--公司开户银行-->
                    <div class="small-box">
                        <el-form-item label="公司开户名称" prop="accountname">
                            <el-input v-model="formData.accountname" placeholder="请填写公司开户行名称" auto-complete="off" :disabled="disabled"></el-input>
                        </el-form-item>
                        <!--开户银行-->
                        <!--todo 银行校验没做-->
                        <el-form-item label="公司开户银行" prop="openaccount">
                            <el-input v-model="formData.openaccount" placeholder="请填写公司开户银行" auto-complete="off" :disabled="disabled"></el-input>
                        </el-form-item>
                        <!--<el-form-item label="公司开户银行" prop="openaccount">-->
                            <!--<el-select-->
                                    <!--v-model="formData.openaccount"-->
                                    <!--filterable-->
                                    <!--allow-create-->
                                    <!--value-key="id"-->
                                    <!--default-first-option-->
                                    <!--placeholder="公司开户银行">-->
                                <!--<el-option-->
                                        <!--v-for="(item,key) in bankname"-->
                                        <!--:key = "key"-->
                                        <!--:label="item"-->
                                        <!--:value="item">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                        <!--开户账号-->
                        <el-form-item label="开户账号" prop="BankNo">
                            <el-input v-model="formData.BankNo" placeholder="输入卡号" auto-complete="off" :disabled="disabled"></el-input>
                        </el-form-item>
                        <!--开户地址-->
                        <div style="display:flex ">
                            <div style="margin-bottom: 20px;display: flex">
                                <el-form-item prop="BelongProvince" label="开户地址">
                                    <el-select v-model="formData.BelongProvince" placeholder="请选择省"
                                               @change="chooseProvencehandle(formData.BelongProvince,1)"
                                               auto-complete="off"
                                               :disabled="disabled"
                                    >
                                        <el-option
                                                v-for="item in provences1"
                                                :key="item.lid"
                                                :label="item.name"
                                                :value="item.lid"
                                                auto-complete="off"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item prop="BelongProvince">
                                    <el-select v-model="formData.BelongCity" placeholder="请选择市"
                                               @change="chooseCityHandle(formData.BelongCity,1)" auto-complete="off" :disabled="disabled">
                                        <el-option
                                                v-for="item in cities1"
                                                :key="item.lid"
                                                :label="item.name"
                                                :value="item.lid"
                                                auto-complete="off"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item prop="BelongProvince">
                                    <el-select v-model="formData.BelongCounty" placeholder="请选择区" auto-complete="off" :disabled="disabled">
                                        <el-option
                                                v-for="item in distrusts1"
                                                :key="item.lid"
                                                :label="item.name"
                                                :value="item.lid"
                                                auto-complete="off"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </div>
                        <el-form-item label="" prop="branchname">
                            <el-input v-model="formData.branchname" placeholder="开户支行名称" auto-complete="off" :disabled="disabled"></el-input>
                        </el-form-item>
                    </div>
                    <!--公司地址-->
                    <div class="small-box">


                        <div style="display:flex ">

                            <div style="margin-bottom: 20px;display: flex" class="select-down">
                                <el-form-item prop="LK1_1" label="公司地址">

                                    <el-select v-model="formData.LK1_1" placeholder="请选择省"

                                               @change="chooseProvencehandle(formData.LK1_1,2)" auto-complete="off">
                                        <el-option
                                                v-for="item in provences2"
                                                :key="item.lid"
                                                :label="item.name"
                                                :value="item.lid"
                                                auto-complete="off"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item prop="LK1_1">

                                    <el-select v-model="formData.LK1_2" placeholder="请选择市"
                                               @change="chooseCityHandle(formData.LK1_2,2)"
                                               auto-complete="off">
                                        <el-option
                                                v-for="item in cities2"
                                                :key="item.lid"
                                                :label="item.name"
                                                :value="item.lid"
                                                auto-complete="off"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item prop="LK1_1">

                                    <el-select v-model="formData.LK1_3" placeholder="请选择区" auto-complete="off">
                                        <el-option
                                                v-for="item in distrusts2"
                                                :key="item.lid"
                                                :label="item.name"
                                                :value="item.lid"
                                                auto-complete="off"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                            </div>

                        </div>
                        <el-form-item label="详细地址" prop="one_text">
                            <el-input v-model="formData.one_text" placeholder="详细地址，请与执照地址一致"
                                      auto-complete="off"></el-input>
                        </el-form-item>
                        <div class="map-box" id="map-container">
                            <map-box :location="location_map" :keyword="keyword_map"></map-box>
                        </div>
                    </div>
                    <div class="small-box">
                        <h4 class="info-title">以下为选填</h4>
                        <el-form-item label="施工等级资质">
                            <!--<el-input v-model="formData.ConstructQuay" placeholder="请于执照一致" auto-complete="off"></el-input>-->
                            <el-radio-group v-model="formData.ConstructQuay">
                                <el-radio-button label="0">无</el-radio-button>
                                <el-radio-button label="1">一级</el-radio-button>
                                <el-radio-button label="2">二级</el-radio-button>
                                <el-radio-button label="3">三级</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="公司座机">
                            <el-input v-model="formData.gszj" placeholder="区号+号码" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="公司邮箱">
                            <el-input v-model="formData.company_email" placeholder="公司指定联系邮箱"
                                      auto-complete="off"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>

        <div class="ai-btn">
            <el-button @click="goApplyInfo">上一步</el-button>
            <el-button @click="submitForm('formData')" size="medium" type="primary">下一步</el-button>
        </div>
    </div>
</template>
<script>
    import {commons} from '@/components/index.js'
    import EventBus from '@/config/EventBus'

    import {getProvence, getCity, getDistrust, getAccountData, putCompanyMessage1} from '@/api/api'
    import {jsop} from "../../../config/util";
    import {checkEmpty, checkTel, checkSelect,GetRequest2} from '@/config/util.js' // 引入校验规则等
    import {BankName} from "../../../config/data";
    export default {
        // name: 'base-info'1,

        data() {

            var bankNoCheck = (rule,value,callback)=>{
                if (value == '') {
                    callback(new Error('请输入银行卡号'));
                } else if(false){
                    callback(new Error('银行卡号应该是16位'));
                }else {
                    // var options = {
                    //     url:'https://ccdcapi.alipay.com/validateAndCacheCardInfo.json',
                    //     time:1000,
                    //     data:{
                    //         _input_charset:'utf-8',
                    //         cardNo:value,
                    //         cardBinCheck:true
                    //     },
                    //     callback:'success_jsonpCallback',
                    //     success:function (res) {
                    //         console.log(res)
                    //
                    //     },
                    //     fail:function (err) {
                    //         console.log(err);
                    //     }
                    // }
                    // jsop(options)
                    callback();

                    // let params = {
                    //     cardNo:value,
                    //     cardBinCheck:true
                    // }
                    // checkBankName(params).then(res=>{
                    //     callback(res.bank);
                    //
                    // })
                    //     callback();

                }
            }
            return {
                disabled:false, // 修改时限制银行信息修改
                value10:'',
                bankname:BankName,
                formData: {
                    companyname: '',
                    accountname:'',
                    BelongCity: '',
                    BelongCounty: '',
                    BelongProvince: '',
                    chargePersonPhone: '',
                    ConstructQuay: '',
                    branchname: '',
                    one_text: '',
                    LK1_1: '',
                    LK1_2: '',
                    LK1_3: '',
                    BankNo: '',
                    fzrxm: '',
                    company_email: '',
                    gszj: '',
                    openaccount: '',
                    company_type: 1,
                    company_status: 1,
                    isUpdate: 1
                },
                isUpdata:false,
                rules: {
                    companyname: [{validator: checkEmpty, trigger: 'blur'}],
                    accountname: [{validator: checkEmpty, trigger: 'blur'}],
                    fzrxm: [{validator: checkEmpty, trigger: 'blur'}],
                    chargePersonPhone: [{validator: checkTel, trigger: 'blur'}],
                    BankNo: [{validator: bankNoCheck, trigger: 'blur'}],
                    branchname: [{validator: checkEmpty, trigger: 'blur'}],
                    one_text: [{validator: checkEmpty, trigger: 'blur'}],
                    ConstructQuay: [{validator: checkEmpty, trigger: 'blur'}],
                    gszj: [{validator: checkEmpty, trigger: 'blur'}],
                    company_email: [{validator: checkEmpty, trigger: 'blur'}],
                    LK1_1: [{validator: checkSelect, trigger: 'change'}],
                    BelongProvince: [{validator: checkSelect, trigger: 'change'}],
                    openaccount: [{validator: checkEmpty, trigger: 'blur'}],
                },
                provences1: [],
                provences2: [],
                cities1: [],
                cities2: [],
                distrusts1: [],
                distrusts2: [],
                oldInfos: [],

            }
        },
        watch:{
            // 监控省
            BelongProvince:function (newVal,oldVal) {
                // console.log(newVal)
                if(newVal != '' && oldVal != ''){
                    this.formData.BelongCity = ''
                    this.formData.BelongCounty = ''
                    this.formData.branchname = ''
                }
            },
            LK1_1:function (newVal,oldVal) {
                // console.log(newVal)
                if(newVal != '' && oldVal != ''){
                    this.formData.LK1_2 = ''
                    this.formData.LK1_3 = ''
                    this.formData.one_text = ''
                }
            },

            // 监控市
            BelongCity:function (newVal,oldVal) {
                // console.log(newVal)
                if(newVal != '' && oldVal != ''){
                    this.formData.BelongCounty = ''
                    this.formData.branchname = ''

                }
            },

            LK1_2:function (newVal,oldVal) {
                // console.log(newVal)
                if(newVal != '' && oldVal != ''){
                    this.formData.LK1_3 = ''
                    this.formData.one_text = ''
                }
            },

            // 监控区
            BelongCounty:function (newVal,oldVal) {
                // console.log(newVal)
                if(newVal != '' && oldVal != ''){
                    this.formData.branchname = ''
                }
            },
            LK1_3:function (newVal,oldVal) {
                // console.log(newVal)
                if(newVal != '' && oldVal != ''){
                    this.formData.one_text = ''
                }
            },


        },
        computed:{
            // 监控 省区市变化
            BelongCity: function () {
                return this.formData.BelongCity
            },
            BelongCounty: function () {
                return this.formData.BelongCounty
            },
            BelongProvince: function () {
                return this.formData.BelongProvince
            },
            LK1_1: function () {
                return this.formData.LK1_1

            },
            LK1_2: function () {
                return this.formData.LK1_2
            },
            LK1_3: function () {
                return this.formData.LK1_3
            },

            location_map:function () {
                let lid = this.formData.LK1_1
                let lid2 = this.formData.LK1_2
                let name = '北京市'
                if(this.cities2.length >0){
                    for(let i of this.cities2){
                        if(i.lid ==lid2){
                            name = i.name
                            return name

                        }
                    }
                }else {
                    for(let i of this.provences2){
                        if(i.lid ==lid){
                            name = i.name
                            return name
                        }
                    }
                }
            },
            keyword_map:function () {
                let word = this.formData.LK1_3 + this.formData.one_text
                let keyword = word == '' ? '天安门' : word
                return keyword
            }
            // mapkeyword:function () {
            //     return this.formData.LK1_2 + this.formData.LK1_3
            // }
        },
        created() {
            // 修改的

            // 修改
            let Request =new GetRequest2()
            this.isUpdate = Request['isUpdate']  ? 2 : 1
            //
            // console.log(Request['isUpdate'])
            console.log(this.isUpdate)

            if(this.isUpdate == 2){
                this.disabled = true
            }
            this.getProvenceHandle()
            this.getDqData()

        },
        mounted(){

        },
        components: {
            'map-box':
            commons.MapBox
        }
        ,
        methods: {
            getDqData(){
                // todo 获取
                getAccountData()
                    .then((result) => {
                        this.oldInfos = result
                        if(result.LK1_1 != ''){
                            this.chooseProvencehandle(result.LK1_1,2)
                        }
                        if(result.LK1_2 != ''){
                            this.chooseCityHandle(result.LK1_2,2)
                        }
                        if(result.BelongProvince != ''){
                            this.chooseProvencehandle(result.BelongProvince,1)
                        }
                        if(result.BelongCity != ''){
                            this.chooseCityHandle(result.BelongCity,1)
                        }

                        this.formData = {
                            companyname: result.companyname || '',
                            accountname: result.accountname || '',
                            BelongCity: result.BelongCity || '',
                            BelongCounty: result.BelongCounty || '',
                            BelongProvince: result.BelongProvince || '',
                            chargePersonPhone: result.chargePersonPhone || '',
                            ConstructQuay: result.ConstructQuay || '',
                            branchname: result.branchname || '',
                            one_text: result.one_text || '',
                            LK1_1: result.LK1_1 || '',
                            LK1_2: result.LK1_2 || '',
                            LK1_3: result.LK1_3 || '',
                            BankNo: result.BankNo || '',
                            fzrxm: result.fzrxm || '',
                            company_email: result.company_email || '',
                            gszj: result.gszj || '',
                            openaccount: result.openaccount || '',
                            company_type: this.isUpdata ? 2 : 1,
                            company_status: 1,
                        }
                    })

            },
            checked(val) {
                if (val == '') {

                }
            }
            ,
            submitForm(formData) {

                this.$refs[formData].validate((valid) => {
                    if (valid) {
                        this.goDetailInfo()
                    } else {
                        EventBus.$emit('notice', {
                            type: 'message',
                            message: '还有未填写信息'
                        })

                        // console.log('error submit!!');
                        return false;
                    }
                });
            }
            ,
            // chooseProvencehandle
            chooseProvencehandle(val, num) {
                this.getCityHandle({id: val}, num)
            }
            ,
            // chooseCityHandle
            chooseCityHandle(val, num) {
                // console.log('获取市列表')
                // console.log(val)
                this.getDistrustHandle({id: val}, num)
            }
            ,
            // 省
            getProvenceHandle() {
                getProvence()
                    .then((result) => {
                        // console.log(result);
                        this.provences1 = result
                        this.provences2 = result
                    })
            }
            ,
            // 市
            getCityHandle(params, num) {
                getCity(params)
                    .then((result) => {
                        if (num === 1) {
                            this.cities1 = result
                        }
                        if (num === 2) {
                            this.cities2 = result
                        }
                    })
            }
            ,
            // 区s、
            getDistrustHandle(params, num) {
                getDistrust(params)
                    .then((result) => {
                        if (num === 1) {
                            this.distrusts1 = result
                        }
                        if (num === 2) {
                            this.distrusts2 = result
                        }
                    })
            }
            ,
            goApplyInfo() {
                this.$router.go(-1)
            }
            ,
            goDetailInfo() {
                // todo: 第一页提交问题
                let params = Object.assign(this.formData,{isUpdate:this.isUpdate})
                console.log(params)
                putCompanyMessage1(params).then((result) => {
                    // console.log(result)
                    if(result.code != 1) {
                        EventBus.$emit('notice', {
                            type: 'message',
                            message: result.message
                        })
                        return
                    }
                    if (this.$route.name == 'apply.baseinfo') {
                        this.$router.push({
                            name: 'apply.detailinfo', params: {
                                formData: this.formData,
                                oldInfos: this.oldInfos,
                                isUpdata:this.formData.isUpdate
                            }
                        })
                    }
                    if (this.$route.name == 'joined.baseinfo') {
                        this.$router.push({
                            name: 'joined.detailinfo', params: {
                                formData: this.formData,
                                oldInfos: this.oldInfos,
                                isUpdata:this.formData.isUpdate
                            }
                        })
                    }
                })
            }
            ,
        }
    }
    ;
</script>

<style lang="scss" scoped>
    @import "../../../assets/style/config";
    // 标题
    .el-input, .el-cascader {
        margin-bottom: 20px;
        input {
            height: 100%;
        }
    }

    .el-steps {
        background: #eeeeee;
        padding: 10px 4%;
    }

    .info-title {
        width: 25%;
        text-align: center;
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .ai-main {
        // height: 100px;
        margin-top: 20px;
        background: #fff;
        .small-box {
            @extend .box-hover-shadow;
            border-bottom: 1px solid #ddd;
            border-top: 1px solid #ddd;
            padding-right: 150px;
        }
        .title {
            line-height: 40px;
            text-align: center;
            font-size: 18px;
        }
    }

    #map-container {
        box-sizing: border-box;
        padding-left: 100px;
        width: 100%;
        height: 400px;
        border-radius: 6px;
        position: relative;
        z-index: 999;
        margin-bottom: 150px;
    }

    .ai-btn {
        margin-top: 20px;
        padding-left: 25% !important;
        button {
            width: 150px;
        }
    }

    .select-down {
        .el-form-item {
            margin-bottom: 0px !important;
            .el-form-item__content {
                margin-left: 0 !important;
            }
        }
    }

</style>
