<template>
  <div class="w-[1280px]">
    <div class="flex flex-col gap-6">
      <Title title="The #1 job board for software development" />
      <div class="flex gap-4 mt-6">
        <Testimonials />
      </div>
      <div class="mt-10">
        <p class="text-3xl font-semibold">Featured jobs</p>

        <div class="mt-10 grid grid-cols-3 gap-4">
          <FeaturedCard
            v-for="(item, index) in featureJobList"
            :key="index"
            :logo="item.logo"
            :company="item.company"
            :jobType="item.jobType"
            :jobTitle="item.jobTitle"
            :spotlightOption="item.spotlightOption"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "../../components/Title.vue";
import Testimonials from "../../components/Testimonials.vue";
import FeaturedCard from "../../components/FeaturedCard.vue";
import { useFeatureJobStore } from "../../store/featureJobStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const featureJobStore = useFeatureJobStore();
const { featureJobList } = storeToRefs(featureJobStore);
const { fetchFeatureJob } = featureJobStore;

const isLoading = ref<boolean>(false);

const fetchData = async () => {
  isLoading.value = true;
  await fetchFeatureJob();
  isLoading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped></style>
