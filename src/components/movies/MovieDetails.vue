<template>
  <base-dialog :show="show" :type="type">
    <template v-slot:header>
      <div class="img-background" :style="imageBackground">
        <base-badge type="close" @close="close"></base-badge>
        <div class="header__infos">
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.year }}</p>
        </div>
      </div>
    </template>
    <template v-slot:default>
      <article>
        <h3>Synopsis</h3>
        <p>
          {{ movie.description }}
        </p>
      </article>
      <article>
        <h3>Casting</h3>
        <ul class="cards">
          <base-actor-card
            v-for="actor in movie.actors"
            :key="actor.id"
            :actor="actor"
          >
          </base-actor-card>
        </ul>
      </article>
    </template>
  </base-dialog>
</template>

<script setup>
import { computed, onUpdated } from "vue";
import { useStore } from "vuex";

const props = defineProps(["show", "type", "movie"]);
const emits = defineEmits(["close"]);
const store = useStore();

const imageBackground = computed(() => {
  return { backgroundImage: `url(${props.movie.poster})` };
});

const close = () => {
  emits("close");
};

onUpdated(() => {
  if (props.show === true) {
    console.log(props.movie);
    store.dispatch("movies/getActors", props.movie);
    store.dispatch("movies/getMoviesOverview", props.movie);
  }
});
</script>

<style scoped>
.img-background {
  height: 100%;
  background-position: 50% 25%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px 20px 0px 0px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1rem 2rem;
  box-shadow: inset 0 0 20rem #000;
}

.header__infos {
  width: 25%;
}

.badge {
  position: absolute;
  top: 15px;
  right: 15px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  list-style: none;
  padding: 0;
}
</style>
