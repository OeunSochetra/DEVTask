<template>
  <div class="p-8 mb-10 border-t border-b">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[14px] font-[400]"
    >
      <div
        class="w-full flex items-center justify-between md:w-auto md:flex md:items-start md:justify-start gap-10"
      >
        <p>© {{ year }} DevTask.️</p>
        <p
          @click="navigatePrivacyPolicy()"
          class="hover:underline cursor-pointer"
        >
          Privacy Policy
        </p>
      </div>
      <div class="text-black flex items-center gap-2">
        <a href="https://www.youtube.com/watch?v=E5ONTXHS2mM">
          <IconFacebook
            class="px-2.5 py-2.5 bg-[#F5F5F5] rounded-full"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=E5ONTXHS2mM">
          <IconX
            class="px-2.5 py-2.5 bg-[#F5F5F5] rounded-full"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=E5ONTXHS2mM">
          <IconLinkIn
            class="px-2.5 py-2.5 bg-[#F5F5F5] rounded-full"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=E5ONTXHS2mM">
          <IconInstagram
            class="px-2.5 py-2.5 bg-[#F5F5F5] rounded-full"
            width="40"
            height="40"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconFacebook from "./icons/IconFacebook.vue";
import IconX from "./icons/IconX.vue";
import IconLinkIn from "./icons/IconLinkIn.vue";
import IconInstagram from "./icons/IconInstagram.vue";
import RouterName from "../constants/router-name";
import router from "../router";

const navigatePrivacyPolicy = () => {
  router.push({ name: RouterName.PRIVATE_POLICY });
};

const year = new Date().getFullYear();
</script>
<style scoped></style>
