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
          :per-page="5"
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
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    callback(page) {
      this.page = page;
      this.$store.dispatch("loadComments", page);
    },
    pageChanged() {
      alert();
    },
  },
};
</script>

<style  scoped>
</style>