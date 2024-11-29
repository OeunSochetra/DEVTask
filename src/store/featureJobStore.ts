import { defineStore } from "pinia";
import { IFeatureJob, IFeatureJobPayload } from "../constants/common";
import { get, post, del } from "../services/http";
import { ref } from "vue";

export const useFeatureJobStore = defineStore("featureJob", () => {
  const featureJobList = ref<IFeatureJob[]>([]);
  const featureJobDetail = ref<IFeatureJob>();

  const fetchFeatureJob = async () => {
    try {
      const response = await get<IFeatureJob[]>("feature-jobs");
      if (response.message === "success") {
        featureJobList.value = response.data as IFeatureJob[];
      } else {
        console.error("failed to fetch feature job ", response.message);
      }
    } catch (error) {
      console.error("error to fetch feature job", error);
    }
  };

  const fetchFeatureJobDetail = async (id: string) => {
    try {
      const response = await get<IFeatureJob>(`feature-job/${id}`);
      if (response.message === "success") {
        featureJobDetail.value = response.data as IFeatureJob;
      } else {
        console.error("failed to fetch feature job detail", response.message);
      }
    } catch (error) {
      console.error("error to fetch feature job detail", error);
    }
  };

  const addFeatureJob = async (payload: IFeatureJobPayload) => {
    try {
      const response = await post<IFeatureJobPayload>("feature-job", payload);
      if (response.message === "success") {
        console.log("success to add feature job");
      } else {
        console.error("failed to add feature job", response.message);
      }
    } catch (error) {
      console.error("error to add feature job", error);
    }
  };

  const updateFeatureJob = async (id: string, payload: IFeatureJobPayload) => {
    try {
      const response = await post<IFeatureJobPayload>("feature-job", payload);
      if (response.message === "success") {
        console.log("success to update feature job");
      } else {
        console.error("failed to update feature job", response.message);
      }
    } catch (error) {
      console.error("error to update feature job", error);
    }
  };

  const deleteFeatureJob = async (id: string) => {
    try {
      const response = await del<string>(`feature-job`, id);
      if (response.message === "success") {
        console.log("success to delete feature job");
      } else {
        console.error("failed to delete feature job", response.message);
      }
    } catch (error) {
      console.error("error to delete feature job", error);
    }
  };

  return {
    featureJobList,
    featureJobDetail,
    fetchFeatureJob,
    fetchFeatureJobDetail,
    addFeatureJob,
    updateFeatureJob,
    deleteFeatureJob,
  };
});
