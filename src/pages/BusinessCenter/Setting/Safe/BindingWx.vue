<template>
  <div>
      <!---->
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
      <el-button type="primary" class="r">绑定</el-button>
      <el-button class="r">接触绑定</el-button>

    </div>
  </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped >
  .wx-info{
  padding: 50px 0 10px;

  /*font-size: 0;*/
  .box1{
    width: 150px;
    font-size: 20px;
    vertical-align: middle;
    i::before{
      font-size: 30px;
      padding-right: 20px;
      vertical-align: middle;
    }
  }
  .box2{
    font-size: 18px;
    p:first-child{
      padding-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }
    p:last-child{
      line-height: 30px;
    }
  }
}
  .wx-btn{
    .r{
      margin-left:20px;
    }
  }
</style>
