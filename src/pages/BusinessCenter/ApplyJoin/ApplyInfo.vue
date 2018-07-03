<template>
    <div>
        <h3 class="ai-title">准备好材料,入驻更方便</h3>
        <div class="ai-main">
            <div ai-box>
                <div class="small-box">
                    <h3 class="title">身份证照片</h3>
                    <p class="info">证件照(正反面) 需清晰可辨认,不得使用复印件</p>
                    <div class="pic">
                        <img src="../../../assets/img/idcard.png" alt="">
                    </div>
                </div>
                <div class="small-box">
                    <h3 class="title">营业执照</h3>
                    <p class="info">证明拍摄证件，照片需清晰可辨认，不得使用复印件</p>
                    <div class="pic">
                        <img src="../../../assets/img/yyzzz.png" alt="">

                    </div>
                </div>
                <div class="small-box">
                    <h3 class="title small-info">施工等级资质</h3>
                    <p class="info">证明拍摄证件，照片需清晰可辨认，不得使用复印件</p>
                    <div class="pic">
                        <img src="../../../assets/img/zzzs.png" alt="">

                    </div>
                </div>

            </div>
        </div>
        <div class="ai-btn">
            <el-button @click="goApplyJoin">返回首页</el-button>
            <el-button @click="goBaseInfo" type="primary">我已经准备好资料，开始申请入驻</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "apply-info",
        data() {
            return {
                imageUrl: ""
            };
        },
        created(){
        },
        methods: {
            goApplyJoin() {
                this.$router.push({name: 'apply.join'})
            },
            goBaseInfo() {
                let isUpdata =this.$route.query.isUpdata || false
                console.log('applyinfi isupdata')
                console.log(isUpdata)
                this.$router.push({name: 'apply.baseinfo',query:{isUpdata:isUpdata}})
            }
        }
    };
</script>
<style lang='scss' scoped>
    .ai-title {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        color: #333;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .ai-main {
        // height: 100px;
        background: #fff;
        .small-box {
            display: flex;
            border-bottom: 1px solid #ccc;
            margin-top: 3px;
            transition: all 0.3s;
            &:hover {
                box-shadow: 5px 5px 5px #ccc;
            }
        }
        .title {
            position: relative;
            text-align: center;
            line-height: 160px;
            font-size: 18px;
            font-weight: bold;
            flex: 1;
        }
        .small-info {
            &::after {
                content: "无此证件请忽略";
                position: absolute;
                display: inline-block;
                vertical-align: middle;
                font-size: 14px;
                font-weight: normal;
                width: 100%;
                height: 30px;
                line-height: 30px;
                left: 0;
                // top:0;
                bottom: 50px;
            }
        }
        .info {
            text-align: center;
            line-height: 160px;
            color: #666;
            flex: 2;
        }
        .pic {
            // display:inline-block;
            // vertical-align: middle;
            background: #666666;
            border: 1px solid #ccc;
            width: 320px;
            height: 160px;
            font-size: 0;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    // 按钮
    .ai-btn {
        margin-top: 20px;
        text-align: center;
    }

    // 图片预览style
    .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .el-upload:hover {
        border-color: #409eff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
