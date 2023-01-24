<template>
  <div class="card">
    <div :style="moviePoster" class="card__img">
      <article class="card__article">
        <header class="card__article__header">
          <h4>{{ movie.title }}</h4>
          <p>{{ movie.year }}</p>
        </header>
        <div>
          {{ movie.rating }}
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  movie: Object,
});

const moviePoster = computed(() => {
  return {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%), url(${props.movie.poster})`,
  };
});
</script>

<style scoped>
.card {
  width: 100%;
  border-radius: 20px;
  height: 18rem;
  background-color: black;
  margin-right: 30px;
  margin-top: 4px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;

  position: relative;
}

.card__img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card__article {
  width: 85%;
  height: 40%;
  padding: 7%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.card__article__header h4 {
  font-size: 16px;
}

.card__article__header p {
  font-size: 16px;
  margin: 0px;
  font-weight: initial;
}
</style>
