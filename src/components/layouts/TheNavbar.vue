<template>
  <nav>
    <section>
      <h2>News feed</h2>
      <ul>
        <nav-link
          icon="film"
          to="browse"
          :active="isActive('browse')"
          @click="setToActive('browse')"
          class="test"
        >
          Browse
        </nav-link>
        <nav-link
          icon="heart"
          to="browse"
          :active="isActive('watchlist')"
          @click="setToActive('watchlist')"
        >
          Watchlist
        </nav-link>
        <nav-link
          icon="calendar-days"
          to="browse"
          :active="isActive('upcoming')"
          @click="setToActive('upcoming')"
        >
          Upcoming
        </nav-link>
      </ul>
    </section>
    <section v-if="isAuth">
      <h2>Following</h2>
    </section>
    <section v-if="isAuth">
      <h2>My place</h2>
      <ul>
        <nav-link
          icon="user"
          to="browse"
          :active="isActive('browse')"
          @click="setToActive('browse')"
          class="test"
        >
          Profile
        </nav-link>
        <nav-link
          icon="gear"
          to="browse"
          :active="isActive('watchlist')"
          @click="setToActive('watchlist')"
        >
          Setting
        </nav-link>
        <nav-link
          icon="arrow-right-from-bracket"
          to="browse"
          :active="isActive('upcoming')"
          @click="setToActive('upcoming')"
        >
          Log out
        </nav-link>
      </ul>
    </section>
    <section v-else>
      <h2>Following</h2>
      <div class="section__item">
        <p>You're not authentified <span class="blue">yet ...</span></p>
        <base-button link to="#" :type="{ color: 'blue', size: 'sm' }">
          Log in
        </base-button>
      </div>
    </section>
  </nav>
</template>

<script setup>
import NavLink from "./NavLink.vue";
import { ref } from "vue";

const activeLink = ref("browse");
const isAuth = ref(false);

const isActive = (linkName) => {
  return linkName === activeLink.value;
};

const setToActive = (linkName) => {
  activeLink.value = linkName;
};
</script>

<style scoped>
nav {
  width: 20%;
}

section {
  margin-top: 20px;
}

h2 {
  font-size: 16px;
  font-weight: unset;
  color: var(--grey);
  margin: 3.5em 1.8em 0em 1.8em;
}

ul {
  list-style: none;
  padding: 0;
}

.section__item {
  padding: 20px;
}

.section__item p {
  font-weight: bold;
}
</style>
