<template>
  <base-carousel></base-carousel>
  <section>
    <h2>Now playing</h2>
    <div class="cards">
      <movies-list></movies-list>
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
import MoviesList from "@/components/movies/MoviesList.vue";
</script>

<style scoped>
.cards {
  display: flex;
}
</style>
