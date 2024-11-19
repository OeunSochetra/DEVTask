<template>
  <div
    class="border p-10 w-[100%] rounded-lg hover:bg-[#E5E5E5] flex items-center justify-center cursor-pointer"
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
      <p class="text-xl font-[500]">{{ props.jobTitle }}</p>
      <p>{{ props.spotlightOption }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  company?: string;
  logo?: string;
  jobTitle?: string;
  spotlightOption?: string[];
  locations?: string[];
  jobType?: string;
}

const props = defineProps<Props>();

const checkSpotlight = (spotlightOption: string) => {
  return spotlightOption === "In the spotlight";
};
</script>
<style scoped></style>
