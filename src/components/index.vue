<template>
<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="300px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    body{
      height: 100%;
    }
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-container{
    height: auto;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: auto;    
    text-align: center;
    line-height: 500px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  

</style>
