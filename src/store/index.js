import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments:[]
  },
  mutations: {
    SET_COMMENTS(state, payload) {
      state.comments=payload
    }

  },
  actions: {
    loadComments(context, page) {
        axios.get(
          `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=5`
      )
          .then(res => {
            context.commit("SET_COMMENTS", res.data);
      })
    }
  },
  getters: {
    getComments(state) {
      return state.comments;
    }
  }
})
