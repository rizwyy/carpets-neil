<script setup>
import GymApplicationDetails from "../../../components/MOBILE/FLOORING/GYM/GymApplicationDetails.vue";
import GymActivitiesDetails from "../../../components/MOBILE/FLOORING/GYM/GymActivitiesDetails.vue";
import GymFinishDetails from "../../../components/MOBILE/FLOORING/GYM/GymFinishDetails.vue";

import GymDesignDetails from "~/components/MOBILE/FLOORING/GYM/GymFlooringDetails.vue";
import GymBudgetDetails from "~/components/MOBILE/FLOORING/GYM/GymBudgetDetails.vue";

import FloatingBarMOB from "~/components/MOBILE/FLOORING/FloatingBarMOB.vue";

import useUserStore from "~/stores/user";
const userStore = useUserStore();

const route = useRoute();
// COOKIES
import { useCookie } from "#app";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";
import NavBarPC from "~/components/DESKTOP/NavBarPC.vue";
import GymFlooringDetails from "~/components/MOBILE/FLOORING/GYM/GymFlooringDetails.vue";
import GymThicknessDetails from "~/components/MOBILE/FLOORING/GYM/GymFinishDetails.vue";
import GymColorDetails from "~/components/MOBILE/FLOORING/GYM/GymColorDetails.vue";
const userPreference = useCookie("userPreference");
const restrictedAccess = useCookie("restrictedAccess");

const isCategoryOpted = ref(false);
const category = ref("");
const isFormVisible = ref(false);
function setUserPreferenceCookie(orderMethod) {
  if (orderMethod === "email") {
    userStore.preference.orderMethod = "email";
  }
  if (orderMethod === "whatsapp") {
    userStore.preference.orderMethod = "whatsapp";
  }
  userPreference.value = userStore.preference;
  restrictedAccess.value = false;
  console.log("COOKIE SET::", toRaw(userPreference.value));
  return true;
}
function ToggleForm() {
  isFormVisible.value = true;
  // setUserPreferenceCookie();
  bringForm();
}
onMounted(() => {
  if (toRaw(userPreference.value)) {
    userStore.preference = toRaw(userPreference.value);
  }
});
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
          Gym Flooring >
          <!-- DESKTOP -->
          {{ userStore.preference.spec_2 }}
        </a>
        <span class="text-[5.4vh]"> Specify Your Needs </span>
      </div>
      <!-- DESKTOP -->
      <GymApplicationDetails />
      <GymActivitiesDetails />
      <GymFlooringDetails />
      <!-- <GymFinishDetails /> -->
      <GymColorDetails />
      <GymBudgetDetails />

      <!-- DESKTOP -->
      <a href="/flooring/gym/catalog">
        <button
          @click="setUserPreferenceCookie"
          v-show="
            userStore.preference.flooring === 'gym' &&
            userStore.preference.spec_1 !== '' &&
            userStore.preference.spec_2 !== '' &&
            userStore.preference.spec_3 !== '' &&
            userStore.preference.color.length > 0 &&
            userStore.preference.budget !== ''
          "
          class="mb-[8vh] mt-[4vh] w-[90vw] rounded-md bg-[#111] z-[999] text-white px-[4vw] py-[4vh] text-[4vh] ease-in-out flex items-center gap-[2vw] justify-center"
        >
          <span
            class="bg-gradient-to-r from-[#fff7] via-[#E0FFFF] to-[#fff5] bg-clip-text tracking-[.2vw] text-transparent bg-300% animate-gradient hover:bg-[#E0FFFF] transition-all duration-[500ms] ease-in-out"
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
  <section class="min-[990px]:hidden w-max h-max">
    <NavBarMOB />
    <FloatingBarMOB flooring="GYM FLOORS" link="/" />
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
          Gym Flooring >
          {{ userStore.preference.spec_2 }}
        </a>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <BannerYouWin />
      <GymApplicationDetails />
      <GymActivitiesDetails />
      <GymFlooringDetails />
      <!-- <GymFinishDetails /> -->
      <GymColorDetails />
      <GymBudgetDetails />
      <div class="h-max w-full flex flex-col gap-[0vh] mt-[2vh]">
        <span
          v-show="
            userStore.preference.flooring === 'gym' &&
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
            href="/flooring/gym/checkout"
            v-show="
              userStore.preference.flooring === 'gym' &&
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
            href="/flooring/gym/checkout"
            v-show="
              userStore.preference.flooring === 'gym' &&
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
</template>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.animate-gradient_1 {
  background-size: 300%;
  -webkit-animation: animatedgradient 4s ease-in-out infinite;
  -moz-animation: animatedgradient 4s ease-in-out infinite;
  animation: animatedgradient 4s ease-in-out infinite normal;
}
.animate-gradient_2 {
  background-size: 300%;
  animation-delay: 2.2;
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
