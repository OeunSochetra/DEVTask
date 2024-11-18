<template>
  <div>
    <p class="text-4xl font-[700] text-start">Find your dream jobs</p>
    <div class="mt-10 flex items-center gap-y-10 gap-x-2 flex-wrap">
      <CategoriesJobs :programmingLanguages="programmingLanguages" />
    </div>
    <div class="mt-16">
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
        <div class="sticky w-[30%] bottom-[50%] right-10">
          <div class="border p-10 rounded-2xl">
            <div class="flex flex-col gap-6">
              <p>
                Work with the most talented and accomplished developers on a
                freelance, contract, part-time, or full-time basis.
              </p>
              <div
                @click="navigateToPost"
                class="flex items-center gap-2 w-[160px] px-4 py-1 bg-blue-600 rounded-full cursor-pointer text-white"
              >
                <span>
                  <IconPlus />
                </span>
                Post a job
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { allJobs } from "../../constants/constant";
import { programmingLanguages } from "../../constants/constant";
import CategoriesJobs from "../../components/CategoriesJobs.vue";
import CardJobs from "../../components/CardJobs.vue";
import IconPlus from "../../components/icons/IconPlus.vue";
import RouterName from "../../constants/router-name";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToPost = () => {
  router.push({ name: RouterName.POST });
};
</script>
<style scoped></style>
