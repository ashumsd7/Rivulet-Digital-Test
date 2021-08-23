<template>
  <div class="custom-pagination">
    <ul class="d-flex justify-content-center flex-wrap">
        <li>&lt;</li>
      <li v-for="i in getTotalPage" @click="handlePageAction(i)" :key="i">
        {{ i }}
      </li>
       <li>&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
   
    getPageEntry() {
      return this.$store.getters.getPageEntry;
    },
    getTotalPage() {
      return this.$store.getters.getTotalPage;
    },
  },
  data() {
    return {};
  },
 
  methods: {
    handlePageAction(pageNumber) {
      this.$store.dispatch("loadComments", {page:pageNumber,entry:this.getPageEntry});
    },
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
  border: 1px solid black;
  padding: 0.6rem;
  background: rgb(226, 217, 217);
  font-weight: 500;
}
ul li:hover {
  border: 1px solid rgb(64, 216, 5);
  background: rgb(129, 250, 220);
}
ul li.isActive {
  background: black;
  color: rgb(28, 255, 7);
  font-weight: bolder;
}
</style>