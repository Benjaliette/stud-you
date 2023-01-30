<template>
  <base-carousel :movies="popularMovies"></base-carousel>
  <section>
    <h2>Now playing</h2>
    <div class="cards">
      <movies-list :movies="nowPlayingMovies"></movies-list>
    </div>
  </section>
  <section>
    <h2>Top rated</h2>
    <div class="cards">
      <movies-list :movies="topMovies"></movies-list>
    </div>
  </section>
</template>

<script setup>
import MoviesList from "@/components/movies/MoviesList.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const nowPlayingMovies = computed(() => store.getters["movies/nowPlaying"]);
const topMovies = computed(() => store.getters["movies/topMovies"]);
const popularMovies = computed(() => store.getters["movies/movies"]);
</script>

<style scoped>
section {
  margin-top: 60px;
}
</style>
