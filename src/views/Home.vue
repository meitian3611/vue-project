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
      <Swiper :SwiperList='Middle'></Swiper>
    </div>
    <h2 class="home-more">更多演出</h2>
    <div class="home-list">
      <van-dropdown-menu active-color="#ff1268">
        <van-dropdown-item
          v-model="value1"
          :options="option1"
        />
        <van-dropdown-item
          v-model="value2"
          :options="option2"
        />
      </van-dropdown-menu>
      <span class="hot">推荐排序</span>
      <span class="disabled">距离最近</span>
    </div>
    <div class="home-item">
      <van-card
        v-for="card in cards"
        :key="card.id"
        :price="card.priceStr"
        :desc="card.venueCity + ' / ' + card.showTime + ' / ' + card.venueName"
        :title="card.name"
        :thumb="card.verticalPic"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from '../components/Swiper'
import { Search, Swipe, SwipeItem, Grid, GridItem, DropdownMenu, DropdownItem, Card } from 'vant'
import { getBannerList, getMiddle, getList } from '../api/Home/index'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Search)
Vue.use(Grid).use(GridItem)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Card)
export default {
  name: 'Home',
  components: {
    [Swiper.name]: Swiper
  },
  data () {
    return {
      bannerList: [],
      value: '',
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部分类', value: 0 },
        { text: '演唱会', value: 1 },
        { text: '话剧歌剧', value: 2 },
        { text: '音乐会', value: 3 },
        { text: '曲宛杂坛', value: 4 },
        { text: '舞蹈芭蕾', value: 5 },
        { text: '体育比赛', value: 6 },
        { text: '儿童亲子', value: 7 },
        { text: '展览休闲', value: 8 },
        { text: '二次元', value: 9 },
        { text: '旅游展览', value: 10 }
      ],
      option2: [
        { text: '全部时间', value: 'a' },
        { text: '今天', value: 'b' },
        { text: '明天', value: 'c' },
        { text: '本周末', value: 'c' },
        { text: '一周内', value: 'c' },
        { text: '一月内', value: 'c' }
      ],
      tabs: [],
      cards: [],
      weeks: ['今天', '明天', '周四', '周五', '周六', '周日', '周一'],
      Middle: []
    }
  },
  created () {
    getBannerList().then(response => {
      let res = response.data
      this.bannerList = res.data.focusPicList.map(item => item.pic)
      this.tabs = res.data.navigationList.map(item => item)
    })
    getMiddle().then(response => {
      let res = response.data
      this.Middle = res.data.nearByCity.map(item => item)
    })
    getList().then(response => {
      let res = response.data
      this.cards = res.data.projectInfo.map(item => item)
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
    margin-bottom: 20px;
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
  .home-more {
    font-weight: 700;
    padding-left: 15px;
    margin-top: 35px;
    font-size: 18px;
    color: #111;
  }
  .home-list {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    background: #fff;
    z-index: 99;
    padding: 0 5px;
    .van-dropdown-menu__item {
      margin-right: 20px !important;
    }
    .hot {
      @extend .disabled;
      color: #ff1268;
    }
    .disabled {
      display: block;
      height: 50px;
      text-align: center;
      font-size: 15px;
      line-height: 50px;
      margin-right: 10px;
    }
  }
  .home-item {
    .van-card {
      background: #fff;
      .van-card__title {
        font-size: 18px;
        font-weight: 700;
        max-height: 70px;
        line-height: 25px;
      }
      .van-image__img {
        height: auto;
      }
      .van-card__bottom {
        margin-top: 20px;
        .van-card__price {
          font-size: 15px;
          font-weight: 400;
          color: #ff1268;
        }
      }
    }
  }
}
</style>
