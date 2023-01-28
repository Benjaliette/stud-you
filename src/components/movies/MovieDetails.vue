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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <article>
        <h3>Details</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
import { computed } from "vue";

defineProps(["show", "type", "movie"]);
const emits = defineEmits(["close"]);

const imageBackground = computed(() => {
  const img = require("@/assets/affiche_type.webp");
  return { backgroundImage: `url(${img})` };
});

const close = () => {
  emits("close");
};
</script>

<style scoped>
.img-background {
  height: 100%;
  background-position: center;
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
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
