<template>
    <div id="app">
        <el-header>
            <!--<bc-header :isShow="isLogin" @clicl="outLogin"></bc-header>-->
            <div class="bc-logo">
                <a href="javascript:;">优装美家</a>
            </div>
            <div class="bc-user-info" v-if="!isLogin">
                <el-button @click="goLogin">登陆</el-button>
                <el-button @click="goRegister">注册</el-button>
            </div>
            <div class="bc-user-info" v-if="isLogin">
                <el-button @click="goHome">{{useremail}}</el-button>
                <el-button @click="goOut">退出</el-button>
            </div>
        </el-header>
        <el-main style="padding: 0">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive && isRouterAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive && isRouterAlive"></router-view>
        </el-main>
        <el-footer>
            <p class="bc-div">
                <!-- <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/zhaoshang" rel="nofollow">招商入驻</a>&nbsp;| -->
                <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/about">关于我们</a>&nbsp;|
                <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/about/contact-us">联系我们</a>&nbsp;|
                <!-- <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/about/join-us">诚聘英才</a>&nbsp;| -->
                <a target="_blank" class="footer-menu-a" href="http://www.uzhuang.com/law">法律声明</a>&nbsp;|
                <a target="_blank" class="footer-menu-a" href="javascript:;" style="cursor:default">优装美家 版权所有</a>
            </p>
        </el-footer>
        <!--<el-dialog title="发起申诉" :visible.sync="dialogFormVisible">-->
        <!--<div>请选中申诉的原因</div>-->
        <!--<el-radio-group v-model="radio2">-->
        <!--<el-radio :label="1">申诉期限内打不通电话无法联系到业主</el-radio>-->
        <!--<br>-->
        <!--<el-radio :label="2">业主无明确的装修需求</el-radio>-->
        <!--<br>-->
        <!--<el-radio :label="3">业主已确定装修公司</el-radio>-->
        <!--<br>-->
        <!--<el-radio :label="4">重复的业主信息</el-radio>-->
        <!--</el-radio-group>-->
        <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="doAppealhandle">确 定</el-button>-->
        <!--</div>-->
        <!--</el-dialog>-->

        <el-dialog title="申诉" :visible.sync="dialogFormVisible">
            <el-form>
                <!--<el-form-item label="申诉原因" :label-width="formLabelWidth">-->
                    <!--<el-input v-model="formData.appealReason" auto-complete="off" type="textarea"></el-input>-->
                <!--</el-form-item>-->
                <el-form-item label="申诉条件" :label-width="formLabelWidth">
                    <el-select class="selected-appeal" v-model="formData.appealCondition" name="" style="width: 80%;">
                        <el-option
                                style="padding-left: 10px"
                                v-for="item in appealConditions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="doAppealhandle">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {Constants} from '@/config'
    import EventBus from '@/config/EventBus'
    import {doOrderAppeal, logout,getIndexInfos} from '@/api/api'
    import {getCookie, removeCookie} from "./config/util";

    export default {
        name: "App",
        data() {
            return {
                useremail: '路人甲',
                appealConditions: [
                    {
                        value: '1',
                        label: '申诉期限内打不通电话无法联系到业主'
                    },
                    {
                        value: '2',
                        label: '业主无明确的装修需求'
                    },
                    {
                        value: '3',
                        label: '业主已确定装修公司'
                    },
                    {
                        value: '4',
                        label: '重复的业主信息'
                    },
                ],
                dialogFormVisible: false,
                formLabelWidth: '120px',
                uid: "未登录",
                preUrl: '',
                isLogin: false,
                fnD: null,
                isRouterAlive: true, // 控制页面刷新
                formData: {
                    appealCondition: '',
                    orderid: ''
                }
            }
        },
        // provide(){
        //   return {
        //     reload:this.reload()
        //   }
        // },
        // inject:['reload'],
        watch: {
            '$route': function () {
                let email = getCookie('SH_USNM')
                if (email) {
                    this.isLogin = true
                    this.useremail = email
                } else {
                    this.isLogin = false
                    this.useremail = '路人甲'
                }
            }
        },
        created() {

            EventBus.$on('apeal', (val, fn) => {
                console.log(val)
                this.formData.orderid = val
                this.fnD = fn
                this.dialogFormVisible = true
            })
            // 信息提示
            // todo 将信息提升抽离到mixin
            EventBus.$on('notice', (options) => {
                switch (options.type) {
                    case 'confirm':
                        this.showConfirm(options);
                        break;
                    case 'message':
                        this.showMessage(options);
                        break;
                    case 'notify':
                        this.showNotify(options);
                        break;
                }
            })
        },
        methods: {
            goOut() {
                logout().then((result) => {
                        this.$router.push({name: 'login'})
                        removeCookie('SH_ATLG')
                        removeCookie('SH_USNM')
                        removeCookie('token')
                        removeCookie('X-status')
                })
            },
            goHomeHandle(status,isNew){
                if(isNew ==1){
                    this.$router.push({name: 'joined.index'})
                    return
                }
                if (status == 1 || status == 2 || status == 4 ||status == 3 ) {
                    this.$router.push({name: 'apply.join'})
                }
                if (status == 5) {
                    this.$router.push({name: 'joined.index'})
                }
            },
            goHome() {
                getIndexInfos()
                    .then((result)=>{
                        let status = result.settled_progress
                        let isNew = result.is_new
                        this.goHomeHandle(status,isNew)
                    })

            },
            doAppealhandle() {
                console.log('申诉')
                if (!this.formData.appealCondition) {
                    EventBus.$emit('notice', {
                        type: 'message',
                        message: '申诉条件不能为空'
                    })
                    return
                }
                let params = {
                    condition: this.formData.appealCondition,
                    orderid: this.formData.orderid
                }
                doOrderAppeal(params).then((result) => {
                    console.log(result);
                    // EventBus.$emit('notice', {
                    //     type: 'message',
                    //     message: result.message
                    // })
                    if (result.code == 1) {
                        this.fnD && this.fnD()
                    }
                    // this.reload()
                    EventBus.$emit('reData')
                    this.formData = {
                        appealCondition: '',
                        orderid: ''
                    }
                    this.dialogFormVisible = false
                    this.fnD && this.fnD()

                })
            },

            open(options) {
                EventBus.$emit('notice', options)
            },
            showMessage(options) {
                let msg = options.message || '失败'
                this.$message(msg);
            },
            // confirm
            showConfirm(options) {
                var title = options.title || '你确定吗？'
                var success = options.success
                this.$confirm(title, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    success && success()
                    // this.$message({
                    //   type: 'success',
                    //   message: '成功!'
                    // });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消'
                    });
                });
            },
            showNotify(options) {
                const h = this.$createElement;
                this.$notify({
                    title: '标题名称',
                    message: h('i', {style: 'color: teal'}, '示文案这是提示文案')
                });
            },
            reload() {
                console.log('执行reload')
                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            },
            outLogin() {
                createApp()
            },
            goRegister() {
                this.$router.push({
                    name: 'register'
                })
            },
            goLogin() {
                this.$router.push({
                    name: 'login'
                })
            }
        }


    };
