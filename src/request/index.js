
import axios from './requestInstance';
import {getCookie,setCookie} from "@/config/util";

axios.interceptors.request.use((config) =>{
  // loadingInstance = Loading.service({
  //   fullscreen:false
  // });
  // let token_key = getCookie('token_key');
  // config.headers['token_key'] = token_key;

  return config;
},(error)=>{
  return Promise.reject({
    msg:'request err:' + error
  })
})

const Request = axios


export default Request;

