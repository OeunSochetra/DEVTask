<template>
  <input
    autocomplete="off"
    :type="type"
    :class="customClass"
    v-bind="attrs"
    class="input"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
    "
  />
</template>
<script setup lang="ts">
import { defineProps, useAttrs } from "vue";
const attrs = useAttrs();

defineProps({
  type: {
    type: String,
    default: "text",
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>
<style scoped>
.input {
  @apply border border-gray-300 w-full p-2 rounded-lg outline-none  focus:border-blue-500;
}
</style>
