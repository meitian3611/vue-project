<template>
<div class="page_menus">
  <van-dropdown-menu active-color="#ff1268">
  <van-dropdown-item :title="addres" ref="item">
      <City @cityAddr='getAddr($event)' @click="onConfirm"> </City>
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
      addres: '中国',
      dates: '全部时间'
    }
  },
  methods: {
    onConfirm () {
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
