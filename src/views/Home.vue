<template>
  <div class="home">
    <div class="container mt-5">
      <Error v-if="isError && !isLoading"/>
      <div class="mb-3 row d-flex justify-content-center" v-if="!isError">
        <button class="btn btn-success mb-3" @click="NextorPrev('prev')">
          Prev Page
        </button>
        <p class="m-2"
          >Currently Showing Page: <strong>{{ getPageStatus }}</strong> 
        </p>
        <EntryControl/>
        <button class="btn btn-success mb-3" @click="NextorPrev('next')">
          Next Page
        </button>
      </div>

      <Loader v-if="isLoading" />
      <div v-else class="row d-flex justify-content-center">
        <CommentPost
          v-for="comment in fetchComments"
          :name="comment.name"
          :email="comment.email"
          :body="comment.body"
          :id="comment.id"
          :key="comment.id"
        />
      </div>
      <!-- <div v-if="!isError && !isLoading" class="row d-flex justify-content-center mt-5 pagination"> -->
      <Pagintaion  />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pagintaion from "../components/Pagination.vue";
import CommentPost from "../components/reusable/CommentPost.vue";
import Loader from "../components/Loader.vue";
import Error from "../components/Error.vue";
import EntryControl from "../components/EntryControl.vue";

export default {
  computed: {
    fetchComments() {
      return this.$store.getters.getComments;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
     isError() {
      return this.$store.getters.isError;
    },
    getPageStatus() {
      return this.$store.getters.getPageStatus;
    },
    getPageEntry() {
      return this.$store.getters.getPageEntry;
    },
  },
  components: {
    Pagintaion,
    CommentPost,
    Loader,
    Error,
    EntryControl
  },
  methods: {
    NextorPrev(action) {
      if(this.getPageStatus==1 && action=='prev'){
       return;
      }
      if(this.getPageStatus==20 && action=='next'){
        return;
      }
      action == "next"
        ? this.$store.dispatch("loadComments", this.getPageStatus + 1,this.getPageEntry)
        : this.$store.dispatch("loadComments", this.getPageStatus - 1,this.getPageEntry);
    },
  },
};
</script>

<style scoped>
.pagination {
  /* position: fixed;
  bottom: 0; */
  /* 

  overflow-x: scroll;
    max-width: 100vw;
    overflow-x: scroll;
    color: wheat;
    background: black; */
}
</style>
