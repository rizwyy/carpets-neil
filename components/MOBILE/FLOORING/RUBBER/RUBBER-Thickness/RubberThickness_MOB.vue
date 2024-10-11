<template>
  <transition
    @beforeEnter="handleDetailsDOMEntry('raised_Thickness_Details_Mob')"
  >
    <!-- MOBILE -->
    <div
      id="rubberThicknessContainerMOB"
      v-show="userStore.preference.spec_1 !== ''"
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[96vw] text-center py-[2vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div
          class="h-max w-full flex items-center justify-between text-[3.2vh] tracking-[-.07vw] z-[9]"
        >
          <span
            class="text-left text-balance raised_Thickness_Details_Mob-HEADING opacity-0 translate-x-[40%]"
          >
            Choose Your Thickness
          </span>
          <button
            @click="clearAllSelections_spec2()"
            v-show="userStore.preference.spec_2 !== ''"
            class="h-max bg-white text-gray-500 text-detailsContainer_clearAllText_MOB px-[2vw] py-[.8vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
          >
            Clear All
            <ClearAllIcon />
          </button>
        </div>

        <!-- THICKNESS OPTIONS -->
        <div
          v-show="selectedThicknessOptions.length > 0"
          class="h-max w-[90vw] grid grid-cols-3 gap-[.4rem] py-[2rem]"
        >
          <div
            v-for="(thickness, index) in selectedThicknessOptions"
            :key="index"
            class="h-max w-full flex justify-between gap-[2vw] z-[9]"
          >
            <!-- MOBILE -->
            <div
              :class="[
                'h-[5.4rem] rounded-lg w-full overflow-hidden text-left leading-[1.7rem] border-[2px] border-[#f1f1f1] flex items-center justify-center text-[#f1f1f1] px-[1.6vw] py-[.4rem] text-[1.2rem] relative cursor-pointer',
                { selected: userStore.preference.spec_2.includes(thickness) },
              ]"
              @click="toggleSelect(thickness)"
            >
              <div
                v-show="userStore.preference.spec_2.includes(thickness)"
                class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
              >
                <span
                  class="absolute top-[1vh] right-[4vw] bg-white text-gray-500 px-[1vw] py-[.2vh] text-[1.8vh] rounded-md"
                >
                  Selected
                </span>
              </div>
              <div
                class="h-full w-full bg-[#222] bg-opacity-[.9] from-[60%] absolute bottom-0 left-0 z-[-1]"
              ></div>
              <span>{{ thickness }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const { existingUser } = defineProps(["existingUser"]);
import ClearAllIcon from "./../../public/icons/clearAllIcon.vue";

// PINIA
import useUserStore from "~/stores/user";
const userStore = useUserStore();
const customActivity = ref("");
const spec_2 = ref("");
const isCustomActivityOpted = ref(false);

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
  Others: [], // This will hold anything other than the first four categories
};

// Populate the "Others" category with anything not part of the first four categories
thicknessOptions["Others"] = Object.keys(thicknessOptions).filter(
  (category) =>
    ![
      "Playfall Protec +",
      "Gym Rubber",
      "Sports Rubber",
      "Pool Rubber",
    ].includes(category) && category.length > 3
);

const selectedCategory = ref(""); // To hold the selected category

// Computed property for displaying thickness options
const selectedThicknessOptions = computed(() => {
  // If the selected category is one of the first four, return its specific thicknesses
  if (
    [
      "Playfall Protec +",
      "Gym Rubber",
      "Sports Rubber",
      "Pool Rubber",
    ].includes(userStore.preference.spec_1)
  ) {
    return thicknessOptions[userStore.preference.spec_1] || [];
  }
  // If the category is anything else, return all thickness options
  return [
    ...new Set([
      ...thicknessOptions["Playfall Protec +"],
      ...thicknessOptions["Gym Rubber"],
      ...thicknessOptions["Sports Rubber"],
      ...thicknessOptions["Pool Rubber"],
    ]),
  ];
});

function clearAllSelections_spec2() {
  spec_2.value = "";
  userStore.preference.spec_2 = "";
  isCustomActivityOpted.value = false;
  customActivity.value = "";
}

const toggleSelect = (type) => {
  isCustomActivityOpted.value = false;
  if (spec_2.value === type) {
    spec_2.value = "";
    userStore.preference.spec_2 = "";
  } else {
    scrollToEl("rubberColorsContainerMOB");
    spec_2.value = type;
    userStore.preference.spec_2 = toRaw(spec_2.value);
  }
  userStore.updateCart();
};
</script>

<style scoped>
.selected {
  border-radius: 5px;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
