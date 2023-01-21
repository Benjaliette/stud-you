<template>
  <button class="btn" :class="color">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "white",
  },
});

const color = computed(() => {
  return `btn-${props.color}`;
});
</script>

<style scoped>
.btn {
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 100px;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 15px 30px;
  cursor: pointer;
  transition: transform 0.1s ease;
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
