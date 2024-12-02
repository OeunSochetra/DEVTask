<template>
  <div class="md:w-[1184px] w-full">
    <div class="flex flex-col gap-6">
      <Title title="The #1 job board for software development" />
      <div class="flex flex-col md:flex-row gap-4">
        <SkeletonBoard v-if="isLoading" />
        <Testimonials v-else />
      </div>
      <div class="mt-10">
        <p class="text-3xl font-semibold">Featured jobs</p>

        <div class="mt-10 flex flex-col md:grid md:grid-cols-3 gap-4">
          <SkeletonFeature
            v-for="(item, indexSkeletonFeature) in featureJobList"
            :key="indexSkeletonFeature"
            v-if="isLoading"
          />

          <FeaturedCard
            v-else
            @click="navigateToDetail(item._id)"
            v-for="(item, index) in featureJobList"
            :key="index"
            :logo="item.logo"
            :company="item.company"
            :jobTitle="item.jobTitle"
            :spotlightOption="item.spotlightOption"
            :locations="item.locations"
            :jobType="item.jobType"
          />
        </div>
      </div>
      <div>
        <Title class="mt-10" title="Recent Jobs"></Title>
        <div class="flex flex-col gap-4 mt-6">
          <SkeletonCard
            v-for="(item, indexSkeletonFeature) in featureJobList"
            :key="indexSkeletonFeature"
            v-if="isLoading"
          />
          <CardJobs
            v-else
            v-for="(item, index) in featureJobList"
            @click="navigateToDetail(item._id)"
            :key="index"
            :companyLogo="item.logo"
            :company="item.company"
            :title="item.jobTitle"
            :jobType="item.jobType"
            :internship="false"
          >
          </CardJobs>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "../../components/Title.vue";
import Testimonials from "../../components/Testimonials.vue";
import FeaturedCard from "../../components/FeaturedCard.vue";
import SkeletonFeature from "../../components/SkeletonFeature.vue";
import { useFeatureJobStore } from "../../store/featureJobStore";
import CardJobs from "../../components/CardJobs.vue";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import RouterName from "../../constants/router-name";
import SkeletonBoard from "../../components/SkeletonBoard.vue";
import SkeletonCard from "../../components/SkeletonCard.vue";

const featureJobStore = useFeatureJobStore();
const { featureJobList } = storeToRefs(featureJobStore);
const { fetchFeatureJob } = featureJobStore;

const router = useRouter();

const isLoading = ref<boolean>(false);

const navigateToDetail = (id: string) => {
  router.push({
    name: RouterName.DETAIL,
    params: { id },
  });
};

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
