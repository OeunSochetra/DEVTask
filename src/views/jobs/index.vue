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
    <!-- <div class="mt-16">
      <p class="text-4xl font-[700] text-start">All jobs</p>
      <div class="flex gap-6">
        <div class="mt-10 flex flex-col gap-4">
          <CardJobs
            v-for="(item, index) in allJobs"
            :key="index"
            :companyLogo="item.companyLogo"
            :title="item.title"
            :company="item.company"
            :location="item.location"
            :jobType="item.jobType"
            :datePosted="item.datePosted"
            :internship="item.internship"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { allJobs } from "../../constants/constant";
import CategoriesJobs from "../../components/CategoriesJobs.vue";
import CardJobs from "../../components/CardJobs.vue";
import { useProgramLangStore } from "../../store/programLnag";
import { useFeatureJobStore } from "../../store/featureJobStore";
import { storeToRefs } from "pinia";
import { onMounted, computed } from "vue";
import { IFeatureJob } from "../../constants/common";
import RouterName from "../../constants/router-name";
import { useRouter } from "vue-router";

const programLangStore = useProgramLangStore();
const { programLang } = storeToRefs(programLangStore);
const { fetchProgramLang } = programLangStore;

const router = useRouter();

const navigateToArea = (id: string) => {
  router.push({
    name: RouterName.AREA,
    params: { id },
  });
};

const fetchData = async () => {
  await Promise.all([fetchProgramLang()]);
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped></style>
