import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'
import { Login } from '../api/user'

Vue.use(Vuex)

const userInfo = window.localStorage.getItem('userInfo')
const token = window.localStorage.getItem('token')

export default new Vuex.Store({
  state: {
    userInfo: userInfo || null,
    token: token || null
  },
  mutations: {
    LOGIN (state, payload) {
      state.userInfo = payload.userInfo
      state.token = payload.token
    }
  },

  actions: {
    loginAsync ({ commit }, { username, password, callback }) {
      Login(
        { username, password }
        // {username: payload.username,
        // password: payload.password}
      ).then(response => {
        let result = response.data
        console.log(result)

        if (result.code === 0) {
          // 登录成功
          // 1. 将数据写入到仓库中
          // this.$store.commit('LOGIN', result.data)
          // context.commit('LOGIN', result.data)
          commit('LOGIN', result.data)
          // 2. 本地存储一份数据
          window.localStorage.setItem(
            'userInfo',
            result.data.userInfo
          )
          window.localStorage.setItem('token', result.data.token)
          // 3. 跳转回个人中心页(编程式导航)
          //    this.$router 在 vuex 中 this不是vue实例对象, 也就没有 $router 对象
          //    2种方法解决这个问题。
          //       1. 在当前文件直接将router的实例对象引入进来
          //       2. 可以实现一个callback回调函数的方法
          // router.replace('/center')
          callback()
        } else {
          // 登录失败
          alert(result.msg)
        }
      })
    }
  }
})
