<template>
  <li>
    <div class="list-item__index"><slot></slot></div>
    <base-movie-card :movie="props.movie" :top="true"></base-movie-card>
  </li>
</template>

<script setup>
const props = defineProps(["movie"]);
</script>

<style scoped>
li {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  height: 20rem;
}

.list-item__index {
  position: absolute;
  top: -60px;
  left: 0px;
  font-size: 14rem;
  font-weight: bold;
  color: var(--dark-grey);
}

.card {
  width: 52%;
}
</style>
