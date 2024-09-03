<template>
  <div
    id="NavBarMOB"
    class="navBarMOB bg-navBarBG opacity-[.2] min-[990px]:hidden h-[12vh] px-[6vw] w-full flex items-center justify-between relative z-[99] font-outfit"
  >
    <div @click="toggleMenu" class="h-max w-max">
      <span
        ><svg
          class="h-[3.8vh]"
          @click="openMenu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 17h18M3 12h18M3 7h18"
          /></svg
      ></span>
    </div>
    <a
      href="/"
      class="h-max w-max absolute top-[50%] left-[50%] translate-x-[-58%] translate-y-[-50%] font-[300] text-[5vh] text-[#333] tracking-[-.1vw]"
    >
      WOLTIZ
    </a>
    <div class="h-max w-max"><SpecCounter /></div>
  </div>
  <div
    v-if="isMenuOpen"
    class="menuPageMOB opacity-0 invisible font-outfit fixed top-0 left-0 h-[100dvh] w-screen bg-[#f5f3f1] z-[99]"
  >
    <div class="h-[14vh] w-screen px-[4vw] items-center flex justify-between">
      <a
        href="/"
        class="h-max w-max font-[300] text-[5vh] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
      <span class="text-[5vh]">
        <CloseIcon @click="closeMenu" />
      </span>
    </div>
    <div
      class="h-[66vh] w-screen flex flex-col justify-center gap-[2vh] items-start px-[4vw] text-[3.8vh]"
    >
      <a href="/">Designer</a><a href="/about">About</a><span>Contact</span
      ><a href="/privacy">Privacy Policy</a>
    </div>
    <div class="h-[20vh] w-screen flex flex-col justify-start">
      <div class="flex h-full w-full justify-between px-[4vw] items-center">
        <span>Under Development | Demo</span>
        <span>Woltiz</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import CloseIcon from "~/public/icons/closeIcon.vue";

const isMenuOpen = ref(false);

import SpecCounter from "./SpecCounter.vue";

function openMenu() {
  isMenuOpen.value = true;
  handleAutoAlpha("menuPageMOB", 1);
}
function closeMenu() {
  isMenuOpen.value = false;
  handleAutoAlpha("menuPageMOB", 0);
}

onMounted(() => {
  handleDOMEntry("navBarMOB");
});
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
</style>
