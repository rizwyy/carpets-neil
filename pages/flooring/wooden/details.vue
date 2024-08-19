<script setup>
import WoodenCategoryDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenCategoryDetails.vue";
import WoodenTypeDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenTypeDetails.vue";
import WoodenFinishDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenFinishDetails.vue";
import WoodenColorDetails from "~/components/MOBILE/FLOORING/WOODEN/WoodenColorDetails.vue";
import WoodenDesignDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenDesignDetails.vue";
import WoodenBudgetDetails from "../../../components/MOBILE/FLOORING/WOODEN/WoodenBudgetDetails.vue";
import CustomBTN from "./../../../components/MOBILE/CustomBTN.vue";
import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";

import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const route = useRoute();
// COOKIES
import { useCookie } from "#app";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
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
          Wooden Flooring >
          <!-- DESKTOP -->
          {{ userStore.preference.spec_1 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <ScrollToTopBTNPC />
      <WoodenCategoryDetails />
      <CustomBTN heading="Wooden Flooring" link="/flooring/customize" />
      <WoodenTypeDetails />
      <WoodenDesignDetails />
      <WoodenColorDetails />
      <WoodenFinishDetails />
      <WoodenBudgetDetails />

      <!-- DESKTOP -->
      <a href="/flooring/wooden/catalog">
        <button
          @click="setUserPreferenceCookie"
          v-show="
            userStore.preference.spec_1.length > 0 &&
            userStore.preference.spec_2.length > 0 &&
            userStore.preference.spec_3.length > 0 &&
            userStore.preference.color.length > 0 &&
            userStore.preference.spec_4 !== '' &&
            userStore.preference.budget !== ''
          "
          class="mb-[8vh] mt-[4vh] w-[90vw] rounded-md bg-[#111] z-[999] text-white px-[4vw] py-[4vh] text-[4vh] hover:from-[#444] hover:to-[#111] ease-in-out flex items-center gap-[2vw] justify-center"
        >
          <span
            class="bg-gradient-to-r from-[#fff7] transition-all duration-[500ms] via-[#E0FFFF] ease-in-out to-[#fff5] hover:bg-[#E0FFFF] bg-clip-text tracking-[.2vw] text-transparent bg-300% animate-gradient"
          >
            BROWSE CATALOG</span
          >
        </button>
      </a>
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
    <FloatingBarMOB flooring="WOODEN" link="/" />
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
          Wooden Flooring >
          {{ userStore.preference.spec_1 }}
        </a>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <WoodenCategoryDetails />
      <WoodenTypeDetails />
      <WoodenDesignDetails />
      <WoodenColorDetails />
      <WoodenFinishDetails />
      <WoodenBudgetDetails />
      <div class="h-max w-full flex flex-col gap-[0vh] mt-[2vh]">
        <span
          v-show="
            userStore.preference.flooring === 'Wooden' &&
            userStore.preference.spec_1 !== '' &&
            userStore.preference.spec_2 !== '' &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.color.length > 0 &&
            userStore.preference.spec_4 !== '' &&
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
            href="/flooring/wooden/checkout"
            v-show="
              userStore.preference.flooring === 'Wooden' &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.spec_4 !== '' &&
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
            href="/flooring/wooden/checkout"
            v-show="
              userStore.preference.flooring === 'Wooden' &&
              userStore.preference.spec_1 !== '' &&
              userStore.preference.spec_2 !== '' &&
              userStore.preference.spec_3 !== '' &&
              userStore.preference.color.length > 0 &&
              userStore.preference.spec_4 !== '' &&
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
