<template>
  <hollow-dots-spinner
    :animation-duration="1000"
    :dot-size="15"
    :dots-num="3"
    color="#4da9db"
  />
</template>

<script setup>
import { HollowDotsSpinner } from "epic-spinners";
</script>

<style scoped>
.hollow-dots-spinner {
  margin: 0 auto 1rem auto;
}
</style>
