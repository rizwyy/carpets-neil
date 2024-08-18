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

  if (toRaw(userPreference.value)) {
    userStore.preference = toRaw(userPreference.value);
  }
});
</script>
<template>
  <!-- MOBILE -->
  <section v-if="isMobile" class="min-[990px]:hidden w-max h-max select-none">
    <NavBarMOB />
    <FloatingBarMOB flooring="CARPETS" link="/" />

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
      <!-- <CustomBTN heading="Custom Carpets" link="/flooring/customize" /> -->
      <MaterialDetails />
      <ColorDetails />
      <BudgetDetails />
      <div class="h-max w-full flex flex-col gap-[0vh] mt-[2vh]">
        <span
          v-show="
            userStore.preference.flooring === 'Carpets' &&
            userStore.preference.spec_1 !== '' &&
            userStore.preference.spec_2 !== '' &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.color.length > 0 &&
            userStore.preference.budget !== ''
          "
          class="w-[75%] px-[4vw] text-[3.2vh] leading-[3.8vh]"
          >Select Your Preferred Ordering Method:</span
        >
        <div
          class="h-max w-full flex items-center justify-center gap-[4vw] px-[2vw] mb-[12vh] mt-[4vh]"
        >
          <a
            @click="setUserPreferenceCookie('whatsapp')"
            href="/flooring/carpets/checkout"
            v-show="
              userStore.preference.flooring === 'Carpets' &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.budget !== ''
            "
            class="w-[44vw] rounded-md tracking-[.3vw] text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
          >
            <!-- MOBILE -->
            <span
              class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#E0FFFF] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_1 uppercase tracking-[.4vw]"
            >
              WhatsApp</span
            >

            <!-- MOBILE -->
          </a>
          <a
            @click="setUserPreferenceCookie('email')"
            href="/flooring/carpets/checkout"
            v-show="
              userStore.preference.flooring === 'Carpets' &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.budget !== ''
            "
            class="w-[42vw] rounded-md tracking-[.3vw] text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
          >
            <!-- MOBILE -->
            <span
              class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#E0FFFF] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_2 uppercase tracking-[.4vw]"
            >
              Mail</span
            >

            <!-- MOBILE -->
          </a>
        </div>
      </div>
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

      <div class="h-max w-full flex flex-col gap-[0vh] mt-[2vh]">
        <span
          v-show="
            userStore.preference.flooring === 'carpets' &&
            userStore.preference.spec_1 !== '' &&
            userStore.preference.spec_2 !== '' &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.color.length > 0 &&
            userStore.preference.budget !== ''
          "
          class="w-[75%] px-[4vw] text-[3.2vh] leading-[3.8vh]"
          >Select Your Preferred Ordering Method:</span
        >
        <div
          class="h-max w-full flex items-center justify-center gap-[4vw] px-[2vw] mb-[12vh] mt-[4vh]"
        >
          <a
            @click="setUserPreferenceCookie('whatsapp')"
            href="/flooring/carpets/checkout"
            v-show="
              userStore.preference.flooring === 'carpets' &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.budget !== ''
            "
            class="w-[44vw] rounded-md tracking-[.3vw] text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
          >
            <!-- MOBILE -->
            <span
              class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#E0FFFF] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_1 uppercase tracking-[.4vw]"
            >
              WhatsApp</span
            >

            <!-- MOBILE -->
          </a>
          <a
            @click="setUserPreferenceCookie('email')"
            href="/flooring/carpets/checkout"
            v-show="
              userStore.preference.flooring === 'carpets' &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.budget !== ''
            "
            class="w-[42vw] rounded-md tracking-[.3vw] text-[2.4vh] font-[500] bg-[#111] border-[2px] border-[#333] z-[999] text-white px-[2vw] flex items-center gap-[2vw] justify-between"
          >
            <!-- MOBILE -->
            <span
              class="bg-gradient-to-r flex-[85] py-[3.2vh] from-[#fff7] via-[#E0FFFF] shadow-2xl to-[#fff5] bg-clip-text text-transparent bg-300% text-center px-[4vw] animate-gradient_2 uppercase tracking-[.4vw]"
            >
              Mail</span
            >

            <!-- MOBILE -->
          </a>
        </div>
      </div>
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
