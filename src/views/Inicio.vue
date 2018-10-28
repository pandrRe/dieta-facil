<template>
  <div class="inicio">
    <Intro msg="Dieta Fácil"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue';

export default {
  name: 'inicio',
  components: {
    Intro,
  },
};
</script>

<style scoped>
</style>
