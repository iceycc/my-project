<template>
  <div>
  <div class="rc-main">
    <!--单选框样式联动 todo：-->
    <!--类型选择-->
    <div class="select-box">
      <span class="titile">类型</span>
      <label for="lx1">
        <span :class="{active:picked1==='1'}">金额充值</span>
        <input type="radio" id="lx1" v-model="picked1" name="radio1" value="1"/>
      </label>
      <label for="lx2">
        <span :class="{active:picked1==='2'}">质保金充值</span>
        <input type="radio" name="radio1" id="lx2" v-model="picked1" value="2"/>
      </label>
    </div>
    <!--充值金额选择-->
    <div class="select-box">
      <span class="titile">充值金额</span>
      <label for="je1">
        <span :class="{active:picked2==='1'}">10000元</span>
        <input type="radio" name="radio2" id="je1" v-model="picked2" value="1"/>
      </label>
      <label for="je2">
        <span :class="{active:picked2==='2'}">5000元</span>
        <input type="radio" name="radio2" id="je2" v-model="picked2" value="2"/>
      </label>
      <label for="je3">
        <span :class="{active:picked2==='3'}">3000元</span>
        <input type="radio" name="radio2" id="je3" v-model="picked2" value="3"/>
      </label>
    </div>
    <!--去支付1-->
    <div class="go-pay">
      <el-button type="primary" class="pay-btn">去支付</el-button>
    </div>
  </div>
  </div>

</template>
<script>
  export default{
    name:'',
    data(){
      return{
        checked1:true,
        picked1:'1',
        picked2:'1',
      }
    },

  }
</script>
<style lang="scss">

  .rc-main{
    height: 600px;
    margin: 30px 50px;
    padding: 0 40px;
    background: #fff;
    .select-box{
      border-bottom: 1px solid #d6d6d6;
      padding: 60px 0;
      .titile{
        display: inline-block;
        width: 100px;
      }
      label{
        display: inline-block;
        width: 200px;
        span{
          display: inline-block;
          width: 100px;
          height: 50px;
          text-align: center;
          border: 1px solid #d6d6d6;
          line-height: 50px;
          font-size: 16px;
        }
      }
      span.active{
        color:#0099ff;
        border: 3px solid #0099ff;

      }
      input[type='radio']{
        display: none;
      }
    }
    .pay-btn{
      margin: 30px 0;
      width: 200px;
      height: 50px;
    }
  }

</style>
