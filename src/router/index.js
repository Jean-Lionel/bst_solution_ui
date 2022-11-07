import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BaseLogin from '../views/BaseLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',name: 'Login',component: BaseLogin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
