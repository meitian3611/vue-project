<template>
  <div class="HomePage">
    <div class="home-top">
      <router-link
        class="left"
        to="/city"
      >
        <i class="iconfont icondanseshixintubiao-"></i>深圳</router-link>
      <router-link
        class="center"
        to="/"
      >
        <van-search
          placeholder="搜索明星、演出比赛、场馆"
          v-model="value"
          background="#f5f5f5"
          shape="round"
        />
      </router-link>
      <router-link
        class="right"
        to="/center"
      ><i class="iconfont iconwode"></i></router-link>
    </div>
    <div class="home-banner">
      <van-swipe
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item
          v-for="(banner, index) in bannerList"
          :key="index"
        >
          <img :src="banner" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="home-tab">
      <van-grid :column-num="4">
        <van-grid-item
          v-for="(value, index) in tabs"
          :key="index"
          :icon="value.pic"
          :text="value.title"
        />
      </van-grid>
    </div>
    <div class="home-pic">
      <span class="golbal-ad"></span>
    </div>
    <div class="home-content">
      <div class="title">
        近期演出 <span class="title_go">演出日历 > </span>
      </div>
      <div class="week">
        <span
          class="selected"
          v-for="(item, index) in weeks"
          :key="index"
        >{{
          item
        }}</span>
      </div>
      <Swiper></Swiper>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from '../components/Swiper'
import { Search, Swipe, SwipeItem, Grid, GridItem } from 'vant'
import { getBannerList } from '../api/Home/index'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Search)
Vue.use(Grid).use(GridItem)
export default {
  name: 'Home',
  data () {
    return {
      bannerList: [],
      value: '',
      tabs: [],
      weeks: ['今天', '明天', '周四', '周五', '周六', '周日', '周一']
    }
  },
  components: {
    Swiper
  },
  created () {
    getBannerList().then(response => {
      let res = response.data
      this.bannerList = res.data.focusPicList.map(item => item.pic)
      this.tabs = res.data.navigationList.map(item => item)
    })
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
.HomePage {
  height: 100%;
  box-sizing: border-box;
  .home-top {
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    .left {
      font-size: 16px;
      color: #222;
      margin: 0 10px;
      .iconfont {
        font-size: 22px;
      }
    }
    .center {
      width: 65%;
      .van-search {
        padding: 0;
        .van-search__content {
          background: #fff;
        }
      }
    }
    .right {
      font-size: 20px;
      color: #222;
      .iconfont {
        font-size: 22px;
        margin-left: 15px;
      }
    }
  }
  .home-banner {
    height: 140px;
    img {
      width: 100%;
    }
  }
  .home-pic {
    .golbal-ad {
      display: block;
      width: 100%;
      height: 120px;
      background-image: url('//img.alicdn.com/tps/i4/TB1wLq8p7L0gK0jSZFAwu3A9pXa.png_q60.jpg_.webp');
      background-size: 100% 100%;
      background-position: top center;
      background-repeat: no-repeat;
    }
  }
  .home-content {
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      font-weight: 700;
      margin: 20px 15px 15px;
      .title_go {
        font-size: 12px;
        color: #999;
        font-weight: 400;
        display: flex;
        align-items: center;
      }
    }
    .week {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #999;
      margin: 0 15px 20px;
    }
  }
}
</style>
