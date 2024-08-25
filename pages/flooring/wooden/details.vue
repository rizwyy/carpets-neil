<script setup>
import WoodenCategoryDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenCategoryDetails.vue";
import WoodenTypeDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenTypeDetails.vue";
import WoodenFinishDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenFinishDetails.vue";
import WoodenColorDetails from "~/components/MOBILE/FLOORING/WOODEN/WoodenColorDetails.vue";
import WoodenDesignDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenDesignDetails.vue";
import WoodenBudgetDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenBudgetDetails.vue";
import CustomBTN from "./../../../components/MOBILE/CustomBTN.vue";
import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

import OrderMethodDetails from "./../../../components/MOBILE/FLOORING/WOODEN/WoodenOrderMethodDetails.vue";
import WoodenInfoDetails from "./../../../components/MOBILE/FLOORING/WOODEN/WoodenInfoDetails.vue";
import ReviewCard from "../../../components/MOBILE/FLOORING/DetailsReview.vue";

import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const route = useRoute();
// COOKIES
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import ScrollToTopBTNPC from "~/components/DESKTOP/ScrollToTopBTN-PC.vue";
</script>
<template>
  <!-- DESKTOP -->
  <section class="max-[990px]:hidden max-w-screen h-max">
    <NavBarPC />
    <div
      class="h-max max-w-[100vw] overflow-x-hidden font-outfit flex flex-col gap-[2vh] flex flex-col gap-[6vh] items-center"
    >
      <div
        class="h-max px-[6vw] pt-[4vh] pb-[0vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <!-- DESKTOP -->
        <a
          href="/flooring"
          class="text-[2.6vh] underline underline-offset-[.4vh] text-[#666] flex"
        >
          Wooden Flooring >
          <!-- DESKTOP -->
          {{ userStore.preference.spec_1 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <ScrollToTopBTNPC />
      <WoodenCategoryDetails />
      <WoodenTypeDetails />
      <WoodenDesignDetails />
      <WoodenColorDetails />
      <WoodenFinishDetails />
      <WoodenBudgetDetails />
      <OrderMethodDetails />
      <WoodenInfoDetails />
      <ReviewCard flooring="Wooden" link="wooden" />
    </div>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->

  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- MOBILE -->
  <section class="min-[990px]:hidden w-max h-max select-none">
    <NavBarMOB />
    <FloatingBarMOB flooring="WOODEN" link="/" />
    <div
      class="h-max w-screen font-outfit flex flex-col gap-[2vh] flex flex-col gap-[1vh] items-center z-[2]"
    >
      <div
        class="h-max px-[4vw] pt-[6vh] pb-[3.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh] ]"
      >
        <!-- MOBILE -->
        <div class="h-max w-full flex justify-between">
          <a
            href="/flooring"
            class="text-[2.4vh] underline underline-offset-[.8vh] text-[#666] flex"
          >
            Wooden Flooring
          </a>
          <CurrencyDetails />
        </div>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <WoodenCategoryDetails />
      <WoodenTypeDetails />
      <WoodenDesignDetails />
      <WoodenColorDetails />
      <WoodenFinishDetails />
      <WoodenBudgetDetails />
      <OrderMethodDetails />
      <WoodenInfoDetails />
      <ReviewCard flooring="Wooden" link="wooden" />
    </div>
    <!-- MOBILE -->
  </section>
</template>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 4s ease-in-out infinite;
  -moz-animation: animatedgradient 4s ease-in-out infinite;
  animation: animatedgradient 4s ease-in-out infinite normal;
}

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
