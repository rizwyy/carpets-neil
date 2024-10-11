<template>
  <!-- MOBILE SPORTS COLOR DETAILS-->
  <transition @before-enter="handleDetailsDOMEntry('stone_Color_Details_Mob')">
    <div
      id="stoneColorsContainerMOB"
      v-show="
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        (userStore.preference.spec_2 !== 'Porcelain' ||
          userStore.preference.spec_3 !== '') &&
        userStore.preference.spec_4 !== ''
      "
      class="h-max w-screen flex justify-center pb-[5rem]"
    >
      <div
        class="min-[990px]:hidden h-max w-[96vw] container mx-auto py-[2rem] px-[6vw] bg-gradient-to-br from-detailsFrom to-detailsTo bg-opacity-60 rounded-md shadow-lg text-center flex flex-col gap-[1rem]"
      >
        <div
          class="header text-[1.5rem] text-left z-[9] h-max w-full items-center flex justify-between stone_Color_Details_Mob-HEADING opacity-0 translate-x-[40%]"
        >
          Choose Your Color
          <button
            @click="clearColorSelections"
            v-show="
              isMultiColoredOpted || userStore.preference.color.length > 0
            "
            class="h-max bg-white text-gray-500 px-[2vw] py-[.2rem] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
          >
            <!-- MOBILE -->
            Clear All<Icon icon="material-symbols:cancel-outline-rounded" />
          </button>
        </div>
        <div
          v-show="userStore.preference.flooring === 'stone'"
          class="h-max w-full flex flex-col gap-[1rem] relative"
        >
          <div
            v-show="isMultiColoredOpted"
            class="h-full w-full bg-black bg-opacity-[.7] backdrop-blur-[8px] rounded-md absolute top-0 left-0 z-[99] flex items-center justify-center flex-col gap-[2rem]"
          >
            <div
              class="h-max w-full flex-[2.5] flex justify-center items-center gap-[2vw]"
            >
              <span class="text-[#f1f1f1] text-[1.4rem]">Enter Your Color</span>
              <svg
                @click="clearColorSelections"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f1f1f1"
                  d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                />
              </svg>
            </div>
            <div class="h-max w-full flex-[1.2]">
              <input
                class="h-[3rem] w-[80%] px-[4vw] bg-[#fff2] border-[2px] rounded-md text-[#fff]"
                type="text"
                v-model="customColor"
                placeholder="Enter your Color"
              />
            </div>
            <div
              class="h-max w-full flex-[2] gap-[4vw] flex items-start justify-center"
            >
              <transition
                @beforeEnter="
                  bringOpacity('carpet_details_colors_mob_done1_BTN')
                "
                @beforeLeave="
                  removeOpacity('carpet_details_colors_mob_done1_BTN')
                "
              >
                <button
                  v-show="
                    !userStore.preference.color.length > 0 &&
                    customColor.length > 2
                  "
                  @click="toggleSelect(customColor, 'done')"
                  class="carpet_details_colors_mob_done1_BTN text-[1rem] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[.5rem]"
                >
                  Done
                </button>
              </transition>
              <transition
                @beforeEnter="
                  bringOpacity('carpet_details_colors_mob_done_BTN')
                "
                @beforeLeave="
                  removeOpacity('carpet_details_colors_mob_done_BTN')
                "
              >
                <button
                  v-show="userStore.preference.color.length > 0"
                  @click="toggleSelect(customColor, 'done')"
                  class="carpet_details_colors_mob_done_BTN text-[1rem] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[.5rem]"
                >
                  Done
                </button>
              </transition>
              <transition
                @beforeEnter="bringOpacity('carpet_details_colors_mob_add_BTN')"
                @beforeLeave="
                  removeOpacity('carpet_details_colors_mob_add_BTN')
                "
              >
                <button
                  v-show="customColor.length > 2"
                  @click="toggleSelect(customColor, 'addMore')"
                  class="carpet_details_colors_mob_add_BTN text-[1rem] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[.5rem]"
                >
                  Add More +
                </button>
              </transition>
            </div>
          </div>
          <div class="h-max w-full flex flex-col gap-[.5rem]">
            <div class="color-selection flex justify-between gap-[4vw] z-[9]">
              <div
                class="color-box CustomColor h-[5.2rem] stone_Color_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-gradient-to-br from-[#f44369] via-[#f4985a] to-[#b9dfee] rounded-md cursor-pointer relative px-[1.6vw] py-[.2rem] leading-[1.2rem]"
                :class="{ selected: selectedColors.includes('CustomColor') }"
                @click="toggleSelect('CustomColor')"
              >
                <!-- MOBILE -->
                <span v-show="!selectedColors.includes('CustomColor')"
                  >Custom Color</span
                >
                <div v-show="selectedColors.includes('CustomColor')">
                  <span class="h-full w-full text-[1rem]">Add More +</span>
                </div>
              </div>

              <!-- MOBILE -->
              <div
                class="color-box h-[5.2rem] stone_Color_Details_Mob-CONTAINER bg-black overflow-hidden opacity-0 translate-y-[20%] w-full flex items-center justify-center text-[#fff] rounded-md cursor-pointer relative px-[1.6vw] py-[.2rem]"
                :class="{ selected: selectedColors.includes('Black') }"
                @click="toggleSelect('Black')"
              >
                <span
                  class="text-[1rem]"
                  v-show="!userStore.preference.color.includes('Black')"
                  >Black</span
                >
                <!-- MOBILE -->
                <div v-show="userStore.preference.color.includes('Black')">
                  <span
                    class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                    >Selected</span
                  >
                </div>
              </div>

              <div
                class="color-box h-[5.2rem] stone_Color_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white rounded-md cursor-pointer bg-[brown] relative px-[1.6vw] py-[.2rem]"
                :class="{
                  selected: userStore.preference.color.includes('Brown'),
                }"
                @click="toggleSelect('Brown')"
              >
                <span
                  class="text-[1rem]"
                  v-show="!userStore.preference.color.includes('Brown')"
                  >Brown</span
                >
                <div v-show="userStore.preference.color.includes('Brown')">
                  <span
                    class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                    >Selected</span
                  >
                </div>
              </div>
            </div>
            <div class="color-selection flex justify-between gap-[4vw] z-[9]">
              <!-- MOBILE -->
              <div
                class="color-box h-[5.2rem] stone_Color_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] relative w-full flex items-center justify-center text-white rounded-md cursor-pointer px-[1.6vw] py-[.2rem] bg-[#999]"
                :class="{
                  selected: userStore.preference.color.includes('Grey'),
                }"
                @click="toggleSelect('Grey')"
              >
                <span
                  class="text-[1rem]"
                  v-show="!userStore.preference.color.includes('Grey')"
                  >Grey</span
                >
                <div v-show="userStore.preference.color.includes('Grey')">
                  <!-- MOBILE -->
                  <span
                    class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                    >Selected</span
                  >
                </div>
              </div>

              <div
                class="color-box h-[5.2rem] stone_Color_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.2rem] bg-green-500"
                :class="{
                  selected: userStore.preference.color.includes('Green'),
                }"
                @click="toggleSelect('Green')"
              >
                <span
                  class="text-[1rem]"
                  v-show="!userStore.preference.color.includes('Green')"
                  >Green</span
                >
                <div v-show="userStore.preference.color.includes('Green')">
                  <span
                    class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                    >Selected</span
                  >
                </div>
                <!-- MOBILE -->
              </div>
              <div
                class="color-box h-[5.2rem] stone_Color_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.2rem] bg-blue-500"
                :class="{
                  selected: userStore.preference.color.includes('Blue'),
                }"
                @click="toggleSelect('Blue')"
              >
                <!-- MOBILE -->
                <span
                  class="text-[1rem]"
                  v-show="!userStore.preference.color.includes('Blue')"
                  >Blue</span
                >
                <div v-show="userStore.preference.color.includes('Blue')">
                  <span
                    class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                    >Selected</span
                  >
                </div>
              </div>
            </div>
            <div class="color-selection flex justify-between gap-[4vw] z-[9]">
              <!-- MOBILE -->
              <div
                class="color-box h-[5.2rem] stone_Color_Details_Mob-CONTAINER bg-white overflow-hidden opacity-0 translate-y-[20%] w-full flex items-center justify-center text-[#444] rounded-md cursor-pointer relative px-[1.6vw] py-[.2rem]"
                :class="{
                  selected: userStore.preference.color.includes('White'),
                }"
                @click="toggleSelect('White')"
              >
                <span
                  class="text-[1rem]"
                  v-show="!userStore.preference.color.includes('White')"
                  >White</span
                >
                <div v-show="userStore.preference.color.includes('White')">
                  <span
                    class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                    >Selected</span
                  >
                </div>
              </div>

              <div
                class="color-box h-[5.2rem] stone_Color_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.2rem] bg-red-500"
                :class="{
                  selected: userStore.preference.color.includes('Red'),
                }"
                @click="toggleSelect('Red')"
              >
                <span
                  class="text-[1rem]"
                  v-show="!userStore.preference.color.includes('Red')"
                  >Red</span
                >
                <div v-show="userStore.preference.color.includes('Red')">
                  <span
                    class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                    >Selected</span
                  >
                </div>
              </div>
              <div
                class="color-box h-[5.2rem] stone_Color_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.2rem] bg-[pink]"
                :class="{
                  selected: userStore.preference.color.includes('Rose'),
                }"
                @click="toggleSelect('Rose')"
              >
                <!-- MOBILE -->

                <span
                  class="text-[1rem]"
                  v-show="!userStore.preference.color.includes('Rose')"
                  >Rose</span
                >
                <div v-show="userStore.preference.color.includes('Rose')">
                  <span
                    class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
                    >Selected</span
                  >
                </div>
              </div>
              <!-- MOBILE -->
            </div>
          </div>
        </div>
        <div
          v-show="userStore.preference.color.length > 0"
          class="h-max w-full flex flex-col gap-[.5rem] items-start"
        >
          <span class="text-[#444]">Selected Colors:</span>
          <div class="w-full grid grid-cols-3 gap-[2vw]">
            <span
              v-for="color in userStore.preference.color"
              :key="color"
              :style="{ backgroundColor: getColorHex(color) }"
              class="text-center border border-black rounded-md py-[.2rem] px-[.4vw] flex justify-evenly items-center overflow-hidden"
            >
              <span
                class="inline bg-[#000] bg-opacity-[.2] px-[2vw] rounded-sm py-[.2rem] font-[500] backdrop-blur-[8px] text-white text-[.8rem] text-center"
              >
                {{ color }}
              </span>
              <span
                @click="toggleSelect(color)"
                class="h-max w-max flex items-center bg-[#000] bg-opacity-[.2] px-[.8vw] py-[.2rem] rounded-full"
              >
                <svg
                  class="inline-block h-[1.2rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#f1f3f5"
                    d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                  />
                </svg>
              </span>
            </span>
            <button
              @click="scrollUpBy(400)"
              class="rounded-md bg-inherit shadow border-[#555] text-[#444] shadow-md border-[2px] font-[500] px-[3.2vw] py-[.3rem]"
            >
              Add More
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
// PINIA
import { Icon } from "@iconify/vue/dist/iconify.js";
import useUserStore from "~/stores/user";

