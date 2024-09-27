<script setup>
const { flooring, link } = defineProps(["flooring", "link"]);
import { Icon } from "@iconify/vue/dist/iconify.js";
import useUserStore from "~/stores/user";

const userStore = useUserStore();
</script>

<template>
  <div
    v-show="
      userStore.preference.spec_1 !== '' && userStore.preference.budget === ''
    "
    class="fixed bottom-0 left-0 w-full h-[4.2rem] z-[99999] backdrop-blur-lg bg-black bg-opacity-90 flex font-outfit"
  >
    <div
      class="flex items-center justify-center w-2/3 border-r border-gray-300"
    >
      <a
        href="/flooring/customize"
        class="font-medium text-[1rem] flex items-center justify-center gap-[1vw] bg-gradient-to-r from-white/70 via-cyan-100 to-white/70 bg-clip-text text-transparent animate-gradient"
      >
        CUSTOM <span>{{ flooring }}</span>
        <Icon class="text-[1.4rem] text-[#f1f1f1]" icon="gridicons:customize" />
      </a>
    </div>
    <div class="flex items-center justify-center w-1/3">
      <a
        class="text-gray-300 font-medium text-[1rem] flex gap-[1vw] items-center justify-center"
      >
        <span>CHAT </span>
        <Icon class="text-[1.4rem] text-[#f1f1f1]" icon="mdi:chat" />
      </a>
    </div>
  </div>
</template>

<style scoped>
@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
