<template>
  <div id="register-page">
      <div class="am">
        <div class="am-list"></div>
        <div class="msg-tip">
          "验证码已发送，可能会有延后请耐心等待"
        </div>
        <button class="am-button"><router-link to="/login">同意并注册</router-link></button>
        <div class="agreement">
          <span>
            "我已阅读接受"<a href="https://sale.damai.cn/contents/4677/13574.html" target="_blank">《大麦网会员服务协议》</a>"及"
            <a href="https://sale.damai.cn/contents/4677/13572.html" target="_blank">《隐私专项条款》</a>"并同意自动注册成为会员"
          </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#register-page{
  .am{
    .am-list{
      width: 100%;
    }
  }
}
</style>
