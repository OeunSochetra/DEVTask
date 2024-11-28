<template>
  <div
    v-for="(item, index) in boardList"
    :key="index"
    class="bg-[#123654] w-full rounded-lg p-10 text-white"
  >
    <div class="flex flex-col gap-6">
      <div class="flex items-center gap-6">
        <img
          :src="item.logo"
          alt="company logo"
          width="64"
          height="64"
          class="object-cover rounded-full"
        />
        <p class="text-[#B8C3CB] text-xl">{{ item.company }}</p>
      </div>
      <div class="flex flex-col md:gap-6 gap-8">
        <p class="text-xl leading-8 md:h-[6rem] h-[10rem]">
          ”{{ item.description }}”
        </p>
        <span class="text-[#B8C3CB] flex flex-col gap-12">
          <p class="">{{ item.jobTitle }}</p>
          <p>Results</p>
        </span>
      </div>
    </div>
    <div class="border-t border-[#425E76] mt-2 py-4">
      <div class="text-[#B8C3CB] flex items-center gap-10">
        <div>
          <p class="text-[28px] text-white">3-4x faster</p>
          <p class="mt-1">to find our talents</p>
        </div>
        <div>
          <p class="text-[28px] text-white">+30</p>
          <p class="mt-1">professionals hired</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useBoardStore } from "../store/boardStore";
import { storeToRefs } from "pinia";

const boardStore = useBoardStore();
const { boardList } = storeToRefs(boardStore);
const { fetchBoard } = boardStore;

const isLoading = ref(false);

const fetchData = async () => {
  isLoading.value = true;
  await fetchBoard();
  isLoading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>
