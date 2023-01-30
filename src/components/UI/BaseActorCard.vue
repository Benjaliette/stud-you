<template>
  <div class="card">
    <div class="img-background" :style="imageBackground"></div>
    <header class="card__header">
      <h4>{{ actor.name }}</h4>
      <p>{{ actor.char }}</p>
    </header>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["actor"]);

const imageBackground = computed(() => {
  return { backgroundImage: `url(${props.actor.picture})` };
});
</script>

<style scoped>
.card {
  width: 100%;
  border-radius: 20px;
  height: 16rem;
  background-color: white;
  margin-right: 30px;
  margin-top: 4px;
  color: black;
}

.img-background {
  height: 70%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px 20px 0px 0px;
}

.card__header {
  padding: 1rem;
}

.card__header h4,
.card__header p {
  margin: 0;
}

.card__header p {
  font-size: 12px;
}
</style>
