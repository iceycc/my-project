<template>
  <div class="bf">
    <el-steps :active="1" simple>
      <el-step title="填写基本信息" icon="el-icon-edit"></el-step>
      <el-step title="填写资质信息" icon="el-icon-upload"></el-step>
      <el-step title="等待审核" icon="el-icon-upload"></el-step>
    </el-steps>
    <div class="ai-main">
      <!--form信息盒子-->
      <div class="ai-box">
        <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <!--公司名称-->
        <div class="small-box">
              <el-form-item label="公司名称" prop="companyname">
              <el-input v-model="formData.companyname" placeholder="请与执照一致"  auto-complete="off"></el-input>
              </el-form-item>
        </div>
        <!--店铺负责人-->
        <div class="small-box">
          <el-form-item label="商铺负责人" prop="companyname">
            <el-input v-model="formData.fzrxm" placeholder="业务对接人姓名"  auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="" prop="companyname">
            <el-input v-model="formData.chargePersonPhone" placeholder="手机号"  auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <!--公司开户银行-->
        <div class="small-box">

          <!--开户银行-->
          <el-form-item label="公司开户银行" prop="companyname">
            <el-input v-model="formData.openaccount" placeholder="请于执照一致"  auto-complete="off"></el-input>
          </el-form-item>
          <!--开户账号-->
          <el-form-item label="开户账号" prop="companyname">
            <el-input v-model="formData.BankNo" placeholder="输入卡号"  auto-complete="off"></el-input>
          </el-form-item>
          <!--开户地址-->
          <div style="display:flex ">
            <h3 style="width: 80px;font-size: 14px;color: #606266;text-align: right;padding-right: 20px" class="title">开户地址</h3>
              <div style="margin-bottom: 20px">
                <el-select v-model="formData.BelongProvince" placeholder="请选择省"
                           @change="chooseProvencehandle(formData.BelongProvince,1)" auto-complete="off">
                  <el-option
                    v-for="item in provences1"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
                <el-select v-model="formData.BelongCity" placeholder="请选择市"
                           @change="chooseCityHandle(formData.BelongCity,1)" auto-complete="off">
                  <el-option
                    v-for="item in cities1"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
                <el-select v-model="formData.BelongCounty" placeholder="请选择区" auto-complete="off">
                  <el-option
                    v-for="item in distrusts1"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
              </div>
          </div>
          <el-form-item label="开户支行名称" prop="companyname">
            <el-input v-model="formData.branchname" placeholder="开户支行名称" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <!--公司地址-->
        <div class="small-box">

          <div style="display:flex ">
            <h3 style="width: 80px;font-size: 14px;color: #606266;text-align: right;padding-right: 20px" class="title">公司地址</h3>

              <div style="margin-bottom: 20px">
                <el-select v-model="formData.LK1_1" placeholder="请选择省" @change="chooseProvencehandle(formData.LK1_1,2)" auto-complete="off">
                  <el-option
                    v-for="item in provences2"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
                <el-select v-model="formData.LK1_2" placeholder="请选择市" @change="chooseCityHandle(formData.LK1_2,2)" auto-complete="off">
                  <el-option
                    v-for="item in cities2"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
                <el-select v-model="formData.LK1_3" placeholder="请选择区" auto-complete="off">
                  <el-option
                    v-for="item in distrusts2"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
              </div>

          </div>
          <el-form-item label="详细地址" prop="companyname">
            <el-input v-model="formData.one_text" placeholder="详细地址，请与执照地址一致"  auto-complete="off"></el-input>
          </el-form-item>

          <div class="map-box" id="map-container">
            <map-box></map-box>
          </div>
        </div>
        <div class="small-box">
          <h4 class="info-title">以下为选填</h4>
          <el-form-item label="施工等级资质" prop="companyname">
            <el-input v-model="formData.ConstructQuay" placeholder="请于执照一致"  auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="公司座机" prop="companyname">
            <el-input v-model="formData.gszj" placeholder="请于执照一致"  auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="公司邮箱" prop="companyname">
            <el-input v-model="formData.company_email" placeholder="公司指定联系邮箱"  auto-complete="off"></el-input>
          </el-form-item>
        </div>
        </el-form>
      </div>
    </div>

    <div class="ai-btn">
      <el-button @click="goApplyInfo">上一步</el-button>
      <el-button @click="submitForm(' ')" size="medium" type="primary">下一步</el-button>
    </div>
  </div>
