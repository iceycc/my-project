import axios from 'axios'
import EventBus from '../config/EventBus'
import {getCookie,removeCookie} from "../config/util";
import Qs from 'qs';

function Interceptors(_axios){
    _axios.interceptors.request.use((config) =>{
        // loadingInstance = Loading.service({
        //   fullscreen:false
        // });
        let token = getCookie('token');

        if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            config.headers.token = token;
        }
        return config;
    },(error)=>{
        return Promise.reject({
            msg:'request err:' + error
        })
    })
// 添加响应拦截器
    _axios.interceptors.response.use((response) => {
        // 对响应数据做点什么
        // sign过期或者不正确时提醒重新登陆，移除当前的 sign
        //   loadingInstance.close();
        console.log(response.data.code);
        if (response.data instanceof Array) {
            // 用于拦截地区请求接口的问题
            return response.data;
        }
        else if (response.data.code == 502) {
            EventBus.$emit('notice', {
                type: 'message',
                message: '账号登陆状态已经过期，请重新登陆'
            })
            removeCookie('token')
        }
        else if (response.data.code == 1) {
            return response.data;
        }

        else {
            EventBus.$emit('notice', {
                type: 'message',
                message: response.data.message
            })
            return response.data;
        }
    }, (error) => {
        // 对响应错误做点什么
        // loadingInstance.close();

        EventBus.$emit('notice', {
            type: 'message',
            message: '未知错误'
        })
        return Promise.reject(error);
        //   console.log(error)
        // return error;
    });

}


const API_host = process.env.API_HOST
let config = {
    method: 'post',
    baseURL: API_host + 'v1/',
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    // `transformRequest`允许在请求数据发送到服务器之前对其进行更改
    // 这只适用于请求方法'PUT'，'POST'和'PATCH'
    // 数组中的最后一个函数必须返回一个字符串，一个 ArrayBuffer 或一个 Stream
    transformRequest: [function (data) {
        if (data) {
            data = Qs.stringify(data);
            return data;
        } else {
            return;
        }
    }],
    // `transformResponse`允许在 then / catch之前对响应数据进行更改
    transformResponse: [function (data) {
        return data;
    }],
    // `paramsSerializer`是一个可选的函数，负责序列化`params`
    paramsSerializer: function (params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'});
    },
    // `timeout`指定请求超时之前的毫秒数。
    timeout: 10000,
    // `withCredentials`指示是否跨站点访问控制请求
    withCredentials: false,
    // “responseType”表示服务器将响应的数据类型
    // 包括 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json',
    //打开会多一次 options请求
    /*    // `onUploadProgress`允许处理上传的进度事件
        onUploadProgress: function (progressEvent) {
        },
        // `onDownloadProgress`允许处理下载的进度事件
        onDownloadProgress: function (progressEvent) {
            // Do whatever you want with the native progress event
        },*/
    maxContentLength: 2000,
    // `validateStatus`定义是否解析或拒绝给定的promise
    validateStatus: function (status) {
        return status >= 200 && status < 300;
    },
    // `maxRedirects`定义在node.js中要遵循的重定向的最大数量。
    maxRedirects: 5,
    // 自定义参数部分
    custom: {
        handleError: true //是否在interceptors处理错误状态.
    },
    // proxy: {
    //   host: '127.0.0.1',
    //   port: 9000,
    //   auth : {
    //     username: 'mikeymike',
    //     password: 'rapunz3l'
    //   }
    // },
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},

}

var Request = axios.create(config)
var RequestT = axios.create(config)
Interceptors(Request)
Interceptors(RequestT)


