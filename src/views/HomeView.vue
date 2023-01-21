<template>
  <header>
    <div class="container">
      <img :src="logo" alt="studyou logo" />
    </div>
  </header>
  <section class="container">
    <div class="call-to-action">
      <h1>Cinema<br />for<br /><span>Later</span></h1>
      <base-button>Test</base-button>
    </div>
    <div :style="landingImage" class="img-landing"></div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const logo = computed(() => {
  const img = require("../assets/logo_grey.svg");
  return img;
});

const landingImage = computed(() => {
  const img = require("../assets/cinema_landing.webp");
  return {
    backgroundImage: `radial-gradient(67.72% 67.72% at 50% 50%, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${img})`,
  };
});
</script>

<style scoped>
body {
  background-color: #000000;
}

header {
  height: 10%;
  padding: 10px 20px;
}

header img {
  height: 100%;
}

section {
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.call-to-action h1 {
  font-size: 80px;
}

.call-to-action h1 > span {
  color: #4da9db;
}

.img-landing {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
