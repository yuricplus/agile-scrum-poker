<script lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    RouterView,
    FooterComponent
  }
}

</script>

<template>
  <header-component />
  <RouterView />
  <footer-component />
</template>

<style scoped>
</style>
