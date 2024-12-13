<template>
  <a-result status="error" title="Not Found">
    <template #subtitle> {{ props.title }} </template>
    <template #extra>
      <a-space>
        <a-button type="primary" @click="$router.go(-1)">Back</a-button>
      </a-space>
    </template>
  </a-result>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
