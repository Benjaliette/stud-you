<template>
  <section v-if="!isAuth">
    <h2>Movies to watch</h2>
    <div class="cards">
      <movies-list :movies="watchlistMovies"></movies-list>
    </div>
  </section>
  <section v-else>
    <h2>Movies to watch</h2>
    <p>Nothing here yet</p>
    <p>
      You need to be <router-link to="/login">authenticated</router-link> to add
      movies
    </p>
  </section>
</template>

<script setup>
import MoviesList from "@/components/movies/MoviesList.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const watchlistMovies = computed(() => store.getters["movies/watchlistMovies"]);

const isAuth = computed(() => store.getters["users/isAuth"]);
</script>

<style scoped>
section p {
  font-style: italic;
}

section p a {
  color: var(--blue);
  text-decoration: underline;
}

section p a:hover {
  font-weight: bold;
}
</style>
