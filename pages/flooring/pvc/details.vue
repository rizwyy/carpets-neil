<script setup>
import PvcCategoryDetails from "../../../components/MOBILE/FLOORING/PVC/PvcCategoryDetails.vue";
import PvcTypeDetails from "../../../components/MOBILE/FLOORING/PVC/PvcTypeDetails.vue";
import PvcFinishDetails from "../../../components/MOBILE/FLOORING/PVC/PvcFinishDetails.vue";
import PvcColorDetails from "./../../../components/MOBILE/FLOORING/PVC/PvcColorDetails.vue";
import PvcDesignDetails from "../../../components/MOBILE/FLOORING/PVC/PvcDesignDetails.vue";
import PvcBudgetDetails from "../../../components/MOBILE/FLOORING/PVC/PvcBudgetDetails.vue";

import CurrencyDetails from "~/components/MOBILE/FLOORING/CountryDetails.vue";

import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import PvcOrderMethodDetails from "./../../../components/MOBILE/FLOORING/PVC/PvcOrderMethodDetails.vue";
import PvcInfoDetails from "./../../../components/MOBILE/FLOORING/PVC/PvcInfoDetails.vue";
import PvcReviewDetails from "./../../../components/MOBILE/FLOORING/PVC/PvcReviewDetails.vue";

import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const route = useRoute();
// COOKIES
import { useCookie } from "#app";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import CustomBTN from "~/components/MOBILE/CustomBTN.vue";
import ScrollToTopBTNPC from "~/components/DESKTOP/ScrollToTopBTN-PC.vue";
const userPreference = useCookie("userPreference");
const restrictedAccess = useCookie("restrictedAccess");

const isCategoryOpted = ref(false);
const category = ref("");
function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  restrictedAccess.value = false;
  console.log("COOKIE SET::", toRaw(userPreference.value));
}

onMounted(() => {
  handleDOMEntry("detail_pvc_mob_text_item");
});
</script>
<template>
  <!-- DESKTOP -->
  <section class="max-[990px]:hidden max-w-screen h-max select-none">
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
          class="detail_pvc_mob_text_item text-[2.6vh] underline underline-offset-[.8vh] text-[#666] flex"
        >
          PVC Flooring
          {{ userStore.preference.category }}
        </a>
        <span class="detail_pvc_mob_text_item text-[5.4vh]">
          Specify Your Needs
        </span>
      </div>
      <ScrollToTopBTNPC />

      <!-- DESKTOP -->
      <PvcCategoryDetails />
      <CustomBTN heading="Customized Vinyl's" link="/flooring/customize" />

      <PvcTypeDetails />
      <PvcDesignDetails />
      <PvcColorDetails />
      <PvcFinishDetails />
      <PvcBudgetDetails />

      <PvcOrderMethodDetails />
      <PvcInfoDetails />
      <PvcReviewDetails />
      <!-- DESKTOP -->
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
    <FloatingBarMOB flooring="VINYL" link="/" />

    <div
      class="h-max w-screen font-outfit flex flex-col flex flex-col gap-[1vh] items-center z-[2]"
    >
      <div
        class="h-max px-[4vw] pt-[6vh] pb-[3.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <div class="h-max w-full flex justify-between">
          <a
            href="/flooring"
            class="text-[2.4vh] underline underline-offset-[.4vh] text-[#666] flex"
          >
            Carpet Flooring >
            {{ userStore.preference.spec_2 }}
          </a>
          <CurrencyDetails />
        </div>
        <span class="detail_pvc_mob_text_item opacity-[0] text-[3.8vh]">
          Specify Your Needs
        </span>
      </div>
      <BannerYouWin />
      <!-- MOBILE -->
      <PvcCategoryDetails />
      <PvcTypeDetails />

      <PvcDesignDetails />
      <PvcColorDetails />
      <PvcFinishDetails />
      <PvcBudgetDetails />
      <PvcOrderMethodDetails />
      <PvcInfoDetails />
      <PvcReviewDetails />
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
