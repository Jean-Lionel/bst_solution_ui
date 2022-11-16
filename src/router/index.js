import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BaseLogin from '../views/Login.vue'
import Company from '../views/Company.vue'
import CompanyOwner from '../views/CompanyOwner.vue'
import Users from '../views/Users.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',name: 'Login',component: BaseLogin
  },
  {
    path: '/company',name: 'company',component: Company
  },
  {
    path: '/company_owners',name: 'company_owners',component: CompanyOwner
  },
  {
    path: '/users',name: 'users',component: Users
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
