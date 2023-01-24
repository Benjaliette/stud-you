<template>
  <base-carousel></base-carousel>
  <section>
    <h2>Now playing</h2>
    <div class="cards">
      <card-swiper></card-swiper>
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

<style scoped>
.cards {
  display: flex;
}
</style>
