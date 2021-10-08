import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    title:'首页',
    slideIndex:0,
    dialogState:{
      text:'提示信息',
      show:false
    },
  },
  mutations:{
    changeTitle(state,payload){
      state.title = payload
    },
    changSlide(state,payload){
      state.slideIndex = payload
    },
    activeDialog(state,payload){
      state.dialogState= {text:payload,show:true}
    },
    disActiveDialog(state){
      state.dialogState.show = false
    }
  },
})

export default store
