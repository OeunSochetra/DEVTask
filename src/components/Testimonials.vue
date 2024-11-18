<template>
  <div
    v-for="(item, index) in testimonials"
    :key="index"
    class="bg-[#123654] w-[50%] rounded-lg p-10 text-white"
  >
    <div class="flex flex-col gap-6">
      <div class="flex items-center gap-6">
        <img
          :src="item.image"
          alt="company logo"
          width="64"
          height="64"
          class="object-cover rounded-full"
        />
        <p class="text-[#B8C3CB] text-xl">{{ item.company }}</p>
      </div>
      <div class="flex flex-col gap-6">
        <p class="text-xl leading-8 h-[8rem]">”{{ item.testimonial }}”</p>
        <span class="text-[#B8C3CB] flex flex-col gap-12">
          <p class="">{{ item.author.name }}, {{ item.author.title }}</p>
          <p>Results</p>
        </span>
      </div>
    </div>
    <div class="border-t border-[#425E76] mt-2 py-4">
      <div class="text-[#B8C3CB] flex items-center gap-10">
        <div>
          <p class="text-[28px] text-white">{{ item.results.fasterHiring }}</p>
          <p class="mt-1">{{ item.results.textHiring }}</p>
        </div>
        <div>
          <p class="text-[28px] text-white">
            {{ item.results.professionalsHired }}
          </p>
          <p class="mt-1">{{ item.results.textProfessionals }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { testimonials } from "../constants/constant";
</script>

<style scoped></style>
