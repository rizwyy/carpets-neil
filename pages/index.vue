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
      class="font-outfit-400 h-max w-screen bg-[#f2f3f4] flex flex-col justify-center items-center z-[99] pb-[2vh] gap-[1vh] pt-[3.2vh] font-[500] text-[2.4vh]"
    >
      <span
        class="w-[94%] whitespace-no-wrap text-center font-arimo text-[#222]"
        >FIND THE RIGHT DECOR, RIGHT AWAY</span
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
.font-arimo {
  font-family: "Arimo", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