const Method = {
  getIndexInfos: 'default/index',// 首页状态卡信息
  getOrderList: 'order/index-data',// 获取订单列表
  getAccountData: 'shoppingunit/account',// 获取账户资料
  postFeedBack: 'companysetup/feedback',// 提交商户意见发聩
  doOrderSearch: 'order/search/', // 搜索框搜索
  doOrderAppeal: 'order/appeal',// 点击申诉
  doOrderScreen: 'order', //订单筛选状态
  getOrderInfo: '/order/info/', // 获取订单详情
  // 账户中心
  getCompanyMoney: 'accountcenter/company-money', // 用户余额与质保金接口
  getAssignmentRecord: 'accountcenter/assignment-record', // 商户余额消费记录
  getRechargeRecord: 'accountcenter/record', // 商户充值记录
  getBillList: 'bill/bill',  // 账户中心-账单列表
  getMonthbil: 'bill/monthbill',  // 账户中心-账单列表

  // 设置
  getCompanysSetup: 'companysetup/setup', // 承接管理页面
  // 安全中心
  getPicCode: 'companysetup/showimg', // 修改密码时获取图片验证码 todo
  doCheckImg:'companysetup/checkimg',  // 验证图片验证码是否正确 todo
  getMsgCode: 'companysetup/sendsms',  // 修改密码时的短信验证码 todo 404
  bindWxAccount: 'wechat/bind-account', //  安全中心绑定微信账号
  getWxQrcode: 'wechat/get-qrcode',    // 安全中心获取绑定微信二维码 ok
  getIfBingWx: 'wechat/wechat-openid',  // 查询是否绑定微信账号 ok
  relieveBind: 'wechat/relievebind', // 解除绑定 ok
  getNoticeList: 'default/get-message', // 获取通知列表
  getNoticeDetail: 'default/set-read', // 获取通知列表
  doModifyPassword:'companysetup/modify-password', // 修改密码 todo
  doRecharge:'pay/llpay',// todo 充值

  postPerfectInfo: 'companysetup/perfect',// 承接管理信息添加修改
  postCompanyMessage:'shoppingunit/companymessageadd',// 添加/修改账户资料
  putCompanyMessage1:'shoppingunit/companymessageadd', // 添加/修改账户资料第一页面
  putCompanyMessage2:'shoppingunit/companymessageaddtwo', // 添加/修改账户资料第一页面

  postImg:'uploadimg/uploadimg',

  postSetupPerfect:'companysetup/perfect', // 承接管理信息添加/修改 todo


  // 获取省市区
  // 省http://service.intra.uzhuang.com/index.php?r=area/get-provence
  // 市http://service.intra.uzhuang.com/index.php?r=area/get-city&id=2
  // 区http://service.intra.uzhuang.com/index.php?r=area/get-distrust&id=3360
  getProvence:'http://service.intra.uzhuang.com/index.php?r=area/get-provence',
  getCity:'http://service.intra.uzhuang.com/index.php?r=area/get-city',
  getDistrust:'http://service.intra.uzhuang.com/index.php?r=area/get-distrust',
  // 登陆
  doLogin:'login/login',
  // 注册
  doRegister:'login/register',

  // 充值密码时 发送邮件
  sendEmail:'login/reset-code',
  // 重置密码
  rePassword:'login/reset-pwd',

  // 激活
  activationEmail:'',
  // 退出
  logout:'companysetup/logout',
  // 邮箱激活校验
  checkEmailHandel:'http://merchant.uzhuang.com/v1/login/activeregister',
  // 再次发送激活邮件
  activeRegister:'http://merchant.uzhuang.com/v1/login/againsendemail'
}

// 登陆功能
export const doLogin = (params) => {
  return RequestT.post(Method.doLogin,params)
    .then((result)=>{
      EventBus.$emit('notice',{
        type:'message',
        message:result.message
      })
      if(result.code == 1){
        return result
      }
    })
}
// 邮箱激活校验 点击邮件激活账号
export const checkEmailHandel = (params) => {
  return RequestT.get(Method.checkEmailHandel,{params})
    .then((result)=>{
      //0：过期，1：账号已激活，2：激活成功
      return result
    })
}
// 再次发送激活邮件
export const activeRegister = (params) => {
  return RequestT.get(Method.activeRegister,{params})
    .then((result)=>{
      return result
    })
}
// 退出
export const logout = (params) => {
  return Request.get(Method.logout,{params})
    .then((result)=>{
      return result
    })
}
// 注册
export const doRegister = (params) => {
  return RequestT.post(Method.doRegister,params)
    .then((result)=>{
      return result
    })
}
// 发送邮件 重置密码邮箱验证码
export const sendEmail = (params) => {
  return RequestT.get(Method.sendEmail,{params})
    .then((result)=>{
      return result
    })
}
// 重置密码
export const rePassword = (params) => {
  return Request.post(Method.rePassword,params)
    .then((result)=>{
      return result
    })
}
//
export const activationEmail = (params) => {
  return RequestT.post(Method.activationEmail,params)
    .then((result)=>{
      return result
    })
}
// 省
export const getProvence = () =>{
  return RequestT.get(Method.getProvence,{})
    .then((result)=>{
      return result
    })
}
// 市 &id=2
export const getCity = (params) =>{
  return RequestT.get(Method.getCity,{params})
    .then((result)=>{
      return result
    })
}
// 区 &id=3360
export const getDistrust = (params) =>{
  return RequestT.get(Method.getDistrust,{params})
    .then((result)=>{
      return result
    })
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
  return Request.post(Method.postFeedBack, params)
    .then((result) => {
      return result
    })
}
// 搜索框搜索
export const doOrderSearch = (params) => {
  return Request.get(Method.doOrderSearch + `${params.value}`, {params: params.data})
    .then((result) => {
      return result
    })
}

