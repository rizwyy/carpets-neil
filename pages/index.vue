<template>
  <Desktop>
    <NavBarPC />
    <HeroLayoutPC />
  </Desktop>
  <!-- MOBILE -->
  <section class="min-[990px]:hidden h-max w-max">
    <NavBarMOB />
    <!-- TYPO -->
    <div
      class="h-max w-screen bg-gradient-to-b from-[#2d6a4f] via-[#081c15] to-[#52b788] from-[1%] flex flex-col justify-center items-center z-[99] pb-[2vh] gap-[.2vh] pt-[3.2vh]"
    >
      <span
        class="w-[75%] whitespace-no-wrap bg-gradient-to-r text-center from-[#fff] to-[#ececec] bg-clip-text text-transparent font-[400] text-[5.8vh] leading-[5.8vh] py-[1vh] font-sans tracking-[-.1vw]"
        >Find the right
        <span class="font-domino text-[#1dbf73] font-[300] tracking-[-.5vw]">
          decor</span
        >
        service, right away</span
      >
      <div class="h-max w-screen flex justify-center pt-[1.8vh] pb-[2.8vh]">
        <SearchBarMOB />
      </div>
    </div>
    <!-- SEARCH BAR COMP -->

    <HeroLayoutMOB />
  </section>
</template>

<script setup>
import NavBarMOB from "./../components/MOBILE/NavBarMOB.vue";
import SearchBarMOB from "./../components/MOBILE/SearchBarMOB.vue";
import HeroLayoutMOB from "./../components/MOBILE/HeroLayoutMOB.vue";
// PC
import NavBarPC from "./../components/DESKTOP/NavBarPC.vue";
import HeroLayoutPC from "~/components/DESKTOP/HeroLayoutPC.vue";
import useUserStore from "../stores/user";
const userStore = useUserStore();
import Mobile from "../layouts/Mobile.vue";
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.font-sans {
  font-family: "Fustat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.font-domino {
  font-family: "Domine", serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
