<template>
    <div>
        <div class="aj-box">
            <info-box class="aj-top" v-if="status===6">
                <div class="aj-top-info">
                    <i class="iconfont icon-gonggao"></i>
                    欢迎加入优装美家，填写并添加资料，即可申请入驻平台
                </div>
                <h3>{{step}}</h3>
                <p>1、填写基础信息</p>
                <p>2、填写资质信息</p>
                <el-button type="primary" class="aj-top-btn" @click="goApplyInfo">申请入驻</el-button>
            </info-box>
            <!-- TODO: -->
            <!-- 申请入驻 -->
            <info-box v-else-if="status===1">
                <div class="step-l">
                    <h4>
                        <i class="iconfont icon-yuangou"></i>
                        申请入驻</h4>
                    <p>你有待完善的申请信息</p>
                    <p>创建时间：<i>{{time | momentTime}}</i></p>
                </div>
                <div class="step-r">
                    <el-button class="aj-btn" type="primary" @click="goPages('apply.baseinfo')">完善信息</el-button>
                    <el-button class="aj-btn" @click="goPages('apply.info')">重新申请</el-button>
                </div>
            </info-box>
            <!-- 资料审核中 -->
            <info-box v-else-if="status===2">
                <div class="step-l step-special">
                    <h4>
                        <i class="iconfont icon-yuangou"></i>
                        资料审核中</h4>
                    <p>您已成功提交了申请入驻优装美家商户中心，平台将在提交日期后的1-3个工作日内完成审核，请注意登陆后台查看审核结果。</p>
                    <p>提交申请时间：<i>{{time | momentTime}}</i></p>
                </div>

            </info-box>
            <!-- 资料审核已经通过 -->
            <info-box v-else-if="status===3">
                <div class="step-l">
                    <h4>
                        <i class="iconfont icon-yuangou"></i>
                        资料审核已经通过</h4>
                    <p>入驻资料审核已经通过，设置承接信息并充值账户余额后即可接单</p>
                    <p>审核处理时间：<i>{{time | momentTime}}</i></p>
                </div>
                <div class="step-r">
                    <el-button class="aj-btn" type="primary" @click="goPages('apply.alterundertake')">设置承接信息</el-button>
                </div>
            </info-box>
            <!-- 资料审核未通过 -->
            <info-box v-else-if="status===4">
                <div class="step-l">
                    <h4>
                        <i class="iconfont icon-yuangou"></i>
                        资料审核未通过</h4>
                    <!--todo 这里得动态说明原因-->
                    <p>{{resion}}</p>
                    <p>审核处理时间：<i>{{time | momentTime}}</i></p>
                </div>
                <div class="step-r">
                    <el-button class="aj-btn" type="primary" @click="goPages('apply.info',1)">重新申请</el-button>
                </div>
            </info-box>

            <info-box v-else-if="status ===5">
                <div class="step-l">
                    <h4>
                        <i class="iconfont icon-yuangou"></i>
                        资料审核已经通过</h4>
                    <p>入驻资料审核已经通过，设置承接信息并充值账户余额后即可接单</p>
                    <p>{{resion}}</p>
                    <p>审核处理时间：<i>{{time | momentTime}}</i></p>
                </div>
                <div class="step-r">
                    <el-button class="aj-btn" type="primary" @click="goPages('joined.index')">前往首页</el-button>
                </div>
            </info-box>

            <info-box v-else>
                <div class="step-l">
                    <h4>
                        <i class="iconfont icon-yuangou"></i>
                        状态异常</h4>
                </div>
                <div class="step-r">
                </div>
            </info-box>
        </div>
    </div>

</template>
<script>
    import {getIndexInfos} from '@/api/api'
    import {getCookie} from "../../../config/util";
    import state from "../../../store/state";

    export default {
        // name: "apply-join",
        data() {
            return {
                step: "两步完成商户入驻",
                //状态显示 申请入驻（1）资料审核中（2）资料审核已通过（3）资料审核未通过（4） 其他
                status: 0,
                time: null,
                resion: ''
            };
        },
        created() {
            getIndexInfos()
                .then((result) => {
                    this.status = result.settled_progress - 0
                    // this.status = 2

                    console.log(this.status)
                    this.resion = result.resion || '未填写'
                    this.time = result.time
                    if (result.is_new == 1) {
                        this.$router.push({name: 'joined.index'})
                        return
                    }
                })
        },
        methods: {
            goApplyInfo() {
                this.$router.push({name: 'apply.info'})
            },
            goPages(name, data) {
                if(data){
                    console.log(data)
                    this.$router.push({name: name,query:{isUpdata:true}})
                }
                // this.$router.push({name: name})
            },

        }
    };
</script>

<style lang="scss" scoped>
    .iconfont::before {
        font-size: 30px;
        margin-right: 5px;
    }

    /*头部介绍*/
    .aj-top {
        text-align: center;
        margin-top: 0px !important;

        .icon-gonggao::before {
            color: red;
            font-size: 30px;
        }
        h3 {
            font-size: 20px;
            font-weight: bold;
        }
        p {
            height: 40px;
            line-height: 40px;
        }
        .aj-top-btn {
            width: 200px !important;
            margin-top: 20px;
            margin-bottom: 50px;
        }
        .aj-top-info {
            text-align: left;
            font-size: 20px;
            height: 34px;
            line-height: 34px;
        }
        .aj-top-info {
            margin-bottom: 50px;
        }
    }

    /* 步骤盒子 1*/

    .step-l {
        display: inline-block;
        width: 49%;
        h4 {
            height: 68px;
            line-height: 68px;
            font-size: 25px;
        }
        p {
            padding-left: 40px;
            font-size: 18px;
            line-height: 50px;
        }
    }

    .step-special {
        width: 100%;
    }

    .step-r {
        display: inline-block;
        width: 49%;
        text-align: right;
        .aj-btn {
            width: 120px;
        }
    }
</style>
