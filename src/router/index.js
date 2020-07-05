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
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard')
  },
  {
    path: '/propertyListing',
    name: 'PropertyListing',
    component: () => import(/* webpackChunkName: "propertyListing" */ '../views/PropertyListing')
  },
  {
    path: '/myProperties',
    name: 'MyProperties',
    component: () => import(/* webpackChunkName: "myProperties" */ '../views/MyProperties')
  },
  {
    path: '/findSpaces',
    name: 'FindSpaces',
    component: () => import(/* webpackChunkName: "findSpaces" */ '../views/FindSpaces')
  },
  {
    path: '/leasebrary',
    name: 'Leasebrary',
    component: () => import(/* webpackChunkName: "leasebrary" */ '../views/Leasebrary')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