</script>

<style scoped lang="scss">
    @import './assets/style/common';

    #app {
        height: 100%;
        display: flex;
        flex-direction: column;
        /*overflow-y: scroll;*/
    }

    .el-header {
        background: #fff;
        height: $headerHeight !important;
        padding: 0 100px;
    }

    .el-main {
        flex: 1;
        /*padding-top: 40px;*/
    }

    .bc-logo {
        float: left;
        font-size: 0px;
        width: 313px;
        height: $headerHeight;
        background: url("./assets/img/logo.png") no-repeat center center;
        background-size: contain;
    }

    .bc-user-info {
        float: right;
        height: $headerHeight;
        line-height: $headerHeight;
    }

    .bc-user-info .line {
        display: inline-block;
        line-height: $headerHeight;
        height: 15px;
        width: 1px;
        background: $headerFontColor;
        margin: -2px 12px;
    }

    .bc-div {
        width: $containerWith;
        color: $footerFontColor;
        font-size: $footerLineSize;
        margin: 0 auto;
        text-align: center;
        a {
            color: $footerFontColor;
            margin: $footerAMargin;
            display: inline-block;
            height: $footerHeight;
            line-height: $footerHeight;
            font-size: $footerFontSize;
            padding: $footerAPadding;
        }
    }

    .el-footer {
        background: #fff;
    }

    .center-box {
        width: 1000px;
    }

</style>
