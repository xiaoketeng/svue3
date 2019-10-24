import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'url';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  //状态变更
  mutations: {
    login(state){
      state.isLogin = true;
    }
  },
  actions: {
    requestLogin(context){
      console.log(context);
      return new Promise(resolve=>{
        setTimeout(()=>{
          context.commit('login');
          resolve(true);
        },1000);
      });
    }
  },
  modules: {
  }
})
