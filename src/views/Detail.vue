<template>
  <div class="Dateil_page">
  <van-tabs>
    <van-tab
    v-for="item in detailList"
    :title="item.name"
    :key="item.id"
    :to="item.href"
    v-model="curTabIndex"
    >
      <menus> </menus>
      <router-view></router-view>
    </van-tab>
</van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
import menus from '../components/menus'
Vue.use(Tab).use(Tabs)
export default {
  name: 'Dateil',
  components: {
    menus
  },
  data () {
    return {
      detailList: [
        {
          id: 1,
          name: '全部',
          href: '/detail/all'
        },
        {
          id: 2,
          name: '演唱会',
          href: '/detail/drama'
        },
        {
          id: 3,
          name: '歌剧话剧',
          href: '/detail/vocal'
        },
        {
          id: 4,
          name: '音乐会',
          href: '/detail/concert'
        },
        {
          id: 5,
          name: '曲苑杂坛',
          href: '/detail/quwan'
        },
        {
          id: 6,
          name: '舞蹈芭蕾',
          href: '/detail/ballet'
        },
        {
          id: 7,
          name: '体育比赛',
          href: '/detail/sports'
        },
        {
          id: 8,
          name: '儿童亲子',
          href: '/detail/children'
        },
        {
          id: 9,
          name: '展览休闲',
          href: '/detail/all'
        },
        {
          id: 10,
          name: '二次元',
          href: '/detail/all'
        },
        {
          id: 11,
          name: '旅游展览',
          href: '/detail/all'
        }
      ],
      curTabIndex: this.$route.fullPath
    }
  },
  mounted () {
    // console.log(this.curTabIndex)
    let paths = this.detailList.find(item => item.href === this.curTabIndex)
    console.log(paths)
  }
}
</script>

<style lang = 'scss'>
.Dateil_page{
  .van-tab{
    color: #111;
  }
}
</style>
