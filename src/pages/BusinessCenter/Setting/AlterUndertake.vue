<template>
    <div>
        <h3 class="small-title" style="padding-top: 10px">承接管理信息</h3>
        <!--主要表单区-->
        <div class="ut-form">
            <!-- 选择承接方式 -->
            <!--{{formData.undertake_way}}-->
            <div class="form-box">
                <h4>选择承接方式</h4>
                <!--<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="undertake_way">
                    <el-checkbox label="1">半包</el-checkbox>
                    <el-checkbox label="2">全包</el-checkbox>
                </el-checkbox-group>

            </div>
            <!-- 选择承接类型 -->
            <div class="form-box">
                <h4>选择承接类型</h4>
                <div class="box-flex">
                    <!-- 期房 -->
                    <div class="box-l">
                        <h5>期房</h5>
                        <div>
                            <div class="ut-t">
                                <div class="ut-l">
                                    <el-radio v-model="formData.period_home" label="1">承接</el-radio>
                                </div>
                                <div class="ut-l">
                                    <!---->
                                    <el-select v-model="formData.period_condition" clearable placeholder="请选择"
                                               size="mini"
                                               :disabled="qifangDisabled">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <div class="ut-t">
                                <el-radio v-model="formData.period_home" label="2">不承接</el-radio>
                            </div>
                        </div>
                    </div>
                    <!-- 局部改造 -->
                    <div class="box-l">
                        <h5>局部改造</h5>
                        <div>
                            <div class="ut-t">
                                <div class="ut-l">
                                    <el-radio v-model="formData.local_remould" label="1">承接</el-radio>
                                </div>
                                <div class="ut-l">
                                </div>
                            </div>
                            <div class="ut-t">
                                <el-radio v-model="formData.local_remould" label="2">不承接</el-radio>
                            </div>
                        </div>
                    </div>
                    <!-- 室外工程 -->
                    <div class="box-l">
                        <h5>室外工程（土建、房屋修缮等）</h5>
                        <div>
                            <div class="ut-t">
                                <div class="ut-l">
                                    <el-radio v-model="formData.outdoor_project" label="1">承接</el-radio>
                                </div>
                                <div class="ut-l">
                                </div>
                            </div>
                            <div class="ut-t">
                                <el-radio v-model="formData.outdoor_project" label="2">不承接</el-radio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 区域、房屋类型、面积与金额 -->
            <div class="form-box">
                <h4>区域、房屋类型、面积与金额</h4>
                <!-- 承接区域 -->
                <div class="ut-area">
                    <h5>承接区域</h5>
                    <!-- <myAddress></myAddress> -->
                    <!--formData.areaid_1-->
                    <div>
                        <el-select v-model="provence" placeholder="请选择省" size="mini">
                            <el-option
                                    v-for="item in provences"
                                    :key="item.lid"
                                    :label="item.name"
                                    :value="item.lid">
                            </el-option>
                        </el-select>
                    </div>
                    <div>
                        <!--formData.areaid_2-->
                        <el-select v-model="city" placeholder="请选择市" size="mini" :disabled="disabledCity">
                            <el-option
                                    v-for="item in cities"
                                    :key="item.lid"
                                    :label="item.name"
                                    :value="item.lid"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!--<div style="padding-left: 150px;padding-top: 20px">-->
                <!--<el-select v-model="quxianArr" multiple placeholder="选择区县" size="mini">-->
                <!--<el-option-->
                <!--v-for="item in distrusts"-->
                <!--:key="item.lid"-->
                <!--:label="item.name"-->
                <!--:value="item.lid">-->
                <!--</el-option>-->
                <!--</el-select>-->
                <!--</div>-->
                <!-- 承接详情 -->
                <!--{{quxianArr}} <br>-->
                <!--<pre>{{quxianObj}}</pre>-->

                <div class="ut-detail">
                    <h5>承接详情</h5>
                    <div style="flex: 5">
                        <h4>区县选择</h4>
                        <ul class="ut-quxian">
                            <li
                                    :class="{listyle:true}"
                                    v-for="(item,index) in distrusts"
                                    :key="index"
                            >
                                <!--<div>-->
                                <!--<input type="checkbox" :id="item.lid" value="item.value" v-model="quxianArr">-->
                                <!--<label :for="item.lid">item.name</label>-->
                                <!--</div>-->
                                <span @mouseover='selectDistrusts(item.lid)'>

                  <el-checkbox v-model="quxianArr" :label="item.lid" border :key="item.lid">{{item.name}}</el-checkbox>
                </span>
                                <div class="house-detail" v-show="showLi === item.lid">
                                    <!--'pt'=>'普通住房:(一居-六居以上)',-->
                                    <!--'gy'=>'公寓:(公寓)',-->
                                    <!--'fs'=>'复式:(复式 跃层 叠加)',-->
                                    <!--'bs'=>'别墅:(别墅 loft 独栋 联排 四合院 庭院)-->
                                    <el-button>{{item.name}}</el-button>
                                    <div class="house-left">

                                        <my-checkbox @getInfos="getInfos" :index="index" :thisData="quxianObj[item.lid]"
                                :distrust="item"></my-checkbox>
                    </div>
                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <!--提交-->
        <div class="ut-submit">

            <el-button type="primary" @click="goTake">{{btn_text}}</el-button>
        </div>
    </div>
