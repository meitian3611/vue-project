<template>
  <div class="Commodity">
    <div class="content">
      <div class="desc">
        <div class="con-top">
          <div class="main">
            <div class="pic">
              <img :src="JinList.verticalPic" />
            </div>
            <div class="title">
              <div class="title-con">
                {{ JinList.name }}
              </div>
            </div>
            <div
              class="price"
              @click="onPrice"
            >
              <div class="price-title">
                <div class="rangr">{{ JinList.priceStr }}</div>
              </div>
              <div class="price-list">
                <div class="tag">
                  领券满11减10
                  <i class="iconfont iconjiantouyou"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="con-normal">
          <div class="main">
            <div class="left">
              <div class="tag-list">
                <div class="tag">
                  <!-- <i class="iconfont iconjinggao"></i> -->
                  <van-tag type="warning">!</van-tag>
                  不支持退
                </div>
                <div class="tag">
                  <van-tag type="warning">!</van-tag>
                  不支持选座
                </div>
                <div class="tag">
                  <van-tag type="warning">√</van-tag>

                  快递票
                </div>
                <div class="tag">
                  <van-tag type="warning">√</van-tag>
                  纸质发票
                </div>
              </div>
            </div>
            <div class="right">
              <i class="iconfont iconjiantouyou"></i>
            </div>
          </div>
        </div>
        <div class="con-normal">
          <div
            class="main"
            @click="onClickButton"
          >
            <div class="left">
              <div class="notice">
                {{ JinList.showTime }}
              </div>
              <div class="sub">
                约135分钟，仅供参考，最终以现场实际时长为准
              </div>
            </div>
            <div class="right">
              <i class="iconfont iconjiantouyou"></i>
            </div>
          </div>
        </div>
        <div class="con-normal">
          <div class="main">
            <div class="left">
              <div class="notice">
                {{ JinList.venueCity }} | {{ JinList.venueName }}
              </div>
              <div class="sub">
                {{ JinList.categoryName }} | 评分：{{ JinList.discountRate }}
              </div>
            </div>
            <div class="right">
              <i class="iconfont icondanseshixintubiao-"></i>
            </div>
          </div>
        </div>
        <div class="section"></div>
        <div class="normal-bottom">
          <div
            class="main"
            @click="onPrice"
          >
            <div class="left">
              <van-icon name="fire" />
              360元超值演出红包
            </div>
            <div class="right">
              <i class="iconfont iconjiantouyou"></i>
            </div>
          </div>
        </div>
        <div class="section"></div>
      </div>
      <div class="container">
        <van-tabs
          v-model="active"
          sticky
          type="none"
          title-active-color="#000"
        >
          <van-tab title="详情">内容 1</van-tab>
          <van-tab title="须知">内容 2</van-tab>
          <van-tab title="推荐">内容 3</van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 底部组件 -->
    <div class="bottom">
      <van-goods-action>
        <van-goods-action-icon
          icon="wap-home-o"
          text="大麦首页"
          to="/"
        />
        <van-goods-action-icon
          icon="like-o"
          text="想看"
        />
        <van-goods-action-icon
          icon="orders-o"
          text="我的订单"
        />
        <van-goods-action-button
          type="danger"
          color="#ff3299"
          text="选座购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
    <!-- 底部上拉菜单组件 -->
    <div class="van-btn">
      <van-action-sheet
        v-model="buy"
        title="请选择"
      >
        <div class="title"><span>场次 </span> 场次时间均为演出当地时间</div>
        <div class="button">
          <van-button
            @click="btn($event)"
            color="#eee"
            size="normal"
          >2020-01-17 周五 19:30</van-button>
          <van-button
            @click="btn($event)"
            color="#eee"
            size="normal"
          >2020-01-19 周日 14:00</van-button>
          <van-button
            @click="btn($event)"
            color="#eee"
            size="normal"
          >2020-01-19 周日 19:30</van-button>
        </div>
      </van-action-sheet>
      <!-- 上拉组件一 -->
      <van-action-sheet
        v-model="price"
        title="优惠说明"
      >
        <div class="item">
          <div class="left">
            <div class="left-con">
              <div class="price-pre">￥</div>
              <div class="price">360</div>
              <div class="notice">全球通用卷</div>
            </div>
          </div>
          <div class="right">
            <p class="section-btn">立即领取</p>
            <div class="vip-tag">vip专享</div>
          </div>
        </div>
        <div class="item item-se">
          <div class="left">
            <div class="left-top">
              <div class="price">10</div>
              <div class="yuan">元</div>
              <div class="notice">大麦年终回馈优惠券</div>
            </div>
            <p class="info">满11减10元</p>
            <p class="info">使用时间：2019.11.25-2020.12.31</p>
          </div>
          <div class="right">
            <p class="section-btn two">立即领取</p>
          </div>
        </div>
        <p class="txt">

          说明：您选购优惠票档所对应的票品种类可能为套票、优惠票等类型，具体以您收到的票面信息标示为准。实际优惠情况以订单确认页为准。

        </p>
      </van-action-sheet>
    </div>

  </div>
</template>

<script>
import { getList, getMiddle, getConcert, getDrama, getVocal, getQuwan } from '../api/Home/index'
import Vue from 'vue'
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  ActionSheet,
  Button,
  Tag,
  Tab,
  Tabs
} from 'vant'
Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(ActionSheet)
  .use(Button)
  .use(Tag)
  .use(Tab)
  .use(Tabs)
export default {
  data () {
    return {
      buy: false,
      price: false,
      active: 0,
      JinList: []
    }
  },
  created () {
    let id = this.$route.fullPath.split('=')[1]
    getList().then(response => {
      let res = response.data.data.projectInfo
      res.forEach(item => {
        if (Number(id) === item.id) {
          this.JinList = item
        }
      })
      // console.log(this.JinList)
    })
    let idMiddle = this.$route.fullPath.split('=')[1]
    getMiddle().then(response => {
      let res = response.data.data.nearByCity
      res.forEach(item => {
        if (Number(idMiddle) === item.id) {
          this.JinList = item
        }
      })
    })
    let idConcert = this.$route.fullPath.split('=')[1]
    getConcert().then(response => {
      let res = response.data.data.projectInfo
      res.forEach(item => {
        if (Number(idConcert) === item.id) {
          this.JinList = item
        }
      })
    })
    let idDrama = this.$route.fullPath.split('=')[1]
    getDrama().then(response => {
      let res = response.data.data.projectInfo
      res.forEach(item => {
        if (Number(idDrama) === item.id) {
          this.JinList = item
        }
      })
    })
    let idVocal = this.$route.fullPath.split('=')[1]
    getVocal().then(response => {
      let res = response.data.data.projectInfo
      res.forEach(item => {
        if (Number(idVocal) === item.id) {
          this.JinList = item
        }
      })
    })
    let idQuwan = this.$route.fullPath.split('=')[1]
    getQuwan().then(response => {
      let res = response.data.data.projectInfo
      res.forEach(item => {
        if (Number(idQuwan) === item.id) {
          this.JinList = item
        }
      })
    })
  },
  methods: {
    onClickButton () {
      this.buy = true
    },
    onPrice () {
      this.price = true
    },
    btn ($event) {
      $event.currentTarget.style.background = 'rgba(255,45,121,.1)'
      $event.currentTarget.firstChild.style.color = '#ff2d79'
    }
  }
}
</script>

<style lang="scss">
@import '../../public/mt-style/Category.scss';
</style>
