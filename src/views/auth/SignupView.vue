<template>
  <log-layout>
    <template v-slot:header>
      <h1>Welcome to the<br /><span class="blue">Stud</span> Family</h1>
    </template>
    <template v-slot:default>
      <div class="log__form-input" :class="{ error: errors.username }">
        <input
          type="text"
          placeholder="Username"
          v-model.trim="user.username"
        />
        <p v-if="errors.email">Username must not be empty</p>
      </div>
      <div class="log__form-input" :class="{ error: errors.email }">
        <input type="text" placeholder="E-mail" v-model.trim="user.email" />
        <p v-if="errors.email">E-mail is not correct</p>
      </div>
      <div class="log__form-input" :class="{ error: errors.password }">
        <input
          type="password"
          placeholder="Password"
          v-model.trim="user.password"
        />
        <p v-if="errors.email">Password must be at least 6 characters long</p>
      </div>
      <div class="log__form-error" v-if="errors.global">
        Something went wrong, please try again
      </div>
      <div class="log__form-input">
        <base-button :type="{ color: 'white', size: 'xl' }" link to="/login">
          <img :src="googleIcon" alt="google icon" />
          Sign up with google
        </base-button>
      </div>
      <div class="log__form-action">
        <base-button
          :type="{ color: 'blue', size: 'xl' }"
          :link="false"
          @click="submitForm"
          v-if="!isLoading"
        >
          Sign up
        </base-button>
        <loading-spinner v-else></loading-spinner>
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
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const user = reactive({
  username: "",
  email: "",
  password: "",
});

const errors = reactive({
  username: false,
  email: false,
  password: false,
  global: false,
});

const isValid = ref(true);
const isLoading = ref(false);

const googleIcon = computed(() => {
  const img = require("@/assets/google.svg");
  return img;
});

const checkUsername = () => {
  if (user.username === "") {
    errors.username = true;
    isValid.value = false;
  }
};

const checkEmail = () => {
  if (user.email === "") {
    errors.email = true;
    isValid.value = false;
  }
};

const checkPassword = () => {
  if (user.password < 6) {
    errors.password = true;
    isValid.value = false;
  }
};

const redirect = () => {
  if (isValid.value) {
    router.replace("/browse");
  }
};

const submitForm = async (event) => {
  event.preventDefault();
  isValid.value = true;
  errors.global = false;
  isLoading.value = true;
  checkUsername();
  checkEmail();
  checkPassword();
  if (!isValid.value) {
    return;
  } else {
    try {
      await store.dispatch("users/signup", user);
    } catch (error) {
      errors.global = true;
      isValid.value = false;
    }
    isLoading.value = false;
    await redirect();
  }
};
</script>

<style scoped>
@import "@/assets/log.css";
</style>