</template>
<script>
    import EventBus from '@/config/EventBus'

    const waysOptions = [1, 2];// 半包全包
    import {getProvence, getCity, getDistrust, postSetupPerfect, getCompanysSetup} from '@/api/api'

    export default {
        name: "under-take",
        data() {
            return {
                btn_text:'确定修改',
                showCard: '',
                xModel: {
                    isSelect: false,
                    data: {}
                },
                selectQuxianData: {
                    pt: {
                        area: 0,
                        money: 0,
                        select: true
                    },
                    gy: {
                        area: 0,
                        money: 0,
                        select: true
                    },
                    fs: {
                        area: 0,
                        money: 0,
                        select: true
                    },
                    bs: {
                        area: 0,
                        money: 0,
                        select: true
                    },
                },
                area: {
                    '001': {
                        "sp": {"house": "sp", "area": "1", "money": "1"},
                        "bgs": {"house": "bgs", "area": "1", "money": "1"},
                        "ct": {"house": "ct", "area": "1", "money": "1"}
                    },
                    '002': {
                        "sp": {"house": "sp", "area": "1", "money": "1"},
                        "bgs": {"house": "bgs", "area": "1", "money": "1"},
                        "ct": {"house": "ct", "area": "1", "money": "1"}
                    }
                },

                distrustsInfo: {},// 存储选择的城市 区县的设置 index : true/false
                distrustsBase: {},// 存储选择的城市 所传的数据 便于增删改查 这个主要的啊
                quxianArr: [],// 存储上页选中区县的lid 便于匹配
                quxianObj: {}, // 存储上页选中的选项卡信息

                pt: {
                    area: '',
                    house: 'pt',
                    money: '',
                },
                gy: {
                    area: '',
                    house: 'gy',
                    money: ''
                },
                fs: {
                    area: '',
                    house: 'fs',
                    money: ''
                },
                bs: {
                    area: '',
                    house: 'bs',
                    money: ''
                },

                showLi: -1,
                provence: '',
                city: '',
                // distrusts: [{lid:'123',name:'北京'},{lid:'3234',name:'天津'},{lid:'120213',name:'上海'},{lid:'2832',name:'上海0'},{lid:'23443',name:'上海'},{lid:'122135',name:'上海1'},{lid:'1134',name:'上海2'},{lid:'2132',name:'广东'}],
                distrusts:[],
                undertake_way: [],
                formData: {
                    period_condition: '',
                    undertake_way: [],
                    areaid_1: '',
                    areaid_2: '',
                    local_remould: '2',
                    outdoor_project: '2',
                    period_condition: '',
                    period_home: '2',
                    area: [
                        // {
                        //   areaid: '',
                        //   basis: [
                        //     {
                        //       area: '',
                        //       house: '',
                        //       money: ''
                        //     }
                        //   ],
                        // }
                    ],
                },
                options: [],
                disabledCity: true,
                // 多选框
                checkAll: false,
                ways: waysOptions,
                isIndeterminate: true,

                // 公共 下拉框 数据
                options: [// 期房 承接管理
                    {
                        value: "1",
                        label: "三个月内装修"
                    },
                    {
                        value: "2",
                        label: "六个月内装修"
                    },
                    {
                        value: "3",
                        label: "六个月以上装修"
                    }
                ],
                provences: [],
                cities: [],
                // 承接详情选项卡
                detailCardList: [],
                isSelected: false,

                // money
                options2: ['不限', '1万以上', '2万以上', '3万以上', '4万以上', '5万以上', '6万以上', '7万以上', '8以上', '9万以上', '10万以上', '15万以上', '20万以上'],
                // area
                options1: ['不限', '30m²以上', '40m²以上', '50m²以上', '60m²以上', '80m²以上', '90m²以上', '100m²以上', '120m²以上', '130m²以上', '150m²以上',],
            };

        },
        filters: {},
        computed: {
            qifangDisabled: function () {
                if (this.formData.period_home == 1) {
                    return false
                } else {
                    return true
                }
            },
        },
        watch: {
            quxianArr(newVal, oldVal) {
                // console.log(newVal);
                let newObj = {}
                newVal.forEach((item, value) => {
                    newObj[item] = {}
                    for (var quxian in this.quxianObj) {
                        if (item == quxian) {
                            newObj[quxian] = this.quxianObj[quxian]
                        }
                    }
                })
                this.quxianObj = newObj
            },
            provence: function (newVal, oldVal) {

                if (newVal != '') {
                    this.disabledCity = false
                    let params = {
                        id: newVal
                    }
                    this.city = ''
                    this.distrusts = []
                    this.distrustsInfo = {}
                    if(oldVal){
                        this.quxianObj = {}
                        this.quxianArr = []
                    }
                    getCity(params)
                        .then((result) => {
                            this.cities = result
                        })
                }
            },
            city: function (newVal, oldVal) {
                if (newVal != '') {
                    let params = {
                        id: newVal
                    }

                    if(oldVal){
                        this.quxianObj = {}
                        this.quxianArr = []
                    }

                    getDistrust(params)
                        .then((result) => {
                            // 添加
                            this.distrusts = result.map((item) => {
                                return Object.assign({isSelected: false}, item)
                            })
                        })
                }
            }

        },
        created() {
            EventBus.$on('checkboxSelect', (res) => {
            })
            if(this.$route.name == 'apply.alterundertake'){
                EventBus.$emit('notice',{
                    type:'message',
                    message:'设置承接信息后可以进行其他操作'
                })
                this.btn_text = '确定设置'
            }
            if (Number(this.$route.params.isUpdate) === 1) {
                getCompanysSetup({isUpdate: 1})
                    .then((result) => {
                        let preData = result
                        this.undertake_way = preData.undertake_way
                        this.formData.period_home = preData.period_home || '2'
                        this.formData.period_condition = preData.period_home == 1 ? preData.period_condition : ''
                        this.formData.local_remould = preData.local_remould || '2'
                        this.formData.outdoor_project = preData.outdoor_project || '2'
                        let pre_provence = preData.allarea.areaid_1 //
                        let pre_city = preData.allarea.areaid_2
                        //  取出选中区县的lid组成一个数组
                        let areas = preData.allarea.area
                        this.quxianObj = preData.allarea.area
                        // this.quxianArr =this.formData.area || {}
                        for (var key in areas) {
                            this.quxianArr.push(key)
                        }
                        let _this = this
                        getProvence()
                            .then((result) => {
                                this.provences = result
                                _this.provence = pre_provence
                            }).then((res) => {
                            setTimeout(() => {
                                _this.city = pre_city
                            }, 200)
                        })
                    })
            } else {
                getProvence()
                    .then((result) => {
                        this.provences = result
                    })
            }
        },

        methods: {
            // 监听子组件传递的值
            getInfos(val) {
                // console.log("监听子组件传递的值");
                // console.log(val);
                let lid = val.distrust.lid.toString()
                this.quxianObj[lid] = val.data
                let ifEst = this.quxianArr.some( (item) =>{
                    return item == lid
                })
                if(!ifEst){
                    this.quxianArr.push(lid)
                }

            },
            selectDistrusts(index) {
                // EventBus.$on('checkboxSelect', (val) => {
                // })
                this.showLi = index
            },
            goTake() {
                let _this = this
                let params = {
                    areaid_1: this.provence,
                    areaid_2: this.city
                }
                // console.log('this.quxianObj');
                // console.log(this.quxianObj);
                // let dataArr = []
                // for (var item in this.quxianObj) {
                //     var areaIndex = this.formData.area.findIndex((value, index, arr) => {
                //         return value.areaid === item
                //     })
                //     // var Arr = []
                //     // for(var key in this.quxianObj[item]){
                //     //     Arr.push(Object.assign({house:key},this.quxianObj[item][key]))
                //     // }
                //     if (areaIndex === -1) {
                //         dataArr.push({
                //             areaid: item,
                //             basis: this.quxianObj[item]
                //         })
                //
                //     }
                // }

                // console.log(this.formData.area);

                this.formData.area = this.quxianObj
                this.formData.undertake_way = this.undertake_way.toString()
                params = Object.assign(this.formData, params)
                // console.log(params);

                // let ifkong = params.area.some((item, value) => {
                //     JSON.stringify(item.basis) == '{}'
                // })
                let ifkong = false
                for(var key in params.area){
                    if(JSON.stringify(params.area[key]) == '{}'){
                        ifkong = true
                        break
                    }
                }
                // console.log('qxqxqx')

                // console.log(params)

                if (ifkong) {
                    EventBus.$emit('notice', {
                        type: 'message',
                        message: '有区县的选项卡未填写'
                    })
                    ifkong = false
                    return
                }
                // 校验
                if (params.areaid_1 == '' || params.areaid_2 == '' || params.local_remould == '' ||
                    params.outdoor_project == '' || params.period_home == '' || params.undertake_way == ''

                ) {
                    EventBus.$emit('notice', {
                        type: 'message',
                        message: '还有选项未填写'
                    })
                    return
                }


                if(JSON.stringify(params.area) == '{}'){
                    EventBus.$emit('notice', {
                        type: 'message',
                        message: '区县未选择？'
                    })
                    return
                }

                EventBus.$emit('notice', {
                    type: 'confirm',
                    title: '确定提交吗',
                    success() {
                        postSetupPerfect(params)
                            .then((result) => {
                                // console.log(result);
                                // if()
                                if(result.code == 1){
                                    _this.$router.push({name: 'undertake'})
                                }
                            })
                    }
                })
            }
        }
    };
