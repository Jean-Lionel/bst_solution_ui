import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
        baseUrl: 'http://127.0.0.1:8000/api',
        user : "",
        isLoggedIn: false
  },
  mutations: {
    login(state, user) {
        state.user = user;
        localStorage.setItem('user', state.user);
    },
    logout(state) {
        state.user = null;
        localStorage.removeItem('user');
        router.push('/login')
    },
    initializeStore(state) {
        if(localStorage.getItem('user')){
            state.user = localStorage.getItem('user');
        }else{
           this.commit("logout");
        }
    }
  },
  actions: {
  },
  modules: {
  }
})
