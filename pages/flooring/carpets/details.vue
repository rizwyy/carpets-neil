<script setup>
import CustomBTN from "./../../../components/MOBILE/CustomBTN.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const route = useRoute();
// COOKIES
import { useCookie } from "#app";

import CategoryDetails from "./../../../components/MOBILE/FLOORING/CARPETS/CarpetCategoryDetails.vue";
import TypeDetails from "./../../../components/MOBILE/FLOORING/CARPETS/CarpetTypeDetails.vue";
import MaterialDetails from "./../../../components/MOBILE/FLOORING/CARPETS/CarpetMaterialDetails.vue";
import ColorDetails from "./../../../components/MOBILE/FLOORING/CARPETS/CarpetColorDetails.vue";
import BudgetDetails from "./../../../components/MOBILE/FLOORING/CARPETS/CarpetBudgetDetails.vue";
import ScrollToTopBTNPC from "~/components/DESKTOP/ScrollToTopBTN-PC.vue";
import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";
import CheckoutFormMOB_CARPETS from "~/components/MOBILE/FLOORING/CheckoutFormMOB_CARPETS.vue";
const userPreference = useCookie("userPreference");
const restrictedAccess = useCookie("restrictedAccess");

import OrderMethodDetails from "./../../../components/MOBILE/FLOORING/CARPETS/CarpetsOrderMethodDetails.vue";
import CarpetsInfoDetails from "./../../../components/MOBILE/FLOORING/CARPETS/CarpetsInfoDetails.vue";
import CarpetsReviewDetails from "./../../../components/MOBILE/FLOORING/CARPETS/CarpetsReviewDetails.vue";

const isCategoryOpted = ref(false);
const category = ref("");

const isMobile = ref(false);
onMounted(() => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>
<template>
  <!-- MOBILE -->
  <section v-if="isMobile" class="min-[990px]:hidden w-max h-max select-none">
    <NavBarMOB />
    <!-- <FloatingBarMOB flooring="CARPETS" link="/" /> -->

    <div
      class="h-max w-screen font-outfit flex flex-col gap-[1vh] flex flex-col gap-[1vh] items-center z-[2]"
    >
      <div
        class="h-max px-[4vw] pt-[1.4vh] pb-[.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <!-- MOBILE -->
        <a
          href="/flooring"
          class="text-[2.4vh] underline underline-offset-[.4vh] text-[#666] flex"
        >
          Carpets >
          {{ userStore.preference.spec_1 }}
        </a>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <CategoryDetails />
      <!-- MOBILE -->
      <TypeDetails />
      <!-- <CustomBTN heading="Custom Carpets" link="/flooring/customize" /> -->
      <MaterialDetails />
      <ColorDetails />
      <BudgetDetails />
      <OrderMethodDetails />
      <CarpetsInfoDetails />
      <CarpetsReviewDetails />
    </div>
    <!-- MOBILE -->
  </section>
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- -------------------------------------------- -->
  <!-- DESKTOP -->
  <section v-else class="max-[990px]:hidden max-w-screen h-max select-none">
    <NavBarPC />
    <div
      class="h-max max-w-[100vw] relative overflow-x-hidden font-outfit flex flex-col gap-[2vh] flex flex-col gap-[6vh] items-center"
    >
      <!--  -->
      <ScrollToTopBTNPC />
      <!--  -->
      <div
        class="test h-max px-[6vw] pt-[4vh] pb-[0vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
      >
        <!-- DESKTOP -->
        <a
          href="/flooring"
          class="text-[2.6vh] underline underline-offset-[.4vh] text-[#666] flex"
        >
          Carpets >
          <!-- DESKTOP -->
          {{ userStore.preference.spec_1 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <CategoryDetails />
      <CustomBTN heading="Custom Carpets" link="/flooring/customize" />
      <TypeDetails />
      <MaterialDetails />
      <ColorDetails />
      <BudgetDetails />

      <!-- DESKTOP -->
    </div>
    <!-- DESKTOP -->
  </section>
</template>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
