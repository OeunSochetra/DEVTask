import { defineStore } from "pinia";
import { ref } from "vue";
import { uploadFile } from "../services/http";
import { IUploadFile } from "../constants/common";

export const useUploadMediaStore = defineStore("upload", () => {
  const uploadedMedia = ref<IUploadFile>();

  const uploadMedia = async (file: File) => {
    try {
      const response = await uploadFile<IUploadFile>("upload", file);
      uploadedMedia.value = response.data;
    } catch (error) {
      console.error("error to upload media", error);
    }
  };

  return {
    uploadedMedia,
    uploadMedia,
  };
});
