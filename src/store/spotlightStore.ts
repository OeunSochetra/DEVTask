import { defineStore } from "pinia";
import { ISpotlight, ICreateSpotlightPayload } from "../constants/common";
import { ref } from "vue";
import { get, post, put, del } from "../services/http";

export const useSpotlightStore = defineStore("spotlight", () => {
  const spotlightList = ref<ISpotlight[]>([]);
  const spotlightDetail = ref<ISpotlight>();

  const fetchSpotlightList = async () => {
    try {
      const response = await get<ISpotlight[]>("/spotlights");
      if (response.message === "success") {
        spotlightList.value = response.data as ISpotlight[];
      } else {
        console.error("failed to fetch spotlight list", response.message);
      }
    } catch (error) {
      console.error("error to fetch spotlight list", error);
    }
  };

  const fetchSpotlightDetail = async (id: string) => {
    try {
      const response = await get<ISpotlight>("/spotlight/" + id);
      if (response.message === "success") {
        spotlightDetail.value = response.data as ISpotlight;
      } else {
        console.error("failed to fetch spotlight detail", response.message);
      }
    } catch (error) {
      console.error("error to fetch spotlight detail", error);
    }
  };

  const addSpotlight = async (payload: ICreateSpotlightPayload) => {
    try {
      const response = await post<ICreateSpotlightPayload>(
        "/spotlight",
        payload
      );
      if (response.message === "success") {
        console.log("success to add spotlight");
      } else {
        console.error("failed to add spotlight", response.message);
      }
    } catch (error) {
      console.error("error to add spotlight", error);
    }
  };

  const updateSpotlight = async (
    id: string,
    payload: ICreateSpotlightPayload
  ) => {
    try {
      const response = await put<ICreateSpotlightPayload>(
        "spotlight",
        id,
        payload
      );
      if (response.message === "success") {
        console.log("Successfully updated spotlight");
      } else {
        console.error("Failed to update spotlight:", response.message);
      }
    } catch (error) {
      console.error("Error updating spotlight:", error);
    }
  };

  const deleteSpotlight = async (id: string) => {
    try {
      const response = await del<ISpotlight>("/spotlight", id);
      if (response.message === "success") {
        console.log("Successfully deleted spotlight");
      } else {
        console.error("Failed to delete spotlight", response.message);
      }
    } catch (error) {
      console.error("Error deleting spotlight", error);
    }
  };

  return {
    spotlightList,
    spotlightDetail,
    fetchSpotlightList,
    fetchSpotlightDetail,
    addSpotlight,
    updateSpotlight,
    deleteSpotlight,
  };
});
