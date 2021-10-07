<template>
  <v-container fluid>
    <v-app-bar color="blue" dense dark>
      <v-btn outlined class="ml-3" @click="openDialog">add</v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>


export default {
  name: "Navbar",
  methods: {
    openDialog(){
      this.$store.commit("showDialog")
    }
  }
}
</script>

<style scoped>

</style>