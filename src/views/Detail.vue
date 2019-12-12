<template>
  <div class="Dateil_page">
  <van-tabs @click="curTabIndex" v-model="index">
    <van-tab
    v-for="item in detailList"
    :title="item.name"
    :key="item.id"
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
      replace: true,
      index: 4
    }
  },
  methods: {
    curTabIndex (name, title) {
      let paths = this.detailList.find(item => item.name === title)
      this.$router.replace(paths.href)
      // console.log(name, title, paths)
      // console.log(666)
    }
  },
  mounted () {
    let name = this.$route.path
    let index1 = this.detailList.find(item => item.href === name)
    this.index = (index1.id) - 1
    // console.log(name)
    // console.log(this.index)
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
