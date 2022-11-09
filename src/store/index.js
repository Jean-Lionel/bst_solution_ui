import { createStore } from 'vuex'

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
        alert(" Login Success");

    },
    logout(state) {
        state.user = null;
        localStorage.removeItem('user');
        alert(" Logout Success");
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
