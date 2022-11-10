import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Configuration pour axios

const axiosInstance = axios.create({
   withCredentials: true,
   baseURL: store.state.baseUrl
})
axiosInstance.defaults.headers.common['Authorization'] = "Bearer "+ store.getters.token;

const app = createApp(App)

app.config.globalProperties.axios =  { ...axiosInstance }

app
.use(store)
.use(router)
.mount('#app')
