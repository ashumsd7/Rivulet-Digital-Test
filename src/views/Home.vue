<template>
  <div class="home">
    <div class="container mt-3">
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
      <div class="row d-flex justify-content-center mt-5 pagination">
        <Pagintaion v-if="!isLoading" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pagintaion from "../components/Pagination.vue";
import CommentPost from "../components/reusable/CommentPost.vue";
import Loader from "../components/Loader.vue";

export default {
  computed: {
    fetchComments() {
      return this.$store.getters.getComments;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  components: {
    Pagintaion,
    CommentPost,
    Loader,
  },
};
</script>

<style scoped>
.pagination{
  position: fixed;
  bottom: 0;
  left: 20px;
  overflow-x: scroll;
    max-width: 100vw;
    overflow-x: scroll;
}

</style>
