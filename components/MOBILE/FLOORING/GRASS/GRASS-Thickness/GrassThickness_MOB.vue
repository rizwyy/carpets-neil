<template>
  <!-- MOBILE -->
  <div
    class="min-[990px]:hidden h-max w-screen flex justify-center pb-[5.2rem]"
  >
    <div
      class="h-max w-[96vw] text-center py-[1rem] flex flex-col gap-[2rem] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <div
        class="h-max w-full flex items-center justify-between text-[1.6rem] tracking-[-.05vw] z-[9]"
      >
        <span class="text-left text-balance"> Choose Your Thickness </span>
        <button
          @click="clearAllSelections_spec1()"
          v-show="userStore.preference.spec_1 !== ''"
          class="h-max bg-white text-gray-500 text-detailsContainer_clearAllText_MOB px-[2vw] py-[.4rem] text-[.8rem] rounded-md flex gap-[1vw] items-center"
        >
          <!-- MOBILE -->
          Clear All<Icon icon="material-symbols:cancel-outline-rounded" />
        </button>
      </div>

      <!--THICKNESS OPTIONS IN FLEX-COL WITH GAP-->
      <div class="grid grid-cols-2 gap-[.8rem]">
        <!-- Iterate over thickness options -->
        <div
          v-for="thickness in thicknessOptions"
          :key="thickness"
          :class="[
            'h-[5.2rem] overflow-hidden bg-[#222] bg-opacity-[.7] backdrop-blue-[9px] rounded-md text-left leading-[1.6rem] border-[2px] border-[#f1f1f1] flex items-center justify-center text-[#f1f1f1] px-[1.6vw] py-[.4rem] text-[4.6vw] relative cursor-pointer',
            { selected: spec_1.includes(thickness) },
          ]"
          @click="toggleSelect(thickness)"
        >
          <div
            v-show="spec_1.includes(thickness)"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.4rem]"
          >
            <span
              class="absolute top-[.4rem] right-[1vw] bg-white text-gray-500 px-[1.2vw] py-[.1rem] text-[.8rem] rounded-md"
            >
              Selected
            </span>
          </div>
          <div
            class="h-full w-full bg-green-600 bg-opacity-[.9] from-[60%] absolute bottom-0 left-0 z-[-1]"
          ></div>

          <span>{{ thickness }}</span>
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
    existingUser ? scrollBy(500) : scrollToBottom();

    spec_1.value = type;
    userStore.preference.spec_1 = toRaw(spec_1.value);
    userStore.preference.flooring = "grass";
  }
  userStore.updateCart();
};
</script>

<style scoped>
.selected {
  border-radius: 8px;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
