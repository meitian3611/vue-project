<template>
  <div class="Commodity">
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
          text="选座购买"
          @click="onClickButton"
        />
      </van-goods-action>
      <!-- 底部上拉菜单组件 -->
      <van-action-sheet
        v-model="show"
        title="请选择"
      >
        <div class="title">
          <span>场次 </span> 场次时间均为演出当地时间
        </div>
        <div class="button">
          <van-button
            @click="fn"
            color="#eee"
            size="normal"
          >2020-01-17 周五 19:30</van-button>
          <van-button
            color="#eee"
            size="normal"
          >2020-01-19 周日 14:00</van-button>
          <van-button
            color="#eee"
            size="normal"
          >2020-01-19 周日 19:30</van-button>
        </div>

      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton, ActionSheet, Button } from 'vant'
Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(ActionSheet)
  .use(Button)
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    onClickButton () {
      this.show = true
    },
    fn () {
      console.log(this)
    }
  }
}
</script>

<style lang="scss">
.van-action-sheet__content {
  .title {
    color: #999;
    span {
      font-size: 18px;
      color: #000;
      font-weight: 600;
      margin-left: 10px;
    }
  }
  .button {
    .van-button {
      width: 200px;
      margin-left: 20px;
      margin-top: 10px;
      .van-button__text {
        color: #333;
      }
    }
  }
}
</style>
