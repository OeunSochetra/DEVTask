<template>
  <div class="md:w-[1184px] w-full mb-[10rem]">
    <Loading></Loading>
    <div v-if="findIdMatch">
      <Title :title="matchingFeatureJobs[0].categories[0].name" />
      <div
        class="flex flex-col gap-4"
        v-for="(item, index) in matchingFeatureJobs"
        :key="index"
      >
        <CardJobs
          :companyLogo="item.logo"
          :title="item.jobTitle"
          :company="item.company"
          :location="item.locations"
          :jobType="item.jobType"
          :datePosted="item.createdAt"
          :internship="false"
        />
      </div>
    </div>
    <div class="flex items-center justify-center" v-else>
      <Title title="No Data Found" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useFeatureJobStore } from "../../store/featureJobStore";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import { IFeatureJob } from "../../constants/common";
import CardJobs from "../../components/CardJobs.vue";
import Title from "../../components/Title.vue";
import Loading from "../../components/Loading.vue";

const featureJobStore = useFeatureJobStore();
const { featureJobList } = storeToRefs(featureJobStore);
const { fetchFeatureJob } = featureJobStore;

const route = useRoute();

const isLoading = ref<boolean>(false);

const categories = computed(() => {
  return featureJobList.value.map((item: IFeatureJob) =>
    item.categories.map((category) => category._id)
  );
});

const findIdMatch = computed(() => {
  const id = String(route.params.id);
  return categories.value.find((category) => category.includes(id));
});

const matchingFeatureJobs = computed(() => {
  const id = String(findIdMatch.value);
  if (!findIdMatch.value) return [];
  return featureJobList.value.filter((job) =>
    job.categories.some((category) => category._id === id)
  );
});

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
