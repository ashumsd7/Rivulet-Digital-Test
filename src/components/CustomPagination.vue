<template>
  <div class="custom-pagination">
    <ul class="d-flex justify-content-center ">
      <li @click="nextOrPrev('prev')" :class="{makeDisable:isDisabled}">&lt;</li>
      <li v-for="i  in getTotalPage" @click="handlePageAction(i)" :id="i" :key="i">
        {{ i }}
      </li>
      <li @click="nextOrPrev('next')">&gt;</li>
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
    return {
      currentPage:1,
      isDisabled:false
    };
  },

  methods: {
    handlePageAction(pageNumber) {
      this.currentPage=pageNumber
      this.$store.dispatch("loadComments", {
        page: pageNumber,
        entry: this.getPageEntry,
      });
    },
    nextOrPrev(action) {
      // alert(action)
        //  let ele= document.getElementById("'"+this.currentPage+"'")
        //  console.log("elele",ele);
        //  ele.classList.add("isActive");
      action == "next"
        ? this.$store.dispatch("loadComments", {
            page: ++this.currentPage,
            entry: this.getPageEntry,
          })
        : this.$store.dispatch("loadComments", {
            page: --this.currentPage,
            entry: this.getPageEntry,
          });
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
  cursor: pointer;
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
.makeDisable{
  cursor: not-allowed;
}
.custom-pagination{

 
}
</style>