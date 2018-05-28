<template>
  <div class="bf">
    <el-steps :active="2" simple>
      <el-step title="填写基本信息" icon="el-icon-edit"></el-step>
      <el-step title="填写资质信息" icon="el-icon-upload"></el-step>
      <el-step title="提交审核" icon="el-icon-upload"></el-step>
    </el-steps>
    <div class="ai-main">
      <!--form信息盒子-->
      <div class="ai-box">
        <!--公司法人-->
        <div class="small-box">
          <el-row>
            <el-col :span="6"><h3 class="title">公司法人</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.company_corporate" placeholder="请与执照一致"></el-input>
            </el-col>
          </el-row>
          <!--身份证号码-->
          <el-row>
            <el-col :span="6"><h3 class="title">身份证号</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.LegalIdentityCard" placeholder="请输入"></el-input>
            </el-col>
          </el-row>

          <!--身份证照片-->
          <el-row>
            <el-col :span="6"><h3 class="title">身份证照片</h3></el-col>
            <el-col :span="18">
              <id-card-box img_name='正面照' info_text="证件上的文字需能够清晰辨认" @changeUrl="getUrl" info_key="formData.LegalCardId"></id-card-box>
              <id-card-box img_name='反面照' info_text="证件上的文字需能够清晰辨认" @changeUrl="getUrl" info_key="formData.LegalCardIdContrary"></id-card-box>
            </el-col>
          </el-row>

        </div>
        <div class="small-box">
          <!--营业执照-->
          <el-row>
            <el-col :span="6"><h3 class="title">营业执照</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.yyzzbh" placeholder="统一社会信用代码（请上传三证合一后的信用代码"></el-input>
            </el-col>
          </el-row>
          <!--证件照片-->
          <el-row>
            <el-col :span="6"><h3 class="title">证件照片</h3></el-col>
            <el-col :span="18">
              <id-card-box img_name='营业执照' info_text="证件上的文字需能够清晰辨认" @changeUrl="getUrl" info_key="formData.yyzz"></id-card-box>
            </el-col>
          </el-row>
        </div>
        <!--公司地址-->
        <div class="small-box padding-30">

          <el-row>
            <el-col :span="6"><h3 class="title">公司地址</h3></el-col>
            <el-col :span="18">
              <id-card-box img_name='资质照' info_text="证件上的文字需能够清晰辨认" @changeUrl="getUrl" info_key="formData.ConstructQuayPhoto"></id-card-box>
            </el-col>
          </el-row>
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
  import EventBus from '@/config/EventBus';
  import {postCompanyMessage} from '@/api/api';


  export default {
    // name: 'base-info'1,
    components:{
      "id-card-box":contents.IdCardBox,
    },
    data() {
      return {
        input:'',
        formData:{
          company_corporate:'',
          LegalCardId:'',
          LegalCardIdContrary:'',
          ConstructQuayPhoto:'',
          LegalIdentityCard:'',
          yyzz:'',
          yyzzbh:''
        }
      };
    },
    created(){
      this.formData = Object.assign(this.$route.params || {},this.formData)
    },
    methods: {
      getUrl(path) {
        //这个就是你要的path,并且会双向绑定
        this[path.name] = path.file || 1
        console.log(this[path.name])
        console.log("path.name :" + path.name)
      },

      goBaseInfo(){
        this.$router.go(-1)
      },
      goSuccess(){
        let _this = this
        // todo 数据校验
        let data = this.formData
        let params = {
          BankNo:data.BankNo,
          BelongCity:data.BelongCity, // 开户行市
          BelongCounty:data.BelongCounty,// 开户行区
          BelongProvince:data.BelongProvince,
          ConstructQuay:data.ConstructQuay,
          ConstructQuayPhoto:data.ConstructQuayPhoto,
          LK1_1:data.LK1_1,
          LK1_2:data.LK1_2,
          LK1_3:data.LK1_3,
          LegalCardId:data.LegalCardId,
          LegalCardIdContrary:data.LegalCardIdContrary,
          LegalIdentityCard:data.LegalIdentityCard,
          branchname:data.branchname,
          chargePersonPhone:data.chargePersonPhone,
          company_corporate:data.company_corporate,
          company_email:data.company_email,
          companyname:data.companyname,
          fzrxm:data.fzrxm,
          gszj:data.gszj,
          one_text:data.one_text,
          openaccount:data.openaccount,
          yyzz:data.yyzz,
          yyzzbh:data.yyzzbh,
        }

        let formData1 = new FormData();
        Object.keys(params).forEach((key)=>{
          formData1.append(key,params[key])
        })
        console.log(formData1);
        EventBus.$emit('notice',{
          type:'confirm',
          title:'确定提交吗？',
          success(){
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            }; //添加请求头
            postCompanyMessage(formData,config)
              .then((result)=>{
                console.log(result);
                // _this.$router.push({name:'apply.success'})
              })
          }
        })
      }
    }
  };
</script>

<style lang="scss" scoped >
  @import "../../../assets/style/config";
  /**/
  .padding-30 {
    padding-top: 30px;
  }
  .el-steps{
    background: #eeeeee;
    padding: 10px 4%;
  }
  .el-col{
    padding-bottom: 20px;

  }
  .ai-main {
    margin-top: 20px;
    // height: 100px;
    background: #fff;
    .small-box {
      border-bottom: 1px solid #ccc;
      transition: all 0.3s;
      padding:20px;

      &:hover {
        box-shadow: 5px 5px 5px #ccc;
      }
    }
    .title {
      text-align: center;
      line-height: 40px;
      font-size: 18px;
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
