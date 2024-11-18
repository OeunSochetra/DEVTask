<template>
  <div v-for="(item, index) in props.programmingLanguages" :key="index">
    <span class="border cursor-pointer px-3 py-4 rounded-lg">{{ item }}</span>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  programmingLanguages: string[];
}

const props = defineProps<Props>();
</script>
<style scoped></style>
