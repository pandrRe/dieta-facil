<template>
  <div class="about mainview container">
    <h1>Montar Dieta</h1>
    <p class="textoCentro">
        Monte sua dieta ideal.
    </p>

    <div class="textoEsq card">
      <div class="card-body">
        <h5 class="card-title">1. Escolha os alimentos de sua dieta:</h5>
        <select class="form-control" v-model="alimentoSelecionado">
          <option :value="{}" disabled>Selecione um alimento</option>
          <option v-for='alimento in alimentos' :key='alimento.id' :value='alimento'>
            {{ alimento.nome }}
          </option>
        </select>
        <button class="btn btn-primary btn-alimento"
          v-on:click="selecionarAlimento">Selecionar</button>
      </div>
    </div>

    <div class="row textoEsq info">
      <div class="col-sm-3">
        <ShowAlimento v-if="Object.keys(alimentoSelecionado).length !== 0"
            :alimento="alimentoSelecionado" />
      </div>
      <div class="col-sm-9">
        <TabelaAlimentos :alimentos="alimentosSelecionados" />
      </div>
    </div>

    <div class="textoEsq card top">
      <div class="card-body">
        <h5 class="card-title">2. Defina os máximos e mínimos para cada nutriente:</h5>
      </div>
    </div>

    <MinMaxNutrientes v-model="nutrientesMinMax" :form="formName"/>

    <div v-if="dietaState !== 'STARTED'" class="textoEsq card top">
      <div v-if="dietaState === 'WAITING'" class="card-body">
        <p>Formulando dieta...</p>
      </div>
      <div v-if="dietaState === 'DONE'" class="card-body">
        <p>Preço: {{ dietaFinal.result }}R$</p>
        <p v-for="alimento in Object.keys(formatAlimentosDieta())" :key="alimento">
          {{ alimento }}: {{ dietaFinal[alimento] }}
        </p>
      </div>
    </div>

    <button class="btn btn-primary send-dieta" ref="send" v-on:click="postDieta">ENVIAR</button>
  </div>
</template>

<script>
import ShowAlimento from '../components/ShowAlimento.vue';
import TabelaAlimentos from '../components/TabelaAlimentos.vue';
import MinMaxNutrientes from '../components/MinMaxNutrientes.vue';

import { objectFilter } from '../utils';

export default {
  mounted() {
    this.getAlimentos();
  },

  data() {
    return {
      alimentoSelecionado: {},
      alimentosSelecionados: [],
      nutrientesMinMax: {},
      formName: 'dieta',
    };
  },

  computed: {
    alimentos() {
      return this.$store.getters.alimentos;
    },

    dieta() {
      return {
        alimentos: this.alimentosSelecionados.map(alimento => alimento.id),
        nutrientes: objectFilter(this.nutrientesMinMax, (nutriente) => {
          if (nutriente.max == null || nutriente.min == null) {
            return false;
          }
          return true;
        }),
      };
    },

    dietaState() {
      return this.$store.state.dietaState;
    },

    dietaFinal() {
      return this.$store.state.dieta;
    },
  },

  methods: {
    getAlimentos() {
      this.$store.dispatch('getAllAlimentos');
    },

    selecionarAlimento() {
      if (!this.alimentosSelecionados.includes(this.alimentoSelecionado)
        && Object.keys(this.alimentoSelecionado).length > 0) {
        this.alimentosSelecionados.push(this.alimentoSelecionado);
      }
    },

    postDieta() {
      this.$store.dispatch('postDieta', this.dieta).then(() => {
        this.$refs.send.scrollIntoView({ block: 'end', behavior: 'smooth' });
      });
    },

    formatAlimentosDieta() {
      const alimentos = {};
      Object.keys(this.dietaFinal).forEach((key) => {
        if (key !== 'feasible' && key !== 'bounded' && key !== 'result') {
          alimentos[key] = this.dietaFinal[key];
        }
      });

      return alimentos;
    },
  },

  components: {
    ShowAlimento,
    TabelaAlimentos,
    MinMaxNutrientes,
  },
};

</script>

<style scoped>

.btn-alimento {
  margin: 5px 5px 5px 0px;
  display: inline-block;
}

.info {
  padding-top: 15px;
}

.top {
  margin-top: 20px;
}

.send-dieta {
    margin: 10px;
    padding: 20px;
    width: 15%;
}

</style>
