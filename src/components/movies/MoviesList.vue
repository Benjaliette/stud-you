<template>
  <swiper
    :slidesPerView="3.5"
    :slidesPerGroupSkip="0"
    :slidesPerGroup="3"
    :loop="false"
    :spaceBetween="30"
    :navigation="true"
    :modules="modules"
    :initialSlide="0"
    class="mySwiper"
  >
    <swiper-slide v-for="(movie, index) in movies" :key="index">
      <base-movie-card
        :movie="movie"
        :watchlist="isWatchlist"
      ></base-movie-card>
      <base-flag
        :marked="movie.saved"
        @click="markAsSaved(movie)"
        v-if="!isWatchlist"
      ></base-flag>
    </swiper-slide>
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const modules = ref([Navigation]);
const route = useRoute();

defineProps(["movies"]);
const store = useStore();

const markAsSaved = (markedMovie) => {
  store.dispatch("movies/markMovieAsSaved", markedMovie);
};

const isWatchlist = computed(() => {
  return route.name === "watchlist";
});
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  --swiper-navigation-color: var(--blue);
}
</style>
