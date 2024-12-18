import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    if (count.value > 0) {
      count.value--;
    }
  };

  return {
    count,
    increment,
    decrement,
  };
});
