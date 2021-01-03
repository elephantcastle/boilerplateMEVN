import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/future',
    name: 'future',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/presentvirtues',
    name: 'presentvirtues',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/past',
    name: 'past',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/presentflaws',
    name: 'presentflaws',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '*',
    name: 'catch-all',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
