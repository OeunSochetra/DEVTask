<template>
  <button @click="increment">Increment</button>
  {{ count }}
  <button @click="decrement">decrement</button>
</template>
<script setup lang="ts">
import { useCounterStore } from "../store/counterStore";
import { storeToRefs } from "pinia";
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increment, decrement } = counterStore;
</script>
<style scoped></style>
