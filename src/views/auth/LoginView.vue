<template>
  <log-layout>
    <template v-slot:header>
      <h1>Welcome <span class="blue">back</span>!</h1>
    </template>
    <template v-slot:default>
      <div class="log__form-input">
        <base-button :type="{ color: 'white', size: 'xl' }" link to="/login">
          <img :src="googleIcon" alt="google icon" />
          Log in with google
        </base-button>
      </div>
      <div class="log__form-input">
        <hr />
        <span>OR</span>
        <hr />
      </div>
      <div class="log__form-input" :class="{ error: errors.email }">
        <input
          type="text"
          placeholder="E-mail"
          v-model.trim="user.email"
          @blur="checkEmail"
        />
        <p v-if="errors.email">E-mail is not correct</p>
      </div>
      <div class="log__form-input" :class="{ error: errors.password }">
        <input
          type="password"
          placeholder="Password"
          v-model.trim="user.password"
          @blur="checkPassword"
        />
        <p v-if="errors.password">
          Password must be at least 6 characters long
        </p>
      </div>
      <div class="log__form-error" v-if="errors.global">
        Your e-mail or your password are not recognized, please sign up or try
        again
      </div>
      <div class="log__form-action">
        <base-button
          :type="{ color: 'blue', size: 'xl' }"
          :link="false"
          @click="submitForm"
          v-if="!isLoading"
        >
          Log in
        </base-button>
        <loading-spinner v-else></loading-spinner>
        <p>
          Don't have an account?
          <router-link to="/signup">Sign up for free</router-link>
        </p>
      </div>
    </template>
  </log-layout>
</template>

<script setup>
import LogLayout from "@/components/auth/LogLayout.vue";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const user = reactive({
  email: "",
  password: "",
});

const errors = reactive({
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

const checkPassword = () => {
  if (user.password.length < 6) {
    errors.password = true;
    isValid.value = false;
  } else {
    errors.password = false;
  }
};

const checkEmail = () => {
  if (user.email === "") {
    errors.email = true;
    isValid.value = false;
  } else {
    errors.email = false;
  }
};

const redirect = () => {
  if (isValid.value) {
    router.replace("/browse");
  }
};

const submitForm = async (event) => {
  event.preventDefault();
  isLoading.value = true;
  errors.global = false;
  isValid.value = true;
  checkEmail();
  checkPassword();
  if (!isValid.value) {
    return;
  } else {
    try {
      await store.dispatch("users/login", user);
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
