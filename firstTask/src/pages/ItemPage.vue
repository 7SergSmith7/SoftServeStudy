<template>
<v-container>
  <v-btn>
    <router-link to="/main">Back</router-link>
  </v-btn>

  <card-item :card="this.$store.getters.getCurrentCard" />
</v-container>
</template>

<script>
import CardItem from "@/components/cards/CardItem";

export default {
  name: "ItemPage",
  data: ()=>({

  }),
  components:{
    CardItem,
  },


}
</script>

<style scoped>
a{
  text-decoration: none;

}
</style>