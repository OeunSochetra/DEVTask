<template>
  <div class="md:w-[688px] w-full">
    <div class="flex flex-col gap-6">
      <Title :title="featureJobDetail?.jobTitle" />
      <div
        class="w-full border mt-6 md:p-10 p-2 rounded-lg md:flex md:items-center md:justify-between"
      >
        <div
          class="md:w-[50%] w-full md:p-10 p-2 flex items-center justify-center"
        >
          <div class="flex items-center flex-col gap-2">
            <img
              :src="featureJobDetail?.logo"
              alt="logo"
              width="64"
              height="64"
              class="border rounded-full"
            />
            <p class="text-black font-semibold text-lg">
              {{ featureJobDetail?.company }}
            </p>
            <a class="text-[12px]" :href="featureJobDetail?.website"
              >Visit the website</a
            >
            <a-button
              class="!bg-blue-500 hover:!bg-blue-600 !text-white !p-4 !rounded-full"
            >
              Click here to apply
            </a-button>
          </div>
        </div>
        <div
          class="md:w-[50%] md:mt-0 mt-10 w-full md:border-l md:p-10 p-2 md:flex md:items-start md:justify-start"
        >
          <div class="flex items-center flex-col gap-2">
            <div
              class="text-[12px] flex md:border-t-0 border-t items-start gap-2 flex-col p-4 border-b w-[260px]"
            >
              <p class="text-black font-medium">Job Type:</p>
              <span
                class="flex items-center justify-center border bg-[#F5F5F5] px-3 py-1.5 rounded-full"
              >
                <p class="text-[12px]">{{ featureJobDetail?.jobType }}</p>
              </span>
            </div>
            <div
              class="text-[12px] flex items-start gap-2 flex-col p-4 border-b w-[260px]"
            >
              <p class="text-black font-medium">Locations:</p>
              <span class="locations">
                <p class="text-[12px]">{{ featureJobDetail?.locations }}</p>
              </span>
            </div>
            <div
              class="text-[12px] flex items-start gap-2 flex-col p-4 md:border-b w-[260px]"
            >
              <p class="text-black font-medium">Date posted:</p>
              <span class="DatePosted">
                <p class="text-[12px]">
                  {{ formatDate(featureJobDetail?.createdAt) }}
                </p>
              </span>
              <span
                v-if="featureJobDetail?.spotlightOption"
                class="spotlightOption"
              >
                <p class="text-[12px]">In the spotlight</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="dynamic-content" v-html="featureJobDetail?.description"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFeatureJobStore } from "../../store/featureJobStore";
import Title from "../../components/Title.vue";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { formatDate } from "../../utils/formatDate";

const featureJobStore = useFeatureJobStore();
const { featureJobDetail } = storeToRefs(featureJobStore);
const { fetchFeatureJobDetail } = featureJobStore;
const route = useRoute();

const isLoading = ref<boolean>(false);

const fetchData = async () => {
  isLoading.value = true;
  const id = route.params.id;
  await fetchFeatureJobDetail(id as string);
  isLoading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped>
.DatePosted {
  @apply flex items-center justify-center border bg-[#F6F8FF] text-blue-500 border-blue-100 px-3 py-1.5 rounded-full;
}

.spotlightOption {
  @apply flex items-center justify-center border bg-[#FDF7F8] text-red-500 border-red-100 px-3 py-1.5 rounded-full;
}
.locations {
  @apply flex items-center justify-center border bg-[#F7FBF9] text-green-500 border-green-100 px-3 py-1.5 rounded-full;
}

.JobType {
  @apply flex items-center justify-center border bg-[#F5F5F5] text-gray-500 border-gray-100 px-3 py-1.5 rounded-full;
}

.dynamic-content ::v-deep div {
  @apply text-[#4C4C4C] leading-8 font-[400];
}

.dynamic-content ::v-deep p {
  @apply mt-4;
}
.dynamic-content ::v-deep h1 {
  @apply mt-2 text-black font-semibold;
}

.dynamic-content ::v-deep h5 {
  @apply mt-2 text-black font-semibold;
}

.dynamic-content ::v-deep h {
  @apply mt-2 text-black font-semibold;
}

.dynamic-content ::v-deep h2 {
  @apply mt-4;
}

.dynamic-content ::v-deep h3 {
  @apply mt-2 text-black font-semibold;
}

.dynamic-content ::v-deep h4 {
  @apply mt-2 text-black font-semibold;
}

.dynamic-content ::v-deep h2 {
  @apply text-2xl text-black font-semibold;
}

.dynamic-content ::v-deep ul {
  list-style: disc;
  padding: 10px;
  margin: 10px;
}
</style>
