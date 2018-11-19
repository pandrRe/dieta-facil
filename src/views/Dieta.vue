<template>
  <div class="about">
    <h1>Montar Dieta</h1>
    <p class="textoCentro">
        Monte sua dieta ideal.
    </p>

    <select>
      <option v-for='alimento in alimentos' :key='alimento.id' :value='alimento.id'>
        {{ alimento.nome }}
      </option>
    </select>

  </div>
</template>

<script>

export default {
  mounted() {
    this.getAlimentos();
  },

  computed: {
    alimentos() {
      return this.$store.getters.alimentos;
    },
  },

  methods: {
    getAlimentos() {
      this.$store.dispatch('getAllAlimentos');
    },
  },
};

</script>
