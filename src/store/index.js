import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
        baseUrl: 'http://127.0.0.1:8000/api/',
        user : null,
        entreprises : [],
        chefsEntreprise : [],
        usersLists : [],
        campaniesLists : [],
        fetchData : {},
  },
  mutations: {
    login(state, user) {
        state.user = user;
        localStorage.setItem('user', state.user);
         window.location.href = "/" 
    },
    logout(state) {
        state.user = null;
        localStorage.removeItem('user');
        
    },
    initializeStore(state) {
        if(localStorage.getItem('user')){
            state.user = JSON.parse(localStorage.getItem('user'));
        }else{
           this.commit("logout");
        }
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    user : state =>{
        if(state.user === null){
            return JSON.parse(localStorage.getItem('user'))
        }
        return state.user
    },
    token : (state, getters)=> getters?.user?.token

  },
  computed:{

  }
})
