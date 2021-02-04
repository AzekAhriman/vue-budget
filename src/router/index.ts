import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Current month ' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear() }
  },
  {
    path: '/history/:date',
    name: 'History',
    component: Home,
    meta: { title: 'History of'}
  },
  {
    path: '/edit/:date',
    name: 'Edit',
    component: () => import('../views/Edit.vue'),
    meta: { title: 'Edit month' },
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Edit.vue'),
    meta: { title: 'New month' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
