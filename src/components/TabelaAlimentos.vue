<template>
  <div class="alimento-box">
    <table class="table">
      <thead>
        <th scope="col">Nome</th>
        <th scope="col">Porção</th>
        <th scope="col">Custo p/porção</th>
        <th scope="col">V. energético</th>
        <th scope="col">Carboidratos</th>
        <th scope="col">Proteínas</th>
        <th scope="col">G. totais</th>
        <th scope="col">G. saturadas</th>
        <th scope="col">G. trans</th>
        <th scope="col">Fibra</th>
        <th scope="col">Sódio</th>
      </thead>
      <tbody>
        <tr v-for="alimento in alimentos" :key="alimento.id">
          <td>{{ alimento.nome }}</td>
          <td>{{ alimento.porção }}</td>
          <td>{{ alimento.preço }}</td>
          <td>{{ alimento.valor_energetico }}</td>
          <td>{{ alimento.carboidratos }}</td>
          <td>{{ alimento.proteinas }}</td>
          <td>{{ alimento.gorduras_totais }}</td>
          <td>{{ alimento.gorduras_saturadas }}</td>
          <td>{{ alimento.gorduras_trans }}</td>
          <td>{{ alimento.fibra_alimentar }}</td>
          <td>{{ alimento.sodio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TabelaAlimentos',
  props: {
    alimentos: Array,
  },
};
</script>

<style scoped>
.table {
  font-size: 11px;
}
</style>
