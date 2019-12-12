<template>
  <div class="Detail_detailCommon">
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in lists"
    :key="item"
  >
  <div class='films_list'
    v-for="item in filmsList"
    :key="item.name"
    @click="toHome(item.id, item, $event)">
      <div class='films_left'>
        <img :src='item.verticalPic' alt=''>
      </div>
      <div class='films_right'>
        <span class='films_right_title'>{{item.name}}</span>
        <p class='films_right_address'>
          {{item.cityName}}/{{item.showTime}}/{{item.venueName}}/{{item.id}}
        </p>
        <span class='films_seach'>可选座</span>
        <span class='films_price'>{{item.priceStr}}</span>
      </div>
    </div>
  </van-cell>
</van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { List, Cell } from 'vant'
import axios from 'axios'
Vue.use(List)
Vue.use(Cell)
export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      lists: [],
      filmsList: [],
      loading: false,
      finished: false
    }
  },
  mounted () {
    //  && item.showTime.split('')[0].join('') === times
    axios.get(`/json/${this.path}`).then((res) => {
      const base = res.data.data.projectInfo
      let names = JSON.parse(window.localStorage.getItem('city'))
      let times = JSON.parse(window.localStorage.getItem('time'))
      console.log(times)
      // let str = "2019.12.31 周二"
      // console.log(str.split(' ')[0])
      if (names === '全国' && times === '全部时间') {
        this.filmsList = base
      } else if (names === '全国' && times) {
        let timeItem = base.filter(item => {
          return item.showTime.split(' ')[0].split('-')[0] === times
        })
        this.filmsList = timeItem
      } else {
        let getCity = base.filter(item => {
          // console.log(item.showTime.split(' ')[0].split('-')[0])
          return item.cityName === names && item.showTime.split(' ')[0].split('-')[0] === times
        })
        this.filmsList = getCity
      }
    })
  },

  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < this.filmsList.length; i++) {
          this.lists.push(this.lists.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.lists.length >= this.filmsList.length) {
          this.finished = true
        }
      }, 500)
    },
    toHome (val, item, $event) {
      // console.log(val, item, $event)
      this.$router.replace(`/category/id=${val}`)
    }
  }
}
</script>

<style lang = 'scss'>
@import '~@/assets/mixins.scss';
.Detail_detailCommon{
  @include Detail;
  .van-cell{
    /* height: 110px; */
    line-height:normal;
    font-size: 12px;
  }
  &.films_list .films_left img{
    width: none!important;
  }
}

</style>
