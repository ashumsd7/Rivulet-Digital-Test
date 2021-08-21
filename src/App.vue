<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>
<script>
import TheHeader from '../src/components/boss/TheHeader.vue'
export default {
  components:{
    TheHeader
  },
  created() {
    this.$store.dispatch('loadComments',1)
  },
}
</script>

<style lang="scss">
#app{
  background: rgb(238, 238, 238);
}
</style>
