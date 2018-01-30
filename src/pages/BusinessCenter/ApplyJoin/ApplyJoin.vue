<template>
  <div>
    <div class="aj-box w-1000">
      <div class="aj-top">
        <div class="aj-top-info">
          <i></i>
          欢迎加入优装美家，填写并添加资料，即可申请入住平台
        </div>
          <h3></h3>
          <p>1、填写基础信息</p>
          <p>2、填写资质信息</p>
          <el-button type="primary">申请入住</el-button>
      </div>
  </div>
  </div>
  
</template>
<script>
export default {
  name: "apply-join",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.w-1000{
  width: 1000px;
  margin: 0 auto;
}

.aj-top {
  background: #fff;
  text-align: center;
}
.aj-top-info{
  text-align: left;
}
</style>
