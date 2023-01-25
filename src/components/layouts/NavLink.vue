<template>
  <router-link :to="nextLink">
    <li :class="{ active: active, dropdown: dropdown }">
      <font-awesome-icon :icon="iconType" size="lg" />
      <slot></slot>
    </li>
  </router-link>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: false,
  },
  to: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
  },
  dropdown: {
    type: Boolean,
    default: false,
  },
});

const nextLink = computed(() => {
  return `/${props.to}`;
});

const iconType = computed(() => {
  return `fa-solid fa-${props.icon}`;
});
</script>

<style scoped>
li {
  color: #bebebe;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  border-left: solid 7px transparent;
  margin-top: 15px;
}

li.active {
  color: white;
  border-left: solid 7px var(--blue);
}

li.dropdown {
  color: var(--black);
  font-weight: unset;
  margin-top: 0px;
  margin-bottom: 1.2rem;
  border-left: none;
  padding: 0px;
  font-size: 14px;
}

svg {
  margin-right: 20px;
  width: 15%;
}
</style>
