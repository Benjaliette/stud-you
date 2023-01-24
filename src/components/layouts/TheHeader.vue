<template>
  <header>
    <div class="container">
      <div class="header__actions">
        <router-link to="/">
          <div id="logo">
            <img :src="logo" alt="studyou logo" />
            <div>Stud•<span>YOU</span></div>
          </div>
        </router-link>
        <base-search-bar
          defaultText="Search for a movie/user"
          v-if="!isLanding"
        ></base-search-bar>
        <div class="header__account"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isLanding = computed(() => {
  return route.name === "home";
});

const logo = computed(() => {
  const img = require("../../assets/logo_grey.svg");
  return img;
});
</script>

<style scoped>
header {
  height: var(--header-height);
  padding: 10px 20px;
}

#logo {
  display: flex;
  align-items: center;
}

#logo img {
  height: var(--header-height);
}

#logo div {
  font-size: 20px;
  font-weight: bold;
  font-family: "Unbounded", cursive;
}

#logo div span {
  color: var(--blue);
}

.header__actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: var(--header-height);
}
</style>
