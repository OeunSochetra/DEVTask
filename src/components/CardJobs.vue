<!-- JobCard.vue -->
<template>
  <div class="border p-6 rounded-2xl w-full cursor-pointer">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img
          :src="companyLogo"
          width="64"
          height="64"
          class="object-cover border flex items-center justify-center rounded-full"
          alt="company logo"
        />

        <div class="flex flex-col items-center justify-center">
          <div class="flex items-center gap-2 text-[#7F7F80]">
            <p class="text-md">{{ company }}</p>
            <span class="flex items-center gap-2">
              <span class="text-3xl -translate-y-2">.</span>
              <p>{{ jobType }}</p>
            </span>
          </div>
          <div>
            <p class="font-[500] text-lg">{{ title }}</p>
          </div>
        </div>

        <!-- <div class="flex items-center flex-col">
          <div class="flex items-center gap-2 text-[#7F7F80]">
            <p class="text-md">{{ company }}</p>
            <span class="flex items-center gap-2">
              <span class="text-3xl">.</span>
              <p>{{ jobType }}</p>
            </span>
          </div>
          <p class="font-[500] text-lg">{{ title }}</p>
        </div> -->
      </div>

      <div class="flex flex-col gap-2">
        <p
          class="text-red-500 text-center bg-[#FDF7F8] border-red-500 border px-2 py-1 rounded-full text-[10px]"
        >
          {{ datePosted }}
        </p>
        <span class="flex items-center gap-2">
          <p
            class="text-green-500 bg-[#F7FBF9] border-green-500 border px-2 py-1 rounded-full text-[10px]"
          >
            {{ location }}
          </p>
          <p
            v-if="internship"
            class="text-green-500 bg-[#F7FBF9] border-green-500 border px-2 py-1 rounded-full text-[10px]"
          >
            Internship
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  companyLogo?: string;
  title?: string;
  company?: string;
  location?: string;
  jobType?: string;
  datePosted?: string;
  internship?: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped>
/* Optional styles for the JobCard component */
</style>
