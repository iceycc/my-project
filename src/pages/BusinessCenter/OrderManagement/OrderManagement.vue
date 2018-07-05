<template>
    <div>
        <!--标题-->
        <h3 class="om-titile">订单管理</h3>
        <!--管理选择的标签-->
        <div class="om-select">
            <span class="left-tap">时间</span>
            <el-radio-group v-model="isClick1">
                <!--todo 监视值改变 然后-->
                <el-radio-button label="0">全部</el-radio-button>
            </el-radio-group>
            <!--<el-button :type="isClick1 ? 'primary':''" @click="choseAllTime">全部</el-button>-->
            <div class="right-box">
                <el-date-picker
                        v-model="screenTime"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
            </div>
        </div>
        <div class="om-select">
            <span class="left-tap">状态</span>
            <!--1可申诉2申诉中3申诉成功4申诉失败5已承接6全部-->
            <el-radio-group v-model="status">
                <!--todo 监视值改变 然后-->
                <el-radio-button label="0">全部</el-radio-button>
                <el-radio-button label="1">可申诉</el-radio-button>
                <el-radio-button label="5">已承接</el-radio-button>
                <el-radio-button label="2">申诉中</el-radio-button>
                <el-radio-button label="3">申诉成功</el-radio-button>
                <el-radio-button label="4">申诉失败</el-radio-button>
            </el-radio-group>
        </div>
        <!--筛选搜索栏-->
        <div class="om-search">
            <el-select v-model="selectedType" placeholder="请选择">
                <el-option
                        v-for="item in search_options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-input
                    style="width: 150px;"
                    :placeholder="placeholder_text"
                    v-model="search_value">
                <i slot="prefix" class="el-input__icon el-icon-search" @click="searchhandle"></i>
            </el-input>
            <el-button style="vertical-align: bottom" @click="searchhandle">搜索</el-button>
        </div>
        <!--详细信息盒子-->
        <div class="om-detail">
            <!--标题-->
            <div class="detail-top">详细数据 （{{total}}）</div>
            <el-table
                    :data="tableData"
                    v-loading="loading"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="add_time"
                        label="订单时间">
                </el-table-column>
                <el-table-column
                        prop="orderno"
                        label="订单编号">
                </el-table-column>
                <el-table-column
                        prop="homestyle"
                        label="户型">
                </el-table-column>
                <el-table-column
                        prop="telephone"
                        label="业主电话">
                </el-table-column>
                <el-table-column
                        label="状态">
                    <template slot-scope="scope">
                        <span @click="doAppealHandle(scope.row.id,scope.row.status)"
                              :class="{'can-appeal': (scope.row.status == '可申诉' ? true : false)}">{{scope.row.status}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop=""
                        label=""
                        width="90">
                    <template slot-scope="scope">
                        <el-button
                                @click="handleEdit(scope.row.id)">详情
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                        :page-size=1
                        @current-change="currentChange($event)"
                        :current-page="current_page"
                        layout="prev, pager, next"
                        :total="totalpage">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    import {getOrderList, doOrderSearch, doOrderAppeal, doOrderScreen} from '@/api/api'
    import EventBus from '@/config/EventBus'
    var one_day = 1 * 24 *60 * 60 * 1000

    export default {
        data() {
            return {
                total:0,
                loading: true,
                isClick1: 0,
                search_value: '',
                selectedType: 1,
                screenTime: [null, null],
                status: 0,
                value2: '',
                value3: '',
                //  订单详情相关
                totalpage: 0,
                tableData: [],
                // 分页相关
                current_page: 1,
                // 状态选项相关
                radio: '',
                listType: 0, // 自己用于判断列表类型 走不同的接口 默认0为正常获取详细数据列表  1 搜索
                dialogTableVisible: false,
                dialogFormVisible: false,
                formLabelWidth: '120px',
                appealCondition: 1,
                appealReason: '',
                appealId: null, //申诉的id
                search_options:[
                    {
                        value:1,
                        label:'订单号搜索'
                    },
                    {
                        value:2,
                        label:'手机号搜索'
                    },
                ]
            };

        },

        // todo???为啥增加缓存后无法出发created
        activated() {
            this.init()
            EventBus.$on('reData',()=>{
                this.getData()
            })
        },
        computed: {
            'placeholder_text': function () {
                switch (Number(this.selectedType)) {
                    case 1 :
                        return '请输入订单号'
                        break;
                    case 2:
                        return '请输入手机号'
                        break;
                    case 3:
                        return '请输入业主姓名'
                        break;
                    default:
                        return '请输入搜索内容'
                }
            }
        },
        watch: {

            status: function (newVal, oldVal) {
                this.listType = 2
                this.page = 1
                this.getData()
                this.search_value =''
            },
            isClick1: function (newVal, oldVal) {
                this.page = 1
                this.getData()
                if (newVal == 0) {
                    this.screenTime = [null, null]
                }
                this.search_value =''
            },
            screenTime: function (newVal, oldVal) {
                if (newVal == null) {
                    newVal = [null, null]
                }
                this.search_value =''
                this.listType = 2
                this.screenTime = newVal
                this.page = 1
                this.getData()

                if (newVal[0] != null) {
                    this.isClick1 = null
                    return
                } else {
                    this.isClick1 = 0
                }
            },
        },
        methods: {
            init() {
                this.page = 1
                this.getData()
                // console.log('init')
            },
            // 获取数据
            getData() {
                this.loading = true
                // 第一次登陆列表
                if (this.listType === 0) {
                    this.getFristListDate()
                }
                // 搜索列表
                if (this.listType === 1) {
                    this.getSearchData()
                }
                // 搜索列表 筛选
                if (this.listType === 2) {
                    this.doScreen()
                }
            },
            // 第一次进入列表
            getFristListDate() {
                let params = {
                    isindex: 0,
                    page: this.page || 1
                }
                getOrderList(params)
                    .then((result) => {
                        this.totalpage = result.data.totalpage
                        this.total = result.data.total
                        this.tableData = result.data.data
                        this.loading = false
                    })
            },
            // 搜索获取列表
            getSearchData() {
                let params = {
                    data: {
                        type: this.selectedType,
                        page: this.page || 1
                    },
                    value: this.search_value
                }
                doOrderSearch(params)
                    .then((result) => {
                        // console.log(result)
                        if (result.data && result.data.length == 0) {
                            EventBus.$emit('notice', {
                                type: 'message',
                                message: '没有找到数据'
                            })
                            return
                        }
                        this.totalpage = result.data.totalpage
                        this.total = result.data.total
                        this.tableData = result.data.pagedata
                        this.loading = false
                    })
            },
            // 筛选列表
            doScreen() {
                // // console.log(this.screenTime[0].valueOf())
                let params = {
                    status: this.status,
                    data: {
                        page: this.page || 1,
                        statime: this.screenTime[0] ? this.screenTime[0].valueOf() * 0.001 : null,
                        endtime: this.screenTime[1] ? (this.screenTime[1].valueOf() + one_day)* 0.001 : null,
                        // endtime: this.screenTime[1] ? this.screenTime[1].valueOf()* 0.001 : null,
                    }
                }
                doOrderScreen(params)
                    .then((result) => {
                        // console.log(result)
                        if (result.data && result.data.length == 0) {
                            EventBus.$emit('notice', {
                                type: 'message',
                                message: '没有找到数据'
                            })
                            return
                        }
                        this.totalpage = result.data.totalpage
                        this.tableData = result.data.data
                        this.total = result.data.total
                        this.loading = false
                    })
            },
            // 点击申诉
            doAppealHandle(val, status) {
                // console.log(val);
                if (status == '可申诉') {
                    EventBus.$emit('apeal', val)
                }

            },
            // 判断是否是 可申诉
            appealhandle(staus, id) {
                if (staus == '可申诉') {
                    // console.log(id)
                    this.dialogFormVisible = true
                    this.appealId = id
                }
                return
            },
            //
            destory() {
                EventBus.$off('apeal')
            },
            choseAllTime() {
                this.isClick1 = !this.isClick1
            },
            //
            searchhandle() {
                this.listType = 1
                if (!this.search_value.replace(/^\s+|\s+$/g, "")) {
                    EventBus.$emit('notice', {
                        type: 'message',
                        message: '搜索内容不能为空'
                    })
                    return
                }
                this.page = 1
                this.getData()
            },
            handleEdit(id) {
                // console.log(id);
                this.$router.push({name: 'index.detail', params: {id: id, canAppeal: false}})
            },
            currentChange($event) {
                this.page = $event
                this.getData()
            },
        }
    };
</script>

<style lang="scss" scoped>
    /* 顶部标题*/
    .om-titile {
        vertical-align: middle;
    }

    .el-radio-group {
        vertical-align: middle;
        .el-radio-button {
            vertical-align: middle;
            margin-right: 20px;

        }
    }

    .selected-appeal {
        width: 100%;
        height: 40px;
        border: 1px solid #c0c4cc;
    }

    .can-appeal {
        color: #5a9df8;
        cursor: pointer;
    }

    /**/
    .om-select {
        padding-top: 20px;
        line-height: 40px;
        .right-box {
            display: inline-block;
            vertical-align: middle;
            margin-left: 16px;
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
        vertical-align: top;
        margin-bottom: 20px;
        margin-top: 10px;

    }

    /*详细数据大盒子*/
    .om-detail {
        position: relative;
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
        .el-pagination {
            padding: 10px 0;
            text-align: center;
        }
    }


</style>
