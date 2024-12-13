import { defineStore } from "pinia";
import { IProgramLang, IFeatureJob } from "../constants/common";
import { ref } from "vue";
import { get, post, put, del } from "../services/http";

export const useProgramLangStore = defineStore("programLang", () => {
  const programLang = ref<IProgramLang[]>([]);
  const programLangDetail = ref<IProgramLang>();
  const programLangFeatureJob = ref<IFeatureJob[]>([]);

  const fetchProgramLang = async () => {
    try {
      const response = await get<IProgramLang[]>("program-langs");
      if (response.message === "success") {
        programLang.value = response.data as IProgramLang[];
        console.log("programLang", programLang.value);
      } else {
        console.error("failed to fetch program lang ", response.message);
      }
    } catch (error) {
      console.error("error to fetch program lang", error);
    }
  };

  const fetchProgramLangDetail = async (id: string) => {
    try {
      const response = await get<IProgramLang>(`program-lang/${id}`);
      if (response.message === "success") {
        programLangDetail.value = response.data as IProgramLang;
        console.log("programLangDetail", programLangDetail.value);
      } else {
        console.error("failed to fetch program lang detail", response.message);
      }
    } catch (error) {
      console.error("error to fetch program lang detail", error);
    }
  };

  // find category detail by program lang id

  const fetchProgramLangFeatureJob = async (id: string) => {
    try {
      const response = await get<IFeatureJob[]>(
        `program-lang/${id}/feature-jobs`
      );
      if (response.message === "success") {
        programLangFeatureJob.value = response.data as IFeatureJob[];
        console.log("programLangFeatureJob", programLangFeatureJob.value);
      } else {
        console.error(
          "failed to fetch program lang feature job",
          response.message
        );
      }
    } catch (error) {
      console.error("error to fetch program lang feature job", error);
    }
  };

  const addProgramLang = async (name: string) => {
    try {
      const response = await post<string>("program-lang", name);
      if (response.message === "success") {
        console.log("success to add program lang");
      } else {
        console.error("failed to add program lang", response.message);
      }
    } catch (error) {
      console.error("error to add program lang", error);
    }
  };

  const updateProgramLang = async (id: string, name: string) => {
    try {
      const response = await put<string>("program-lang", id, name);
      if (response.message === "success") {
        console.log("success to update program lang");
      } else {
        console.error("failed to update program lang", response.message);
      }
    } catch (error) {
      console.error("error to update program lang", error);
    }
  };

  const deleteProgramLang = async (id: string) => {
    try {
      const response = await del<string>("program-lang", id);
      if (response.message === "success") {
        console.log("success to delete program lang");
      } else {
        console.error("failed to delete program lang", response.message);
      }
    } catch (error) {
      console.error("error to delete program lang", error);
    }
  };

  return {
    programLang,
    programLangDetail,
    programLangFeatureJob,
    fetchProgramLang,
    fetchProgramLangDetail,
    fetchProgramLangFeatureJob,
    addProgramLang,
    updateProgramLang,
    deleteProgramLang,
  };
});
