import { createStore } from 'vuex'

export default createStore({
  state: {
        baseUrl: 'http://127.0.0.1:8000/api',
        email : "",
        isLoggedIn: false
  },
  mutations: {
    login(state, email) {
        state.email = email;
        localStorage.setItem('email', state.email);
        alert("Email Login Success");

    },
    logout(state) {
        state.email = "";
        localStorage.removeItem('email');
        alert("Email Logout Success");
    },
    initializeStore(state) {
        if(localStorage.getItem('email')){
            state.email = localStorage.getItem('email');
        }
    }
  },
  actions: {
  },
  modules: {
  }
})
