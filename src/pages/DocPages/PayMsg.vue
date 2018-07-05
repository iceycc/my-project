<template>
    <div class="paymsg">
        <!--支付成功显示-->
        <div v-if="msg == 1" class="box1">
            <div><i class="el-icon-success ms-font"></i></div>
            <div><p>支付成功 ！</p><span>正在跳转中  <strong>{{time}}s</strong></span></div>
        </div>
        <!--支付失败显示-->
        <div v-if="msg == 2" class="box2">
            <div><i class="el-icon-error ms-font"></i></div>
            <div><p>支付错了 ！</p><span>正在跳转中 <strong>{{time}}s</strong></span></div>
        </div>
    </div>
</template>

<script>
    import {GetRequest} from '@/config/util'

    let _time = 3
    export default {
        name: "PayMsg",
        data() {
            return {
                msg: 1,
                time: _time
            }
        },
        created() {
            // 获取url参数代码
            var Request = new Object();
            Request = GetRequest();
            let msg = Request['msg'] || 'fail'
            // console.log(msg);
            if (msg == 'success') {
                this.msg = 1
            } else {
                this.msg = 2
            }
            let timer = setInterval( () => {
                _time--
                this.time = _time
                if(this.time == 0){
                    clearInterval(timer)
                   this.$router.replace({name:'account.account'})
                }
            }, 1000)
        }
    }
</script>
<style lang="scss" scoped>
    .paymsg {
        padding-top: 30px;
    }

    .box1,.box2 {
        padding-top: 50px;
        padding-left: 50px;
        width: 750px;
        height: 130px;
        margin: 0 auto;

        vertical-align: top;
        div {
            display: inline-block;
            vertical-align: top;
            padding-left: 20px;

        }
        p {
            font-size: 20px;
            color: #5a5a5a;
            font-weight: bold;
        }
        span {

        }
        strong{
            padding-left: 10px;

            font-size: 14px;
        }
    }
    .box1{
        background: #eafde3;
        border: 1px solid #ccc;
        .ms-font {
            font-size: 60px;
            color: #7eb84d;
        }
    }
    .box2{

        background: #fbefef;
        border: 1px solid #df9896;
        .ms-font {
            font-size: 60px;
            color: #d4716e;
        }
    }



</style>