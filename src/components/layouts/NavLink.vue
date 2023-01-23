<template>
  <router-link :to="nextLink" class="test">
    <li :class="{ active: active }">
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

svg {
  margin-right: 20px;
}
</style>
