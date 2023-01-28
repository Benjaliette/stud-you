<template>
  <log-layout>
    <template v-slot:header>
      <h1>Welcome to the<br /><span class="blue">Stud</span> Family</h1>
    </template>
    <template v-slot:default>
      <div class="log__form-input">
        <input type="text" placeholder="Username" />
      </div>
      <div class="log__form-input">
        <input type="text" placeholder="E-mail" />
      </div>
      <div class="log__form-input">
        <input type="password" placeholder="Password" />
      </div>
      <div class="log__form-input">
        <base-button :type="{ color: 'white', size: 'xl' }" link to="/login">
          <img :src="googleIcon" alt="google icon" />
          Sign up with google
        </base-button>
      </div>
      <div class="log__form-action">
        <base-button :type="{ color: 'blue', size: 'xl' }" :link="false">
          Sign up
        </base-button>
        <p>
          Already have an account?
          <router-link to="/login">Sign in here</router-link>
        </p>
      </div>
    </template>
  </log-layout>
</template>

<script setup>
import LogLayout from "@/components/auth/LogLayout.vue";
import { computed } from "vue";

const googleIcon = computed(() => {
  const img = require("@/assets/google.svg");
  return img;
});
</script>

<style scoped>
@import "@/assets/log.css";
</style>
