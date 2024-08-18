<template>
  <!-- MOBILE GYM COLOR DETAILS-->
  <transition @beforeEnter="handleDetailsDOMEntry('gym_Color_Details_Mob')">
    <div
      v-show="
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.spec_3 !== ''
      "
      class="min-[990px]:hidden container mx-auto p-[4vh] bg-[#f1f1f1] bg-opacity-60 rounded-md shadow-lg text-center flex flex-col gap-[2vh]"
    >
      <div
        class="header text-[3.4vh] text-left z-[9] h-max w-full items-center flex justify-between gym_Color_Details_Mob-HEADING"
      >
        Choose Your Color
        <button
          @click="clearColorSelections"
          v-show="isMultiColoredOpted || userStore.preference.color.length"
          class="h-max bg-white text-gray-500 px-[2vw] py-[.8vh] text-clearAllMOB rounded-md flex gap-[1vw] items-center"
        >
          <!-- MOBILE -->
          Clear All<svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
            <!-- MOBILE -->
          </svg>
        </button>
      </div>
      <div
        v-show="userStore.preference.flooring === 'gym'"
        class="h-max w-full flex flex-col gap-[2vh] relative"
      >
        <div
          v-show="isMultiColoredOpted"
          class="h-full w-full bg-black bg-opacity-[.7] backdrop-blur-[8px] rounded-md absolute top-0 left-0 z-[99] flex items-center justify-center flex-col gap-[4vh]"
        >
          <div
            class="h-max w-full flex-[2.5] flex justify-center items-center gap-[2vw]"
          >
            <span class="text-[#f1f1f1] text-[3.2vh]">Enter Your Color</span>
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
              class="h-[6vh] w-[80%] px-[4vw] bg-[#fff2] border-[2px] rounded-md text-[#fff]"
              type="text"
              v-model="customColor"
              placeholder="Enter your Color"
            />
          </div>
          <div
            class="h-max w-full flex-[2] gap-[4vw] flex items-start justify-center"
          >
            <transition
              @beforeEnter="bringOpacity('carpet_details_colors_mob_done1_BTN')"
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
                class="carpet_details_colors_mob_done1_BTN text-[2vh] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[1vh]"
              >
                Done
              </button>
            </transition>
            <transition
              @beforeEnter="bringOpacity('carpet_details_colors_mob_done_BTN')"
              @beforeLeave="removeOpacity('carpet_details_colors_mob_done_BTN')"
            >
              <button
                v-show="userStore.preference.color.length > 0"
                @click="toggleSelect(customColor, 'done')"
                class="carpet_details_colors_mob_done_BTN text-[2vh] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[1vh]"
              >
                Done
              </button>
            </transition>
            <transition
              @beforeEnter="bringOpacity('carpet_details_colors_mob_add_BTN')"
              @beforeLeave="removeOpacity('carpet_details_colors_mob_add_BTN')"
            >
              <button
                v-show="customColor.length > 2"
                @click="toggleSelect(customColor, 'addMore')"
                class="carpet_details_colors_mob_add_BTN text-[2vh] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[1vh]"
              >
                Add More +
              </button>
            </transition>
          </div>
        </div>
        <div class="color-selection flex justify-between gap-[4vw] z-[9]">
          <div
            class="color-box CustomColor h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-white bg-gradient-to-br from-[#f44369] via-[#f4985a] to-[#b9dfee] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh] leading-[2.4vh]"
            :class="{
              selected: userStore.preference.color.includes('CustomColor'),
            }"
            @click="toggleSelect('CustomColor')"
          >
            <!-- MOBILE -->
            <span v-show="!userStore.preference.color.includes('CustomColor')"
              >Custom Color</span
            >
            <div v-show="userStore.preference.color.includes('CustomColor')">
              <span class="h-full w-full text-[2vh]">Add More +</span>
            </div>
          </div>

          <!-- MOBILE -->
          <div
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-[#fff] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Beige') }"
            @click="toggleSelect('Beige')"
          >
            <div
              v-show="userStore.preference.spec_3 !== 'Wooden'"
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md bg-[#E3DAC9]"
            ></div>
            <NuxtImg
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
              src="/colors/beige-wood.webp"
            />
            <span v-show="!userStore.preference.color.includes('Beige')"
              >Beige</span
            >
            <!-- MOBILE -->
            <div v-show="userStore.preference.color.includes('Beige')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <div
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Brown') }"
            @click="toggleSelect('Brown')"
          >
            <!-- MOBILE -->
            <div
              v-show="userStore.preference.spec_3 !== 'Wooden'"
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md bg-[#79443B]"
            ></div>
            <NuxtImg
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
              src="/wooden/wood-Brown.webp"
            />
            <span v-show="!userStore.preference.color.includes('Brown')"
              >Brown</span
            >
            <div v-show="userStore.preference.color.includes('Brown')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
        </div>
        <div class="color-selection flex justify-between gap-[4vw] z-[9]">
          <!-- MOBILE -->
          <div
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER relative w-full flex items-center justify-center text-white rounded-md cursor-pointer px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Grey') }"
            @click="toggleSelect('Grey')"
          >
            <NuxtImg
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
              src="/wooden/wood-Brown.webp"
            />
            <div
              v-show="userStore.preference.spec_3 !== 'Wooden'"
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md bg-[#BEBFC5]"
            ></div>
            <span v-show="!userStore.preference.color.includes('Grey')"
              >Grey</span
            >
            <div v-show="userStore.preference.color.includes('Grey')">
              <!-- MOBILE -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <div
            v-show="userStore.preference.spec_3 === 'Wooden'"
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{
              selected: userStore.preference.color.includes('Dark Brown'),
            }"
            @click="toggleSelect('Dark Brown')"
          >
            <!-- MOBILE -->
            <NuxtImg
              v-show="userStore.preference.spec_2 !== 'Cork Floor'"
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
              src="/colors/darkBrown-wood.webp"
            />
            <span v-show="!userStore.preference.color.includes('Dark Brown')"
              >Dark Brown</span
            >
            <div v-show="userStore.preference.color.includes('Dark Brown')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
            <!-- MOBILE -->
          </div>
          <div
            v-show="userStore.preference.spec_3 !== 'Wooden'"
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Green') }"
            @click="toggleSelect('Green')"
          >
            <!-- MOBILE -->
            <div
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md bg-[#03C03C]"
            ></div>
            <span v-show="!userStore.preference.color.includes('Green')"
              >Green</span
            >
            <div v-show="userStore.preference.color.includes('Green')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
            <!-- MOBILE -->
          </div>
          <div
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Blue') }"
            @click="toggleSelect('Blue')"
          >
            <div
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md bg-[#007FFF]"
            ></div>
            <!-- MOBILE -->
            <span v-show="!userStore.preference.color.includes('Blue')"
              >Blue</span
            >
            <div v-show="userStore.preference.color.includes('Blue')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
        </div>
        <div class="color-selection flex justify-between gap-[4vw] z-[9]">
          <!-- MOBILE -->
          <div
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-[#444] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('White') }"
            @click="toggleSelect('White')"
          >
            <div
              v-show="userStore.preference.spec_3 !== 'Wooden'"
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md bg-[#fff]"
            ></div>
            <NuxtImg
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
              src="/colors/white-wood.webp"
            />
            <!-- MOBILE -->
            <span v-show="!userStore.preference.color.includes('White')"
              >White</span
            >
            <div v-show="userStore.preference.color.includes('White')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <div
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Black') }"
            @click="toggleSelect('Black')"
          >
            <!-- MOBILE -->
            <div
              v-show="userStore.preference.spec_3 !== 'Wooden'"
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md bg-[#000]"
            ></div>
            <NuxtImg
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
              src="/colors/black-wood.webp"
            />
            <span v-show="!userStore.preference.color.includes('Black')"
              >Black</span
            >
            <div v-show="userStore.preference.color.includes('Black')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <div
            v-show="userStore.preference.spec_3 === 'Wooden'"
            class="color-box wooden_Color_Details_Mob-CONTAINER opacity-0 translate-y-[10%] h-[10vh] w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Orange') }"
            @click="toggleSelect('Orange')"
          >
            <NuxtImg
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
              src="/colors/cork-orange.webp"
            />
            <span v-show="!userStore.preference.color.includes('Orange')"
              >Orange</span
            >
            <div v-show="userStore.preference.color.includes('Orange')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <div
            v-show="userStore.preference.spec_3 !== 'Wooden'"
            class="color-box h-[10vh] gym_Color_Details_Mob-CONTAINER w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Rose') }"
            @click="toggleSelect('Rose')"
          >
            <!-- MOBILE -->
            <div
              class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md bg-[#FF00FF]"
            ></div>
            <span v-show="!userStore.preference.color.includes('Rose')"
              >Rose</span
            >
            <div v-show="userStore.preference.color.includes('Rose')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <!-- MOBILE -->
        </div>
      </div>
      <div
        v-show="userStore.preference.color.length > 0"
        class="h-max w-full flex flex-col gap-[1vh] items-start"
      >
        <span class="text-[#444]">Selected Colors:</span>
        <div class="w-full grid grid-cols-3 gap-[2vw]">
          <span
            v-for="color in removeCustomColor()"
            :key="color"
            :style="{ backgroundColor: getColorHex(color) }"
            class="text-center border border-black rounded-md py-[.4vh] px-[.4vw] flex justify-evenly items-center overflow-hidden"
          >
            <span
              class="inline bg-[#000] bg-opacity-[.2] px-[2vw] rounded-sm py-[.4vh] font-[500] backdrop-blur-[8px] text-white text-[1.6vh] text-center"
            >
              {{ color }}
            </span>
            <span
              @click="toggleSelect(color)"
              class="h-max w-max flex items-center bg-[#000] bg-opacity-[.2] px-[.8vw] py-[.4vh] rounded-full"
            >
              <svg
                class="inline-block h-[2.4vh]"
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
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import gsap from "gsap";
// PINIA
import useUserStore from "~/stores/user";

const userStore = useUserStore();

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
  if (added === "done") {
    isMultiColoredOpted.value = false;
    scrollToBottom();
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
      scrollToBottom();
    }
    selectedColors.value.push(color);
  }

  userStore.preference.color = toRaw(selectedColors.value);
  if (added !== "addMore") {
    isMultiColoredOpted.value = false;
  }
  removeCustomColor();
  getHexCodes();
  customColor.value = "";
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
  border: 2px solid #333; /* Example border color */
}

/* Hide text inside selected color box */
.color-box .selected > span:first-child {
  display: none;
}
</style>
