<template>
  <h1 class="text-4xl font-bold text-black">{{ props.title }}</h1>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  title: string;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
