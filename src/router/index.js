import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../views/Category.vue'
import City from '../views/City.vue'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import All from '../views/Detail/All.vue'
import Drama from '../views/Detail/Drama.vue'
import Concert from '../views/Detail/Concert.vue'
import Vocal from '../views/Detail/Vocal.vue'
import Quwan from '../views/Detail/Quwan.vue'
import Ballet from '../views/Detail/Ballet.vue'
import Sports from '../views/Detail/Sports.vue'
import Children from '../views/Detail/Children.vue'
import Center from '../views/Center.vue'
import VipCenter from '../views/Center/VipCenter.vue'
import Vip from '../views/Center/Vip.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      children: [
        {
          path: 'all',
          name: 'All',
          component: All
        },
        {
          path: 'drama',
          name: 'Drama',
          component: Drama
        },
        {
          path: 'concert',
          name: 'Concert',
          component: Concert
        },
        {
          path: 'vocal',
          name: 'vocal',
          component: Vocal
        },
        {
          path: 'quwan',
          name: 'Quwan',
          component: Quwan
        },
        {
          path: 'ballet',
          name: 'Ballet',
          component: Ballet
        },
        {
          path: 'sports',
          name: 'Sports',
          component: Sports
        },
        {
          path: 'children',
          name: 'Children',
          component: Children
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/center',
      name: 'Center',
      component: Center,
      meta: {
        needLogin: true
      }

      // beforeEnter: (to, from, next) => { // 路由独享
      //   // 判断当前是否有登录状态
      //   console.log(to)
      //   if (window.isLogin) {
      //     next()
      //   } else {
      //     // 打回登录页
      //     next(`/login?redirect=${to.fullPath}`)
      //   }
      // }
    },
    {
      path: '/vipcenter',
      name: 'VipCenter',
      component: VipCenter
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('全局 前置', to)
  if (to.meta.needLogin && !window.isLogin) {
    // 判断当前是否有登录状态
    next(`/login?redirect=${to.fullPath}`)
  } else {
    next()
  }
})

export default router
