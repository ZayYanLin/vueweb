<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
</script>

<template>
  <main class="home-main">
    <HeroSection />
  </main>
</template>

<style scoped>
.home-main {
  position: relative;
  z-index: 1;
  overflow-x: hidden;
}
</style>
