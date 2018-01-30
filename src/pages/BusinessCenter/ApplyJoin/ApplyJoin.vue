<template>
  <div>
    <div class="aj-box w-1000">
      <div class="aj-top">
        <div class="aj-top-info">
          <i></i>
          欢迎加入优装美家，填写并添加资料，即可申请入住平台
        </div>
          <h3>{{step}}</h3>
          <p>1、填写基础信息</p>
          <p>2、填写资质信息</p>
          <el-button type="primary" class="aj-top-btn">申请入住</el-button>
      </div>
      <!-- TODO: -->
  </div>
  </div>
  
</template>
<script>
export default {
  name: "apply-join",
  data() {
    return {
      step:"两步完成商户入驻"
    };
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
.aj-top h3{
  font-weight: bold;
  font-size:20px;
  margin-bottom:30px;
}
.aj-top p{
  height: 40px;
  line-height:40px;
}
.aj-top .aj-top-btn{
  width: 200px !important;
  margin-top:20px;
  margin-bottom:50px;  
} 
.aj-top-info{
  text-align: left;
}
.aj-top-info{
  padding-top:30px;
  padding-left:20px;
  margin-bottom: 50px;
  
}
</style>
