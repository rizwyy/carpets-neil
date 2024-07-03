<template>
  <Desktop>
    <NavBarPC />
    <HeroLayoutPC />
  </Desktop>
  <!-- MOBILE -->
  <Mobile>
    <NavBarMOB />
    <!-- TYPO -->
    <div
      class="font-outfit-400 h-max w-screen bg-[#f1f1f1] flex flex-col justify-center items-center z-[99] py-[2vh] gap-[2vh] font-[400] tracking-[.4vw] text-[2vh]"
    >
      <span class="w-[94%] whitespace-no-wrap text-center"
        >DREAM IT, STYLE IT & FIND IT AT WOLTIZ</span
      >
    </div>
    <!-- SEARCH BAR COMP -->
    <div class="h-max w-screen flex justify-center pt-[1.8vh] pb-[2.8vh]">
      <SearchBarMOB />
    </div>
    <HeroLayoutMOB />
  </Mobile>
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
</style>
