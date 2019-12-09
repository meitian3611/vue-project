import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../views/Category.vue'
import City from '../views/City.vue'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'
import login from '../views/Login.vue'
Vue.use(VueRouter)

// const routes = []

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
