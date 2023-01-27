<template>
  <section>
    <h2>Upcoming movies</h2>
    <div class="cards">
      <div v-for="movie in upcomingMovies" :key="movie.id" class="card__item">
        <base-movie-card :movie="movie"></base-movie-card>
        <base-flag
          :marked="movie.saved"
          @click="markAsSaved(movie)"
        ></base-flag>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const upcomingMovies = computed(() => store.getters["movies/upcomingMovies"]);

const markAsSaved = (markedMovie) => {
  store.dispatch("movies/markMovieAsSaved", markedMovie);
};
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
