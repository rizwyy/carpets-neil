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
const userPreference = useCookie("userPreference");
const restrictedAccess = useCookie("restrictedAccess");

const isCategoryOpted = ref(false);
const category = ref("");
function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  restrictedAccess.value = false;
  console.log("COOKIE SET::", toRaw(userPreference.value));
}

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
    <div
      class="h-max w-screen font-outfit flex flex-col gap-[2vh] flex flex-col gap-[1vh] items-center z-[2]"
    >
      <div
        class="h-max px-[4vw] pt-[6vh] pb-[3.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh] ]"
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
      <CustomBTN heading="Custom Carpets" link="/flooring/customize" />
      <MaterialDetails />
      <ColorDetails />
      <BudgetDetails />
      <!-- <PileDetails /> -->
      <a href="/flooring/carpets/catalog">
        <transition
          @beforeEnter="bringOpacity('details_carpets_submit_btn', 'translate')"
        >
          <button
            @click="setUserPreferenceCookie"
            v-show="
              userStore.preference.spec_2.length > 0 &&
              userStore.preference.color.length > 0 &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.budget !== ''
            "
            class="details_carpets_submit_btn mb-[8vh] mt-[4vh] w-[90vw] rounded-[1.2vh] tracking-[.3vw] text-[2.4vh] font-[500] text-[#f1f1f1] bg-gradient-to-br from-[#111] to-[#111] shadow-2xl right-[2vw] z-[999] text-white px-[4vw] py-[4.2vh] flex items-center gap-[2vw] justify-center"
          >
            <!-- MOBILE -->
            <span
              class="bg-gradient-to-r from-[#fff7] via-[#E0FFFF] to-[#fff5] bg-clip-text text-transparent bg-300% animate-gradient"
            >
              BROWSE CATALOG</span
            >
            <!-- MOBILE -->
          </button>
        </transition>
      </a>
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
        class="h-max px-[6vw] pt-[4vh] pb-[0vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh]"
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
      <a href="/flooring/carpets/catalog">
        <button
          @click="setUserPreferenceCookie"
          v-show="
            userStore.preference.spec_2.length > 0 &&
            userStore.preference.color.length > 0 &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.budget !== ''
          "
          class="mb-[8vh] mt-[4vh] w-[90vw] rounded-md bg-gradient-to-br from-[#444] via-[#000] to-[#999] to-[90%] right-[2vw] z-[999] text-white px-[4vw] py-[4vh] text-[4vh] hover:from-[#444] hover:to-[#111] ease-in-out flex items-center gap-[2vw] justify-center"
        >
          BROWSE CATALOG
        </button>
      </a>
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

.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 5s ease-in-out infinite;
  -moz-animation: animatedgradient 5s ease-in-out infinite;
  animation: animatedgradient 5s ease-in-out infinite normal;
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
