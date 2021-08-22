import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
    isLoading: true,
    isError: false,
    page:1
  },
  mutations: {
    SET_COMMENTS(state, payload) {
      state.comments = payload;
    },
    CHANGE_STATUS_LOADING(state, toggle) {
      state.isLoading = toggle;
    },
    CHANGE_STATUS_ERROR(state, toggle) {
      state.isError = toggle;
    },
    SET_PAGE(state, page) {
      state.page = page;
    },
  },
  actions: {
    loadComments(context, page) {
      context.commit("CHANGE_STATUS_ERROR", false);
      context.commit("CHANGE_STATUS_LOADING", true);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=5`
        )
        .then((res) => {
          context.commit("SET_COMMENTS", res.data);
          context.commit("CHANGE_STATUS_LOADING", false);
           context.commit("SET_PAGE", page);
        })
        .catch((err) => {
          
          context.commit("CHANGE_STATUS_LOADING", false);
          context.commit("CHANGE_STATUS_ERROR", true);
        });
    },
  },
  getters: {
    getComments(state) {
      return state.comments;
    },
    isLoading(state) {
      return state.isLoading;
    },
    isError(state) {
      return state.isError;
    },
    getPageStatus(state) {
      return state.page;
    }
  },
});
