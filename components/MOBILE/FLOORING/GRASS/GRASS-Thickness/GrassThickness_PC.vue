<template>
  <!-- DESKTOP -->

  <div class="gymActivitesPC max-[990px]:hidden h-max w-screen px-[6vw]">
    <div
      id="grassThicknessContainerPC"
      class="h-max w-full text-center pt-[2rem] pb-[2.4rem] flex flex-col gap-[2rem] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <div class="h-max w-full flex items-center justify-between z-[9]">
        <span class="text-[2.2rem]"> Choose Your Thickness </span>
        <!-- DESKTOP -->
        <button
          @click="clearAllSelections_spec1()"
          v-show="userStore.preference.spec_1.length"
          class="h-max w-max bg-white text-gray-500 px-[2vw] py-[.6rem] text-[1.4rem] rounded-md flex gap-[.3vw] items-center"
        >
          <span class="text-[2.2vh]">Clear All</span>
          <Icon icon="material-symbols:cancel-outline-rounded" />
        </button>
        <!-- DESKTOP -->
      </div>
      <!-- THICKNESS OPTIONS -->
      <div class="h-max w-full grid grid-cols-4 gap-[1rem]">
        <div
          v-for="(thickness, index) in thicknessOptions"
          :key="index"
          class="h-max w-full flex justify-between gap-[2vw] z-[9]"
        >
          <!-- THICKNESS OPTION -->
          <div
            :class="[
              'h-[6.8rem] bg-[#333] overflow-hidden w-full rounded-lg text-left leading-[3.4vh] border-[2px] border-[#f1f1f1] flex items-center justify-center text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_1.includes(thickness) },
            ]"
            @click="toggleSelect(thickness)"
          >
            <div
              v-show="userStore.preference.spec_1.includes(thickness)"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <span
                class="absolute top-[.4rem] right-[.4vw] bg-white text-gray-500 px-2 py-[.1rem] text-[.9rem] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <span class="text-[1.8rem]">{{ thickness }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { existingUser } = defineProps(["existingUser"]);

import { Icon } from "@iconify/vue/dist/iconify.js";
// PINIA
import useUserStore from "~/stores/user";
const userStore = useUserStore();
const customActivity = ref("");
const spec_1 = ref("");
const isCustomActivityOpted = ref(false);

// Define thickness options
const thicknessOptions = [
  "12mm",
  "15mm",
  "20mm",
  "30mm",
  "35mm",
  "40mm",
  "45mm",
  "50mm",
];

function clearAllSelections_spec1() {
  spec_1.value = "";
  userStore.preference.spec_1 = "";
  isCustomActivityOpted.value = false;
  customActivity.value = "";
}

const toggleSelect = (type) => {
  isCustomActivityOpted.value = false;
  if (spec_1.value === type) {
    spec_1.value = "";
    userStore.preference.spec_1 = "";
  } else {
    scrollToEl("grassColorsContainerPC");

    spec_1.value = type;
    userStore.preference.spec_1 = toRaw(spec_1.value);
    userStore.preference.flooring = "grass";
  }
  userStore.updateCart();
};
</script>

<style scoped>
.selected {
  border-radius: 8px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
