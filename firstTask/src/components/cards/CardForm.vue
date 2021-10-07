<template>
  <v-container>
    <v-row justify="center">
      <v-dialog
          v-model="$store.getters.getDialogVisible"
          persistent
          max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      v-model="titleInput"
                      label="Title*"
                      type="text"
                      required
                  ></v-text-field>
                 </v-col>
                 <v-col cols="12">
                  <v-text-field
                      v-model="bodyInput"
                      label="Description*"
                      type="text"
                      required
                  ></v-text-field>
                 </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn
                color="blue darken-1"
                text
                @click="closeDialog"

            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="addCard"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>


  </v-container>
</template>

<script>
import {bus} from '@/main'
  export default {
    name: "CardForm",

    data: () => ({
      titleInput:'',
      bodyInput:'',
    }),
    created() {
      bus.$on('editCard', card=>(this.openEditCard(card)))
    },
    methods: {
      addCard() {

        if(this.$store.getters.getCurrentCard.id){
          let updateCard = {
            title: this.titleInput,
            body: this.bodyInput,}
          this.$store.commit("updateCard", updateCard)
        }
        else {
          let card = {
            id: Date.now(),
            title: this.titleInput,
            body: this.bodyInput,

          }
          this.$store.commit('addCard', card);
          console.log(card)
        }
        this.titleInput ='';
        this.bodyInput ='';
        this.$store.commit("hideDialog")
      },
      openEditCard(card){
        this.$store.commit("showDialog")
        this.titleInput = card.title;
        this.bodyInput = card.body;
      },
      closeDialog(){
        this.$store.commit("hideDialog")
      }
    }
  }
</script>
