import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import axiosInstance from './plugins/axiosConfig'
import VueSweetalert2,{ options} from './plugins/sweetAlert'
//import bootstrap from './plugins/bootsrapp'
// Vuetify
// SweetAlert Configuration

// Configuration pour axios
const app = createApp(App)

app.config.globalProperties.axios =  { ...axiosInstance }
app
.mixin(mixins)
.use(VueSweetalert2,options)
.use(store)
.use(router)
.mount('#app')
