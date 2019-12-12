<template>
  <div id="register-page">
    <div class="am">
      <div class="am-list">
        <div class="am-item">
          <div class="am-list-content">国家地区</div>
          <div class="am-list-extra">+86</div>
          <div class="am-list-arrow"> > </div>
        </div>
        <input v-model="tel" type="tel" placeholder="请输入手机号" class="tel">
        <input v-model="password" type="password" placeholder="请输入密码" class="password">
      </div>
      <div
        class="msg-tip"
        v-show="show"
      >
        验证码已发送，可能会有延后请耐心等待
      </div>
      <button class="am-button" @click="Register">
        <router-link to="/login">同意并注册</router-link>
      </button>
      <div class="agreement">
        <span>
          我已阅读接受<a
            href="https://sale.damai.cn/contents/4677/13574.html"
            target="_blank"
          >《大麦网会员服务协议》</a>及
          <a
            href="https://sale.damai.cn/contents/4677/13572.html"
            target="_blank"
          >《隐私专项条款》</a>并同意自动注册成为会员
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import { resg } from '../api/user'
import Axios from 'axios'
export default {
  data () {
    return {
      show: false,
      tel: '',
      password: ''
    }
  },
  methods: {
    Register () {
      Axios.post('/api/regist', {
        username: this.tel,
        password: this.password
      })
    }
  }
}
</script>

<style lang="scss">
#register-page {
  padding: 0 20px;
  .am {
    .am-list {
      .am-item {
        width: 100%;
        height: 54px;
        display: flex;
        line-height: 54px;
        text-align: center;
        justify-content: space-between;
        border-bottom: 1px solid #e7e7e7;
        .am-list-content {
          font-size: 16px;
        }
        .am-list-extra {
          margin-left: 220px;
          color: #888;
          font-size: 14px;
        }
        .am-list-arrow {
          color: #888;
          font-size: 20px;
        }
      }
      input{
        width: 100%;
        height: 54px;
        line-height: 54px;
        color: #ccc;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid #e7e7e7;
      }
    }
    .msg-tip{
      height: 30px;
      line-height: 30px;
      color: #999;
    }
    .am-button {
      width: 100%;
      height: 48px;
      font-size: 18px;
      line-height: 48px;
      text-align: center;
      margin: 26px 0 10px;
      background: #FF1268;
      border: none;
      border-radius: 5px;
      color: #fff;
    }
    .agreement {
      span{
        color: #666;
        a {
        color: #ff1268;
      }
      }
    }
  }
}
</style>
