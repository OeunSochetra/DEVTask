<template>
  <div class="md:w-[1184px] w-full mb-[10rem]">
    <Loading></Loading>
    <div v-if="programLangFeatureJob">
      <Title :title="programLangDetail?.name" />
      <div v-if="programLangFeatureJob.length === 0">
        <ContentNotFound title="No jobs found" />
      </div>
      <div
        v-else
        class="mt-6"
        v-for="(item, index) in programLangFeatureJob"
        :key="index"
      >
        <CardJobs
          @click="navigateToDetail(item._id)"
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
import { useProgramLangStore } from "../../store/programLnag";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import CardJobs from "../../components/CardJobs.vue";
import Title from "../../components/Title.vue";
import ContentNotFound from "../../components/ContentNotFound.vue";
import Loading from "../../components/Loading.vue";
import { useRouter } from "vue-router";
import RouterName from "../../constants/router-name";

const programLangStore = useProgramLangStore();
const { programLangFeatureJob, programLangDetail } =
  storeToRefs(programLangStore);
const { fetchProgramLangFeatureJob, fetchProgramLangDetail } = programLangStore;

const route = useRoute();
const router = useRouter();

const isLoading = ref(false);

const navigateToDetail = (id: string) => {
  router.push({
    name: RouterName.DETAIL,
    params: { id },
  });
};

const fetchData = async () => {
  isLoading.value = true;
  const id = String(route.params.id);
  await Promise.all([
    fetchProgramLangFeatureJob(id),
    fetchProgramLangDetail(id),
  ]);
  isLoading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped></style>
