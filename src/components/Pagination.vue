<template>
  <div
    v-if="!isError && !isLoading"
    class="row d-flex justify-content-center mt-5 pagination"
  >
    <div>
      <div id="app" v-cloak>
        <pagination
          :records="100"
          v-model="page"
          :per-page="getPageEntry"
          @paginate="callback"
        >
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    isError() {
      return this.$store.getters.isError;
    },
     getPageEntry() {
      return this.$store.getters.getPageEntry;
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    callback(page) {
      this.page = page;
      this.$store.dispatch("loadComments", {page:page,entry:this.getPageEntry});
    },
    
  },
};
</script>

<style  scoped>
</style>