<template>
  <div>
    <h3 style="font-size: 18px;padding: 10px 0">等待审核</h3>
    <div class="success-box">
      <h4><i class="iconfont icon-chenggong"> </i> 申请已经提交</h4>
      <p>审核工作将在1-3个工作日内完成，请注意登陆后台查看审核结果</p>
      <el-button class="success-btn" type="primary" @click="goApplyJoin">我知道了</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "apply-success",
    data() {
      return {}
    },
    methods: {
      goApplyJoin() {
        // console.log(this);
        this.$router.push({name: 'apply.join'})
      }
    }
  };
</script>

<style lang="scss" scoped >
  @import "../../../assets/style/config";
  .el-steps{
    background: #eeeeee;
    padding: 10px 4%;
  }
  .success-box {
    text-align: center;
    padding-top: 150px;
    margin-top: 20px;
    width: 100%;
    height: 400px;
    background: #fff;
    h4 {
      font-size: 25px;
      i::before {
        font-size: 25px;
        color: #0099ff;
      }
    }
    p {
      margin-top: 50px;
      font-size: 20px;
      color: #555;
    }
    .success-btn {
      margin-top: 100px;
      width: 200px;
    }
  }

</style>
