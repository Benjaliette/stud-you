<template>
  <section>
    <h2>Search ...</h2>
    <loading-spinner v-if="isLoading"></loading-spinner>
    <div class="cards" v-else>
      <div v-for="movie in searchResults" :key="movie.id" class="card__item">
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
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onUpdated, onMounted, ref, computed, watch } from "vue";

const route = useRoute();
const store = useStore();
const isLoading = ref(false);

const markAsSaved = (markedMovie) => {
  store.dispatch("users/saveMovie", markedMovie);
};

const searchResults = computed(() => {
  return store.getters["movies/searchResults"];
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

const isWatchlist = computed(() => {
  return route.name === "watchlist";
});

const isAuth = computed(() => {
  return store.getters["users/isAuth"];
});

onMounted(() => {
  isLoading.value = true;
  store.dispatch("movies/searchMovie", route.query.title);
  isLoading.value = false;
});

watch(route, (newValue, oldValue) => {
  isLoading.value = true;
  store.dispatch("movies/searchMovie", newValue.query.title);
  isLoading.value = false;
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
