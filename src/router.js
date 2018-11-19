import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './views/Inicio.vue';
import Sobre from './views/Sobre.vue';
import Dieta from './views/Dieta.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
    },
    {
      path: '/dieta',
      name: 'dieta',
      component: Dieta,
    },
  ],
});
