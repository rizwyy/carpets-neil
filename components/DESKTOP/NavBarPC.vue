<template>
  <section
    class="navBarPC max-[990px]:hidden h-max w-full max-w-[100vw] overflow-x-hidden flex items-center justify-between py-[4vh] px-[6vw] bg-[#f1f1f1] font-outfit"
  >
    <div class="h-full w-[35%] flex items-center justify-start">
      <button @click="openMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[3.2vh] w-[3vw]"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 17h18M3 12h18M3 7h18"
          />
        </svg>
      </button>
    </div>
    <div class="h-full w-[25%] flex justify-center items-center">
      <a
        href="/"
        class="h-max w-max block font-[300] text-[2.8vw] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
    </div>
    <div class="h-full w-[35%] flex justify-end gap-[8vw] items-center">
      <a href="/designer" class="h-max w-max block text-[1.2vw] font-[500]"
        >DESIGNER</a
      >
    </div>
  </section>
  <div
    v-if="isMenuOpen"
    class="menuPageMOB opacity-0 invisible font-outfit fixed top-0 left-0 h-screen w-screen bg-[#f5f3f1] z-[9999]"
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
    <div class="h-[20vh] w-screen flex flex-col">
      <div
        class="flex h-full w-full justify-between px-[4vw] items-center"
      ></div>
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
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
</style>
