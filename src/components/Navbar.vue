<template>
  <div class="flex items-center p-5 border-b bg-white text-black shadow-sm">
    <div class="flex items-center w-full justify-between mt-1">
      <div class="flex items-center gap-6 ml-6">
        <span class="font-[600] text-xl">DEVTask</span>
        <span
          class="border border-black px-2.5 py-1 rounded-full cursor-pointer"
        >
          Contact</span
        >
        <span class="hover:text-blue-600 cursor-pointer">Find jobs</span>
      </div>
      <div
        class="flex items-center gap-2 px-4 py-1 bg-blue-600 rounded-full cursor-pointer text-white"
      >
        <span>
          <IconPlus />
        </span>
        Post a job
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconPlus from "./icons/IconPlus.vue";
</script>
<style scoped></style>
