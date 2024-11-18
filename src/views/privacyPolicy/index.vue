<template>
  <div class="w-[880px]">
    <div class="flex flex-col gap-8">
      <Title :title="privacyPolicy.title" />
      <p class="text-[#4C4C4C]">{{ privacyPolicy.introduction }}</p>
      <span
        class="leading-8"
        v-for="(section, index) in privacyPolicy.sections"
        :key="index"
      >
        <span class="leading-8">
          <p class="text-black font-semibold">{{ section.title }}</p>
          <p class="text-[#4C4C4C]">{{ section.content }}</p>
        </span>

        <span class="leading-8 text-[#4C4C4C]" v-if="section.list">
          <li v-for="(item, index) in section.list" :key="index">{{ item }}</li>
        </span>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { privacyPolicy } from "../../constants/constant";
import Title from "../../components/Title.vue";
</script>

<style scoped></style>
