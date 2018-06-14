// state，驱动应用的数据源
export default {
  count:0,
  sign:'',
  uid:'21212',// 登陆的公司的uid
  email:'',// 登陆公司的email
  settled_progress:'',// 登陆公司的状态
  // 第一页 基本信息
  formData1: {
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
    company_type: 1
  },
  // 第二页 资质信息
  formData2: {
    company_corporate: '',
    LegalCardIdImg: '',
    LegalCardIdContraryImg: '',
    ConstructQuayPhotoImg: '',
    LegalIdentityCard: '',
    yyzzImg: '',
    yyzzbh: '',
    corporate_mobile:''
  },
  //


}
