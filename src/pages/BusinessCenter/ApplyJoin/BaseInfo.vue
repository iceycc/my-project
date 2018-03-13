<template>
  <div class="bf">
    <div class="bf-titile">
      <span class="active"><i>1</i>填写基本信息</span>
      <img src="" alt="">
      <span><i>2</i>填写资质信息</span>
    </div>
    <div class="ai-main">
      <!--form信息盒子-->
      <div class="ai-box">
        <!--公司名称-->
        <div class="small-box clearfix">
          <h3 class="title">公司名称</h3>
          <div class="input-box">
            <input type="text" placeholder="请于执照一致">
          </div>
        </div>
        <!--店铺负责人-->
        <div class="small-box clearfix">
          <h3 class="title">商铺负责人</h3>
          <div class="input-box">
            <input type="text" placeholder="业务对接人姓名">
            <input type="text" placeholder="手机号">
          </div>
        </div>
        <!--公司开户银行-->
        <div class="small-box">
          <!--开户银行-->
          <div class="clearfix">
            <h3 class="title">公司开户银行</h3>
            <div class="input-box">
              <input type="text" placeholder="请于执照一致">
            </div>
          </div>
          <!--开户账号-->
          <div class="clearfix">
            <h3 class="title">开户账号</h3>
            <div class="input-box">
              <input type="text" placeholder="输入卡号">
            </div>
          </div>
          <!--开户地址-->
          <div class="clearfix">
            <h3 class="title">开户地址</h3>
            <div class="input-box">
              <input type="text" placeholder="请于执照一致">
            </div>
          </div>
        </div>
        <!--公司地址-->
        <div class="small-box">
          <div class="clearfix">
            <h3 class="title">公司地址</h3>
            <div class="more-box">
              `
              <div class="v-select">
                <input type="text" placeholder="请于执照一致">
                <input type="text" placeholder="请于执照一致">
                <input type="text" placeholder="请于执照一致">
              </div>
              <input type="text" class='detail-dizhi' placeholder="详细地址，请与执照地址一致">
              <div class="map-box"></div>
            </div>
          </div>

        </div>
        <div class="small-box">
          <h4 class="info-title">以下为选填</h4>
          <div class="clearfix">
            <h3 class="title">施工等级资质</h3>
            <div class='input-box'>
              <input type="text" placeholder="请于执照一致">
            </div>
          </div>
          <div class="clearfix">
            <h3 class="title">公司座机</h3>
            <div class='input-box'>
              <input type="text" placeholder="区号+座机号">
            </div>
          </div>
          <div class="clearfix">
            <h3 class="title">公司邮箱</h3>
            <div class='input-box'>
              <input type="text" placeholder="公司指定联系邮箱">
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="ai-btn">
      <el-button @click="goApplyInfo">上一步</el-button>
      <el-button @click="goDetailInfo" size="medium" type="primary">下一步</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    // name: 'base-info'1,

    data() {
      return {};
    },
    methods: {
      goApplyInfo(){
        this.$router.push({name:'apply.info'})
      },
      goDetailInfo(){
        this.$router.push({name:'apply.detailinfo'})
      }
    }
  };
</script>

<style lang="scss" scoped>
  /*~@   */
  @import '~@/assets/scss/main.scss';
  // 标题
  .bf-titile {
    height: 22px;
    font-size: $h3FontSize;
    padding: 30px 0 20px 0;
    color: #999;
    .active {
      color: $activeColor;
      i {
        background: $activeColor;
      }
    }
    span {
      line-height: 22px;
      padding-right: 30px;
    }
    i {
      display: inline-block;
      vertical-align: top;
      width: 22px;
      height: 22px;
      text-align: center;
      line-height: 22px;
      color: #fff;
      background: #999;
      margin-right: 7px;
    }
  }

  .info-title {
    width: 25%;
    text-align: center;
    font-size: 18px;
    padding-top: 10px;
  }

  .ai-main {
    // height: 100px;
    background: #fff;
    .small-box{
      @extend .box-hover-shadow;
      border-bottom: 1px solid #ddd;
      border-top: 1px solid #ddd;

    }
    .title {
      float: left;
      width: 200px;
      line-height: 100px;
      font-size: 18px;
      font-weight: bold;
    }
    .input-box {
      float: left;
      line-height: 100px;
      padding-right: 30px;

    }
    .more-box {
      float: left;
      width: 500px;
      .v-select {
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: justify;
        text-align-last: justify;
      }
      .detail-dizhi {
        width: 100%;
        box-sizing: border-box;
      }
    }
    input {
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #999;
      border-radius: 6px;
      height: 30px;
      padding-left: 10px;
      // line-height: 24px;
    }
    .left-empty {
    }
    .right-box {
      input {
        width: 100%;
      }
    }
    .map-box {
      margin-top: 15px;
      width: 100%;
      height: 400px;
      border: 1px solid #999;
      border-radius: 6px;

    }

  }

  .ai-btn {
    margin-top: 20px;
    padding-left: 25% !important;
    button {
      width: 150px;
    }
  }
</style>
