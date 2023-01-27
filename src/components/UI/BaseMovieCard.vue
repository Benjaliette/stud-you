<template>
  <div class="card">
    <div :style="moviePoster" class="card__img" @click="showMovie">
      <article class="card__article">
        <header class="card__article__header">
          <h4>{{ movie.title }}</h4>
          <p>{{ movie.year }}</p>
        </header>
        <div v-if="props.watchlist">
          <base-badge type="read" @read="markAsRead"></base-badge>
        </div>
        <div v-else>
          {{ movie.rating }}
        </div>
      </article>
    </div>
    <movie-rating :show="showRatingModal" @close="closeDialog"></movie-rating>
    <movie-details
      :show="showMovieModal"
      type="movie"
      @close="closeDialog"
      :movie="movie"
    ></movie-details>
  </div>
</template>

<script setup>
import MovieRating from "../movies/MovieRating.vue";
import MovieDetails from "../movies/MovieDetails.vue";
import { defineProps, computed, ref } from "vue";
import { useStore } from "vuex";

const showRatingModal = ref(false);
const showMovieModal = ref(false);
const scrollHeight = ref(0);

const store = useStore();
const props = defineProps({
  movie: Object,
  watchlist: {
    type: Boolean,
    default: false,
  },
});

const moviePoster = computed(() => {
  return {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%), url(${props.movie.poster})`,
  };
});

const markAsRead = () => {
  showRatingModal.value = true;
  store.dispatch("movies/rateMovie", props.movie);
};

const showMovie = (event) => {
  if (!event.target.classList.contains("badge")) {
    scrollHeight.value = event.pageY - event.clientY;
    window.scrollTo(0, 0);
    document.body.classList.add("modal-open");
    showMovieModal.value = true;
  }
};

const closeDialog = () => {
  showRatingModal.value = false;
  showMovieModal.value = false;
  window.scrollTo(0, scrollHeight.value);
  document.body.classList.remove("modal-open");
};
</script>

<style scoped>
.card {
  width: 100%;
  border-radius: 20px;
  height: 18rem;
  background-color: black;
  margin-right: 30px;
  margin-top: 4px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;

  position: relative;
}

.card__img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card__article {
  width: 85%;
  height: 40%;
  padding: 7%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.card__article__header h4 {
  font-size: 16px;
}

.card__article__header p {
  font-size: 16px;
  margin: 0px;
  font-weight: initial;
}
</style>
