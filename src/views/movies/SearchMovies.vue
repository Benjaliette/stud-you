<template>
  <h1>Search ...</h1>
  <p>{{ route.query.title }}</p>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
