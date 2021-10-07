import axios from "axios";

export default {
    state:{
        cards: [],
        dialogVisible: false,
        currentCard:{}
    },
    mutations:{
        setCards(state, payload){
            state.cards = payload;
        },
        showDialog(state){
            state.dialogVisible = true;
        },
        hideDialog(state){
            state.dialogVisible = false;
        },
        setCurrentCard(state, payload){
            state.currentCard = payload;
        },
        deleteCard(state, payload){
            state.cards = state.cards.filter(card=>(card.id!==payload));
        },
        addCard(state, payload){
            state.cards.push(payload);
        },
        updateCard(state, payload){
            state.currentCard.title = payload.title;
            state.currentCard.body = payload.body;
            state.currentCard = {};

        },
    },
    getters:{
        getAllCards(state){
            return state.cards
        },
        getDialogVisible:(state)=>state.dialogVisible,
        getCurrentCard: (state)=>state.currentCard,
    },
    actions:{
        fetchCards(context){
                axios.get('https://jsonplaceholder.typicode.com/posts?-limit=10')
                    .then(response => context.commit("setCards", response.data))
        }
    },

}