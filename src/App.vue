<template>
  <the-header></the-header>
  <section>
    <the-navbar v-if="!isLanding"></the-navbar>
    <main>
      <router-view />
    </main>
  </section>
</template>

<script setup>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheNavbar from "./components/layouts/TheNavbar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isLanding = computed(() => {
  return route.name === "home";
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,700;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@800&display=swap");

#app {
  font-family: "Rubik", Helvetica, Arial sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: 100%;
}

html {
  margin: 0px;
  min-height: 100%;
}

body {
  margin: 0px;
  min-height: 100%;
  background-color: var(--black);
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
section {
  display: flex;
  height: 80vh;
}

main {
  width: 75vw;
  padding: 20px;
  margin: 0px auto;
  position: absolute;
  left: 250px;
}
</style>
