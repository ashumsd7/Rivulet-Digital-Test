<template>
  <div class="home">
    <div class="container mt-4">
     
         <CustomPagination />

     
      <!-- ERROR -->
      <Error v-if="isError && !isLoading"/>

      <!-- PREV PAGE NEXT PAGE HANDLER -->
      <div class=" entry-control row d-flex flex-column justify-content-center align-items-center" v-if="!isError && !isLoading">
           <EntryControl/>
        <br>
         <p class="status"
          >Currently Showing Page: <strong class="text-center">{{ getPageStatus }}</strong>  | Entries : <strong class="text-center">{{getPageEntry}}</strong>
        </p> 
      </div>

<!-- LOADER -->
  <div  v-if="isLoading" class="row d-flex justify-content-center">
   <Loader />
  </div>
   

      <!-- POSTS OR COMMENTS FETCHED FROM SERVER -->
      <div v-if="!isError" class="row d-flex justify-content-center">
        <CommentPost
          v-for="comment in fetchComments"
          :name="comment.name"
          :email="comment.email"
          :body="comment.body"
          :id="comment.id"
          :key="comment.id"
        />
      </div>
 
    
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// IMPORTING ALL COMPONENTS

import CustomPagination from "../components/CustomPagination.vue";
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
    CommentPost,
    Loader,
    Error,
    EntryControl,
    CustomPagination
  },

 
  

};
</script>

<style scoped>

strong{
  color: rgb(255, 255, 255);
  font-size: 1.3rem;
  background: rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  
}
.status{
  font-weight: bolder;
  font-size: 1.1rem;
  color: green;
}
@media screen and (max-width:900px) {
.status{
  font-weight: bold;
  font-size: .8rem;
 
}
strong{
  font-size: 1rem;
  background: rgb(0, 0, 0);
  width: 25px;
  height: 25px;
  
}
}
</style>
