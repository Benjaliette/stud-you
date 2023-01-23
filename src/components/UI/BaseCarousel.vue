<template>
  <div class="carousel">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="movie in 5" :key="movie">
        <header>
          <h2>Movie name</h2>
          <div class="header__subtitle">
            <h3>Year</h3>
            <h3>RATE</h3>
          </div>
          <div class="header__actions">
            <base-button link to="browse" :type="{ color: 'blue', size: 'sm' }">
              Details
            </base-button>
          </div>
        </header>
        <div class="swiper-slide__img" :style="swiperImage"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { ref, computed } from "vue";

const modules = ref([Autoplay, Pagination, Navigation]);

const swiperImage = computed(() => {
  const img = require("../../assets/affiche_type.webp");
  return {
    backgroundImage: `linear-gradient(90deg, #000000 4%, rgba(0, 0, 0, 0) 100%), url(${img})`,
  };
});
</script>

<style scoped>
.carousel {
  width: 80%;
}
.swiper {
  height: 20rem;
  width: 80%;
  margin: 10px auto;
  --swiper-pagination-bullet-inactive-color: var(--grey);
  --swiper-pagination-color: var(--blue);
  --swiper-pagination-bullet-inactive-opacity: 1;
}

.swiper-slide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  justify-content: space-between;
  background: black;
  border-radius: 20px;
}

header {
  flex-grow: 1;
  padding-left: 6%;
  width: 40%;
}

.header__subtitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__actions {
  margin-top: 20px;
}

.swiper-slide__img {
  background-position: center;
  background-size: cover;
  width: 60%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.swiper-pagination-bullet {
  background-color: var(--grey) !important;
}
</style>
