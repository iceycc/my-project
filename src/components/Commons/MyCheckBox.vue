<template>
    <div id='example-3'>
        <!--{{houseListObj}}-->

        <div v-for="(house,value,index) in houseListObj" :key="index" class="flexbox one-box">
            <div class="flex1">
                <div class="flex1">
                    <input type="checkbox" :id="index" :value="value" v-model="detailCardList" @change="change">
                    <label :for="value">{{value | houseFilter}}</label>
                </div>
            </div>
            <!--<input type="checkbox" :value="xModel.house" v-model="xModel.isSelected">-->
            <!--<label :for="house">{{house}}</label>-->
            <div class="flex1">
                <el-select v-model="house.area" placeholder="不限" size="mini" @change="change" :disabled="house.select">
                    <el-option
                            v-for="item,index in options1"
                            :key="index"
                            :label="item"
                            :value="index">
                    </el-option>
                </el-select>
            </div>
            <div class="flex1">
                <el-select v-model="house.money" placeholder="不限" size="mini" @change="change" :disabled="house.select">
                    <el-option
                            v-for="item,index in options2"
                            :key="index"
                            :label="item"
                            :value="index">
                    </el-option>
                </el-select>
            </div>
        </div>
    </div>

</template>
<script>
    import EventBus from '@/config/EventBus'
    let defaultObj = {
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
    }

    export default {
        name: "my-checkbox", // setting alter 选项卡组件
        props: {
            "xModel": null, "distrust": null, "index": null, "lid": null, "thisData": null
        },
        created() {

            if (JSON.stringify(this.thisData) !== '{}') {
                for (var key in this.thisData) {
                    this.detailCardList.push(key)
                }
            }
        },
        filters: {
            sfilter: (val) => {
                return Number(val)
            },
            houseFilter: (val) => {
                //<!-- 承接详情选项卡 -->
                //<!--'pt'=>'普通住房:(一居-六居以上)',-->
                //<!--'gy'=>'公寓:(公寓)',-->
                //<!--'fs'=>'复式:(复式 跃层 叠加)',-->
                //<!--'bs'=>'别墅:(别墅 loft 独栋 联排 四合院 庭院)-->
                //<!--{{pt}}-->
                switch (val) {
                    case 'pt':
                        return '普通住房:(一居-六居以上)'
                        break;
                    case 'gy':
                        return '公寓:(公寓)'
                        break;
                    case 'fs':
                        return '复式:(复式 跃层 叠加)'
                        break;
                    case 'bs':
                        return '别墅:(别墅 loft 独栋 联排 四合院 庭院)'
                        break;
                    default:
                        return val
                }
            }
        },

        data() {
            return {
                disabled: true,
                // TODO: 怎么讲数据传回父组件
                detailCardList: [],
                selectHouseListArr: [], // 选择的卡片的数组形式
                selectHouseListObj:{}, // 选择的信息卡片的对象形式
                //
                houseListObj: {
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
                //     0=>'不限',
                //     1=>'30平米以上',
                //     2=>'40平米以上',
                //     3=>'50平米以上',
                //     4=>'60平米以上',
                //     5=>'80平米以上',
                //     6=>'90平米以上',
                //     7=>'100平米以上',
                //     8=>'120平米以上',
                //     9=>'130平米以上',
                //     10=>'150平米以上',
                //     0=>'不限',
                //     1=>'1万以上',
                //     2=>'2万以上',
                //     3=>'3万以上',
                //     4=>'4万以上',
                //     5=>'5万以上',
                //     6=>'6万以上',
                //     7=>'7万以上',
                //     8=>'8万以上',
                //     9=>'9万以上',
                //     10=>'10万以上',
                //     11=>'15万以上',
                //     12=>'20万以上',
                // money
                options2: ['不限', '1万以上', '2万以上', '3万以上', '4万以上', '5万以上', '6万以上', '7万以上', '8以上', '9万以上', '10万以上', '15万以上', '20万以上'],
                // area
                options1: ['不限', '30m²以上', '40m²以上', '50m²以上', '60m²以上', '80m²以上', '90m²以上', '100m²以上', '120m²以上', '130m²以上', '150m²以上',],

                formData: {
                    'area': 0,
                    'money': 0,
                    'house': 0
                },
                selectData: ''
            };
        },
        computed:{
            // houseListObj(){
            //     let obj = defaultObj
            //     return obj
            //     // return Object.assign(obj,this.thisData)
            // },
        },
        methods: {
            change() {
                let _this = this
                let Obj = {}
                for(let key in this.selectHouseListObj){
                    Obj[key] =Object.assign({house:key},this.selectHouseListObj[key])
                }
                console.log(this.selectHouseListObj);
                console.log(Obj);
                setTimeout(() => {
                    _this.$emit('getInfos', {
                        distrust: this.distrust,
                        index: this.index,
                        data: this.selectHouseListObj
                    })
                }, 100)
            }
        },
        watch: {
            thisData:{
                handler:function (newVal,oldVal) {
                    if(!newVal){
                        this.detailCardList = []

                    }
                },
                deep:true
            },
            detailCardList: {
                handler: function (newVal, oldVal) {
                    for (var item in this.houseListObj) {
                        this.houseListObj[item].select = true
                    }
                    for (var i = 0; i <= newVal.length; i++) {
                        if (this.houseListObj[newVal[i]]) {
                            this.houseListObj[newVal[i]].select = false
                        }
                    }
                },
                deep: true
            },

            houseListObj: {
                handler: function (newVal, oldVal) {
                    let obj = {}
                    this.detailCardList.forEach((item) => {
                        obj[item] = Object.assign({house:item},newVal[item])
                    })
                    this.selectHouseListObj = obj
                },
                deep: true
            }
        },
    };
</script>
<style lang="scss" scoped>
    .flexbox {
        margin-bottom: 20px;
    }

    .flex1 {
        font-size: 0;
        color: #696969;
        font-size: 14px;
        vertical-align: middle;
        height: 28px;
        line-height: 28px;
        padding-right: 10px;
        input {
            display: inline-block;
            vertical-align: middle;
        }
    }
</style>
