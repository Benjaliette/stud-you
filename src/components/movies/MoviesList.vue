<template>
  <swiper
    :slidesPerView="3.5"
    :slidesPerGroupSkip="0"
    :slidesPerGroup="3"
    :loop="true"
    :loopedSlides="cardNumber"
    :spaceBetween="30"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(card, index) in 9" :key="index">
      <base-card>{{ index }}</base-card>
    </swiper-slide>
    <div class="disable-prev-button" id="prev-button"></div>
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";

import { ref } from "vue";

const modules = ref([Navigation]);
const cardNumber = ref(9);

const onSlideChange = (swiper) => {
  const test = document.querySelector("#prev-button");
  if (swiper.activeIndex % cardNumber.value === 0) {
    swiper.allowSlidePrev = false;
    test.classList.add("swiper-button-prev");
    swiper.updateSlidesClasses();
  } else {
    test.classList.remove("swiper-button-prev");
    swiper.allowSlidePrev = true;
    swiper.updateSlidesClasses();
  }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  --swiper-navigation-color: var(--blue);
}

.disable-prev-button {
  color: #2d2d2d;
  cursor: not-allowed;
}
</style>
