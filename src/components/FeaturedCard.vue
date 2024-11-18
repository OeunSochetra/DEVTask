<template>
  <div
    v-for="(item, index) in allJobs"
    :key="index"
    class="border p-10 w-[100%] rounded-lg hover:bg-[#E5E5E5] flex items-center justify-center cursor-pointer"
  >
    <div class="flex flex-col items-center">
      <img
        :src="item.companyLogo"
        width="64"
        height="64"
        alt="logo"
        class="border rounded-full"
      />
      <p class="text-[#7F7F7F]">
        {{ item.company }} <span class="text-3xl">.</span>
        {{ item.jobType }}
      </p>
      <p class="text-xl font-[500]">{{ item.title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { allJobs } from "../constants/constant";
</script>
<style scoped></style>
