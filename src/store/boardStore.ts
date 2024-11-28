import { defineStore } from "pinia";
import { IBoard } from "../constants/common";
import { ref } from "vue";
import { get } from "../services/http";

export const useBoardStore = defineStore("board", () => {
  const boardList = ref<IBoard[]>([]);

  const fetchBoard = async () => {
    try {
      const response = await get<IBoard[]>("boards");
      if (response.message === "success") {
        boardList.value = response.data as IBoard[];
      } else {
        console.error("failed to fetch board ", response.message);
      }
    } catch (error) {
      console.error("error to fetch board", error);
    }
  };

  return {
    boardList,
    fetchBoard,
  };
});
