import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/Login')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "home" */ '../views/About')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "home" */ '../views/Dashboard')
  },
  {
    path: '/propertyListing',
    name: 'PropertyListing',
    component: () => import(/* webpackChunkName: "home" */ '../views/PropertyListing')
  },
  {
    path: '/myProperties',
    name: 'MyProperties',
    component: () => import(/* webpackChunkName: "home" */ '../views/MyProperties')
  },
  {
    path: '/findSpaces',
    name: 'FindSpaces',
    component: () => import(/* webpackChunkName: "home" */ '../views/FindSpaces')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
