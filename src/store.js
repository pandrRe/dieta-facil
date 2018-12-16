import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(axios);

const BASE_URL = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    alimentos: [],
    dieta: {},
    dietaState: 'STARTED',
    erro: '',
  },

  getters: {
    alimentos: state => state.alimentos.map(alimento => alimento.data),
  },

  mutations: {
    LOAD_ALIMENTOS: (state, alimentos) => {
      state.alimentos = alimentos;
    },
    SET_DIETA_STATE: (state, dietaState) => {
      state.dietaState = dietaState;
    },
    SET_DIETA: (state, dieta) => {
      state.dieta = dieta;
    },
    SET_ERRO: (state, erro) => {
      state.erro = erro;
    },
  },

  actions: {
    getAllAlimentos: (context) => {
      axios.get(`${BASE_URL}/alimento/0`)
        .then((res) => {
          context.commit('LOAD_ALIMENTOS', res.data);
        });
    },

    postDieta: (context, nutrientes) => {
      context.commit('SET_DIETA_STATE', 'WAITING');
      return axios.post(`${BASE_URL}/dieta`, nutrientes)
        .then((res) => {
          context.commit('SET_DIETA_STATE', 'DONE');
          context.commit('SET_DIETA', res.data);
        })
        .catch((e) => {
          context.commit('SET_DIETA_STATE', 'ERROR');
          context.commit('SET_ERRO', e);
        });
    },
  },
});
