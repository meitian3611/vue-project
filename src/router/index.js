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
    }
  ]
})

export default router
