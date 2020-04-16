import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'panel-login',
      component: () => import('./views/panel/Login.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/panel/login',
      name: 'panel-login',
      component: () => import('./views/panel/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/panel',
      name: 'panel-index',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/panel/users',
      name: 'panel-users',
      component: () => import('./views/panel/Users.vue')
    },
    {
      path: '/panel/products',
      name: 'panel-products',
      component: () => import('./views/panel/Products.vue')
    }
  ]
})
