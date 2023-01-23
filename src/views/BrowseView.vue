<template>
  <base-carousel></base-carousel>
  <section>
    <h2>Now playing</h2>
    <div>
      <base-card v-for="movie in 2" :key="movie"></base-card>
    </div>
  </section>
  <section>
    <h2>Top rated</h2>
    <div>
      <base-card></base-card>
    </div>
  </section>
</template>

<script setup>
import BaseCarousel from "../components/UI/BaseCarousel.vue";
</script>