</script>
<style lang="scss" scoped>
    @import '~@/assets/scss/main.scss';

    .ut-form {
        margin-top: 30px;
        font-size: 18px;
        color: #000;
    }

    .ut-title {
        font-size: 22px;
        color: #000;
    }

    .form-box {
        @extend .box-hover-shadow;
        /*// TODO:1-盒子公共样式*/
        /*top: 0;*/
        /*border-radius: 3px;*/
        /*background: #fff;*/
        /*padding: 30px;*/
        /*box-shadow: 1px 1px 5px #ccc;*/
        /*transition: all 0.2s;*/
        // --
        margin-top: 1px;
        border-top: 2px solid #eee;
        // 标题
        h4 {
            font-size: 18px;
            color: #000;
            font-weight: 550;
            margin-bottom: 30px;
        }
        h5 {
            font-size: 16px;
            color: #666;
        }

        //
        .box-flex {
            display: flex;
            .box-l {
                flex: 1;
            }
        }
        .ut-t {
            height: 28px;
            line-height: 28px;
            width: 100%;
            margin-top: 20px;
        }
        .ut-l {
            float: left;
            width: 40%;
            height: 100%;
            box-sizing: border-box;
            &:last-child {
                font-size: 12px;
            }
        }

        // 承接区域
        .ut-area {
            display: flex;
            padding-right: 50px;
            font-size: 0;

            h5 {
                flex: 1;
                text-align: left;
                height: 28px;
                line-height: 28px;
                vertical-align: middle;
                color: #000;
            }
            & > div {
                flex: 3;
                padding: 0 4px;
                height: 28px;
            }
        }
        // 承接详情
        .ut-detail {
            display: flex;
            margin-top: 50px;
            h5 {
                width: 140px;
                text-align: left;
                height: 28px;
                line-height: 28px;
                vertical-align: middle;
                color: #000;
            }
            .listyle {
                position: relative;
                .house-detail {
                    position: absolute;
                    top: 0px;
                    left: 150px;
                    min-width: 500px;
                    border: 1px solid #3a8ee6;
                    padding: 10px;
                    box-shadow: 5px 5px 5px #3a8ee6;
                    z-index: 999;
                }
            }
            .ut-quxian {
                position: relative;
                max-height: 500px;
                overflow-y: auto;
                font-size: 14px;
                color: #666;
                .active {
                    /*background: #e0e0e0;*/
                }
                i::before {
                    font-size: 16px;
                    vertical-align: middle;
                    color: #0099ff;
                }

            }
            .el-checkbox__label {
                display: block;
                word-wrap: break-all !important;
                width: 120px;
            }
        }
    }

    /*提交*/
    .ut-submit {
        padding-top: 30px;
        text-align: center;
        .submit-btn {

            width: 150px;

        }
    }
</style>
