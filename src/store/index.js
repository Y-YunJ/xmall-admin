import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    title:'首页',
    slideIndex:0
  },
  mutations:{
    changeTitle(state,payload){
      state.title = payload
    },
    changSlide(state,payload){
      state.slideIndex = payload
    }
  },
})

export default store
