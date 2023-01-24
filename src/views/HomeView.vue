<template>
  <section>
    <div class="call-to-action">
      <h1>Cinema<br />for<br /><span>Later</span></h1>
      <base-button :type="{ color: 'blue' }" link to="/browse">
        Start now
      </base-button>
    </div>
    <div :style="landingImage" class="img-landing"></div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const landingImage = computed(() => {
  const img = require("../assets/cinema_landing.webp");
  return {
    backgroundImage: `radial-gradient(40% 50% at 55% 50%, rgba(0, 0, 0, 0) 0%, #191919 100%), url(${img})`,
  };
});
</script>

<style scoped>
header {
  height: 10%;
  padding: 10px 20px;
}

#logo {
  display: flex;
  align-items: center;
  height: 100%;
}

#logo img {
  height: 100%;
}

#logo div {
  font-size: 24px;
  font-weight: bold;
  font-family: "Unbounded", cursive;
}

#logo div span {
  color: var(--blue);
}

section {
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.call-to-action {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}
.call-to-action h1 {
  font-size: 80px;
}

.call-to-action h1 > span {
  color: var(--blue);
}

.img-landing {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
