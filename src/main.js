import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// SweetAlert Configuration

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

// Configuration pour axios

const axiosInstance = axios.create({
   withCredentials: true,
   baseURL: store.state.baseUrl
})
axiosInstance.defaults.headers.common['Authorization'] = "Bearer "+ store.getters.token;
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const app = createApp(App)

app.config.globalProperties.axios =  { ...axiosInstance }

app
.use(VueSweetalert2,options)
.use(store)
.use(router)
.mount('#app')
