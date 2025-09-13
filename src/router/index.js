import { createRouter, createWebHashHistory } from 'vue-router';
import HomeH from '../components/HomeH.vue';
import IntroductionA from '../components/introduction.vue';
import FooD from '../components/FooD.vue';
import GoodView from '../components/GoodView.vue'
import LasT from '../components/LasT.vue'
const routes = [
    { path: '/', component: HomeH },
    { path: '/introduction', component: IntroductionA },
    { path: '/food', component: FooD },
    { path: '/view', component: GoodView },
    { path: '/last', component: LasT },
];

const router = createRouter({
    history: createWebHashHistory('/Baoding-introduction-Vue-homework/'),
    routes,
});

export default router;
