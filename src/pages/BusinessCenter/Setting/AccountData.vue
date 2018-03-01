<template>
  <div>
    <h3 class="small-title">账户资料</h3>
    <div class="ad-main">
      <!--基本信息-->
      <div class="info-box base-info">
        <!--top-->
        <div class="bi-top">
          <i class="iconfont icon-jichuxinxi"></i>
          <span>基本信息</span>
          <el-button class="r" type="primary" @click="goAlterInfo">修改信息</el-button>
        </div>
        <!---->
        <div class="bi-info">
          <p class="info">
            <span>公司名称</span>
            北京xx装饰有限公司
          </p>
          <div class="line"></div>
          <p class="info">
            <span>店铺负责人</span>
            <span>张三</span>13155556666
          </p>
          <div class="line"></div>
          <p class="info">
            <span>公司开户行</span>
            招商银行
          </p>
          <p class="info">
            <span>开户账号</span>
            62626266662624324334
          </p>
          <p class="info">
            <span>开户地址</span>
            北京市朝阳区建国路支行
          </p>
          <div class="line"></div>
          <p class="info">
            <span>公司地址</span>
            北京市朝阳区建国路支行
          </p>
          <p class="info">
            <span>施工等级资质</span>
            一级
          </p>
          <p class="info">
            <span>公司座机</span>
            010-123123123
          </p>
          <p class="info">
            <span>公司邮箱</span>
            345678987@QQ.com
          </p>
        </div>
      </div>
      <!--资质信息-->
      <div class="info-box base-info">
        <!--top-->
        <div class="bi-top">
          <i class="iconfont icon-jichuxinxi"></i>
          <span>基本信息</span>
        </div>
        <!---->
        <div class="bi-info">
          <div class="info">
            <span>公司法人</span>
            石原贵雅
          </div>
          <div class="info">
            <span>身份证号码</span>
            124567988765434567
          </div>
          <div class="info">
            <span>身份证照片</span>
            <!--照片-->
            <div class="info-img"><img src="" alt=""></div>
            <div class="info-img"><img src="" alt=""></div>
          </div>
          <div class="line"></div>

          <div class="info">
            <span>营业执照</span>
            124567988765434567
          </div>
          <div class="info">
            <span>证件照片</span>
            <div class="info-img"><img src="" alt=""></div>
          </div>
          <div class="line"></div>
          <div class="info">
            <span>施工资质照片</span>
            <div class="info-img"><img src="" alt=""></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{

      }
    },
    methods:{
      goAlterInfo(){
        this.$router.push({name:'apply.baseinfo'})
      }
    }
  }
</script>
<style lang="scss">
  @import '~@/assets/scss/main.scss';


  /*主体部分*/
  .ad-main{
    background: #fff;
  }
  /*信息盒子*/
  .info-box{
    padding: 20px 0 40px 30px;
    border-bottom: 1px solid #9a9a9a;

    /*top*/
    .bi-top{
      padding-right: 20px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      i::before{
        font-size: 18px;
        color:#0099ff;
      }
    }
    /*bi-info*/
    .bi-info{
      padding-left: 30px;
      .info{
        font-size: 18px;
        color:#5a5a5a;
        padding-top: 30px;
        span{
          display: inline-block;
          width: 200px;
        }

      }

    }
    /*线*/
    .line{
      height: 1px;
      background:#9a9a9a;
      margin-top:30px ;
    }
    /*图片*/
    .info-img{
      display: inline-block;
      margin-right: 20px;
      width: 150px;
      height: 100px;
      background: #ddd;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }


</style>
