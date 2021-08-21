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
    handlePagination:page=> {
      console.log(`Page ${page} was selected. Do something about it`);
    },
  },
};
</script>

<style  scoped>




</style>