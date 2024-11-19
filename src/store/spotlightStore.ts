import { defineStore } from "pinia";
import { ISpotlight } from "../constants/common";
import { ref } from "vue";
import { get } from "../services/http";

export const useSpotlightStore = defineStore("spotlight", () => {
  const spotlightList = ref<ISpotlight[]>([]);
});
