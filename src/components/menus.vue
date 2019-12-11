<template>
<div class="page_menus">
  <van-dropdown-menu active-color="#ff1268">
  <van-dropdown-item title="全国" ref="item">
      <City> </City>
  </van-dropdown-item>
   <van-dropdown-item title="全部时间" ref="item">

  </van-dropdown-item>

  <van-dropdown-item v-model="value3" :options="option3" />
  <van-dropdown-item v-model="value4" :options="option4" />

</van-dropdown-menu>
</div>
</template>

<script>
import Vue from 'vue'
import City from './city'
import { DropdownMenu, DropdownItem } from 'vant'
Vue.use(DropdownMenu).use(DropdownItem)
export default {
  name: 'menus',
  components: {
    City
  },
  data () {
    return {
      value3: 'a',
      value4: 'a',
      // citys: false,
      option3: [
        { text: '推荐排序', value: 'a' },
        { text: '最新上架', value: 'b' },
        { text: '最近开场', value: 'c' }
      ],
      option4: [
        { text: '距离最近', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  methods: {
    onConfirm () {
      this.$refs.item.toggle()
    }
  }
}
</script>

<style lang="scss">
.page_menus{
  .van-dropdown-menu .menus_tuijian{
    color: #ff1268;
  }
}
</style>
