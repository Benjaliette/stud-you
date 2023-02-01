<template>
  <the-header :landing="isLanding" v-if="!isLogger"></the-header>
  <section class="body__section" :class="fullPage">
    <the-navbar v-if="!isLanding && !isLogger"></the-navbar>
    <main :class="onLanding">
      <router-view />
    </main>
  </section>
</template>

<script setup>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheNavbar from "./components/layouts/TheNavbar.vue";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const isLanding = computed(() => {
  return route.name === "home";
});

const isLogger = computed(() => {
  return route.name === "login" || route.name === "signup";
});

const onLanding = computed(() => {
  return { welcome: isLanding.value };
});

const fullPage = computed(() => {
  return { "full-page": isLogger.value };
});

onMounted(() => {
  store.dispatch("movies/loadMovies");
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@800&display=swap");

html {
  margin: 0px;
  min-height: 100%;
}

body {
  margin: 0px;
  min-height: 100%;
  background-color: var(--black);
  font-family: "Rubik", Helvetica, Arial sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

body.modal-open {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: inherit;
}

a:hover {
  color: inherit;
  text-decoration: inherit;
}
</style>

<style scoped>
section.body__section {
  display: flex;
  height: 90vh;
}

section.body__section.full-page {
  height: 100vh;
}

main {
  width: 75vw;
  padding: 20px;
  margin: 0px auto;
  position: absolute;
  left: 250px;
}

main.welcome {
  position: relative;
  width: 85vw;
  left: 0px;
}

section.body__section.full-page main {
  position: relative;
  width: 100vw;
  left: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

@media (max-width: 960px) {
  main {
    width: 69vw;
  }
}
@media (max-width: 720px) {
  main {
    width: 59vw;
  }
}
</style>
