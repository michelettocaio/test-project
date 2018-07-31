import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./pages/login/Login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./pages/home/Home.vue'),
    }
    ,
    {
      path: '/products',
      name: 'products',
      component: () => import('./pages/products/Products.vue'),
    }
    ,
    {
      path: '/orders',
      name: 'orders',
      component: () => import('./pages/orders/Orders.vue'),
    }
    ,
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./pages/dashboard/Dashboard.vue'),
    }
  ]
})
