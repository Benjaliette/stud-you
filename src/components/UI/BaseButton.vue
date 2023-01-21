<template>
  <button class="btn" :class="color" v-if="!link">
    <slot></slot>
  </button>
  <router-link :to="nextPage" class="btn" :class="color" v-else>
    <slot></slot>
  </router-link>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    required: true,
    default: "white",
  },
  link: {
    type: Boolean,
    required: true,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "/",
  },
});

const nextPage = computed(() => {
  return props.to;
});

const color = computed(() => {
  return `btn-${props.color}`;
});
</script>

<style scoped>
.btn {
  width: fit-content;
  height: 50px;
  border: none;
  border-radius: 100px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  font-family: "Rubik", Helvetica, Arial sans-serif;
  padding: 15px 40px;
  cursor: pointer;
  transition: transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

a.btn {
  height: 20px;
}

.btn:hover {
  transform: scale(1.04);
  transition: transform 0.1s ease;
}

.btn:active {
  transform: scale(0.96);
  transition: transform 0.1s ease;
}

.btn-white {
  background: white;
  border: 1px solid black;
}

.btn-blue {
  background: #4da9db;
  color: white;
  border: 1px solid black;
}

.btn-grey {
  background: #5c5c5c;
  color: white;
  border: 1px solid black;
}
</style>
