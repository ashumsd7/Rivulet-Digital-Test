<template>
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
</template>

<script>
export default {
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