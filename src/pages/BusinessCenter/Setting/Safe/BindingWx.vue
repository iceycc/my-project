<template>
  <div class="content">
    <!---->
    <div v-show="!ifBindWx">
      <div class="wx-info clearfix">
        <div class="l box1">
          <i class="iconfont icon-weixin1" :style="{color:'#38c50a'}"></i>
          <span :style="{'font-size':'18px',}">微信</span>
        </div>
        <div class="l box2">
          <p>未绑定</p>
          <p class="">绑定后，可在微信中接收新订单通知 <br>仅支持绑定一个微信号，建议绑定给实际业务操作者</p>
        </div>
      </div>
      <div class="wx-btn clearfix">
        <el-button type="primary" class="r" @click="getWxRwCode">绑定</el-button>
      </div>
    </div>
    <div v-show="ifBindWx">
      <div class="wx-info clearfix">
        <div class="l box1">
          <i class="iconfont icon-weixin1" :style="{color:'#38c50a'}"></i>
          <span :style="{'font-size':'18px',}">微信</span>
        </div>
        <div class="l box2">
          <p>已绑定 <span>{{nickname}}</span></p>
          <p class="">现在可以在此微信中接收新订单</p>
        </div>
      </div>
      <div class="wx-btn clearfix">
        <el-button type="primary" class="r" @click="changeBindHandle">更改</el-button>
        <el-button class="r" @click="removeBindHandle">解除绑定</el-button>
      </div>
    </div>
    <el-dialog title="更改绑定" :visible.sync="dialogFormVisible" width="400px" :center="true">
      <div class="transition-box">
        <img :src="codeUrl" alt="">
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
  import {getIfBingWx, getWxQrcode,relieveBind} from '@/api/api'
  import EventBus from '@/config/EventBus'

  export default {
    name: '',
    data() {
      return {
        dialogFormVisible: false,
        ifBindWx: false,
        nickname: '微信昵称',
        codeUrl: '',
        codeShow: false,
        dialogClass:'height:1000px;background:red'
      }
    },
    created() {
      this.getIfBingWxHandle()
    },
    beforeDestroy() {
      this.codeUrl = ''
    },
    methods: {
      //  获取当前是否绑定了微信
      getIfBingWxHandle(success,fail){
        getIfBingWx()
          .then((result) => {
            console.log(result);
            if (result.code == 1) {
              this.ifBindWx = true
              success && success()
            }
            if (result.code == 2) {
              this.ifBindWx = false
              fail && fail()
            }
            // 绑定了
          })
      },
      //
      changeBindHandle() {
        this.getWxRwCode()
      },
      removeBindHandle() {
        console.log(111)
        EventBus.$emit('notice', {
          type: 'confirm',
          title: '解除绑定',
          success: function () {
            console.log('todo 执行解除绑定函数')
            relieveBind()
              .then((result)=>{
                console.log(result);
                if(result.code == 1) {
                  EventBus.$emit('notice', {
                    type: 'message',
                    message: '解除成功',
                  })
                }
                this.getIfBingWxHandle()
              })
          }
        })
      },
      getWxRwCode() {
          getWxQrcode()
            .then((result) => {
              console.log(result);
              this.codeUrl = result.data
              this.dialogFormVisible = true
            })
      },
      submit(){
        this.getIfBingWxHandle(function () {
          this.dialogFormVisible = false
        },function () {
          EventBus.$emit('notice', {
            type: 'message',
            message: '未绑定成功',
          })
        })
      }

    }
  }
</script>
<style lang="scss" scoped>
  .transition-box {
    background: #eee;
    margin: 0 auto;
    width: 300px;
    height: 300px;
    img {
      width: 300px;
      height: 300px;
    }
  }

  .wx-info {
    background: #fff;
    padding: 50px 0 10px;
    /*font-size: 0;*/
    .box1 {
      width: 150px;
      font-size: 20px;
      vertical-align: middle;
      i::before {
        font-size: 30px;
        padding-right: 20px;
        vertical-align: middle;
      }
    }
    .box2 {
      font-size: 18px;
      p:first-child {
        padding-bottom: 10px;
        font-size: 20px;
        font-weight: bold;
      }
      p:last-child {
        line-height: 30px;
      }
    }
  }

  .wx-btn {
    .r {
      margin-left: 20px;
    }
  }
</style>
