import { defineStore } from "pinia";
import { IFeatureJob } from "../constants/common";
import { get } from "../services/http";
import { ref } from "vue";

export const useFeatureJobStore = defineStore("featureJob", () => {
  const featureJobList = ref<IFeatureJob[]>([]);

  const fetchFeatureJob = async () => {
    try {
      const response = await get<IFeatureJob[]>("feature-jobs");
      if (response.message === "success") {
        featureJobList.value = response.data as IFeatureJob[];
        console.log("feature job", featureJobList.value);
      } else {
        console.error("failed to fetch feature job ", response.message);
      }
    } catch (error) {
      console.error("error to fetch feature job", error);
    }
  };

  return {
    featureJobList,
    fetchFeatureJob,
  };
});
