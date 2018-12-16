<template>
  <div class="alimento-box card">
    <div class="card-body">
      <h5 class="card-title">{{ alimento.nome }}</h5>
      Porção: {{ alimento.porção }} <br>
      Custo p/ porção: {{ alimento.preço }} R$ <br>
      Valor energético: {{ alimento.valor_energetico }} kcal <br>
      Carboidratos: {{ alimento.carboidratos }} g <br>
      Proteína: {{ alimento.proteinas }} g <br>
      Gorduras totais: {{ alimento.gorduras_totais }} g <br>
      Gorduras saturadas: {{ alimento.gorduras_saturadas }} g <br>
      Gorduras trans: {{ alimento.gorduras_trans }} g <br>
      Fibra alimentar: {{ alimento.fibra_alimentar }} g <br>
      Sódio: {{ alimento.sodio }} mg <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowAlimento',
  props: {
    alimento: Object,
  },
};
</script>
