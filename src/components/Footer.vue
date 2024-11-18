<template>
  <div class="p-8 mb-10 border-t border-b">
    <div class="flex items-center justify-between text-[14px] font-[400]">
      <div class="flex items-center gap-10">
        <p>© {{ year }} DevTask.️</p>
        <p
          @click="navigatePrivacyPolicy()"
          class="hover:underline cursor-pointer"
        >
          Privacy Policy
        </p>
      </div>
      <div class="text-black cursor-pointer flex items-center gap-2">
        <IconFacebook
          class="px-2.5 py-2.5 bg-[#F5F5F5] rounded-full"
          width="40"
          height="40"
        />
        <IconX
          class="px-2.5 py-2.5 bg-[#F5F5F5] rounded-full"
          width="40"
          height="40"
        />
        <IconLinkIn
          class="px-2.5 py-2.5 bg-[#F5F5F5] rounded-full"
          width="40"
          height="40"
        />
        <IconInstagram
          class="px-2.5 py-2.5 bg-[#F5F5F5] rounded-full"
          width="40"
          height="40"
        />
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
