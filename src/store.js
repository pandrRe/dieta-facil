import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    alimentos: [],
  },

  getters: {
    alimentos: state => state.alimentos.map(alimento => alimento.data),
  },

  mutations: {
    LOAD_ALIMENTOS: (state, payload) => {
      state.alimentos = payload;
    },
  },

  actions: {
    getAllAlimentos: (context) => {
      axios.get('http://localhost:3000/alimento/0')
        .then((res) => {
          context.commit('LOAD_ALIMENTOS', res.data);
        });
    },
  },
});
