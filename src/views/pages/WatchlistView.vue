<template>
  <section v-if="isAuth">
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
  <section v-if="isAuth && !noTopMovies">
    <h2>My top films</h2>
    <ul class="list top-movies__list">
      <top-movie-item
        v-for="(movie, index) in userTopMovies"
        :key="movie.id"
        :movie="movie"
      >
        {{ index + 1 }}
      </top-movie-item>
    </ul>
  </section>
</template>

<script setup>
import MoviesList from "@/components/movies/MoviesList.vue";
import TopMovieItem from "@/components/movies/TopMovieItem.vue";

import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";

const store = useStore();
const noTopMovies = ref(false);

const watchlistMovies = computed(() => store.getters["users/userWatchlist"]);
const userTopMovies = computed(() => store.getters["users/userTopMovies"]);

const isAuth = computed(() => store.getters["users/isAuth"]);

onMounted(() => {
  if (userTopMovies.value === null) {
    noTopMovies.value = true;
  }
});
</script>

<style scoped>
section {
  margin-top: 60px;
}

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

.list {
  list-style: none;
  margin: 50px 0px 0px 0px;
  padding: 0;
}

.top-movies__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem 2rem;
}
</style>
