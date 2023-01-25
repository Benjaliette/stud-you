<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <dialog open v-if="show">
      <section>
        <slot></slot>
      </section>
    </dialog>
  </teleport>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: absolute;
  top: 20vh;
  left: 10%;
  width: 80%;
  height: 60vh;
  z-index: 100;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #505050;
}

section {
  padding: 1rem 2rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
