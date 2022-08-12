///BRING ALL THE MODULES AND ADD THEM TO VUEX STORE.
import Vuex  from 'vuex';
import Vue from 'vue'
import {state, getters,actions,mutations} from './modules/todos'

//LOAD VUEX
Vue.use(Vuex)


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});