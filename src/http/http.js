import axios from 'axios'
// // import router from '../router'
import {
  Message
} from 'element-ui'
axios.defaults.timeout = 50000

// http请求拦截器
axios.interceptors.request.use(config => {
  // 添加请求头
  config.headers['Authorization'] = localStorage.getItem('Authorization')
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截
axios.interceptors.response.use(data => {
  if (data.headers.renewtoken) {
    localStorage.setItem('Authorization', 'Bearer' + data.headers.renewtoken)
  }
  // 拦截后端返回code,异常处理
  // 后端请求code 枚举值
  // 200     正常访问
  // 400     无效或错误的参数
  // 401     需要提供凭证
  // 403     无权限访问
  // 500     服务器内部错误
  let msg
  let errordata
  switch (data.data.code) {
    case 200:
      return data
    case 400:
      msg = data.data.msg ? data.data.msg : '无效或错误的参数'
      Message.error({
        message: msg
      })
      errordata = {
        code: 400,
        message: msg,
        url: data.config.url
      }
      console.error(errordata)
      return data
    case 401:
      msg = data.data.msg ? data.data.msg : '需要提供凭证'
      // 临时的解决方案
      localStorage.removeItem('donothing')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('Authorization')
      localStorage.removeItem('companyInvite')
      Message.error({
        message: msg
      })
      errordata = {
        code: 401,
        message: msg,
        url: data.config.url
      }
      console.error(errordata)
      return data
    case 403:
      msg = data.data.msg ? data.data.msg : '无权限访问'
      Message.error({
        message: msg
      })
      errordata = {
        code: 403,
        message: msg,
        url: data.config.url
      }
      console.error(errordata)
      return data
    case 500:
      msg = data.data.msg ? data.data.msg : '服务器内部错误'
      Message.error({
        message: msg
      })
      errordata = {
        code: 500,
        message: msg,
        url: data.config.url
      }
      console.error(errordata)
      return data
    case 20180920:
      localStorage.clear()
      // router.push('/login')
      return data
    default:
      return data
  }
}, error => {
  // 错误处理
  if (error) {
    let err = error.toString()
    if (err.indexOf('Network Error') !== -1) {
      localStorage.clear()
      // router.push('/login')
    }
    Message.error({
      message: error.toString()
    })
  }
  let errorData = {
    code: error.toString().split('code ')[1],
    message: error.toString(),
    url: window.location.href
  }
  console.error(errorData)
  return Promise.reject(error)
})
export default axios
