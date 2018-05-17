<template>
  <!--<div class="fenye"><a class="xiangzuo"> < </a>1/5 <a class="xiangyou"> > </a> </div>-->
  <el-pagination
    :small="true"
    :background="true"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage"
    :page-size="100"
    layout="prev, pager, next, jumper"
    :total="1000">
  </el-pagination>
</template>

<script>
  export default {
    name: "small-pagination",
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage: 5,
        small:''

      };
    }
  }
</script>

<style lang="scss" scoped>
  .el-pagination__editor.el-input .el-input__inner{
    height: 18px;
  }
</style>
