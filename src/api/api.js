import Request from '../request'
// // 设置请求的基准路径
// axios.defaults.baseURL = 'http://merchant.uzhuang.com/v1/'
// // 拦截器处理token
// axios.interceptors.request.use(function (config) {
//
//   // 获取当前是否存在token
//   // let token = localStorage.getItem('mytoken')
//   // if (token) {
//   //   // Authorization 请求头的键是前后台约定
//   //   config.headers['Authorization'] = token
//   // }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })
const Method = {
  getIndexInfos: 'default/index',// 首页状态卡信息
  getOrderList: 'order/index-data',// 获取订单列表
  getAccountData: 'shoppingunit/account',// 获取账户资料
  postFeedBack:'companysetup/feedback',// 提交商户意见发聩
  doOrderSearch:'order/search/', // 搜索框搜索
  doOrderAppeal:'order/appeal',// 点击申诉
  doOrderScreen:'order', //订单筛选状态
  // 账户中心
  getCompanyMoney:'accountcenter/company-money', // 用户余额与质保金接口
  getAssignmentRecord:'accountcenter/assignment-record', // 商户余额消费记录
  getRechargeRecord:'accountcenter/record', // 商户充值记录
  getBillList:'bill/bill',  // 账户中心-账单列表
  getMonthbil:'bill/monthbill',  // 账户中心-账单列表

  // 设置
  getCompanysSetup:'companysetup/setup', // 承接管理页面 todo
  // 安全中心
  getPicCode:'companysetup/showimg', // 修改密码时获取图片验证码 todo
  getMsgCode:'companysetup/sendsms',  // 修改密码时的短信验证码 todo 404
  bindWxAccount:'wechat/bind-account', //  安全中心绑定微信账号  todo 这个咋整
  getWxQrcode:'wechat/get-qrcode',    // 安全中心获取绑定微信二维码 ok
  getIfBingWx:'wechat/wechat-openid',  // 查询是否绑定微信账号 ok

   getNoticeList:'default/get-message', // 获取通知列表





}

// 登陆功能
export const login = (params) => {
  return 1
}
// 首页状态卡信息
export const getIndexInfos = (params) => {
  return Request.get(Method.getIndexInfos, {params})
    .then((result) => {
      return result.data
    })
}

// 获取订单列表
// params isindex = 1 首页
export const getOrderList = (params) => {
  return Request.get(Method.getOrderList, {params})
    .then((result) => {
      return result
    })
}
// 设置页面 获取账户资料
export const getAccountData = (params) => {
  return Request.get(Method.getAccountData, {params})
    .then((result) => {
      return result.data
    })
}
// 商户提交意见反馈
export const postFeedBack = (params) => {
  return Request.post(Method.postFeedBack,params)
    .then((result)=>{
      return result.data
    })
}
// 搜索框搜索
export const doOrderSearch = (params) => {
  return Request.get(Method.doOrderSearch + `${params.value}`,{params:params.data})
    .then((result)=>{
      return result
    })
}

// 点击申诉 todo
export const doOrderAppeal = (params) => {
  return Request.post(Method.doOrderAppeal,params)
    .then((result) => {
      return result.data
    }).catch((err)=>{
      return err
    })
}

// 点单筛选状态
export const doOrderScreen = (params) => {
  return Request.get(Method.doOrderScreen + `/screen/${params.status}`,{params:params.data})
    .then((result)=>{
      return result
    })
}
//  商户余额消费记录  todo
export const getAssignmentRecord = (params) => {
  return Request.get(Method.getAssignmentRecord,{params})
    .then((result)=>{
      return result.data
    })
}
// 商户账单充值记录
export const getRechargeRecord = (params) => {
  return Request.get(Method.getRechargeRecord,{params})
    .then((result)=>{
      return result.data
    })
}
// 获取用户余额与质保金接口
export const getCompanyMoney = (params) => {
  return Request.get(Method.getCompanyMoney,{params})
    .then((result)=>{
      return result.data
    })
}
// 账户中心 账单列表
export const getBillList = (params) => {
  return Request.get(Method.getBillList,{params})
    .then((result)=>{
      return result.data
    })
}
// 账单月份详情
export const getMonthbil = (params) => {
  return Request.get(Method.getMonthbil,{params})
    .then((result)=>{
      return result.data
    })
}

// 承接管理页面
export const getCompanysSetup = (params) => {
  return Request.get(Method.getCompanysSetup,{params})
    .then((result)=>{
      return result.data
    })
}

// 安全中心查看是否绑定微信
export const getIfBingWx = (params)=>{
  return Request.get(Method.getIfBingWx,{params})
    .then((result)=>{
      return result
    })
}

// 安全中心获取绑定微信二维码
export const getWxQrcode = (params) =>{
  return Request.get(Method.getWxQrcode,{params})
    .then((result)=>{
      return result
    })
}
// 获取修改密码时的图片验证码
export const getPicCode = (params) => {
  return Request.get(Method.getPicCode,{params})
    .then((result)=>{
      return result.data
    })
}

// 修改密码时 获取验证码
export const getMsgCode = (params) =>{
  return Request.post(Method.getMsgCode,params)
    .then((result)=>{
      return result.data
    })
}
// 接触微信绑定 todo

// 更改微信绑定 todo


// 获取通知列表
export const getNoticeList = (params) =>{
  return Request.get(Method.getNoticeList,params)
    .then((result)=>{
      return result.data
    })
}


