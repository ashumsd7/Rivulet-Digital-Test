import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comments: [],
    isLoading: true,
    isError: false,
    page: 1,
    entries: 10,
  },
  mutations: {
    //MUTATION: SETTING POSTS (COMMNETS) to STATE 
    SET_COMMENTS(state, payload) {
      state.comments = payload;
    },
    //MUTATION: CHNAGING LOADER STATUS
    CHANGE_STATUS_LOADING(state, toggle) {
      state.isLoading = toggle;
    },
    //MUTATION: CHNAGING ERROR STATUS
    CHANGE_STATUS_ERROR(state, toggle) {
      state.isError = toggle;
    },
    //MUTATION: SETTING PAGE NUMBER
    SET_PAGE(state, page) {
      state.page = page;
    },
    //MUTATION: SETTING PAGE ENTRY
    SET_PAGE_ENTRY(state, entry) {
      state.entries = entry;
    },
  },
  actions: {
    //ACTION: WHEN LOADS COMMENTS (POSTS)
    loadComments(context, payload) {
      context.commit("CHANGE_STATUS_ERROR", false);
      context.commit("CHANGE_STATUS_LOADING", true);
      axios
        .get(
          `https://jsonplaceholder.typicode.com/comments?_page=${payload.page}&_limit=${payload.entry}`
        )
        .then((res) => {
          context.commit("SET_COMMENTS", res.data);
          context.commit("CHANGE_STATUS_LOADING", false);
          context.commit("SET_PAGE", payload.page);
          context.commit("SET_PAGE_ENTRY", payload.entry);
        })
        .catch((err) => {
          context.commit("CHANGE_STATUS_LOADING", false);
          context.commit("CHANGE_STATUS_ERROR", true);
        });
    },
  },
  getters: {
    //FOR ALL POSTS
    getComments(state) {
      return state.comments;
    },
    //WHEN API LOADS
    isLoading(state) {
      return state.isLoading;
    },
    //IS THERE ANY ERROR : GETTERS
    isError(state) {
      return state.isError;
    },
    //FOR PAGE NUMBER
    getPageStatus(state) {
      return state.page;
    },
    //FOR PAGE ENTRIES
    getPageEntry(state) {
      return state.entries;
    },
  },
});
