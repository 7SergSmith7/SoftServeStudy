<template>
  <v-app>
    <v-header>
      <navbar/>
    </v-header>
    <v-main> <router-view/></v-main>
   <v-footer></v-footer>
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar";

export default {
  name: 'App',

  components: {
     Navbar
  },
};
</script>
