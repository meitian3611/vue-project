import Axios from 'axios'

/**
 * 用户登录
 * @param {Object} data
 */
const Login = (data) => { // 使用正向代理3000端口号上
//   return Axios.post('http://localhost:8080/api/login', data)
  return Axios.post('/api/login', data)
}

// 普通暴露，可以在引用的时候使用解构赋值
export { Login }
