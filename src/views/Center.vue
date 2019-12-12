<template>
  <div class="myCenter">
    <div class="myPhoto">
      <img class="myPic" src="http://perico.damai.cn/userheadphotos/759450/151890007.jpg" alt="">
      <span class="myName" v-if="userInfo">{{userInfo}}</span>
    </div>
    <ul class="myList">
      <li>
        <router-link to="/vipcenter">会员中心<span>></span></router-link>
      </li>
      <li>
        <router-link to="myorder">我的订单<span>></span></router-link>
      </li>
      <li>
        <router-link to="coupon">优惠券<span>></span></router-link>
      </li>
      <li>
        <router-link to="myticket">我的票<span>></span></router-link>
      </li>
      <li>
        <router-link to="myconcern">我的关注<span>></span></router-link>
      </li>
      <li>
        <router-link to="recadress">收获地址<span>></span></router-link>
      </li>
      <li>
        <router-link to="comperformers">常用观赏人<span>></span></router-link>
      </li>
      <li>
        <router-link to="realname">实名认证<span>未认证></span></router-link>
      </li>
      <li>
        <router-link to="feedback">意见反馈<span>></span></router-link>
      </li>
      <li>
        <router-link to="servicephone">客服电话<span>1010-3721></span></router-link>
      </li>
    </ul>
    <button class="logout" @click="Logout">退出登录</button>
    <div class="about">
      <router-link to="">关于大麦</router-link> |
      <router-link to="">联系我们</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Center',
  computed: {
    ...mapState(['userInfo'])
  },

  methods: {
    Logout () {
      this.$router.push('/')
      // console.log(window.localStorage)
      window.localStorage.userInfo = ''
      window.location.reload(true)
    }
  }
}
</script>

<style lang="scss">
.myCenter{
  .myPhoto{
    width: 100%;
    height: 90px;
    background: #FF1268;
    display: flex;
    align-items: center;
    .myPic{
      width: 50px;
      border-radius: 50%;
      border:3px solid #fff;
      margin-left: 20px;
    }
    .myName{
      color: #fff;
      font-size: 16px;
      margin-left: 10px;
    }
  }

  .myList{
    padding: 0 10px;
    overflow: hidden;
    li{
      height: 55px;
      line-height: 55px;
      font-size: 14px;
      color: #999;
      border-bottom: 1px solid #f1f1f1;
      span{
        float: right;
        font-size: 12px;
        color: #999;
      }
    }
  }

  .logout{
    width: 100%;
    height: 55px;
    line-height: 45px;
    text-align: center;
    background: #fff;
    border: none;
    font-size: 16px;
    color: #666;
    border-top: 10px solid #f5f5f5;
  }

  .about{
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #f5f5f5;
    color: #999;
  }
}
</style>
