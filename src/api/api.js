import axios from 'axios'
// 设置请求的基准路径
axios.defaults.baseURL = 'http://merchant.uzhuang.com/v1/'
// 拦截器处理token
axios.interceptors.request.use(function (config) {
  // 获取当前是否存在token
  // let token = localStorage.getItem('mytoken')
  // if (token) {
  //   // Authorization 请求头的键是前后台约定
  //   config.headers['Authorization'] = token
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 登陆功能
export const login = (params) => {

  return 1
}
// 首页状态卡信息
export const getIndexInfos = (params) => {
  return axios.get('default/index',{params})
    .then((result)=>{
      return result.data
    })
}

