<template>
  <div>
    <p>Selected page: {{ page }}</p>
    <pagination
      :records="100"
      v-model="page"
      :per-page="5"
      @paginate="callback"
    >
    </pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 20,
    };
  },
  methods: {
    callback: function (page) {
      console.log(`Page ${page} was selected. Do something about it`);
    },
  },
};
</script>

<style  scoped>
.VuePagination__count{
    display: none;
}
</style>