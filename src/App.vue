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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
#app{
  background:url('https://image.freepik.com/free-vector/leaves-background-with-metallic-foil_79603-914.jpg');
}
</style>
