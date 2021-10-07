
<template>
  <v-container>
    <card-form />
    <v-row>
       <card-item v-for="card in this.$store.getters.getAllCards" :key="card.id" :card="card" />
    </v-row>
  </v-container>

</template>

<script>
import CardForm from "@/components/cards/CardForm";
import CardItem from "@/components/cards/CardItem";

export default {
  name: "CardList",
components:{ CardItem, CardForm},
  data: () => ({

  }),

  methods:{


  }
}
</script>

<style scoped>

</style>