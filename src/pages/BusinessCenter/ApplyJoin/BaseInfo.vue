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
        <!--公司名称-->
        <div class="small-box">
          <el-row>
            <el-col :span="6"><h3 class="title">公司名称</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.companyname" placeholder="请与执照一致"></el-input>
            </el-col>
          </el-row>
        </div>
        <!--店铺负责人-->
        <div class="small-box">
          <el-row>
            <el-col :span="6"><h3 class="title">商铺负责人</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.fzrxm" placeholder="业务对接人姓名"></el-input>
              <el-input v-model="formData.chargePersonPhone" placeholder="手机号"></el-input>
            </el-col>
          </el-row>
        </div>
        <!--公司开户银行-->
        <div class="small-box">
          <!--开户银行-->
          <el-row>
            <el-col :span="6"><h3 class="title">公司开户银行</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.openaccount" placeholder="请于执照一致"></el-input>
            </el-col>
          </el-row>
          <!--开户账号-->
          <el-row>
            <el-col :span="6"><h3 class="title">开户账号</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.BankNo" placeholder="输入卡号"></el-input>
            </el-col>
          </el-row>
          <!--开户地址-->
          <el-row>
            <el-col :span="6"><h3 class="title">开户地址</h3></el-col>
            <el-col :span="18">
              <div style="margin-bottom: 20px">
                <el-select v-model="formData.BelongProvince" placeholder="请选择省" @change="chooseProvencehandle(formData.BelongProvince)">
                  <el-option
                    v-for="item in provences"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
                <el-select v-model="formData.BelongCity" placeholder="请选择市" @change="chooseCityHandle(formData.BelongCity)">
                  <el-option
                    v-for="item in cities"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
                <el-select v-model="formData.BelongCounty" placeholder="请选择区">
                  <el-option
                    v-for="item in distrusts"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
              </div>
              <el-input v-model="formData.branchname" placeholder="开户支行名称"></el-input>
            </el-col>
          </el-row>
        </div>
        <!--公司地址-->
        <div class="small-box">
          <el-row>
            <el-col :span="6"><h3 class="title">公司地址</h3></el-col>
            <el-col :span="18">
              <div style="margin-bottom: 20px">
                <el-select v-model="formData.LK1_1" placeholder="请选择省" @change="chooseProvencehandle(formData.LK1_1)">
                  <el-option
                    v-for="item in provences"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
                <el-select v-model="formData.LK1_2" placeholder="请选择市" @change="chooseCityHandle(formData.LK1_2)">
                  <el-option
                    v-for="item in cities"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
                <el-select v-model="formData.LK1_3" placeholder="请选择区">
                  <el-option
                    v-for="item in distrusts"
                    :key="item.lid"
                    :label="item.name"
                    :value="item.lid">
                  </el-option>
                </el-select>
              </div>
              <el-input v-model="formData.one_text" placeholder="详细地址，请与执照地址一致"></el-input>
              <div class="map-box" id="map-container">
                <map-box></map-box>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="small-box">
          <h4 class="info-title">以下为选填</h4>
          <el-row>
            <el-col :span="6"><h3 class="title">施工等级资质</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.ConstructQuay" placeholder="请于执照一致"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6"><h3 class="title">公司座机</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.gszj" placeholder="区号+座机号"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6"><h3 class="title">公司邮箱</h3></el-col>
            <el-col :span="18">
              <el-input v-model="formData.company_email" placeholder="公司指定联系邮箱"></el-input>
            </el-col>
          </el-row>
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
  import {commons} from '@/components/index.js'
  import {getProvence, getCity, getDistrust} from '@/api/api'

  export default {
    // name: 'base-info'1,
    data() {
      return {
        formData:{
          companyname:'',
          BelongCity:'',
          BelongCounty:'',
          BelongProvince:'',
          chargePersonPhone:'',
          ConstructQuay:'',
          branchname:'',
          one_text:'',
          LK1_1: [],
          LK1_2: [],
          LK1_3: [],
          BankNo:'',
          fzrxm:'',
          company_email:'',
          gszj:'',
          openaccount:''

        },
        provences: [],
        cities: [],
        distrusts: [],
      };
    },
    created() {
      if(this.$route.name == 'joined.baseinfo'){
        // todo 获取
               
      }
      this.getProvenceHandle()
    },
    components: {
      'map-box': commons.MapBox
    },
    methods: {
      // chooseProvencehandle
      chooseProvencehandle(val) {
        this.getCityHandle({id: val})
      },
      // chooseCityHandle
      chooseCityHandle(val) {
        this.getDistrustHandle({id: val})
      },
      // 省
      getProvenceHandle() {
        getProvence()
          .then((result) => {
            this.provences = result
          })
      },
      // 市
      getCityHandle(params) {
        getCity(params)
          .then((result) => {
            this.cities = result
          })
      },
      // 区s、
      getDistrustHandle(params) {
        getDistrust(params)
          .then((result) => {
            this.distrusts = result
          })
      },
      goApplyInfo() {
        this.$router.go(-1)
      },
      goDetailInfo() {
        if(this.$route.name == 'apply.baseinfo'){
          this.$router.push({name: 'apply.detailinfo',params:this.formData})
        }
        if(this.$route.name == 'joined.baseinfo'){
          this.$router.push({name: 'joined.detailinfo',params:this.formData})
        }

      },
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/style/config";
  // 标题
  .el-input,.el-cascader {
    margin-bottom: 20px;
    input{
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
      padding-right:150px;
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
