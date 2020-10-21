import axios from "axios"

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    // baseURL:"",
    baseURL:`http://${process.env.VUE_APP_BASE_URL}/api/`,
    timeout:5000,
    // xsrfCookieName:document.querySelector('#csrf-token').getAttribute('content')
  })
//    axios拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log(process.env);
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}