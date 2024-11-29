<template>
  <div class="flex items-center p-4 border-b bg-white text-black shadow-sm">
    <div class="flex items-center w-full justify-between mt-1">
      <div class="flex items-center gap-6 ml-6">
        <span
          @click="navigateToHome()"
          class="font-[600] text-xl cursor-pointer"
          >DEVTask</span
        >
        <Button class="!border !hidden md:!block !rounded-lg"> Contact </Button>
        <span
          @click="navigateToFindJobs"
          class="hover:text-blue-600 cursor-pointer"
          >Find jobs</span
        >
      </div>
      <Button
        class="!bg-blue-500 hover:!bg-blue-600 !text-white !rounded-full"
        v-if="route.name !== RouterName.POST"
        @click="navigateToPost()"
      >
        <span class="flex items-center gap-2">
          <IconPlus />
          Post a job
        </span>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconPlus from "./icons/IconPlus.vue";
import router from "../router";
import { useRoute } from "vue-router";
import RouterName from "../constants/router-name";
import { Button } from "@arco-design/web-vue";

const route = useRoute();

const navigateToHome = () => {
  router.push("/");
};

const navigateToPost = () => {
  router.push({ name: RouterName.POST });
};

const navigateToFindJobs = () => {
  router.push({ name: RouterName.JOBS });
};
</script>
<style scoped></style>
