<template>
  <div
    class="relative border p-10 w-[100%] rounded-lg hover:bg-[#E5E5E5] flex items-center justify-center cursor-pointer"
  >
    <div class="flex flex-col items-center">
      <img
        :src="props.logo"
        width="64"
        height="64"
        alt="logo"
        class="border rounded-full"
      />
      <p class="text-[#7F7F7F]">
        {{ props.company }} <span class="text-3xl">.</span>
        {{ props.jobType }}
      </p>
      <p class="text-xl text-center font-[500]">{{ props.jobTitle }}</p>
      <div class="mt-6 gap-1 flex flex-col items-center">
        <span v-if="props.spotlightOption" class="spotlight">
          In the spotlight
        </span>
        <div class="flex space-x-1">
          <span class="job-type"> {{ props.locations }} </span>
          <span class="job-type"> {{ props.jobType }} </span>
        </div>
      </div>
      <!-- <span @click.stop="" class="absolute right-3 top-3">
        <IconDelete />
      </span> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import IconDelete from "./icons/IconDelete.vue";

interface Props {
  company?: string;
  logo?: string;
  jobTitle?: string;
  spotlightOption?: string[];
  locations?: string[];
  jobType?: string;
}

const props = defineProps<Props>();
</script>
<style scoped>
.spotlight {
  @apply text-red-500 flex items-center justify-between bg-red-50 px-2 py-1 rounded-full text-[10px] border-red-300 border;
}
.job-type {
  @apply text-[#27A359] flex items-center justify-between bg-[#F7FBF9] px-2 py-1 rounded-full text-[10px] border-[#D3EADA] border;
}
</style>
