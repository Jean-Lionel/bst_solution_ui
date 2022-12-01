import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
        baseUrl: 'http://127.0.0.1:8000/api/',
        user : null,
        tva : 18,
        entreprises : [],
        chefsEntreprise : [],
        usersLists : [],
        campaniesLists : [],
        fetchData : {
            fournisseurs : [],
            products : [],
        },
        cart:{
            choosedProduct: [],
        },
        isLoading : false, 
  },
  mutations: {
    addCartItem(state, item){
        let index = state.cart.choosedProduct.findIndex(el =>el.uuid === item.uuid);
        if(index > -1){
            state.cart.choosedProduct[index].quantity +=1
        }else{  
            state.cart.choosedProduct.push(item);
        }
    },
    removeCartItem(state, uuid){
        state.cart.choosedProduct =  state.cart.choosedProduct.filter(e => e.uuid !== uuid)
    },
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
