import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Caisse from '../views/Caisse.vue'
import BaseLogin from '../views/Login.vue'
import Company from '../views/Company.vue'
import OrderHistory from '../views/OrderHistory.vue'
import CompanyOwner from '../views/CompanyOwner.vue'
import Users from '../views/Users.vue'
import UsersDetail from '../views/UsersDetail.vue'
import Fournisseur from '../views/Fournisseur.vue'
import Order from '../views/Order.vue'
import BaseBar from '../views/BaseBar.vue'
import CaisseDetail from '../views/CaisseDetail.vue'
import CompanyOwnerDetail from '../views/CompanyOwnerDetail.vue'
import CompanyDetail from '../components/company/CompanyDetail.vue'
import StockDetail from '../components/stocks/StockDetail.vue'
import Stocks from '../components/stocks/Stocks.vue'
import ClientPageVue from '../components/clients/ClientPage.vue'

const routes = [
  {
    path: '/', name: 'Home',component: Home
  },
  {
    path: '/caisse', name: 'Caisse',component: Caisse
  },
  {
    path: '/caisses_detail/:id', name: 'caisses_detail',component: CaisseDetail
  },
  {
    path: '/client_add', name: 'Client',component: ClientPageVue
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
    path: '/fournisseurs',name: 'fournisseurs',component: Fournisseur
  },
  {
    path: '/orders',name: 'orders',component: Order
  },
  {
    path: '/stocks/:id',name: 'stock_detail',component: StockDetail
  },
  {
    path: '/stocks',name: 'stocks',component: Stocks
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
  {
    path: '/order_history',name: 'order_history',component: OrderHistory
  },
  {
    path: '/bar',name: 'bar',component: BaseBar
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from, next) => {
    // Here I will check if the user has the right permissions for using my page
    next();
    // if(to.name === 'Home'){
    //     window.location.reload();
    // }
     
})

export default router
