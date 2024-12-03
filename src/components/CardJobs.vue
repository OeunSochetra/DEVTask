<template>
  <a-card
    class="md:!w-[1180px] w-full !p-6 hover:!bg-[#E5E5E5] !border !rounded-lg"
  >
    <div class="w-full flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div>
          <img
            :src="props.companyLogo"
            width="64"
            height="64"
            class="object-cover flex items-center justify-center rounded-full"
            alt="company logo"
          />
        </div>
        <div>
          <div class="flex items-center">
            <p class="text-md">{{ props.company }}</p>
            <span class="flex items-center">
              <span class="text-3xl -translate-y-2">.</span>
              <p>{{ props.jobType }}</p>
            </span>
          </div>
          <p class="font-[500] text-lg">{{ props.title }}</p>
        </div>
      </div>
      <div class="flex flex-col items-center gap-2 text-[10px]">
        <span class="spotlight">In the spotlight</span>
        <div class="flex space-x-1">
          <span class="locations">New York</span>
          <span class="locations">Remote</span>
        </div>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  companyLogo?: string;
  title?: string;
  company?: string;
  location?: string[];
  jobType?: string;
  datePosted?: string;
  internship?: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped>
.spotlight {
  @apply text-red-500 flex items-center justify-between bg-red-50 px-2 py-1 rounded-full text-[10px] border-red-300 border;
}
.locations {
  @apply text-[#27A359] flex items-center justify-between bg-[#F7FBF9] px-2 py-1 rounded-full text-[10px] border-[#D3EADA] border;
}
</style>
