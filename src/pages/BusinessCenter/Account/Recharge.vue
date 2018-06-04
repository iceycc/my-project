<template>
  <div>
  <div class="rc-main">
    <!--单选框样式联动 todo：-->
    <!--类型选择-->
    <div class="select-box">
      <span class="titile">类型</span>
      <el-radio-group v-model="radio4" size="medium">
        <el-radio-button label="金额充值" ></el-radio-button>
        <el-radio-button label="质保金充值"></el-radio-button>
      </el-radio-group>
    </div>
    <!--充值金额选择-->
    <div class="select-box">
      <span class="titile">充值金额</span>
      <el-radio-group v-model="radio5" size="medium">
        <el-radio-button label="10000" >10000元</el-radio-button>
        <el-radio-button label="5000">10000元</el-radio-button>
        <el-radio-button label="3000">10000元</el-radio-button>
      </el-radio-group>
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
        // checked1:true,
        radio4:'',
        radio5:' '
      }
    },

  }
</script>
<style lang="scss" scoped >

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
    }
    .pay-btn{
      margin: 30px 0;
      width: 200px;
      height: 50px;
    }
  }

</style>
