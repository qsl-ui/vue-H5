/* eslint-disable */
import axios from 'axios'
import { Notify } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 30000 // request timeout
})

// 封装请求拦截
service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = '' // 请求头加入token
    config.headers['Cache-Control'] = 'no-cache' // 告知代理服务器不使用缓存
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 封装响应拦截，判断token是否过期
service.interceptors.response.use(
  response => {
    if (response.data.status_code !== 200) {
      Notify({ type: 'danger', message: '请检查接口后重试' })
    }else {
      return Promise.resolve(response)
    }
  },
  error => {
    if (error) {
      Notify({ type: 'danger', message: error.response.data.message })
      return Promise.reject(error)
    }
  })
export default service
