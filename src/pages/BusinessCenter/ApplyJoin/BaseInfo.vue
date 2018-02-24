<template>
    <div class="bf">
        <div class="bf-titile"><span class="active"><i>1</i>填写基本信息</span>
            <img src="" alt="">
            <span><i>2</i>填写资质信息</span></div>
        <div class="ai-main">
            <div class="ai-box">
                <div class="small-box">
                    <div class="flexbox">
                        <h3 class="title">身份证照片</h3>
                        <div class="input-box">
                            <input type="text" placeholder="请于执照一致">
                        </div>
                    </div>
                </div>
                <div class="small-box">
                    <div class="flexbox">
                        <h3 class="title">商铺负责人</h3>
                        <div class="input-box">
                            <input type="text" placeholder="请于执照一致">
                            <input type="text" placeholder="请于执照一致">

                        </div>
                    </div>
                </div>
                <div class="small-box">
                    <div class="flexbox">
                        <h3 class="title">公司开户银行</h3>
                        <div class="input-box">
                            <input type="text" placeholder="请于执照一致">
                        </div>
                    </div>
                    <div class="flexbox">
                        <h3 class="title">开户账号</h3>
                        <div class="input-box">
                            <input type="text" placeholder="请于执照一致">
                        </div>
                    </div>
                    <div class="flexbox">
                        <h3 class="title">开户地址</h3>
                        <div class="input-box">
                            <input type="text" placeholder="请于执照一致">
                        </div>
                    </div>
                </div>
                <div class="small-box">
                    <div class="flexbox">
                        <h3 class="title">公司地址</h3>
                        <div class="more-box">
    `                       <div class="v-select">
                            <input type="text" placeholder="请于执照一致">
                            <input type="text" placeholder="请于执照一致">
                            <input type="text" placeholder="请于执照一致">
                            </div>
                            <input type="text" class='detail-dizhi' placeholder="详细地址，请与执照地址一致">
                            <div class="map-box"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="small-box">
                <h4 class="info-title">以下为选填</h4>
                <div class="flexbox">
                    <h3 class="title">施工等级资质</h3>
                    <div class='input-box'>
                        <input type="text" placeholder="请于执照一致">
                    </div>
                </div>
                <div class="flexbox">
                    <h3 class="title">公司座机</h3>
                    <div class='input-box'>
                        <input type="text" placeholder="区号+座机号">
                    </div>
                </div>
                <div class="flexbox">
                    <h3 class="title">公司邮箱</h3>
                    <div class='input-box'>
                        <input type="text" placeholder="公司指定联系邮箱">
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
    export default {
        // name: 'base-info'1,

        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang="scss">
     /*~@   */
    @import '~@/assets/scss/main.scss';
    // 标题
    .bf-titile {
        height: 22px;
        font-size: 0;
        font-size: $h3FontSize;

        color: #999;
        .active {
            color: $activeColor;
            i {
                background: $activeColor;
            }
        }
        span {
            line-height: 22px;
            padding-right: 30px;
        }
        i {
            display: inline-block;
            vertical-align: top;
            width: 22px;
            height: 22px;
            text-align: center;
            line-height: 22px;
            color: #fff;
            background: #999;
            margin-right: 7px;
        }
    }
     .info-title{
         width: 25%;
         text-align: center;
         font-size: 18px;
         padding-top: 10px;
     }

    .ai-main {
        // height: 100px;
        background: #fff;
        .small-box {
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
            line-height: 100px;
            font-size: 18px;
            font-weight: bold;
            flex: 1;
        }
        .input-box {
            flex: 3;
            line-height: 100px;
            padding-right: 30px;

        }
        .more-box{
            flex: 3;
            padding-right: 30px;
            .v-select{
                padding-top: 20px;
                padding-bottom: 20px;
                text-align:justify;
                text-align-last:justify;
            }
            .detail-dizhi{
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
            input{
                width: 100%;
            }
        }
        .map-box{
            margin-top: 15px;
            width: 100%;
            height: 400px;
            border: 1px solid #999;
            border-radius: 6px;

        }

    }
</style>
