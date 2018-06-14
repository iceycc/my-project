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
              <el-input v-model="formData.companyname" placeholder="请与执照一致" auto-complete="off"></el-input>
            </el-form-item>
          </div>
          <!--店铺负责人-->
          <div class="small-box">
            <el-form-item label="商铺负责人" prop="fzrxm">
              <el-input v-model="formData.fzrxm" placeholder="业务对接人姓名" auto-complete="name"></el-input>
            </el-form-item>
            <el-form-item label="" prop="chargePersonPhone">

              <el-input v-model="formData.chargePersonPhone" placeholder="手机号" auto-complete="off"></el-input>
            </el-form-item>
          </div>
          <!--公司开户银行-->
          <div class="small-box">

            <!--开户银行-->
            <el-form-item label="公司开户银行" prop="openaccount">
              <el-select v-model="formData.openaccount" placeholder="请选择开户银行"
                         @change="" auto-complete="off">
                <el-option
                  v-for="item in openaccounts"
                  :key="item.value"
                  :label="item.text"
                  :value="item.text"
                  auto-complete="off"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <!--开户账号-->
            <el-form-item label="开户账号" prop="BankNo">
              <el-input v-model="formData.BankNo" placeholder="输入卡号" auto-complete="off"></el-input>
            </el-form-item>
            <!--开户地址-->
            <div style="display:flex ">
              <div style="margin-bottom: 20px;display: flex">
                <el-form-item prop="BelongProvince" label="开户地址">
                  <el-select v-model="formData.BelongProvince" placeholder="请选择省"
                             @change="chooseProvencehandle(formData.BelongProvince,1)" auto-complete="off">
                    <el-option
                      v-for="item in provences1"
                      :key="item.lid"
                      :label="item.name"
                      :value="item.lid"
                      auto-complete="off"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="BelongProvince">
                  <el-select v-model="formData.BelongCity" placeholder="请选择市"
                             @change="chooseCityHandle(formData.BelongCity,1)" auto-complete="off">
                    <el-option
                      v-for="item in cities1"
                      :key="item.lid"
                      :label="item.name"
                      :value="item.lid"
                      auto-complete="off"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="BelongProvince">
                  <el-select v-model="formData.BelongCounty" placeholder="请选择区" auto-complete="off">
                    <el-option
                      v-for="item in distrusts1"
                      :key="item.lid"
                      :label="item.name"
                      :value="item.lid"
                      auto-complete="off"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <el-form-item label="" prop="branchname">
              <el-input v-model="formData.branchname" placeholder="开户支行名称" auto-complete="off"></el-input>
            </el-form-item>
          </div>
          <!--公司地址-->
          <div class="small-box">


            <div style="display:flex ">

              <div style="margin-bottom: 20px;display: flex" class="select-down">
                <el-form-item prop="LK1_1" label="公司地址">

                  <el-select v-model="formData.LK1_1" placeholder="请选择省"
                             @change="chooseProvencehandle(formData.LK1_1,2)" auto-complete="off">
                    <el-option
                      v-for="item in provences2"
                      :key="item.lid"
                      :label="item.name"
                      :value="item.lid"
                      auto-complete="off"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="LK1_1">

                  <el-select v-model="formData.LK1_2" placeholder="请选择市" @change="chooseCityHandle(formData.LK1_2,2)"
                             auto-complete="off">
                    <el-option
                      v-for="item in cities2"
                      :key="item.lid"
                      :label="item.name"
                      :value="item.lid"
                      auto-complete="off"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="LK1_1">

                  <el-select v-model="formData.LK1_3" placeholder="请选择区" auto-complete="off">
                    <el-option
                      v-for="item in distrusts2"
                      :key="item.lid"
                      :label="item.name"
                      :value="item.lid"
                      auto-complete="off"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>

              </div>

            </div>
            <el-form-item label="详细地址" prop="one_text">
              <el-input v-model="formData.one_text" placeholder="详细地址，请与执照地址一致" auto-complete="off"></el-input>
            </el-form-item>

            <div class="map-box" id="map-container">
              <map-box></map-box>
            </div>
          </div>
          <div class="small-box">
            <h4 class="info-title">以下为选填</h4>
            <el-form-item label="施工等级资质">
              <!--<el-input v-model="formData.ConstructQuay" placeholder="请于执照一致" auto-complete="off"></el-input>-->
              <el-radio-group v-model="formData.ConstructQuay">
                <el-radio-button label="1">一级</el-radio-button>
                <el-radio-button label="2">二级</el-radio-button>
                <el-radio-button label="3">三级</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="公司座机">
              <el-input v-model="formData.gszj" placeholder="请于执照一致" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="公司邮箱">
              <el-input v-model="formData.company_email" placeholder="公司指定联系邮箱" auto-complete="off"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>

    <div class="ai-btn">
      <el-button @click="goApplyInfo">上一步</el-button>
      <el-button @click="submitForm('formData')" size="medium" type="primary">下一步</el-button>
    </div>
  </div>
