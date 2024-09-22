<template>
  <button
    v-show="userStore.preference.spec_1 !== ''"
    @click="scrollToTop"
    class="fixed flex items-center justify-center bottom-[1.8vh] right-[1vw] px-[1.4vw] py-[2.4vh] hover:scale-[1.1] transition-all duration-[300ms] backdrop-blur-[12px] bg-[#000] bg-opacity-[.3] rounded-full z-[999] shadow-xl"
  >
    <Icon
      icon="ic:round-keyboard-double-arrow-up"
      class="text-[2rem] text-[#fff9]"
    />
  </button>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import useUserStore from "./../../stores/user";
const userStore = useUserStore();
</script>