const userStore = useUserStore();
const { existingUser } = defineProps(["existingUser"]);

const customColor = ref("");
const isMultiColoredOpted = ref(false);
const selectedColors = ref([]);
function clearColorSelections() {
  selectedColors.value = [];
  userStore.preference.color = [];
  isMultiColoredOpted.value = false;
}
const removeCustomColor = () => {
  return userStore.preference.color.filter((color) => color !== "CustomColor");
};
const toggleSelect = (color, added) => {
  if (color === "done") {
    isMultiColoredOpted.value = false;
    scrollToEl("stoneBudgetsContainerMOB");
  }
  // Handle "CustomColor" case
  if (color === "CustomColor") {
    isMultiColoredOpted.value = true;
    return;
  }
  // Toggle color selection
  const isSelected = selectedColors.value.includes(color);
  if (isSelected) {
    selectedColors.value = selectedColors.value.filter((t) => t !== color);
  } else {
    if (!added) {
      scrollToEl("stoneBudgetsContainerMOB");
    }
    selectedColors.value.push(color);
  }

  userStore.preference.color = toRaw(selectedColors.value);
  if (added !== "addMore") {
    isMultiColoredOpted.value = false;
  }
  console.log("Updated color array:", userStore.preference.color);
  removeCustomColor();
  getHexCodes();
  customColor.value = "";
  userStore.updateCart();
};

const customColorArray = ref([]);
function getColorHex(color) {
  const formattedColor = color.toLowerCase().replace(/\s+/g, "");
  return carpetColors[formattedColor] || "#000000";
}
function getHexCodes() {
  userStore.preference.color.forEach((color) => {
    const formattedColor = color.toLowerCase().replace(/\s+/g, "");
    const hexCode = carpetColors[formattedColor] || "#000000";
    customColorArray.value.push(hexCode);
  });
}
</script>

<style scoped>
.color-box {
  position: relative;
}

.selected {
  border-radius: 0.375rem;
  border: 2px solid #333; /* Example border color */
}

/* Hide text inside selected color box */
.color-box .selected > span:first-child {
  display: none;
}
</style>
