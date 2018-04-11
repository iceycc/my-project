<template>
  <div class="bf">
    <div class="bf-titile">
      <span><i>1</i>填写基本信息</span>
      <img src="" alt="">
      <span class="active"><i>2</i>填写资质信息</span>
    </div>
    <div class="ai-main">
      <!--form信息盒子-->
      <div class="ai-box">
        <!--公司法人-->
        <div class="small-box">
          <div class="flexbox">
            <h3 class="title">公司法人</h3>
            <div class="input-box">
              <input type="text" placeholder="注册公司法人姓名">
              <input type="text" placeholder="手机号">
            </div>
          </div>
          <!--身份证号码-->
          <div class="flexbox">
            <h3 class="title">身份证照片</h3>
            <div class="input-box">
              <input type="text" placeholder="请输入">

            </div>
          </div>
          <!--身份证照片-->
          <div class="flexbox">
            <h3 class="title">身份证号码</h3>
            <div class="id-card-img">
              <id-card-box img_name='正面照' info_text="证件上的文字需能够清晰辨认"></id-card-box>
              <id-card-box img_name='反面照' info_text="证件上的文字需能够清晰辨认"></id-card-box>
            </div>

          </div>


        </div>
        <div class="small-box">
          <!--营业执照-->
          <div class="flexbox">
            <h3 class="title">营业执照</h3>
            <div class="input-box">
              <input style="width: 60%" type="text" placeholder="统一社会信用代码（请上传三证合一后的信用代码">
            </div>
          </div>
          <!--证件照片-->
          <div class="flexbox">
            <h3 class="title">证件照片</h3>
            <div class="id-card-img">
              <id-card-box img_name='营业执照' info_text="证件上的文字需能够清晰辨认"></id-card-box>
            </div>
          </div>
        </div>
        <!--公司地址-->
        <div class="small-box padding-30">
          <div class="flexbox">
            <h3 class="title">公司地址</h3>

            <div class="id-card-img">
              <id-card-box img_name='营业执照' info_text="证件上的文字需能够清晰辨认"></id-card-box>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div class="ai-btn">
      <el-button @click="goBaseInfo">上一步</el-button>
      <el-button @click="goSuccess" size="medium" type="primary">提交申请</el-button>
    </div>
  </div>
</template>
<script>
  import {contents} from '@/components/index.js'

  export default {
    // name: 'base-info'1,
    components:{
      "id-card-box":contents.IdCardBox
    },
    data() {
      return {};
    },
    methods: {
      goBaseInfo(){
        this.$router.push({name:'apply.baseinfo'})
      },
      goSuccess(){
        this.$router.push({name:'apply.success'})
      }
    }
  };
</script>

<style lang="scss">
  /*~@   */
  @import '~@/assets/scss/main.scss';
  /**/
  .padding-30 {
    padding-top: 30px;
  }

  // 标题
  .bf-titile {
    height: 22px;
    font-size: $h3FontSize;
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
    .small-box {
      border-bottom: 1px solid #ccc;
      margin-top: 3px;
      transition: all 0.3s;
      padding-bottom: 30px;

      &:hover {
        box-shadow: 5px 5px 5px #ccc;
      }
    }
    .title {
      position: relative;
      text-align: center;
      line-height: 100px;
      font-size: 18px;
      font-weight: bold;
      flex: 1;
    }
    .input-box {
      flex: 3;
      line-height: 100px;
      padding-right: 30px;

    }
    .id-card-img {
      flex: 3;
      margin-right: 30px;
    }
    .more-box {
      flex: 3;
      padding-right: 30px;
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
      flex: 1;
    }
    .right-box {
      flex: 3;
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