</template>
<script>
  import {commons} from '@/components/index.js'
  import {getProvence, getCity, getDistrust, getAccountData} from '@/api/api'

  export default {
    // name: 'base-info'1,
    data() {
      var checkData = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('不能为空'));
        }
        callback();
      };
      return {
        formData: {
          companyname: '',
          BelongCity: '',
          BelongCounty: '',
          BelongProvince: '',
          chargePersonPhone: '',
          ConstructQuay: '',
          branchname: '',
          one_text: '',
          LK1_1: [],
          LK1_2: [],
          LK1_3: [],
          BankNo: '',
          fzrxm: '',
          company_email: '',
          gszj: '',
          openaccount: ''

        },
        rules:{
          companyname:[ { validator: checkData, trigger: 'blur' }]
        },
        provences1: [],
        provences2: [],
        cities1: [],
        cities2: [],
        distrusts1: [],
        distrusts2: [],
        oldInfos: []
      };
    },
    created() {
      if (this.$route.name == 'joined.baseinfo') {
        // todo 获取
        getAccountData()
          .then((result) => {
            console.log(result);
            this.oldInfos = result
            this.formData = {
              companyname: result.companyname,
              BelongCity: result.BelongCity,
              BelongCounty: result.BelongCounty,
              BelongProvince: result.BelongProvince,
              chargePersonPhone: result.chargePersonPhone,
              ConstructQuay: result.ConstructQuay,
              branchname: result.branchname,
              one_text: result.one_text,
              LK1_1: result.LK1_1,
              LK1_2: result.LK1_2,
              LK1_3: result.LK1_3,
              BankNo: result.BankNo,
              fzrxm: result.fzrxm,
              company_email: result.company_email,
              gszj: result.gszj,
              openaccount: result.openaccount
            }
          })
      }
      this.getProvenceHandle()
    },
    components: {
      'map-box': commons.MapBox
    },
    methods: {
      checked(val){
        if(val == ''){

        }
      },
      submitForm(formData) {

        this.$refs[formData].validate((valid) => {
          if (valid) {
           this.goDetailInfo()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // chooseProvencehandle
      chooseProvencehandle(val,num) {
        this.getCityHandle({id: val},num)
      },
      // chooseCityHandle
      chooseCityHandle(val,num) {
        this.getDistrustHandle({id: val},num)
      },
      // 省
      getProvenceHandle() {
        getProvence()
          .then((result) => {
            this.provences1 = result
            this.provences2 = result
          })
      },
      // 市
      getCityHandle(params,num) {
        getCity(params)
          .then((result) => {
            if(num===1){
              this.cities1 = result
            }
            if(num===2){
              this.cities2 = result
            }
          })
      },
      // 区s、
      getDistrustHandle(params,num) {
        getDistrust(params)
          .then((result) => {
            if(num===1){
              this.distrusts1 = result
            }
            if(num===2){
              this.distrusts2 = result
            }
          })
      },
      goApplyInfo() {
        this.$router.go(-1)
      },
      goDetailInfo() {
        if (this.$route.name == 'apply.baseinfo') {
          this.$router.push({
            name: 'apply.detailinfo', params: {
              formData: this.formData,
              oldInfos: this.oldInfos
            }
          })
        }
        if (this.$route.name == 'joined.baseinfo') {
          this.$router.push({
            name: 'joined.detailinfo', params: {
              formData: this.formData,
              oldInfos: this.oldInfos
            }
          })
        }

      },
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/style/config";
  // 标题
  .el-input, .el-cascader {
    margin-bottom: 20px;
    input {
      height: 100%;
    }
  }

  .el-steps {
    background: #eeeeee;
    padding: 10px 4%;
  }

  .info-title {
    width: 25%;
    text-align: center;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .ai-main {
    // height: 100px;
    margin-top: 20px;
    background: #fff;
    .small-box {
      @extend .box-hover-shadow;
      border-bottom: 1px solid #ddd;
      border-top: 1px solid #ddd;
      padding-right: 150px;
    }
    .title {
      line-height: 40px;
      text-align: center;
      font-size: 18px;
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
