import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BaseLogin from '../views/Login.vue'
import Company from '../views/Company.vue'
import CompanyOwner from '../views/CompanyOwner.vue'
import Users from '../views/Users.vue'
import UsersDetail from '../views/UsersDetail.vue'
import CompanyOwnerDetail from '../views/CompanyOwnerDetail.vue'
import CompanyDetail from '../components/company/CompanyDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',name: 'Login',component: BaseLogin, meta:{auth: false}
  },
  {
    path: '/company',name: 'company',component: Company
  },
  {
    path: '/company/:id',name: 'company_detail',component: CompanyDetail
  },
  {
    path: '/company_owners',name: 'company_owners',component: CompanyOwner
  },
  {
    path: '/company_owners/:id',name: 'company_owners_detail',component: CompanyOwnerDetail
  },
  {
    path: '/users',name: 'users',component: Users
  },
  {
    path: '/users/:id',name: 'users-details',component: UsersDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from, next) => {
    // Here I will check if the user has the right permissions for using my page
    next();
})

export default router
