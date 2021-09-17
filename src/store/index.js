import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    title:'首页'
  },
  mutations:{
    changeTitle(state,payload){
      state.title = payload
    }
  },
})

export default store
