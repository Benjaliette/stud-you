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
      <base-card :movie="movie"></base-card>
      <base-flag :marked="movie.saved" @click="markAsSaved(movie)"></base-flag>
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

import { ref, defineProps } from "vue";
import { useStore } from "vuex";

const modules = ref([Navigation]);

defineProps(["movies"]);
const store = useStore();

const markAsSaved = (markedMovie) => {
  store.dispatch("movies/markMovieAsSaved", markedMovie);
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  --swiper-navigation-color: var(--blue);
}
</style>
