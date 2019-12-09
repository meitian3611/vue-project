import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../views/Category.vue'
import City from '../views/City.vue'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

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
      component: Detail
      // children: [
      //   {
      //     path: 'all',
      //     name: 'all',
      //     component: All
      //   }
      // ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
