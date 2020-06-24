import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import About from '../views/About'
import Dashboard from '../views/Dashboard'
import PropertyListing from '../views/PropertyListing'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/propertyListing',
    name: 'PropertyListing',
    component: PropertyListing
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
