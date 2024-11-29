<template>
  <div class="flex flex-col">
    <Navbar class="sticky-navbar" />
    <div
      class="flex items-center justify-center min-h-screen md:mt-[10rem] mt-[4rem] md:p-0 p-4"
    >
      <RouterView />
    </div>
    <div class="mt-16">
      <Footer></Footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
<style scoped>
.sticky-navbar {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
}
</style>
