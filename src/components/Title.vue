<template>
  <a-typography-title class="!font-bold" :heading="1">{{
    props.title
  }}</a-typography-title>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  title: string | undefined;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
