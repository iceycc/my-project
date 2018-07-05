import axios from 'axios'
// import qs from 'qs'
import Config from './requestOption'
// import { Loading } from 'element-ui';
// import {EventBus,Constants} from "../config/index"
import EventBus from '@/config/EventBus'

const _axios = axios.create(Config)

//
// var loadingInstance
_axios.interceptors.request.use((config) =>{
  // loadingInstance = Loading.service({
  //   fullscreen:false
  // });
  // let token = getCookie('token');
  // config.headers['token'] = token;
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

    if (response.data instanceof Array) {
        // 用于拦截地区请求接口的问题
        return response.data;

    }
    else if (response.data.code == 1) {
        return response.data;
    }
    else if (response.data.code == 502) {
        EventBus.$emit('notice', {
            type: 'message',
            message: '账号登陆状态已经过期，请重新登陆'
        })

        let host = window.location.host
        window.location.href = host + '/#/login'
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
    //   // console.log(error)
    // return error;
});

export default _axios;
