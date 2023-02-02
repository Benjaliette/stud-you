<template>
  <section>
    <h2>Upcoming movies</h2>
    <div class="cards">
      <div v-for="movie in upcomingMovies" :key="movie.id" class="card__item">
        <base-movie-card :movie="movie"></base-movie-card>
        <base-flag
          @watchlist="markAsSaved(movie)"
          :isMarked="movieInWatchlist(movie)"
          v-if="!isWatchlist && isAuth"
        ></base-flag>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const upcomingMovies = computed(() => store.getters["movies/upcomingMovies"]);

const markAsSaved = (markedMovie) => {
  store.dispatch("users/saveMovie", markedMovie);
};

const isWatchlist = computed(() => {
  return route.name === "watchlist";
});

const movieInWatchlist = (movie) => {
  const watchlist = store.getters["users/userWatchlist"];
  if (watchlist) {
    const markedMovie = watchlist.find((watchMov) => watchMov.id === movie.id);
    if (markedMovie) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const isAuth = computed(() => {
  return store.getters["users/isAuth"];
});
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
}

.card__item {
  position: relative;
}

@media (max-width: 1140px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 960px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
