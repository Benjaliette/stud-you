<template>
  <header>
    <div class="container">
      <router-link to="/">
        <div id="logo">
          <img :src="logo" alt="studyou logo" />
          <div>Stud•<span>YOU</span></div>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";

const logo = computed(() => {
  const img = require("../../assets/logo_grey.svg");
  return img;
});
</script>

<style scoped>
header {
  height: 50px;
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
  font-size: 20px;
  font-weight: bold;
  font-family: "Unbounded", cursive;
}

#logo div span {
  color: #4da9db;
}
</style>
