<template>
  <div class="w-[880px]">
    <Loading v-if="isLoading"></Loading>
    <div
      v-for="(privacy, index) in privacyList"
      :key="index"
      class="flex flex-col"
    >
      <div
        v-if="isLoading"
        class="animate-pulse bg-gray-200 w-[30%] h-6 rounded-lg mt-6"
      ></div>
      <Title v-else :title="privacy?.title" />

      <div
        v-if="isLoading"
        class="animate-pulse bg-gray-200 w-full h-6 rounded-lg mt-6"
      ></div>
      <p v-else class="mt-6">{{ privacy.content }}</p>
      <div
        class="dynamic-content mt-6 text-black"
        v-html="privacy.privacyAndPolicy"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "../../components/Title.vue";
import { usePrivacyStore } from "../../store/privacyStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import Loading from "../../components/Loading.vue";

const privacyStore = usePrivacyStore();
const { privacyList } = storeToRefs(privacyStore);
const { fetchPrivacy } = privacyStore;

const isLoading = ref<boolean>(true);

const fetchData = async () => {
  isLoading.value = true;
  await fetchPrivacy();
  isLoading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.dynamic-content ::v-deep ul {
  list-style: disc;
  padding: 10px;
  margin-left: 18px;
}

.dynamic-content {
  line-height: 2rem;
}
</style>
