<template>
  <div class="search-bar">
    <font-awesome-icon :icon="glass" size="lg" />
    <input
      type="text"
      @input="getInputValue"
      v-model="inputValue"
      :placeholder="defaultText"
    />
    <font-awesome-icon
      :icon="close"
      size="lg"
      @click="clearInputValue"
      class="close-btn"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const inputValue = ref("");
defineProps(["defaultText"]);

const route = useRoute();
const emits = defineEmits(["search", "clear"]);

const glass = computed(() => "fa-solid fa-magnifying-glass");
const close = computed(() => "fa-solid fa-xmark");

const getInputValue = () => {
  emits("search", inputValue.value);
};

const clearInputValue = () => {
  inputValue.value = "";
  emits("clear");
};

const routeName = computed(() => {
  return route.name;
});

watch(routeName, (to, from) => {
  if (from === "search" && to !== "search") {
    clearInputValue();
  }
});
</script>

<style scoped>
.search-bar {
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-grey);
  border-radius: 10px;
  padding: 2px 15px;
  margin: auto 0px;
}

.search-bar svg {
  color: var(--grey);
}

.search-bar input {
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  color: var(--black);
  font-size: 16px;
  padding: 2px 15px;
}

.search-bar input:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

.close-btn {
  cursor: pointer;
}
</style>
