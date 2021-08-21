<template>
  <div>
    <pagination
      :records="100"
      v-model="page"
      :per-page="5"
      @paginate="handlePagination"
    >
    </pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page:1,
    };
  },
  methods: {
    handlePagination(page) {
     this.$store.dispatch('loadComments',page)
     
    },
  
   
  },
};
</script>

<style  scoped>



</style>