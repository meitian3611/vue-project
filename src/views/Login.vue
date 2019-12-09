<template>
  <div id="mini-login-box">
    <div id="log-box">
      <img
        class="logo"
        src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png"
        alt=""
      >
    </div>
    <div id="login-iframe">
      <form action="">
        <div class="fm-mobile">
          <!-- <label for="" class="fm-label">
            <span>
              <label>手机号：</label>
            </span>
          </label> -->
          <div class="phone-code-select">
            <div class="phone-code">+852<i class="iconfont icon-arrow">
                <van-icon name="arrow-down" /></i>
            </div>
            <van-action-sheet
              v-model="show"
              :actions="actions"
              @select="onSelect"
            />
            <!-- <header>
                <a
                  class="cancel-btn"
                  href="javascript:void(0);"
                >取消</a>
                <a
                  class="ok-btn"
                  href="javascript:void(0);"
                >确认</a>
              </header> -->
          </div>
          <div class="input-loginId">
            <input
              type="tel"
              placeholder="请输入手机号"
              class="fm-text"
            >
            <div class="underline"></div>
          </div>
        </div>
        <div class="fm-smscode">
          <input
            type="tel"
            placeholder="请输验证码"
            class="fm-text"
          >
          <div class="send-btn">
            <a
              href="javascript:void(0);"
              class="send-btn-link"
            >获取验证码</a>
          </div>
          <div class="underline"></div>
        </div>

        <div class="fm-btn">
          <button class="fm-button">登录</button>
        </div>

        <div class="longin-link">
          <a
            href="javascript:void(0);"
            class="password-login-link"
          >账号密码登录</a>
          <a
            href=""
            class="register-link"
          >新用户注册</a>
        </div>

        <div class="sns-login">
          <div class="sns-login-title">其他方式登录</div>
          <div class="taobao-login">
            <a
              href="javascript:;"
              class="iconfont icon-taobao"
            ></a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, ActionSheet, Toast } from 'vant'

Vue.use(Icon)
Vue.use(ActionSheet)
Vue.use(Toast)
export default {
  data () {
    return {
      show: false,
      actions: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '描述信息' }
      ]
    }
  },

  methods: {
    onSelect (item) {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.show = false
      Toast(item.name)
    }
  }
}
</script>

<style lang="scss">
#mini-login-box {
  #log-box {
    width: 100%;
    height: 122px;
    background: #fff;
    text-align: center;
    .logo {
      width: 100px;
      height: 45px;
      margin-top: 38px;
    }
  }
}

#login-iframe {
  padding: 20px;
  .fm-mobile {
    border-bottom: 1px solid #ddd;
    display: flex;
    height: 42px;
    .phone-code-select {
      .phone-code {
        text-align: center;
        line-height: 42px;
        border-right: 1px solid #ccc;
        padding-right: 14px;
        font-size: 14px;
      }
      .input-loginId {
        flex: 1;
      }
    }
    .input-loginId {
      flex: 1;
      .fm-text {
        width: 100%;
        border: 0;
        line-height: 42px;
        padding-left: 14px;
        font-size: 14px;
      }
    }

    .picker-modal-container {
      overflow: hidden;
    }
  }

  .fm-smscode {
    border-bottom: 1px solid #ddd;
    display: flex;
    height: 42px;
    margin-top: 10px;
    position: relative;
    .fm-text {
      width: 100%;
      border: 0;
      line-height: 42px;
      padding-left: 10px;
      font-size: 14px;
    }

    .send-btn {
      position: absolute;
      right: 10px;
      bottom: 0px;
      height: 25px;
      line-height: 25px;
      background: #fff1f6;
      margin: 0 0 8px;
      padding: 0 10px;
      border-radius: 20px;
      a {
        color: #fc347b;
      }
    }
  }

  .fm-btn {
    .fm-button {
      width: 100%;
      height: 42px;
      font-size: 18px;
      line-height: 42px;
      text-align: center;
      background: #ff1268;
      border: 0;
      border-radius: 5px;
      margin-top: 20px;
    }
  }

  .longin-link {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    a {
      color: #999999;
      display: inline-block;
      height: 16px;
      line-height: 16px;
    }
  }

  .sns-login {
    .sns-login-title {
      font-size: 14px;
      color: #73777a;
      display: inline-block;
      text-align: center;
      position: absolute;
      box-sizing: border-box;
      left: 50%;
      margin-left: -55px;
      bottom: 70px;
    }

    .taobao-login {
      text-align: center;
      position: absolute;
      bottom: 10px;
      left: 50%;
      margin-left: -35px;
      .icon-taobao {
        width: 50px;
        height: 50px;
        font-size: 50px;
        background: orangered;
        color: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>
