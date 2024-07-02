<script setup>
import TypeDetails from "./../../../components/MOBILE/FLOORING/TypeDetails.vue";
import ColorDetails from "./../../../components/MOBILE/FLOORING/ColorDetails.vue";
import MaterialDetails from "../../../components/MOBILE/FLOORING/MaterialDetails.vue";
import BudgetDetails from "../../../components/MOBILE/FLOORING/BudgetDetails.vue";
import PileDetails from "~/components/MOBILE/FLOORING/PileDetails.vue";

import Mobile from "./../../../layouts/Mobile.vue";
import Desktop from "./../../../layouts/Desktop.vue";
import NavBarMOB from "~/components/MOBILE/NavBarMOB.vue";

import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const route = useRoute();
// COOKIES
import { useCookie } from "#app";
const userPreference = useCookie("userPreference");

function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  console.log("COOKIE SET::", toRaw(userPreference.value));
  navigateTo(`catalog`);
}

onMounted(() => {
  userStore.preference.category = userPreference.value.category;
  if (userStore.preference.category === "") {
    console.log("CATEGORY NOT DEFINED");
  } else {
    console.log(`CATEGORY RETRIEVED:${userStore.preference.category} `);
  }
});
</script>
<template>
  <Mobile>
    <NavBarMOB />
    <div
      class="h-max w-screen font-outfit flex flex-col gap-[2vh] flex flex-col gap-[1vh] items-center"
    >
      <div
        class="h-max px-[4vw] pt-[6vh] pb-[3.4vh] w-full flex flex-col items-start text-[3.8vh] gap-[2vh] ]"
      >
        <a
          href="/flooring/carpets/details"
          class="text-[2.4vh] underline underline-offset-[.4vh] text-[#666] flex"
        >
          Carpets >
          {{ userPreference.category }}
        </a>
        <span class="text-[3.8vh]"> Specify Your Needs </span>
      </div>
      <TypeDetails />
      <ColorDetails />
      <BudgetDetails />
      <!-- <PileDetails /> -->
      <MaterialDetails />

      <button
        @click="setUserPreferenceCookie"
        v-show="
          userStore.preference.type.length > 0 &&
          userStore.preference.color.length > 0 &&
          userStore.preference.material.length > 0
        "
        class="mb-[8vh] mt-[4vh] w-[90vw] rounded-md bg-slate-600 right-[2vw] z-[999] text-white px-[4vw] py-[4vh] flex items-center gap-[2vw] justify-center"
      >
        BROWSE CATALOG<svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.525 18.025q-.5.325-1.012.038T11 17.175V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.475.3.475.85t-.475.85z"
          />
        </svg>
      </button>
    </div>
  </Mobile>
</template>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
