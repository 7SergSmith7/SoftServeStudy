<template>
  <v-container>
  <v-btn>
    <router-link to="/main">Cards Gallery</router-link>
  </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {

    this.$store.dispatch("fetchCards")
  },
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>