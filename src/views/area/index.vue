<template>
  <div class="md:w-[1184px] w-full mb-[10rem]">
    <Loading></Loading>
    <div v-if="matchingFeatureJobs">
      <Title :title="matchingTitle" />
      <div
        class="mt-6"
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
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { useFeatureJobStore } from "../../store/featureJobStore";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import CardJobs from "../../components/CardJobs.vue";
import Title from "../../components/Title.vue";
import Loading from "../../components/Loading.vue";

const featureJobStore = useFeatureJobStore();
const { featureJobList } = storeToRefs(featureJobStore);
const { fetchFeatureJob } = featureJobStore;

const route = useRoute();

const isLoading = ref<boolean>(false);

const id = String(route.params.id);
const matchingFeatureJobs = computed(() => {
  if (!id) return [];
  const matchingId = featureJobList.value.filter((job) =>
    job.categories.map((cate) => cate._id).includes(id)
  );

  return matchingId;
});

const matchingTitle = computed(() => {
  if (!id) return "";
  const title = matchingFeatureJobs.value[0]?.categories.find((cate) =>
    cate._id.includes(id)
  )?.name;
  return title;
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
