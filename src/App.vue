<template>
  <div>
    <Navbar class="sticky-navbar" />
    <div
      class="max-w-[1180px] mx-auto flex items-center justify-center mt-[10rem]"
    >
      <RouterView />
    </div>
    <div class="mt-36">
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
