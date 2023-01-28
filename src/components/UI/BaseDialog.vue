<template>
  <teleport to="body">
    <div v-if="props.show" @click="tryClose" class="backdrop"></div>
    <dialog open v-if="show" :class="dialogType">
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <slot></slot>
      </section>
    </dialog>
  </teleport>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    default: "rating",
  },
});

const dialogType = computed(() => {
  return `dialog-${props.type}`;
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
  left: calc(50% - 20rem);
  width: 40rem;
  height: 60vh;
  z-index: 100;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.dialog-rating {
  background-color: #505050;
}

.dialog-movie {
  height: 85vh;
  top: 10vh;
  left: 3%;
  width: 94%;
  border-radius: 20px;
  background-color: #505050;
  color: white;
  overflow-y: auto;
}

.dialog-movie header {
  height: 45%;
  width: 100%;
}

section {
  padding: 1rem 2rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dialog-movie section {
  justify-content: flex-start;
  padding: 3rem 2rem;
}
</style>
