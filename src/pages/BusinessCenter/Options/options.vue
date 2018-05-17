<template>
  <div>
    <h3 class="small-title">意见反馈</h3>
    <div class="text-box">
      <el-input
        class="text-tarea"
        type="textarea"
        :rows="10"
        placeholder="如果您在使用中有任何问题，可以写下来反馈给我们，我们将持续改进"
        v-model="textarea">
      </el-input>
      <el-input v-model="input" placeholder="您可以留下电话，方便我们联系您"></el-input>
    </div>

    <div class="op-btn">
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{
        textarea: '',
        input:''

      }
    }
  }
</script>
<style lang="scss" scoped >

  .text-box{
    padding: 20px;
    background: #fff;
    .text-tarea{
      margin-bottom: 10px;
    }
  }
  .op-btn{
    padding-top: 20px;
    text-align: center;
    .el-button{
      width: 100px;
    }
  }

</style>
