<template>
  <div class="user-dropdown" ref="target">
    <h2>{{ userFullName }}</h2>
    <ul class="dropdown__list">
      <nav-link :to="userLink" icon="user" dropdown>Profile</nav-link>
      <nav-link to="browse" icon="gear" dropdown>Settings</nav-link>
      <nav-link to="watchlist" icon="heart" dropdown>Watchlist</nav-link>
      <nav-link
        to="browse"
        icon="arrow-right-from-bracket"
        dropdown
        @click="logout"
      >
        <span>Log out</span>
      </nav-link>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStore } from "vuex";
import NavLink from "../layouts/NavLink.vue";

const props = defineProps(["user"]);
const emits = defineEmits(["close"]);
const target = ref(null);
const store = useStore();

const userFullName = computed(() => {
  if (props.user.firstName === "" && props.user.lastName === "") {
    return props.user.username;
  } else {
    return `
      ${capitalize(props.user.firstName)} ${props.user.lastName.toUpperCase()}
    `;
  }
});

const userLink = computed(() => {
  return `users/${props.user.id}`;
});

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

onClickOutside(target, (event) => {
  if (!event.target.classList.contains("user-avatar")) {
    emits("close");
  }
});

const logout = () => {
  store.dispatch("users/logout");
};
</script>

<style scoped>
.user-dropdown {
  background-color: var(--light-grey);
  color: var(--black);
  border-radius: 5px;
  width: 13rem;
  height: fit-content;
  position: absolute;
  top: 4rem;
  right: 0px;
  z-index: 5;
  font-size: 14px;
}

.user-dropdown h2 {
  width: 100%;
  text-align: center;
  margin: 0px;
  padding: 1rem 0;
  font-size: 14px;
  border-bottom: 1px solid var(--grey);
}

.dropdown__list {
  list-style-type: none;
  margin: 0;
  padding: 1.5rem;
}

.dropdown__list li {
  margin-bottom: 1.2rem;
}
</style>