// 点击申诉 todo
export const doOrderAppeal = (params) => {
  return Request.post(Method.doOrderAppeal, params)
    .then((result) => {
      return result.data
    }).catch((err) => {
      return err
    })
}

// 点单筛选状态
export const doOrderScreen = (params) => {
  return Request.get(Method.doOrderScreen + `/screen/${params.status}`, {params: params.data})
    .then((result) => {
      return result
    })
}
//  商户余额消费记录  todo
export const getAssignmentRecord = (params) => {
  return Request.get(Method.getAssignmentRecord, {params})
    .then((result) => {
      return result.data
    })
}
// 商户账单充值记录
export const getRechargeRecord = (params) => {
  return Request.get(Method.getRechargeRecord, {params})
    .then((result) => {
      return result.data
    })
}
// 获取用户余额与质保金接口
export const getCompanyMoney = (params) => {
  return Request.get(Method.getCompanyMoney, {params})
    .then((result) => {

      return result.data
    })
}
// 账户中心 账单列表
export const getBillList = (params) => {
  return Request.get(Method.getBillList, {params})
    .then((result) => {
      return result.data
    })
}
// 账单月份详情
export const getMonthbil = (params) => {
  return Request.get(Method.getMonthbil, {params})
    .then((result) => {
      return result.data
    })
}

// 承接管理页面需信息
export const getCompanysSetup = (params) => {
  return Request.get(Method.getCompanysSetup, {params})
    .then((result) => {
      return result.data
    })
}

// 安全中心查看是否绑定微信
export const getIfBingWx = (params) => {
  return Request.get(Method.getIfBingWx, {params})
    .then((result) => {
      return result
    })
}

// 安全中心获取绑定微信二维码
export const getWxQrcode = (params) => {
  return Request.get(Method.getWxQrcode, {params})
    .then((result) => {
      return result
    })
}
// 获取修改密码时的图片验证码
export const getPicCode = (params) => {
  return Request.get(Method.getPicCode, {params})
    .then((result) => {
      return result.data
    })
}

// 修改密码时 获取验证码
export const getMsgCode = (params) => {
  return Request.post(Method.getMsgCode, params)
    .then((result) => {
      return result.data
    })
}
// 解除微信绑定
export const relieveBind = () => {
  return Request.get(Method.relieveBind)
    .then((result) => {
      return result
    })
}
// 更改微信绑定 todo


// 获取通知列表
export const getNoticeList = (params) => {
  return Request.get(Method.getNoticeList,{params})
    .then((result) => {
      return result.data
    })
}// 获取通知列表
export const getNoticeDetail = (params) => {
  return Request.get(Method.getNoticeDetail,{params})
    .then((result) => {
      return result.data
    })
}

// 承接管理信息添加 修改  todo
export const postPerfectInfo = (params) => {
  return Request.post(Method.postPerfectInfo, params)
    .then((result) => {
      return result.data
    })
}

// 添加/修改账户资料1
export const putCompanyMessage1 = (params,config) =>{
  return Request.post(Method.putCompanyMessage1, params,config)
    .then((result) => {
      return result
    })
}

// 添加/修改账户资料2
export const putCompanyMessage2 = (params,config) =>{
  return Request.post(Method.putCompanyMessage2, params,config)
    .then((result) => {
      return result
    })
}

// 添加/修改账户资料
export const postCompanyMessage = (params,config) =>{
  return Request.post(Method.postCompanyMessage, params,config)
    .then((result) => {
      return result.data
    })
}

// 上传图片
export const postImg = (params,config) =>{
  return Request.post(Method.postImg, params,config)
    .then((result) => {
      return result
    })
}
// 承接管理信息添加/修改
export const postSetupPerfect = (params) =>{
  return Request.post(Method.postSetupPerfect, params)
    .then((result) => {
      return result
    })
}


// 修改密码
export const doModifyPassword = (params) => {
  return Request.post(Method.doModifyPassword, params)
    .then((result) => {
      return result
    })
}
// 充值
export const doRecharge = (params) => {
  return Request.post(Method.doRecharge, params)
    .then((result) => {
      return result
    })
}

// 验证图片验证码是否正确
export const doCheckImg = (params) =>{
  return Request.get(Method.doCheckImg, {params})
    .then((result) => {
      return result
    })
}


// 获取订单详情
export const getOrderInfo = (params) =>{
  return Request.get(Method.getOrderInfo + params.id, {params:params.data})
    .then((result) => {
      return result
    })
}

