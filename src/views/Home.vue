<template>
  <!-- 梅恬 => 首页 -->
  <div class="HomePage">
    <!-- 头部三路由 -->
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
    <!-- 轮播图 -->
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
    <!-- 宫格组件 -->
    <div class="home-tab">
      <van-grid :column-num="4">
        <van-grid-item
          v-for="(value, index) in tabs"
          :key="index"
          :icon="value.pic"
          :text="value.title"
          :to="value.schema"
        />
      </van-grid>
    </div>
    <div class="home-pic">
      <span class="golbal-ad"></span>
    </div>
    <!-- 滑动轮播 -->
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
      <router-link to="/category">
        <Swiper :SwiperList='Middle'></Swiper>
      </router-link>

    </div>
    <h2 class="home-more">更多演出</h2>
    <!-- 下拉菜单 -->
    <van-sticky>
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
    </van-sticky>
    <!-- 列表渲染 -->
    <router-link
      class="home-item"
      :to="`/category/id=${card.id}`"
      v-for="card in cards"
      :key="card.id"
    >
      <van-card
        :price="card.priceStr"
        :desc="card.venueCity + ' / ' + card.showTime + ' / ' + card.venueName"
        :title="card.name"
        :thumb="card.verticalPic"
      />
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from '../components/Swiper'
import { Search, Swipe, SwipeItem, Grid, GridItem, DropdownMenu, DropdownItem, Card, Sticky } from 'vant'
import { getBannerList, getMiddle, getList } from '../api/Home/index'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Search)
Vue.use(Grid).use(GridItem)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Card)
  .use(Sticky)
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
      Middle: [],
      routerList: [''] // 宫格路由页面
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
@import '../../public/mt-style/Home.scss';
</style>
