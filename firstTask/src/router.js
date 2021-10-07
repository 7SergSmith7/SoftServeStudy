import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './pages/MainPage';
import ItemPage from "./pages/ItemPage";
import IndexPage from "./pages/IndexPage";

Vue.use(VueRouter)

const routes =[
    {
        path: '/main',
        component: MainPage,
    },
    {
        path: '/main/card',
        component:ItemPage,
    },
    {   path: '/',
        component: IndexPage,
    },
]
export default new VueRouter({
    mode:'history',
    routes
})