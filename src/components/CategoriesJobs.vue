<template>
  <div>
    <a-button class="!px-3 !py-4 !rounded-lg hover:!bg-slate-300">
      {{ props.programmingLanguages }}
    </a-button>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  programmingLanguages: string;
}

const props = defineProps<Props>();
</script>
<style scoped></style>
