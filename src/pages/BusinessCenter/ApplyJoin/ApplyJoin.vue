<template>
  <div>
    <div class="aj-box">
      <info-box class="aj-top">
        <div class="aj-top-info">
          <i class="iconfont icon-gonggao"></i>
          欢迎加入优装美家，填写并添加资料，即可申请入住平台
        </div>
          <h3>{{step}}</h3>
          <p>1、填写基础信息</p>
          <p>2、填写资质信息</p>
          <el-button type="primary" class="aj-top-btn">申请入住</el-button>
      </info-box>
      <!-- TODO: -->
      <!-- 申请入住 -->
      <info-box>
        <div class="step-l">
          <h4>
          <i class="iconfont icon-yuangou"></i>
            申请入住</h4>
          <p>你有完善的申请信息</p>
          <p>创建时间：<i>2011-11-11 11：11</i></p>
        </div>
        <div class="step-r">
          <el-button class="aj-btn" type="primary">完善信息</el-button>
          <el-button class="aj-btn">重新申请</el-button>          
        </div>
      </info-box>
      <!-- 资料审核中 -->
      <info-box>
        <div class="step-l">
          <h4>
          <i class="iconfont icon-yuangou"></i>
            资料审核中</h4>
          <p>你有完善的申请信息</p>
          <p>创建时间：<i>2011-11-11 11：11</i></p>
        </div>
        <div class="step-r">
        </div>
      </info-box>
      <!-- 资料审核已经通过 -->
      <info-box>
        <div class="step-l">
          <h4>
          <i class="iconfont icon-yuangou"></i>
            资料审核已经通过</h4>
          <p>你有完善的申请信息</p>
          <p>创建时间：<i>2011-11-11 11：11</i></p>
        </div>
        <div class="step-r">
          <el-button class="aj-btn" type="primary">设置承接信息</el-button>
        </div>
      </info-box>
      <!-- 资料审核未通过 -->
      <info-box>
        <div class="step-l">
          <h4>
          <i class="iconfont icon-yuangou"></i>
            资料审核未通过</h4>
          <p>你有完善的申请信息</p>
          <p>创建时间：<i>2011-11-11 11：11</i></p>
        </div>
        <div class="step-r">
          <el-button class="aj-btn" type="primary">重新申请</el-button>
        </div>
      </info-box>
  </div>
  </div>
  
</template>
<script>
export default {
  // name: "apply-join",
  data() {
    return {
      step: "两步完成商户入驻"
    };
  },
  methods: {}
};
</script>

<style lang="scss">
// @import "../../../assets/icon/iconfont.css";
.iconfont::before {
  font-size: 30px;
  margin-right: 5px;
}
/*头部介绍*/
.aj-top {
  text-align: center;
  margin-top: 0px !important;

  .icon-gonggao::before {
    color: red;
    font-size: 30px;
  }
  p {
    height: 40px;
    line-height: 40px;
  }
  .aj-top-btn {
    width: 200px !important;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .aj-top-info {
    text-align: left;
    font-size:20px;
    height: 34px;
    line-height: 34px;
  }
  .aj-top-info {
    margin-bottom: 50px;
  }
}

/* 步骤盒子 1*/

.step-l {
  display: inline-block;
  width: 49%;
  h4 {
    height: 68px;
    line-height: 68px;
    font-size: 25px;
  }
  p {
    padding-left: 40px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
  }
}
.step-r {
  display: inline-block;
  width: 49%;
  text-align: right;
  .aj-btn {
    width: 120px;
  }
}
</style>
