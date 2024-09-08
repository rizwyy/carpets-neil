<template>
  <!-- DESKTOP -->
  <transition
    @beforeEnter="handleDetailsDOMEntry('raised_Thickness_Details_PC')"
  >
    <div class="gymActivitesPC max-[990px]:hidden h-max w-screen px-[6vw]">
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
            @click="clearAllSelections_spec1()"
            v-show="userStore.preference.spec_1.length"
            class="h-max w-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
          >
            <span class="text-[2.2vh]">Clear All</span>
            <ClearAllIcon />
          </button>
          <!-- DESKTOP -->
        </div>
        <!-- THICKNESS OPTIONS -->
        <div class="h-max w-full flex flex-col gap-[2vh]">
          <div
            v-for="(thickness, index) in thicknessOptions"
            :key="index"
            class="h-max w-full flex justify-between gap-[2vw] z-[9]"
          >
            <!-- THICKNESS OPTION -->
            <div
              :class="[
                'h-[12vh] bg-[#333] overflow-hidden w-full rounded-full text-left leading-[3.4vh] border-[2px] border-[#f1f1f1] flex items-center justify-center text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: userStore.preference.spec_1.includes(thickness) },
              ]"
              @click="toggleSelect(thickness)"
            >
              <div
                v-show="userStore.preference.spec_1.includes(thickness)"
                class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
              >
                <span
                  class="absolute top-[1vh] right-[2vw] bg-white text-gray-500 px-2 py-[.2vh] text-[1.8vh] rounded-md"
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
const { existingUser } = defineProps(["existingUser"]);

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
  border-radius: 40px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
