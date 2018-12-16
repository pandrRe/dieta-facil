<template>
  <div>
    <div class="row" v-for="nutriente in Object.keys(this.nutrientes)" :key="nutriente">
        <div class="col-sm-4">
          <label>{{ dict[nutriente] }}</label>
        </div>
        <div class="col-sm-4">
          <input class="form-control" type="number" v-model.number="nutrientes[nutriente].min"
            v-on:input="emitInput" placeholder="Mínimo">
        </div>
        <div class="col-sm-4">
          <input class="form-control" type="number" v-model.number="nutrientes[nutriente].max"
            v-on:input="emitInput" placeholder="Máximo">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinMaxNutrientes',

  model: {
    event: 'input',
    prop: 'nutrientesSpecs',
  },

  props: {
    nutrientesSpecs: Object,
    form: String,
  },

  data() {
    return {
      nutrientes: {
        valor_energetico: { min: null, max: null },
        carboidratos: { min: null, max: null },
        proteinas: { min: null, max: null },
        gorduras_totais: { min: null, max: null },
        gorduras_saturadas: { min: null, max: null },
        gorduras_trans: { min: null, max: null },
        fibra_alimentar: { min: null, max: null },
        sodio: { min: null, max: null },
      },

      dict: {
        valor_energetico: 'Valor energético',
        carboidratos: 'Carboidratos',
        proteinas: 'Proteínas',
        gorduras_totais: 'Gorduras totais',
        gorduras_saturadas: 'Gorduras saturadas',
        gorduras_trans: 'Gorduras trans',
        fibra_alimentar: 'Fibra alimentar',
        sodio: 'Sódio',
      },
    };
  },

  methods: {
    emitInput() {
      this.$emit('input', this.nutrientes);
    },
  },
};
</script>

<style scoped>
.row {
  padding: 20px;
}
</style>
