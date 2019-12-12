<template>
<div class="page_menus">
  <van-dropdown-menu active-color="#ff1268">
  <van-dropdown-item :title="addres" ref="item" @chage="change($event)">
      <City @cityAddr='getAddr($event)' @click="onConfirm($event)"> </City>
  </van-dropdown-item>
   <van-dropdown-item :title="dates" ref="item">
      <Date @showDate='getDate($event)'> </Date>
  </van-dropdown-item>

  <van-dropdown-item v-model="value3" :options="option3" />
  <van-dropdown-item v-model="value4" :options="option4" />

</van-dropdown-menu>
</div>
</template>

<script>
import Vue from 'vue'
import City from './city'
import Date from './date'
import { DropdownMenu, DropdownItem } from 'vant'
Vue.use(DropdownMenu).use(DropdownItem)
export default {
  name: 'menus',
  components: {
    City,
    Date
  },
  data () {
    return {
      value3: 'a',
      value4: 'a',
      city1: false,
      option3: [
        { text: '推荐排序', value: 'a' },
        { text: '最新上架', value: 'b' },
        { text: '最近开场', value: 'c' }
      ],
      option4: [
        { text: '距离最近', value: 'a' },
        { text: '山的那边', value: 'b' },
        { text: '山的这边', value: 'c' }
      ],
      addres: '全国',
      dates: '全部时间'
    }
  },
  mounted () {
    let names = JSON.parse(window.localStorage.getItem('city'))
    this.addres = names
    let times = JSON.parse(window.localStorage.getItem('time'))
    let size = times.charAt(0).charCodeAt()
    let date = [times.split('.')[1] + '月', times.split('.')[2] + '日'].join('')
    if (size < 100) {
      this.dates = date
    } else {
      this.dates = times
    }
  },
  methods: {
    onConfirm ($event) {
      console.log(this.$event)
      this.$refs.item.toggle()
    },
    getAddr ($event) {
      this.addres = $event
    },
    getDate ($event) {
      this.dates = $event
    }
  }
}
</script>

<style lang="scss">
.page_menus{
  .van-dropdown-menu{
  background: #f2f3f4;
  }
  .van-dropdown-menu .menus_tuijian{
    color: #ff1268;
  }
  .van-dropdown-item__content{
    max-height:100%;
  }
}
</style>
