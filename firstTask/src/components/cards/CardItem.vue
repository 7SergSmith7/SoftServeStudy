<template>

    <v-col cols="4">
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
      <p class="text-h4 text--primary">
       {{card.title}}
      </p>
      <div class="text--primary">
        {{card.body}}
      </div>
      </v-card-text>
      <v-card-actions v-if="this.$router.currentRoute.fullPath !== '/main/card'">
        <v-btn
            color="blue darken-1"
            text
            @click="deleteCard"
        >
          Delete
        </v-btn>
        <v-btn

            color="blue darken-1"
            text
            @click="editCard"
        >
          Edit
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
        >
          <router-link  to="/main/card"><span  @click="detailsCard">More</span></router-link>

        </v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

</template>

<script>
import {bus} from '@/main'
export default {
  name: 'CardItem',
  props: ['card'],
   data: () => ({

  }),
  methods:{
    deleteCard() {
      this.$store.commit('deleteCard', this.card.id)
    },
    editCard(){
      this.$store.commit("setCurrentCard", this.card)
      bus.$emit('editCard', this.card)
    },
    detailsCard(){
      this.$store.commit('setCurrentCard', this.card)
    },
    created() {

    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>