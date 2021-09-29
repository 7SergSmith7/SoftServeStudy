
<template>
  <v-container>
    <CardForm @addCard = "addCard"/>
    <v-row>
       <CardItem @deleteCard = "deleteCard" v-for="card in this.$store.getters.getAllCards" :key="card.id" :card="card" />
    </v-row>
  </v-container>

</template>

<script>
import CardForm from "./cards/CardForm";
import CardItem from "./cards/CardItem";

export default {
  name: "CardList",
components:{ CardItem, CardForm},
  data: () => ({

  }),

  methods:{

    addCard(card){
      this.cards.push(card);
    },
    deleteCard(id){
      this.cards = this.cards.filter((card)=>card.id !== id)
    },

  }
}
</script>

<style scoped>

</style>