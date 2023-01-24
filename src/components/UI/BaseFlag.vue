<template>
  <div class="bookmark" :class="bookmarkBlue"></div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(["marked"]);

const bookmarkBlue = computed(() => {
  return { "bookmark-blue": props.marked };
});
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.bookmark {
  position: absolute;
  height: 50px;
  width: 30px;
  padding: 0px;
  -webkit-transform: rotate(0deg) skew(0deg);
  transform: rotate(0deg) skew(0deg);
  border-left: 15px solid var(--grey);
  border-right: 15px solid var(--grey);
  border-bottom: 15px solid transparent;
  border-radius: 3px;
  top: 0px;
  right: 15px;
  cursor: pointer;
}

.bookmark-blue {
  border-left: 15px solid var(--blue);
  border-right: 15px solid var(--blue);
}
</style>
