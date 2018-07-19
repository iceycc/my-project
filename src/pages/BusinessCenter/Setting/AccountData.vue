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
          <div class="info">
            <el-row>
              <el-col :span="6">公司名称</el-col>
              <el-col :span="18">{{account_data.companyname}}</el-col>
            </el-row>
          </div>
          <div class="line"></div>
          <div class="info">
            <el-row>
              <el-col :span="6">店铺负责人</el-col>
              <el-col :span="9">{{account_data.fzrxm}}</el-col>
              <el-col :span="9">手机号：{{account_data.chargePersonPhone}}</el-col>
            </el-row>
          </div>
          <div class="line"></div>
          <div class="info">
            <el-row>
              <el-col :span="6">公司开户名称</el-col>
              <el-col :span="18">{{account_data.accountname}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">公司开户银行</el-col>
              <el-col :span="18">{{account_data.openaccount}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">开户账号</el-col>
              <el-col :span="18">{{account_data.BankNo}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">开户地址</el-col>
              <el-col :span="18">{{account_data.branchname}}</el-col>
            </el-row>
          </div>
          <div class="line"></div>
          <div class="info">
            <el-row>
              <el-col :span="6">公司地址</el-col>
              <el-col :span="18">{{account_data.one_text}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">施工等级资质</el-col>
              <el-col :span="18">{{account_data.ConstructQuay | ConstructQuay_filter}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">公司座机</el-col>
              <el-col :span="18">{{account_data.gszj}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">公司邮箱</el-col>
              <el-col :span="18">{{account_data.company_email}}</el-col>
            </el-row>
          </div>
        </div>
      </div>
      <!--资质信息-->
      <div class="info-box base-info">
        <!--top-->
        <div class="bi-top">
          <i class="iconfont icon-jichuxinxi"></i>
          <span>资质信息</span>
        </div>
        <div class="bi-info">
          <div class="info">
            <el-row>
              <el-col :span="6">公司法人</el-col>
              <el-col :span="9">{{account_data.company_corporate}}</el-col>
              <el-col :span="9">手机号：{{account_data.corporate_mobile}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">身份证号码</el-col>
              <el-col :span="18">{{account_data.LegalIdentityCard}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">身份证照片</el-col>
              <el-col :span="18">
                <!--照片-->
                <div class="info-img"><img :src="account_data.LegalCardIdImg" alt=""></div>
                <div class="info-img"><img :src="account_data.LegalCardIdContraryImg" alt=""></div>
              </el-col>
            </el-row>
          </div>
          <div class="line"></div>
          <div class="info">
            <el-row>
              <el-col :span="6">营业执照</el-col>
              <el-col :span="18">{{account_data.yyzzbh}}</el-col>
            </el-row>
            <el-row>
              <el-col :span="6">证件照片</el-col>
              <el-col :span="18">
                <div class="info-img"><img :src="account_data.yyzzImg" alt=""></div>
              </el-col>
            </el-row>
          </div>
          <div class="line"></div>
          <div class="info">
            <el-row>
              <el-col :span="6">施工资质照片</el-col>
              <el-col :span="18">
                <div class="info-img"><img :src="account_data.ConstructQuayPhotoImg" alt=""></div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import {getAccountData} from '../../../api/api'
  export default{
    name:'',
    data(){
      return{
        account_data:{}
      }
    },
    created(){
      this.getData()
    },
      filters:{
          ConstructQuay_filter:(val)=>{
              switch (Number(val)){
                  case 0:
                      return '无'
                      break
                  case 1:
                      return '一级'
                    break
                  case 2:
                      return '二级'
                    break
                  case 3:
                      return '三级'
                    break

              }
          }
      },
    methods:{
      getData(){
        let params = {}
        getAccountData(params)
          .then((result)=>{
            // console.log(result);
            this.account_data = result
          })
      },
      goAlterInfo(){
        this.$router.push({name:'joined.baseinfo',query:{isUpdate:true}})
      }
    }
  }
</script>
<style lang="scss" scoped >

  /*主体部分*/
  .ad-main{
    background: #fff;
  }
  .el-row{
    padding-top: 20px;  }

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
  .el-col{
    overflow: hidden;
  }
</style>
