<template>
  <div>
    <b-dropdown
      id="dropdown-left"
      text="Entry Per Page"
      variant="primary"
      class=""
    >
      <b-dropdown-item
        v-for="option in options"
        @click="handleEntry(option)"
        :key="option"
        >{{ option }}</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
export default {
  computed: {
    getPageStatus() {
      return this.$store.getters.getPageStatus;
    },
   
  },
  data() {
    return {
      options: [5,6,7,8,9, 10,11,12,13,14,15,16,17,18,19, 20],
    };
  },
  methods: {
    handleEntry(option) {
     
      this.$store.dispatch("loadComments", {page:1, entry:option});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>