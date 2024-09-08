<template>
  <!-- DESKTOP -->
  <transition
    @beforeEnter="handleDetailsDOMEntry('raised_Thickness_Details_PC')"
  >
    <div
      v-show="userStore.preference.spec_1 !== ''"
      class="gymActivitesPC max-[990px]:hidden h-max w-screen px-[6vw]"
    >
      <div
        class="h-max w-full text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div
          class="h-max w-full flex items-center justify-between text-[3.8vh] z-[9]"
        >
          <span
            class="raised_Thickness_Details_PC-HEADING opacity-0 translate-x-[40%] text-detailsContainer_heading_PC"
          >
            Choose Your Thickness
          </span>
          <!-- DESKTOP -->
          <button
            @click="clearAllSelections_spec2()"
            v-show="userStore.preference.spec_2.length"
            class="h-max w-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
          >
            <span class="text-[2.2vh]">Clear All</span>
            <ClearAllIcon />
          </button>
          <!-- DESKTOP -->
        </div>
        <!-- THICKNESS OPTIONS -->
        <div
          v-show="selectedThicknessOptions.length > 0"
          class="h-max w-full flex flex-col gap-[2vh]"
        >
          <div
            v-for="(thickness, index) in selectedThicknessOptions"
            :key="index"
            class="h-max w-full flex justify-between gap-[2vw] z-[9]"
          >
            <!-- THICKNESS OPTION -->
            <div
              :class="[
                'h-[12vh] bg-[#333] overflow-hidden w-full rounded-md text-left leading-[3.4vh] border-[2px] border-[#f1f1f1] flex items-center justify-center text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: userStore.preference.spec_2.includes(thickness) },
              ]"
              @click="toggleSelect(thickness)"
            >
              <div
                v-show="userStore.preference.spec_2.includes(thickness)"
                class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
              >
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
              </div>
              <div
                class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
              ></div>
              <span class="text-[3.4vh]">{{ thickness }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, toRaw } from "vue";
import ClearAllIcon from "./../../public/icons/clearAllIcon.vue";

// PINIA
import useUserStore from "~/stores/user";
const userStore = useUserStore();
const spec_2 = ref("");

const thicknessOptions = {
  "Playfall Protec +": [
    "40mm",
    "45mm",
    "50mm",
    "70mm",
    "75mm",
    "90mm",
    "110mm",
  ],
  "Gym Rubber": ["5mm", "7mm", "10mm", "15mm", "20mm", "30mm", "50mm"],
  "Sports Rubber": ["5mm", "6mm", "7mm", "8mm", "9mm", "10mm", "12mm", "14mm"],
  "Pool Rubber": ["35mm"],
  Others: [], // Holds any category not listed above
};

// Computed property to return the thickness options based on selected category
const selectedThicknessOptions = computed(() => {
  return thicknessOptions[userStore.preference.spec_1] || [];
});

function clearAllSelections_spec2() {
  spec_2.value = "";
  userStore.preference.spec_2 = "";
}

const toggleSelect = (thickness) => {
  if (spec_2.value === thickness) {
    spec_2.value = "";
    userStore.preference.spec_2 = "";
  } else {
    spec_2.value = thickness;
    userStore.preference.spec_2 = toRaw(spec_2.value);
  }
  userStore.updateCart();
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
