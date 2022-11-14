import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import mixins from './mixins'
import axiosInstance from './plugins/axiosConfig'
//import bootstrap from './plugins/bootsrapp'
// Vuetify
// SweetAlert Configuration

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

// Configuration pour axios
const app = createApp(App)

app.config.globalProperties.axios =  { ...axiosInstance }
app
.mixin(mixins)
.use(VueSweetalert2,options)
.use(store)
.use(router)
.mount('#app')
