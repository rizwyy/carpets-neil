<template>
  <Desktop>
    <NavBarPC />
    <div
      class="max-[990px]:hidden h-max max-w-screen overflow-x-hidden flex justify-center"
    >
      <HeroBannerPC />
    </div>
    <HeroLayoutPC />
  </Desktop>
  <!-- MOBILE -->
  <section class="min-[990px]:hidden h-max w-max">
    <NavBarMOB />
    <!-- TYPO -->
    <div
      class="h-max w-screen bg-gradient-to-tr from-[#bde0fe] backdrop-blur-[8px] via-[#a2d2ff] to-[#7dd3fc] from-[1%] flex flex-col justify-center items-center z-[99] pb-[2vh] gap-[.2vh] pt-[3.2vh]"
    >
      <span
        class="w-[75%] text-balance text-[#fff] text-center font-[350] text-bannerMOB leading-[5.8vh] py-[1vh] font-sans tracking-[-.1vw]"
        >Find the right
        <span class="font-domino text-[#1e3a8a] font-[300] tracking-[-.5vw]">
          decor</span
        >
        right <br />
        away</span
      >
      <div class="h-max w-screen flex justify-center pt-[1.8vh] pb-[2.8vh]">
        <SearchBarMOB />
      </div>
    </div>
    <!-- SEARCH BAR COMP -->

    <HeroLayoutMOB />
    <FooterMOB />
  </section>
</template>

<script setup>
import NavBarMOB from "./../components/MOBILE/NavBarMOB.vue";
import HeroBannerPC from "~/components/DESKTOP/HeroBannerPC.vue";
import SearchBarMOB from "./../components/SearchBar/SearchBarMOB.vue";
import SearchBarPC from "./../components/SearchBar/SearchBarPC.vue";
import HeroLayoutMOB from "./../components/MOBILE/HeroLayoutMOB.vue";
import FooterMOB from "~/components/MOBILE/FooterMOB.vue";
// PC
import NavBarPC from "./../components/DESKTOP/NavBarPC.vue";
import HeroLayoutPC from "~/components/DESKTOP/HeroLayoutPC.vue";
import useUserStore from "../stores/user";
const userStore = useUserStore();
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
