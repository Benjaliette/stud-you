<template>
  <section class="form__section">
    <form>
      <header>
        <router-link to="/">
          <div id="logo">
            <img :src="logo" alt="studyou logo" />
            <div>Stud•<span class="blue">YOU</span></div>
          </div>
        </router-link>
        <slot name="header"></slot>
      </header>
      <slot></slot>
    </form>
  </section>
  <section class="img__section">
    <div :style="imageBackground" class="img-background"></div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const moviePicture = computed(() => {
  const movie = store.getters["movies/lastMovie"];
  return movie.poster;
});

const imageBackground = computed(() => {
  return {
    backgroundImage: `linear-gradient(90deg, rgba(25,25,25,1) 0%, rgba(25,25,25,0) 20%), url(${moviePicture.value})`,
  };
});

const logo = computed(() => {
  const img = require("@/assets/logo_grey.svg");
  return img;
});
</script>

<style scoped>
section {
  height: 100%;
  box-sizing: border-box;
}

.form__section,
.img__section {
  width: 50%;
}

.form__section {
  padding: 2rem 6rem;
}

form {
  max-width: 25rem;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}

#logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo img {
  height: 8rem;
}

#logo div {
  font-size: 18px;
  font-weight: bold;
  font-family: "Unbounded", cursive;
}
</style>
