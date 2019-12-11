import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../views/Category.vue'
import City from '../views/City.vue'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'
import All from '../views/Detail/All.vue'
import Drama from '../views/Detail/Drama.vue'
import Concert from '../views/Detail/Concert.vue'
import Vocal from '../views/Detail/Vocal.vue'
import Quwan from '../views/Detail/Quwan.vue'
import Ballet from '../views/Detail/Ballet.vue'
import Sports from '../views/Detail/Sports.vue'
import Children from '../views/Detail/Children.vue'

import store from '../store'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Center from '../views/Center.vue'
import VipCenter from '../views/Center/VipCenter.vue'
import MyOrder from '../views/Center/MyOrder.vue'
import Coupon from '../views/Center/Coupon.vue'
import MyTicket from '../views/Center/MyTicket.vue'
import MyConcern from '../views/Center/MyConcern.vue'
import RecAdress from '../views/Center/RecAdress.vue'
import ComPerformers from '../views/Center/ComPerformers.vue'
import RealName from '../views/Center/RealName.vue'
import Feedback from '../views/Center/Feedback.vue'
import ServicePhone from '../views/Center/ServicePhone.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.replace = function replace (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:id',
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
      redirect: '/detail/all',
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
      path: '/register',
      name: 'Register',
      component: Register
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
      path: '/myorder',
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon
    },
    {
      path: '/myticket',
      name: 'MyTicket',
      component: MyTicket
    },
    {
      path: '/myconcern',
      name: 'MyConcern',
      component: MyConcern
    },
    {
      path: '/recadress',
      name: 'RecAdress',
      component: RecAdress
    },
    {
      path: '/comperformers',
      name: 'ComPerformers',
      component: ComPerformers
    },
    {
      path: '/realname',
      name: 'RealName',
      component: RealName
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/servicephone',
      name: 'ServicePhone',
      component: ServicePhone
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('全局 前置', to)
  const userInfo = store.state.userInfo
  if (!userInfo && to.meta.needLogin) {
    // 判断当前是否有登录状态
    // next(`/login?redirect=${to.fullPath}`)
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
