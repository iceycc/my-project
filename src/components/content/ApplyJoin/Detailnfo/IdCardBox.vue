<template>
    <div class="id-card-box">
        <!--图片预览框-->
        <div class="pre-img">
            <b>{{img_name}}</b>
            <img src="" alt="">
        </div>
        <!--文件上传框-->
        <div class="upload">
            <i class="iconfont icon-jiahao"></i>
            <input type="file" name="file" class="upload-input">
        </div>
        <!--提示文字-->
        <div class="info-text">{{info_text}}</div>
        <!--实例图片-->
        <div class="show-img">
            <img src="" alt="">实例图片
        </div>
    </div>
</template>

<script>
    export default {
        name: "id-card-box",
        props:['img_name','info_text'],
        data() {
            return {


            }
        },
        methods: {}
    }
</script>

<style lang="scss">

    .id-card-box {
        width: 100%;
        border: 1px solid #aeaeae;
        display: flex;
        line-height: 0;
        .pre-img {
            position: relative;
            width: 100px;
            height: 100px;
            background: #ddd;
            margin-right: 10px;
            b {
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                font-size: 20px;
                line-height: 100px;
                color: #aeaeae;
                text-align: center;
            }

        }
        .upload {
            position: relative;
            width: 100px;
            height: 100px;
            background: #ddd;
            overflow: hidden;
            i::before {
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                font-size: 80px;
                line-height: 100px;
                text-align: center;
                color: #ccc;
            }
            .upload-input {
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                opacity: 0;
                /*visibility: hidden;*/
            }
        }
        .info-text {
            flex: 2;
            height: 100%;
            text-align: center;
            line-height: 100px;
        }
        .show-img {
            flex: 1;
            height: 100%;
            background: #ddd;

            text-align: center;
            line-height: 100px;
        }

    }


</style>