<template>
  <h1>User profile</h1>
  <section class="user__section">
    <div class="user__info">
      <base-avatar
        :imageUrl="user.profilePicture"
        online
        for="profile"
      ></base-avatar>
    </div>
    <div class="user__info">
      <h2>First name:</h2>
      <div>{{ user.firstName }}</div>
    </div>
    <div class="user__info">
      <h2>Last name:</h2>
      <div>{{ user.lastName }}</div>
    </div>
  </section>
  <section class="user__section">
    <div class="user__info">
      <h2>Username:</h2>
      <div>{{ user.username }}</div>
    </div>
  </section>
  <section class="user__section">
    <div class="user__info">
      <h2>Email:</h2>
      <div>{{ user.email }}</div>
    </div>
  </section>
  <section class="user__section user__last-section">
    <div class="user__info">
      <h2>Description:</h2>
      <div>{{ user.description }}</div>
    </div>
    <div class="user__action">
      <base-button :type="{ color: 'blue', sm: '' }" :link="false">
        Edit profile
      </base-button>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const user = computed(() => {
  return store.getters["users/userLoggedIn"];
});
</script>

<style scoped>
.user__section {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user__last-section {
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.user__info {
  flex-grow: 1;
  margin: 2rem 0rem;
}

.user__info h2 {
  font-size: 20px;
  color: var(--blue);
}
</style>