</template>
<script>
  import {commons} from '@/components/index.js'
  import EventBus from '@/config/EventBus'
  import {getProvence, getCity, getDistrust, getAccountData, putCompanyMessage1} from '@/api/api'
  import {checkEmpty,checkTel,checkSelect} from '@/config/util.js' // 引入校验规则等
  export default {
    // name: 'base-info'1,
    data() {
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
          openaccount: '',
          company_type: 1,
          company_status: 1,
          isUpdate: 1
        },
        rules: {
          companyname: [{validator: checkEmpty, trigger: 'blur'}],
          fzrxm: [{validator: checkEmpty, trigger: 'blur'}],
          chargePersonPhone: [{validator: checkTel, trigger: 'blur'}],
          BankNo: [{validator: checkEmpty, trigger: 'blur'}],
          branchname: [{validator: checkEmpty, trigger: 'blur'}],
          one_text: [{validator: checkEmpty, trigger: 'blur'}],
          ConstructQuay: [{validator: checkEmpty, trigger: 'blur'}],
          gszj: [{validator: checkEmpty, trigger: 'blur'}],
          company_email: [{validator: checkEmpty, trigger: 'blur'}],
          LK1_1: [{validator: checkSelect, trigger: 'change'}],
          BelongProvince: [{validator: checkSelect, trigger: 'change'}],
          openaccount: [{validator: checkSelect, trigger: 'change'}],
        },
        provences1: [],
        provences2: [],
        cities1: [],
        cities2: [],
        distrusts1: [],
        distrusts2: [],
        oldInfos: [],
        openaccounts: [
          {
            value: 'CDB',
            text: '国家开发银行'
          },
          {
            value: 'ICBC',
            text: '中国工商银行'
          },
          {
            value: 'ABC',
            text: '中国农业银行'
          },
          {
            value: 'BOC',
            text: '中国银行'
          },
          {
            value: 'CCB',
            text: '中国建设银行'
          },
          {
            value: 'PSBC',
            text: '中国邮政储蓄银行'
          },
          {
            value: 'COMM',
            text: '交通银行'
          },
          {
            value: 'CMB',
            text: '招商银行'
          },
          {
            value: 'SPDB',
            text: '上海浦东发展银行'
          },
          {
            value: 'CIB',
            text: '兴业银行'
          },
          {
            value: 'HXBANK',
            text: '华夏银行'
          },
          {
            value: 'GDB',
            text: '广东发展银行'
          },
          {
            value: 'CMBC',
            text: '中国民生银行'
          },
          {
            value: 'CITIC',
            text: '中信银行'
          },
          {
            value: 'CEB',
            text: '中国光大银行'
          },
          {
            value: 'EGBANK',
            text: '恒丰银行'
          },
          {
            value: 'CZBANK',
            text: '浙商银行'
          },
          {
            value: 'BOHAIB',
            text: '渤海银行'
          },
          {
            value: 'SPABANK',
            text: '平安银行'
          },
          {
            value: 'SHRCB',
            text: '上海农村商业银行'
          },
          {
            value: 'YXCCB',
            text: '玉溪市商业银行'
          },
          {
            value: 'YDRCB',
            text: '尧都农商行'
          },
          {
            value: 'BJBANK',
            text: '北京银行'
          },
          {
            value: 'SHBANK',
            text: '上海银行'
          },
          {
            value: 'JSBANK',
            text: '江苏银行'
          },
          {
            value: 'HZCB',
            text: '杭州银行'
          },
          {
            value: 'NJCB',
            text: '南京银行'
          },
          {
            value: 'NBBANK',
            text: '宁波银行'
          },
          {
            value: 'HSBANK',
            text: '徽商银行'
          },
          {
            value: 'CSCB',
            text: '长沙银行'
          },
          {
            value: 'CDCB',
            text: '成都银行'
          },
          {
            value: 'CQBANK',
            text: '重庆银行'
          },
          {
            value: 'DLB',
            text: '大连银行'
          },
          {
            value: 'NCB',
            text: '南昌银行'
          },
          {
            value: 'FJHXBC',
            text: '福建海峡银行'
          },
          {
            value: 'HKB',
            text: '汉口银行'
          },
          {
            value: 'WZCB',
            text: '温州银行'
          },
          {
            value: 'QDCCB',
            text: '青岛银行'
          },
          {
            value: 'TZCB',
            text: '台州银行'
          },
          {
            value: 'JXBANK',
            text: '嘉兴银行'
          },
          {
            value: 'CSRCB',
            text: '常熟农村商业银行'
          },
          {
            value: 'NHB',
            text: '南海农村信用联社'
          },
          {
            value: 'CZRCB',
            text: '常州农村信用联社'
          },
          {
            value: 'H3CB',
            text: '内蒙古银行'
          },
          {
            value: 'SXCB',
            text: '绍兴银行'
          },
          {
            value: 'SDEB',
            text: '顺德农商银行'
          },
          {
            value: 'WJRCB',
            text: '吴江农商银行'
          },
          {
            value: 'ZBCB',
            text: '齐商银行'
          },
          {
            value: 'GYCB',
            text: '贵阳市商业银行'
          },
          {
            value: 'ZYCBANK',
            text: '遵义市商业银行'
          },
          {
            value: 'HZCCB',
            text: '湖州市商业银行'
          },
          {
            value: 'DAQINGB',
            text: '龙江银行'
          },
          {
            value: 'JINCHB',
            text: '晋城银行JCBANK'
          },
          {
            value: 'ZJTLCB',
            text: '浙江泰隆商业银行'
          },
          {
            value: 'GDRCC',
            text: '广东省农村信用社联合社'
          },
          {
            value: 'DRCBCL',
            text: '东莞农村商业银行'
          },
          {
            value: 'MTBANK',
            text: '浙江民泰商业银行'
          },
          {
            value: 'GCB',
            text: '广州银行'
          },
          {
            value: 'LYCB',
            text: '辽阳市商业银行'
          },
          {
            value: 'JSRCU',
            text: '江苏省农村信用联合社'
          },
          {
            value: 'LANGFB',
            text: '廊坊银行'
          },
          {
            value: 'CZCB',
            text: '浙江稠州商业银行'
          },
          {
            value: 'DYCB',
            text: '德阳商业银行'
          },
          {
            value: 'JZBANK',
            text: '晋中市商业银行'
          },
          {
            value: 'BOSZ',
            text: '苏州银行'
          },
          {
            value: 'GLBANK',
            text: '桂林银行'
          },
          {
            value: 'URMQCCB',
            text: '乌鲁木齐市商业银行'
          },
          {
            value: 'CDRCB',
            text: '成都农商银行'
          },
          {
            value: 'ZRCBANK',
            text: '张家港农村商业银行'
          },
          {
            value: 'BOD',
            text: '东莞银行'
          },
          {
            value: 'LSBANK',
            text: '莱商银行'
          },
          {
            value: 'BJRCB',
            text: '北京农村商业银行'
          },
          {
            value: 'TRCB',
            text: '天津农商银行'
          },
          {
            value: 'SRBANK',
            text: '上饶银行'
          },
          {
            value: 'FDB',
            text: '富滇银行'
          },
          {
            value: 'CRCBANK',
            text: '重庆农村商业银行'
          },
          {
            value: 'ASCB',
            text: '鞍山银行'
          },
          {
            value: 'NXBANK',
            text: '宁夏银行'
          },
          {
            value: 'BHB',
            text: '河北银行'
          },
          {
            value: 'HRXJB',
            text: '华融湘江银行'
          },
          {
            value: 'ZGCCB',
            text: '自贡市商业银行'
          },
          {
            value: 'YNRCC',
            text: '云南省农村信用社'
          },
          {
            value: 'JLBANK',
            text: '吉林银行'
          },
          {
            value: 'DYCCB',
            text: '东营市商业银行'
          },
          {
            value: 'KLB',
            text: '昆仑银行'
          },
          {
            value: 'ORBANK',
            text: '鄂尔多斯银行'
          },
          {
            value: 'XTB',
            text: '邢台银行'
          },
          {
            value: 'JSB',
            text: '晋商银行'
          },
          {
            value: 'TCCB',
            text: '天津银行'
          },
          {
            value: 'BOYK',
            text: '营口银行'
          },
          {
            value: 'JLRCU',
            text: '吉林农信'
          },
          {
            value: 'SDRCU',
            text: '山东农信'
          },
          {
            value: 'XABANK',
            text: '西安银行'
          },
          {
            value: 'HBRCU',
            text: '河北省农村信用社'
          },
          {
            value: 'NXRCU',
            text: '宁夏黄河农村商业银行'
          },
          {
            value: 'GZRCU',
            text: '贵州省农村信用社'
          },
          {
            value: 'FXCB',
            text: '阜新银行'
          },
          {
            value: 'HBHSBANK',
            text: '湖北银行黄石分行'
          },
          {
            value: 'ZJNX',
            text: '浙江省农村信用社联合社'
          },
          {
            value: 'XXBANK',
            text: '新乡银行'
          },
          {
            value: 'HBYCBANK',
            text: '湖北银行宜昌分行'
          },
          {
            value: 'LSCCB',
            text: '乐山市商业银行'
          },
          {
            value: 'TCRCB',
            text: '江苏太仓农村商业银行'
          },
          {
            value: 'BZMD',
            text: '驻马店银行'
          },
          {
            value: 'GZB',
            text: '赣州银行'
          },
          {
            value: 'WRCB',
            text: '无锡农村商业银行'
          },
          {
            value: 'BGB',
            text: '广西北部湾银行'
          },
          {
            value: 'GRCB',
            text: '广州农商银行'
          },
          {
            value: 'JRCB',
            text: '江苏江阴农村商业银行'
          },
          {
            value: 'BOP',
            text: '平顶山银行'
          },
          {
            value: 'TACCB',
            text: '泰安市商业银行'
          },
          {
            value: 'CGNB',
            text: '南充市商业银行'
          },
          {
            value: 'CCQTGB',
            text: '重庆三峡银行'
          },
          {
            value: 'XLBANK',
            text: '中山小榄村镇银行'
          },
          {
            value: 'HDBANK',
            text: '邯郸银行'
          },
          {
            value: 'KORLABANK',
            text: '库尔勒市商业银行'
          },
          {
            value: 'BOJZ',
            text: '锦州银行'
          },
          {
            value: 'QLBANK',
            text: '齐鲁银行'
          },
          {
            value: 'BOQH',
            text: '青海银行'
          },
          {
            value: 'YQCCB',
            text: '阳泉银行'
          },
          {
            value: 'SJBANK',
            text: '盛京银行'
          },
          {
            value: 'FSCB',
            text: '抚顺银行'
          },
          {
            value: 'ZZBANK',
            text: '郑州银行'
          },
          {
            value: 'SRCB',
            text: '深圳农村商业银行'
          },
          {
            value: 'BANKWF',
            text: '潍坊银行'
          },
          {
            value: 'JJBANK',
            text: '九江银行'
          },
          {
            value: 'JXRCU',
            text: '江西省农村信用'
          },
          {
            value: 'HNRCU',
            text: '河南省农村信用'
          },
          {
            value: 'GSRCU',
            text: '甘肃省农村信用'
          },
          {
            value: 'SCRCU',
            text: '四川省农村信用'
          },
          {
            value: 'GXRCU',
            text: '广西省农村信用'
          },
          {
            value: 'SXRCCU',
            text: '陕西信合'
          },
          {
            value: 'WHRCB',
            text: '武汉农村商业银行'
          },
          {
            value: 'YBCCB',
            text: '宜宾市商业银行'
          },
          {
            value: 'KSRB',
            text: '昆山农村商业银行'
          },
          {
            value: 'SZSBK',
            text: '石嘴山银行'
          },
          {
            value: 'HSBK',
            text: '衡水银行'
          },
          {
            value: 'XYBANK',
            text: '信阳银行'
          },
          {
            value: 'NBYZ',
            text: '鄞州银行'
          },
          {
            value: 'ZJKCCB',
            text: '张家口市商业银行'
          },
          {
            value: 'XCYH',
            text: '许昌银行'
          },
          {
            value: 'JNBANK',
            text: '济宁银行'
          },
          {
            value: 'CBKF',
            text: '开封市商业银行'
          },
          {
            value: 'WHCCB',
            text: '威海市商业银行'
          },
          {
            value: 'HBC',
            text: '湖北银行'
          },
          {
            value: 'BOCD',
            text: '承德银行'
          },
          {
            value: 'BODD',
            text: '丹东银行'
          },
          {
            value: 'JHBANK',
            text: '金华银行'
          },
          {
            value: 'BOCY',
            text: '朝阳银行'
          },
          {
            value: 'LSBC',
            text: '临商银行'
          },
          {
            value: 'BSB',
            text: '包商银行'
          },
          {
            value: 'LZYH',
            text: '兰州银行'
          },
          {
            value: 'BOZK',
            text: '周口银行'
          },
          {
            value: 'DZBANK',
            text: '德州银行'
          },
          {
            value: 'SCCB',
            text: '三门峡银行'
          },
          {
            value: 'AYCB',
            text: '安阳银行'
          },
          {
            value: 'ARCU',
            text: '安徽省农村信用社'
          },
          {
            value: 'HURCB',
            text: '湖北省农村信用社'
          },
          {
            value: 'HNRCC',
            text: '湖南省农村信用社'
          },
          {
            value: 'NYNB',
            text: '广东南粤银行'
          },
          {
            value: 'LYBANK',
            text: '洛阳银行'
          },
          {
            value: 'NHQS',
            text: '农信银清算中心'
          },
          {
            value: 'CBBQS',
            text: '城市商业银行资金清算中心'
          }
        ],

      }
    },
    created() {
      // 修改
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
              openaccount: result.openaccount,
              company_type: 2,
              company_status: 1,
              isUpdate: 2,
            }
          })
      }
      this.getProvenceHandle()
    },
    components: {
      'map-box': commons.MapBox
    },
    methods: {
      checked(val) {
        if (val == '') {

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
      chooseProvencehandle(val, num) {
        this.getCityHandle({id: val}, num)
      },
      // chooseCityHandle
      chooseCityHandle(val, num) {
        this.getDistrustHandle({id: val}, num)
      },
      // 省
      getProvenceHandle() {
        getProvence()
          .then((result) => {
            console.log(result);
            this.provences1 = result
            this.provences2 = result
          })
      },
      // 市
      getCityHandle(params, num) {
        getCity(params)
          .then((result) => {
            if (num === 1) {
              this.cities1 = result
            }
            if (num === 2) {
              this.cities2 = result
            }
          })
      },
      // 区s、
      getDistrustHandle(params, num) {
        getDistrust(params)
          .then((result) => {
            if (num === 1) {
              this.distrusts1 = result
            }
            if (num === 2) {
              this.distrusts2 = result
            }
          })
      },
      goApplyInfo() {
        this.$router.go(-1)
      },
      goDetailInfo() {
        // todo: 第一页提交问题
        let params = this.formData
        putCompanyMessage1(params).then((result) => {
          console.log(result)
          EventBus.$emit('notice', {
            type: 'message',
            message: result.message
          })
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
        })
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
  }

  #map-container {
    box-sizing: border-box;
    padding-left: 100px;
    width: 100%;
    height: 400px;
    border-radius: 6px;
  }

  .ai-btn {
    margin-top: 20px;
    padding-left: 25% !important;
    button {
      width: 150px;
    }
  }

  .select-down {
    .el-form-item {
      margin-bottom: 0px !important;
      .el-form-item__content {
        margin-left: 0 !important;
      }
    }
  }

</style>
