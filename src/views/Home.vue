<template>
  <div class="home">
    <div class="container mt-5">
      <!-- ERROR -->
      <Error v-if="isError && !isLoading"/>

      <!-- PREV PAGE NEXT PAGE HANDLER -->
      <div class="mb-3 row d-flex justify-content-center" v-if="!isError">
        <button class="btn btn-success mb-3" @click="NextorPrev('prev')">
          Prev Page
        </button>
        <p class="m-2"
          >Currently Showing Page: <strong>{{ getPageStatus }}</strong>  | Entries : <strong>{{getPageEntry}}</strong>
        </p>
        <EntryControl/>
        <button class="btn btn-success mb-3" @click="NextorPrev('next')">
          Next Page
        </button>
      </div>

<!-- LOADER -->
      <Loader v-if="isLoading" />

      <!-- POSTS OR COMMENTS FETCHED FROM SERVER -->
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
   
   <!-- PAGINATION -->
      <Pagintaion  />
    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// IMPORTING ALL COMPONENTS
import Pagintaion from "../components/Pagination.vue";
import CommentPost from "../components/reusable/CommentPost.vue";
import Loader from "../components/Loader.vue";
import Error from "../components/Error.vue";
import EntryControl from "../components/EntryControl.vue";

export default {
  //COMPUTED PROPERTIES FOR : COMMENTS, LOADING, ERROR, PAGE NUMBER, ENTRY PER PAGE
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
  //REGISTERING COMPONENTS LOCALLY
  components: {
    Pagintaion,
    CommentPost,
    Loader,
    Error,
    EntryControl
  },
  methods: {
    //HANDLING NEXT OR PREV PAGE
    NextorPrev(action) {
      if(this.getPageStatus==1 && action=='prev'){
       return;
      }
      if(this.getPageStatus==20 && action=='next'){
        return;
      }
      action == "next"
        ? this.$store.dispatch("loadComments", {page:this.getPageStatus + 1,entry:this.getPageEntry})
        : this.$store.dispatch("loadComments", {page:this.getPageStatus - 1,entry:this.getPageEntry});
    },
  },
};
</script>

<style scoped>

</style>
