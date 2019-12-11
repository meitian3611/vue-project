<template>
  <div
    class="box swiper-container swiper-container-initialized swiper-container-horizontal"
    id="swiper-container1"
  >
    <ul
      class="swiper-wrapper x_list"
      style="transition-duration: 0ms; transform: translate3d(-820px, 0px, 0px);"
    >
      <li
        class="swiper-slide blue-slide"
        v-for="item in SwiperList"
        :key="item.id"
      >
        <router-link
          class="alist"
          :to="`/category/id=${item.id}`"
        >
          <img :src="item.verticalPic" />
          <div class="text">
            <p>{{ item.name }}</p>
            <strong>￥ {{ item.priceLow }} 起</strong>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',
  props: {
    SwiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.mySwiper = new Swiper(this.$el, {
      slidesPerView: 3,
      spaceBetween: 160,
      observer: true,
      observeParents: true
    })
  }
}
</script>

<style lang="scss">
#swiper-container1 {
  -webkit-overflow-scrolling: touch;
  margin-top: 30px;
}
#swiper-container1 li {
  width: 150px !important;
  margin-right: 10px !important;
  .alist {
    display: block;
    width: 100%;
    height: 100%;
    color: #666;
  }
  img {
    height: 219px;
  }
}
#swiper-container1 li:first-child {
  margin-left: 15px;
}
#swiper-container1 .x_list img {
  width: 100%;
}
#swiper-container1 .x_list li p {
  line-height: 34px;
  font-size: 15px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #000;
  font-weight: 700;
}
#swiper-container1 .x_list li strong {
  font-size: 14px;
  color: #666;
  padding-left: 5px;
  white-space: nowrap;
}
#swiper-container1 {
  padding: 0px !important;
}
</style>
