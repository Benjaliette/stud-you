<template>
  <div :class="onlineStyle" :style="cursorPointer">
    <img
      :src="imageUrl"
      alt="user avatar"
      class="avatar-img"
      :class="avatarUser"
    />
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    default: require("../../assets/default_avatar.png"),
  },
  online: {
    type: Boolean,
    default: false,
  },
  forUser: {
    type: Boolean,
    default: false,
  },
});

const onlineStyle = computed(() => {
  return { "avatar-bordered": props.online };
});

const cursorPointer = computed(() => {
  return { cursor: "pointer" };
});

const avatarUser = computed(() => {
  return { "user-avatar": props.forUser };
});
</script>

<style scoped>
.avatar-img {
  width: 40px;
  height: 40px;
  object-fit: fill;
  border-radius: 50%;
}

.avatar-bordered {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: relative;
  background: linear-gradient(
    180deg,
    rgb(255, 0, 81) 0%,
    rgba(255, 194, 0, 1) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
