<template>
    <div class="bf">
        <el-steps :active="2" simple>
            <el-step title="填写基本信息" icon="el-icon-edit"></el-step>
            <el-step title="填写资质信息" icon="el-icon-upload"></el-step>
        </el-steps>
        <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">

            <div class="ai-main">
                <!--form信息盒子-->
                <div class="ai-box">
                    <!--公司法人-->
                    <div class="small-box">
                        <el-form-item label="公司法人" prop="company_corporate">
                            <el-input v-model="formData.company_corporate" placeholder="注册公司法人姓名"
                                      auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="法人手机号" prop="corporate_mobile">
                            <el-input v-model="formData.corporate_mobile" placeholder="法人手机号"
                                      auto-complete="off"></el-input>
                        </el-form-item>
                        <!--身份证号码-->
                        <el-form-item label="身份证号" prop="LegalIdentityCard">
                            <el-input v-model="formData.LegalIdentityCard" placeholder="请输入身份证号"
                                      auto-complete="off"></el-input>
                        </el-form-item>

                        <!--身份证照片-->
                        <div style="display: flex">
                            <h3 class="title"
                                style="width: 80px;font-size: 14px;color: #606266;text-align: right;padding-right: 20px">
                                身份证照片</h3>
                            <div style="flex: 1">
                                <id-card-box
                                        :defaultUrl="formData.LegalCardIdImg"
                                        img_name='正面照' info_text="证件上的文字需能够清晰辨认" @changeUrl="getUrl"
                                        info_key="formData.LegalCardIdImg"
                                        info_key_img="formData.LegalCardId"
                                        :slsrc="slsrc1"
                                ></id-card-box>
                                <id-card-box
                                        :defaultUrl="formData.LegalCardIdContraryImg"
                                        img_name='反面照' info_text="证件上的文字需能够清晰辨认" @changeUrl="getUrl"
                                        info_key="formData.LegalCardIdContraryImg"
                                        info_key_img="formData.LegalCardIdContrary"
                                        :slsrc="slsrc2"
                                >
                                </id-card-box>
                            </div>
                        </div>

                    </div>
                    <div class="small-box">
                        <!--营业执照-->
                        <el-form-item label="营业执照" prop="yyzzbh">
                            <el-input v-model="formData.yyzzbh" placeholder="统一社会信用代码（请上传三证合一后的信用代码）"
                                      auto-complete="off"></el-input>
                        </el-form-item>
                        <!--证件照片-->
                        <div style="display: flex">
                            <h3 class="title"
                                style="width: 80px;font-size: 14px;color: #606266;text-align: right;padding-right: 20px">
                                证件照片</h3>
                            <div style="flex: 1">
                                <id-card-box
                                        :defaultUrl="formData.yyzzImg"
                                        img_name='营业执照' info_text="证件上的文字需能够清晰辨认" @changeUrl="getUrl"
                                        msg_text="注：2018年新政，公司证件均已改为三证合一，请上传新营业执照"
                                        info_key="formData.yyzzImg"
                                        info_key_img="formData.yyzz"
                                        :slsrc="slsrc3"
                                >
                                    <div class="msg-text">
                                        <p>注：2018年新政，公司证件均已改为三证合一,</p>
                                        <p>请上传新营业执照</p>
                                    </div>
                                </id-card-box>
                            </div>
                        </div>
                    </div>
                    <!--公司地址-->
                    <div class="small-box padding-30">
                        <div style="display: flex">
                            <h3 class="title"
                                style="width: 80px;font-size: 14px;color: #606266;text-align: right;padding-right: 20px;font-size: 13px">施工等级资质</h3>
                            <div style="flex: 1">
                                <id-card-box
                                        :defaultUrl="formData.ConstructQuayPhotoImg"
                                        img_name='资质照' info_text="证件上的文字需能够清晰辨认" @changeUrl="getUrl"
                                        info_key="formData.ConstructQuayPhotoImg"
                                        info_key_img="formData.ConstructQuayPhoto"
                                        :slsrc="slsrc4"
                                ></id-card-box>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="ai-btn">
                <el-button @click="goBaseInfo">上一步</el-button>
                <el-button @click="submitForm('formData')" size="medium" type="primary">提交申请</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
    import {contents} from '@/components/index.js'
    import EventBus from '@/config/EventBus';
    import {postCompanyMessage, putCompanyMessage2} from '@/api/api';
    import {checkTel, checkIdCardNum} from "@/config/util";


    export default {
        // name: 'base-info'1,
        components: {
            "id-card-box": contents.IdCardBox,
        },
        data() {
            var checkData = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                callback();
            };

            return {
                input: '',
                src: '',
                slsrc1: require('../../../assets/img/idcard1.png'),
                slsrc2: require('../../../assets/img/idcard2.png'),
                slsrc3: require('../../../assets/img/yyzzz.png'),
                slsrc4: require('../../../assets/img/zzzs.png'),
                formData: {
                    company_corporate: '',
                    LegalCardIdImg: '',
                    LegalCardIdContraryImg: '',
                    ConstructQuayPhotoImg: '',
                    LegalIdentityCard: '',
                    yyzzImg: '',
                    yyzzbh: '',
                    corporate_mobile: '',
                },
                isUpdate:1,
                rules: {
                    company_corporate: [{validator: checkData, trigger: 'blur'}],
                    yyzzbh: [{validator: checkData, trigger: 'blur'}],
                    corporate_mobile: [{validator: checkTel, trigger: 'blur'}],
                    LegalIdentityCard: [{validator: checkIdCardNum, trigger: 'blur'}],
                },
            };
        },
        created() {
            let oldInfos = this.$route.params.oldInfos || false
            this.isUpdate = this.$route.params.isUpdata
            if (oldInfos) {
                console.log(11)
                this.formData = {
                    company_corporate: oldInfos.company_corporate,
                    LegalCardIdImg: oldInfos.LegalCardIdImg,
                    LegalCardId: oldInfos.LegalCardId,
                    LegalCardIdContraryImg: oldInfos.LegalCardIdContraryImg,
                    LegalCardIdContrary: oldInfos.LegalCardIdContrary,
                    ConstructQuayPhotoImg: oldInfos.ConstructQuayPhotoImg,
                    ConstructQuayPhoto: oldInfos.ConstructQuayPhoto,
                    LegalIdentityCard: oldInfos.LegalIdentityCard,
                    yyzzImg: oldInfos.yyzzImg,
                    yyzz: oldInfos.yyzz,
                    yyzzbh: oldInfos.yyzzbh,
                    corporate_mobile: oldInfos.corporate_mobile
                }
            }
            // this.formData = Object.assign(this.$route.params.formData || {}, this.formData)
        },
        methods: {
            getUrl(path) {
                //这个就是你要的path,并且会双向绑定
                this.formData[path.prop] = path.fileId || 1
                this.formData[path.propImg] = path.fileId || 1
                // console.log(path.propImg + ':' + path.fileId)
            },

            goBaseInfo() {
                this.$router.go(-1)
            },
            submitForm(formData) {
                this.$refs[formData].validate((valid) => {
                    if (valid) {
                        this.goSuccess()
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            goSuccess() {
                let _this = this
                // todo 数据校验
                let data = this.formData

                let params = {
                    // BankNo: data.BankNo,
                    // BelongCity: data.BelongCity, // 开户行市
                    // BelongCounty: data.BelongCounty,// 开户行区
                    // BelongProvince: data.BelongProvince,
                    // ConstructQuay: data.ConstructQuay,
                    ConstructQuayPhoto: data.ConstructQuayPhoto, //  img
                    // LK1_1: data.LK1_1,
                    // LK1_2: data.LK1_2,
                    // LK1_3: data.LK1_3,
                    LegalCardId: data.LegalCardId || '', // img
                    LegalCardIdContrary: data.LegalCardIdContrary, // img
                    LegalIdentityCard: data.LegalIdentityCard, //
                    // branchname: data.branchname,
                    // chargePersonPhone: data.chargePersonPhone,
                    company_corporate: data.company_corporate,
                    // company_email: data.company_email,
                    // companyname: data.companyname,
                    // fzrxm: data.fzrxm,
                    // gszj: data.gszj,
                    // one_text: data.one_text,
                    // openaccount: data.openaccount,
                    yyzz: data.yyzz, // img
                    yyzzbh: data.yyzzbh,
                    isUpdate: this.isUpdate,
                    // company_type:data.company_type,
                    // company_status:1,
                    corporate_mobile: data.corporate_mobile,
                }
                if(!params.LegalCardId){
                    EventBus.$emit('notice',{
                        type:'message',
                        message:'身份证照片正面未上传'
                    })
                    return
                }
                if(!params.LegalCardIdContrary){
                    EventBus.$emit('notice',{
                        type:'message',
                        message:'身份证照片反面未上传'
                    })
                    return

                }
                if(!params.ConstructQuayPhoto){
                    EventBus.$emit('notice',{
                        type:'message',
                        message:'资质施工照片未上传'
                    })
                    return

                }
                if(!params.yyzz){
                    EventBus.$emit('notice',{
                        type:'message',
                        message:'营业执照照片未上传'
                    })
                    return

                }
                // console.log(params)
                EventBus.$emit('notice', {
                    type: 'confirm',
                    title: '确定提交吗？',
                    success(fn) {
                        putCompanyMessage2(params)
                            .then((result) => {
                                // console.log(result);
                                if (result.code == 1) {
                                    _this.$router.push({name: 'apply.success'})
                                }
                            })

                    }
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../../assets/style/config";
    /**/
    .padding-30 {
        padding-top: 30px;
    }

    .el-steps {
        background: #eeeeee;
        padding: 10px 4%;
    }

    .el-col {
        padding-bottom: 20px;

    }

    .ai-main {
        margin-top: 20px;
        // height: 100px;
        background: #fff;
        .small-box {
            @extend .box-hover-shadow;
            border-bottom: 1px solid #ddd;
            border-top: 1px solid #ddd;
            padding-right: 50px;
        }
        .title {
            text-align: center;
            line-height: 40px;
            font-size: 18px;
        }
        .id-card-img {
            flex: 3;
            margin-right: 30px;
        }
        .more-box {
            flex: 3;
            padding-right: 30px;
            .v-select {
                padding-top: 20px;
                padding-bottom: 20px;
                text-align: justify;
                text-align-last: justify;
            }
            .detail-dizhi {
                width: 100%;
                box-sizing: border-box;
            }
        }
        input {
            display: inline-block;
            vertical-align: middle;
            border: 1px solid #999;
            border-radius: 6px;
            height: 30px;
            padding-left: 10px;
            // line-height: 24px;
        }
        .left-empty {
            flex: 1;
        }
        .right-box {
            flex: 3;
            input {
                width: 100%;
            }
        }
        .map-box {
            margin-top: 15px;
            width: 100%;
            height: 400px;
            border: 1px solid #999;
            border-radius: 6px;

        }

    }

    .ai-btn {
        margin-top: 20px;
        padding-left: 25% !important;
        button {
            width: 150px;
        }
    }
    .msg-text{
        position: absolute;
        top:58px;
        width: 100%;
        height: 60px;
        white-space: nowrap;
        color: red;
        font-size: 13px;
        p{
            height: 18px;
        }
    }
</style>
