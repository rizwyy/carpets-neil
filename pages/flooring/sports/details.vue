<script setup>
import SportsTypesDetails from "../../../components/MOBILE/FLOORING/SPORTS/SportsTypesDetails.vue";
import SportsActivitiesDetails from "~/components/MOBILE/FLOORING/SPORTS/SportsActivityDetails.vue";
import SportsFlooringDetails from "~/components/MOBILE/FLOORING/SPORTS/SportsFlooringDetails.vue";
import SportsColorDetails from "~/components/MOBILE/FLOORING/SPORTS/SportsColorDetails.vue";
import SportsBudgetDetails from "~/components/MOBILE/FLOORING/SPORTS/SportsBudgetDetails.vue";

import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import SportsOrderMethodDetails from "~/components/MOBILE/FLOORING/SPORTS/SportsOrderMethodDetails.vue";
import SportsInfoDetails from "~/components/MOBILE/FLOORING/SPORTS/SportsInfoDetails.vue";
import ReviewCard from "../../../components/MOBILE/FLOORING/DetailsReview.vue";

import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const route = useRoute();
// COOKIES
import { useCookie } from "#app";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";

const userPreference = useCookie("userPreference");
const restrictedAccess = useCookie("restrictedAccess");

const isCategoryOpted = ref(false);
const category = ref("");
function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  restrictedAccess.value = false;
  console.log("COOKIE SET::", toRaw(userPreference.value));
}

onMounted(() => {});
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
          Sports Flooring >
          <!-- DESKTOP -->
          {{ userStore.preference.spec_2 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <SportsTypesDetails />
      <SportsFlooringDetails />
      <SportsColorDetails />
      <SportsBudgetDetails />
      <SportsOrderMethodDetails />
      <SportsInfoDetails />
      <ReviewCard flooring="sports" link="sports" />
    </div>
    <!-- DESKTOP -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->

  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- MOBILE -->
  <section class="min-[990px]:hidden w-max h-max">
    <NavBarMOB />
    <FloatingBarMOB flooring="SPORTS" link="/" />

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
            Sports Flooring
          </a>
          <CurrencyDetails />
        </div>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <SportsTypesDetails />
      <SportsFlooringDetails />
      <SportsColorDetails />
      <SportsBudgetDetails />
      <SportsOrderMethodDetails />
      <SportsInfoDetails />
      <ReviewCard flooring="sports" link="sports" />
    </div>
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
