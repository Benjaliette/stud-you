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
          v-if="!landing"
          @search="getMovies"
          @clear="goBack"
        ></base-search-bar>
        <div class="header__account" v-if="!landing">
          <div v-if="isAuth" class="account-avatar">
            <base-avatar
              :online="isAuth"
              for="user"
              @click="toggleDropdown"
            ></base-avatar>
            <user-dropdown
              v-if="showDropdown"
              :user="user"
              @close="toggleDropdown"
            ></user-dropdown>
          </div>
          <div v-else>
            <base-button link to="login" :type="{ color: 'white', size: 'xs' }">
              Log in
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import UserDropdown from "../users/UserDropdown.vue";

import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();

defineProps({
  landing: Boolean,
});
const showDropdown = ref(false);
const oldRoute = ref(route.name);

const isAuth = computed(() => {
  return store.getters["users/isAuth"];
});

const user = computed(() => {
  return store.getters["users/userLoggedIn"];
});

const logo = computed(() => {
  const img = require("../../assets/logo_grey.svg");
  return img;
});

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const getMovies = (query) => {
  if (route.name !== "search") {
    oldRoute.value = route.name;
  }
  router.push({ path: "/search", query: { title: query } });
};

const goBack = () => {
  router.replace(oldRoute.value);
};
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

.header__account {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.account-avatar {
  position: relative;
}
</style>
