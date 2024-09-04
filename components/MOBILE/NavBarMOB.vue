<template>
  <!-- NAV BAR -->
  <div
    id="NavBarMOB"
    class="navBarMOB bg-navBarBG opacity-[.2] min-[990px]:hidden h-[12vh] px-[6vw] w-full flex items-center justify-between z-[99] font-outfit relative"
  >
    <div class="h-max w-max">
      <HamburgerIcon @click="openMenu" class="text-[3.8vh]" />
    </div>
    <a
      href="/"
      class="h-max w-max absolute top-[50%] left-[50%] translate-x-[-58%] translate-y-[-50%] font-[300] text-[5vh] text-[#333] tracking-[-.1vw]"
    >
      WOLTIZ
    </a>
    <div class="h-max w-max"><CartIconMOB @click="openCart" /></div>
  </div>
  <!-- --------- -->
  <!-- --------- -->
  <!-- MENU -->
  <!-- --------- -->
  <!-- --------- -->
  <div
    v-if="isMenuOpen"
    class="menuPageMOB opacity-0 invisible font-outfit fixed top-0 left-0 h-[100dvh] w-screen bg-[#f5f3f1] z-[99]"
  >
    <div class="h-[14svh] w-screen px-[4vw] items-center flex justify-between">
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
      class="h-[66svh] w-screen flex flex-col justify-center gap-[2vh] items-start px-[4vw] text-[3.8vh]"
    >
      <a href="/">Designer</a><a href="/about">About</a><span>Contact</span
      ><a href="/privacy">Privacy Policy</a>
    </div>
    <div class="h-[20svh] w-screen flex flex-col justify-start">
      <div class="flex h-full w-full justify-between px-[6vw] items-center">
        <span>Under Development | Demo</span>
        <span>Woltiz</span>
      </div>
    </div>
  </div>
  <!-- --------- -->
  <!-- --------- -->
  <!-- CART -->
  <!-- --------- -->
  <!-- --------- -->
  <div
    class="cartPageMOB invisible opacity-0 font-outfit fixed top-0 left-0 h-[100dvh] w-screen bg-[#f5f3f1] z-[99]"
  >
    <div
      class="h-max w-full flex items-center justify-between py-[4vh] px-[4vw]"
    >
      <span class="text-[3svh]">Saved Items</span>
      <span class="text-[4svh]"><CloseIcon @click="closeCart" /></span>
    </div>
    <div v-if="userStore.cart.length > 0" class="h-max w-full">
      <div v-for="(item, index) in userStore.cart" :key="index">
        <ReusablePrefNavCardMOB :item="item" :key="index" />
      </div>
      <div class="h-max w-full px-[4vw]">
        <a
          class="text-[2.4svh] tracking-[.4vw] max-[990px]:fixed bottom-[2vh] max-[990px]:w-[92vw] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[2.4vh] text-white bg-[#222] text-center shadow-xl"
          href="/flooring"
          >PROCEED TO CHECKOUT</a
        >
      </div>
    </div>

    <div
      v-else
      class="h-max w-full flex items-center flex-col gap-[16svh] pt-[18svh] px-[4vw]"
    >
      <NuxtImg class="h-[16svh]" src="/icons/box.webp" />
      <span class="text-[2.4vh] font-[300] text-center"
        >Oops! It looks like you don't have any saved preferences yet. Start
        exploring and add your favorite options!</span
      >
      <a
        class="text-[2.4svh] tracking-[.4vw] max-[990px]:fixed bottom-[2vh] max-[990px]:w-[92vw] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[2.4vh] text-white bg-[#222] text-center shadow-xl"
        href="/flooring"
        >EXPLORE</a
      >
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import useUserStore from "~/stores/user";
const userStore = useUserStore();

import ReusablePrefNavCardMOB from "./../MOBILE/FLOORING/DetailsReviewCards/ReusablePrefNavCard.vue";

import CloseIcon from "./../../public/icons/closeIcon";
import HamburgerIcon from "~/public/icons/HamburgerIcon.vue";

const isMenuOpen = ref(false);
const isCartOpen = ref(false);

import CartIconMOB from "./CartIconMOB.vue";

function openMenu() {
  isMenuOpen.value = true;
  handleAutoAlpha("menuPageMOB", 1);
  DISABLE_SCROLL();
}
function closeMenu() {
  handleAutoAlpha("menuPageMOB", 0);
  ENABLE_SCROLL();
  isMenuOpen.value = false;
}

function openCart() {
  isCartOpen.value = true;
  handleAutoAlpha("cartPageMOB", 1);
  DISABLE_SCROLL();
}
function closeCart() {
  handleAutoAlpha("cartPageMOB", 0);
  ENABLE_SCROLL();
  isMenuOpen.value = false;
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
