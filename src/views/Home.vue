<template>
  <div class="home">

    <div class="container mt-3">
      <div class="row d-flex justify-content-center">
        <CommentPost
          v-for="comment in fetchComments"
          :name="comment.name"
          :email="comment.email"
          :body="comment.body"
          :key="comment.id"
        />
      </div>
      <div class="row d-flex justify-content-center mt-5">

       <Pagintaion />
      </div>
    </div>
       
  </div>
</template>

<script>
// @ is an alias to /src
import Pagintaion from "../components/Pagination.vue";
import CommentPost from "../components/reusable/CommentPost.vue";

export default {
  computed: {
    fetchComments() {
      return this.$store.getters.getComments;
    },
  },
  components: {
    Pagintaion,
    CommentPost,
  },
};
</script>
