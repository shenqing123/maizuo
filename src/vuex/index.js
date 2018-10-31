import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    title:'卖座电影'
  },
  mutations:{
    change:function (state,data) {

      state.title=data
    }
  }
})

export default store;
