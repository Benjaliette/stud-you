<template>
  <button type="button" class="btn" :class="color" v-if="!link">
    <slot></slot>
  </button>
  <router-link :to="nextPage" class="btn" :class="color" v-else>
    <slot></slot>
  </router-link>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: Object,
    required: true,
    default: () => {
      return {
        color: "white",
        size: "",
      };
    },
  },
  link: {
    type: Boolean,
    required: true,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "",
  },
});

const nextPage = computed(() => {
  return props.to;
});

const color = computed(() => {
  return `btn-${props.type.color} btn-${props.type.size}`;
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
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  font-family: "Rubik", Helvetica, Arial sans-serif;
  padding: 15px 40px;
  cursor: pointer;
  transition: transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  color: var(--black);
  font-weight: bold;
}

.btn-blue {
  background: var(--blue);
  color: white;
}

.btn-grey {
  background: #5c5c5c;
  color: white;
  border: 1px solid black;
}

.btn-sm {
  font-weight: unset;
  padding: 10px 30px;
  font-size: 12px;
}

button.btn-sm {
  height: 40px;
}

.btn-xs {
  font-weight: unset;
  padding: 5px 20px;
  font-size: 10px;
}

button.btn-xs {
  height: 40px;
}

.btn-xl {
  width: 100%;
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: 4px;
}
</style>
