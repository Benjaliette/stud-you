<template>
  <div v-if="markAsRead" class="badge" @click="read">
    <font-awesome-icon :icon="checkIcon" size="xs" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps(["type"]);
const emits = defineEmits(["read"]);

const markAsRead = computed(() => {
  return props.type === "read";
});

const checkIcon = computed(() => {
  return "fa-solid fa-check";
});

const read = () => {
  emits("read");
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
</style>
