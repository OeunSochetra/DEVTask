<template>
  <div class="md:w-[1184px] w-full">
    <p class="text-4xl font-[700] text-start">Find your dream jobs</p>
    <div class="mt-10 flex items-center gap-y-2 gap-x-2 flex-wrap">
      <CategoriesJobs
        v-for="(item, index) in programLang"
        :key="index"
        @click="navigateToArea(item._id)"
        :programmingLanguages="item.name"
      />
    </div>
    <div class="mt-16">
      <p class="text-4xl font-[700] text-start">All jobs</p>

      <div class="flex gap-6">
        <div class="mt-10 flex flex-col gap-4">
          <CardJobs
            @click="navigateToJobDetail(item._id)"
            v-for="(item, index) in featureJobList"
            :key="index"
            :companyLogo="item.logo"
            :title="item.jobTitle"
            :company="item.company"
            :locations="item.locations"
            :jobType="item.jobType"
            :datePosted="item.createdAt"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <a-pagination
        :total="featureMeta?.total || 0"
        :current="featureMeta?.page"
        :page-size="featureMeta?.pageSize"
        :simple="true"
        @change="handlePageChange"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import CategoriesJobs from "../../components/CategoriesJobs.vue";
import CardJobs from "../../components/CardJobs.vue";
import { useProgramLangStore } from "../../store/programLnag";
import { useFeatureJobStore } from "../../store/featureJobStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import RouterName from "../../constants/router-name";
import { useRouter } from "vue-router";

const programLangStore = useProgramLangStore();
const { programLang } = storeToRefs(programLangStore);
const { fetchProgramLang } = programLangStore;

const featureJobStore = useFeatureJobStore();
const { featureJobList, featureMeta, featureQuery } =
  storeToRefs(featureJobStore);
const { fetchFeatureJob } = featureJobStore;

const router = useRouter();

// const search = ref("net");

const navigateToArea = (id: string) => {
  router.push({
    name: RouterName.AREA,
    params: { id },
  });
};

const navigateToJobDetail = (id: string) => {
  router.push({
    name: RouterName.DETAIL,
    params: { id },
  });
};

const handlePageChange = (newPage: number) => {
  featureQuery.value.page = newPage;
  fetchData();
};

const fetchData = async () => {
  await Promise.all([fetchProgramLang(), fetchFeatureJob()]);
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped></style>
