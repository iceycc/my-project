import axios from 'axios'
import qs from 'qs'
import Config from './requestOption'
import { Loading } from 'element-ui';
import {EventBus,Constants} from "../config/index"
const _axios = axios.create(Config)

//
var loadingInstance
_axios.interceptors.request.use((config) =>{
  // loadingInstance = Loading.service({
  //   fullscreen:false
  // });
  return config;
},(error)=>{
  return Promise.reject({
    msg:'request err:' + error
  })
})
// 添加响应拦截器
_axios.interceptors.response.use( (response)=>{
  // 对响应数据做点什么
  // sign过期或者不正确时提醒重新登陆，移除当前的 sign
  //   loadingInstance.close();
    return response.data;
}, (error) =>{
  // 对响应错误做点什么
  // loadingInstance.close();
  return Promise.reject(error);
  // return Promise.reject(error);
});

export default _axios;
