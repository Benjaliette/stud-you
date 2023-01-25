<template>
  <section>
    <h2>Movies to watch</h2>
    <div class="cards">
      <movies-list :movies="watchlistMovies"></movies-list>
    </div>
  </section>
</template>

<script setup>
import MoviesList from "@/components/movies/MoviesList.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const watchlistMovies = computed(() => store.getters["movies/watchlistMovies"]);
</script>

<style scoped></style>
