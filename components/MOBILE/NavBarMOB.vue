<template>
  <div
    id="NavBarMOB"
    class="navBarMOB min-[990px]:hidden h-[12vh] px-[6vw] w-full flex items-center justify-between relative z-[99] font-outfit"
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
    <a href="/designer" class="h-max w-max block text-[2vh] font-[500]"
      >DESIGNER</a
    >
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
      <span
        ><svg
          fill="#333"
          @click="closeMenu"
          height="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
          ></path></svg
      ></span>
    </div>
    <div
      class="h-[66vh] w-screen flex flex-col justify-center gap-[2vh] items-start px-[4vw] text-[3.8vh]"
    >
      <a href="/">Home</a><a href="/about">About</a><span>Contact</span
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
const isMenuOpen = ref(false);
function openMenu() {
  isMenuOpen.value = true;
  gsap.to(".menuPageMOB", {
    autoAlpha: 1,
    duration: 0.2,
    ease: "power4.in",
  });
}
function closeMenu() {
  isMenuOpen.value = false;
  gsap.to(".menuPageMOB", {
    autoAlpha: 0,
    duration: 0.2,
    ease: "power4.out",
  });
}

onMounted(() => {
  bringOpacity("navBarMOB");
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
