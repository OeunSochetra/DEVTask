import { defineStore } from "pinia";
import { get } from "../services/http";
import { ref } from "vue";
import { IPrivacy } from "../constants/common";

export const usePrivacyStore = defineStore("privacy", () => {
  const privacyList = ref<IPrivacy[]>([]);

  const fetchPrivacy = async () => {
    try {
      const response = await get<IPrivacy[]>("privacy-policy");
      if (response.message === "success") {
        privacyList.value = response.data as IPrivacy[];
      } else {
        console.error("failed to fetch privacy list", response.message);
      }
    } catch (error) {
      console.error("error to fetch privacy list", error);
    }
  };

  return {
    privacyList,
    fetchPrivacy,
  };
});
