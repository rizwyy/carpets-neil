<script setup>
import TypeDetails from "./../../../components/MOBILE/FLOORING/TypeDetails.vue";
import ColorDetails from "./../../../components/MOBILE/FLOORING/ColorDetails.vue";
import YarnDetails from "../../../components/MOBILE/FLOORING/YarnDetails.vue";
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
</script>
<template>
  <Mobile>
    <NavBarMOB />
    <div
      class="h-max w-screen font-outfit flex flex-col gap-[2vh] flex flex-col gap-[1vh] items-center"
    >
      <div
        class="h-max px-[4vw] pt-[6vh] pb-[4vh] w-full justify-start text-[3.8vh]"
      >
        Specify Your Needs
      </div>
      <TypeDetails />
      <ColorDetails />
      <PileDetails />
      <YarnDetails />

      <button
        @click="setUserPreferenceCookie"
        v-show="
          userStore.preference.type.length > 0 &&
          userStore.preference.color.length > 0 &&
          userStore.preference.yarn.length > 0
        "
        class="mb-[8vh] mt-[4vh] w-[90vw] rounded-md bg-blue-600 right-[2vw] z-[999] text-white px-[4vw] py-[4vh] flex items-center gap-[2vw] justify-center"
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
