<template>
  <div :class="onlineStyle" :style="cursorPointer">
    <img
      :src="imageUrl"
      alt="user avatar"
      class="avatar-img"
      :class="avatarType"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    default: require("../../assets/default_avatar.png"),
  },
  online: {
    type: Boolean,
    default: false,
  },
  for: {
    type: String,
    default: "user",
  },
});

const onlineStyle = computed(() => {
  if (props.for === "user") {
    return { "avatar-bordered": props.online };
  } else {
    return { "avatar-bordered-lg": props.online };
  }
});

const cursorPointer = computed(() => {
  if (props.for === "user") {
    return { cursor: "pointer" };
  }
  return { cursor: "inherit" };
});

const avatarType = computed(() => {
  return {
    "user-avatar": props.for === "user",
    "profile-avatar": props.for === "profile",
  };
});
</script>

<style scoped>
.avatar-img {
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

.avatar-bordered-lg {
  width: 105px;
  height: 105px;
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

.user-avatar {
  width: 40px;
  height: 40px;
}

.profile-avatar {
  width: 100px;
  height: 100px;
}
</style>
