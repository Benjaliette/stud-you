<template>
  <div v-if="markAsRead" class="badge" @click="read">
    <font-awesome-icon :icon="checkIcon" size="xs" />
  </div>
  <div v-else-if="closeBadge" class="badge" @click="close">
    <font-awesome-icon :icon="closeIcon" size="xs" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps(["type"]);
const emits = defineEmits(["read", "close"]);

const markAsRead = computed(() => {
  return props.type === "read";
});

const closeBadge = computed(() => {
  return props.type === "close";
});

const checkIcon = computed(() => {
  return "fa-solid fa-check";
});

const closeIcon = computed(() => {
  return "fa-solid fa-xmark";
});

const read = () => {
  emits("read");
};

const close = () => {
  emits("close");
};
</script>

<style scoped>
.badge {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--blue);
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

svg {
  pointer-events: none;
}
</style>
