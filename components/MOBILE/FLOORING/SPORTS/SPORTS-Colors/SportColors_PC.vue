<template>
  <!-- DESKTOP CARPETS-->
  <div
    class="max-[990px]:hidden h-max w-screen px-[6vw] flex flex-col items-center gap-[4vh] justify-center"
  >
    <transition
      @beforeEnter="handleDetailsDOMEntry('sports_Colors_Details_PC')"
    >
      <div
        v-show="
          userStore.preference.spec_1 !== '' &&
          userStore.preference.spec_2 !== '' &&
          userStore.preference.spec_3 !== ''
        "
        class="container relative h-max w-full shadow-xl py-[6vh] px-[4vw] bg-[#f1f1f1] bg-opacity-60 rounded-md shadow-lg text-center flex flex-col gap-[8vh]"
      >
        <div
          class="header text-[3.8vh] text-left z-[9] h-max w-full items-center flex justify-between"
        >
          <span
            v-show="!isMultiColoredOpted"
            class="text-left text-balance sports_Colors_Details_PC-HEADING opacity-0 translate-x-[40%] text-detailsHeading_PC"
          >
            Choose Your Color</span
          >
          <button
            @click="clearColorSelections"
            v-show="userStore.preference.color.length"
            class="h-max bg-white text-gray-500 px-[2vw] py-[1vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
          >
            <!-- DESKTOP -->
            <span class="text-[2.2vh]">Clear All</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
          </button>
        </div>

        <div
          v-show="userStore.preference.flooring === 'sports'"
          class="h-max w-full flex flex-col gap-[4vh]"
        >
          <div
            v-show="isMultiColoredOpted"
            @keyup.esc="
              isMultiColoredOpted ? (isMultiColoredOpted = false) : ''
            "
            class="h-full w-full overflow-hidden bg-black py-[2vh] bg-opacity-[.85] backdrop-blur-[18px] rounded-md absolute top-0 left-0 z-[99] flex items-center justify-center flex-col gap-[4vh]"
          >
            <div
              class="h-max w-full flex-[2.2] flex justify-center items-center gap-[2vw]"
            >
              <transition
                @beforeEnter="
                  handleBringOpacityForCustomColor('customColorText_PC')
                "
              >
                <span
                  v-show="isMultiColoredOpted"
                  class="customColorText_PC opacity-0 text-[5.8vw] bg-gradient-to-r from-[#68e3f9] via-[#f55a9b] to-[#4f4ed7] bg-clip-text text-transparent font-shadows"
                  >Custom Colors</span
                >
              </transition>
            </div>
            <div
              class="h-max w-full flex-[1.2] flex gap-[2.8vw] justify-center items-center"
            >
              <span
                class="text-[#f1f1f1] text-details_Box_Heading_PC font-[400]"
                >Enter Your Colors:</span
              >
              <input
                @keyup.enter="toggleSelect(customColor, 'addMore')"
                class="h-[6vh] w-[50%] px-[4vw] bg-inherit outline-none focus:border-[#fff] rounded-t-md border-[#fff9] text-[2vw] border-b-[2px] text-[#fff] py-[2vh]"
                type="text"
                v-model="customColor"
                placeholder="Enter your Color"
              />
              <button @click="clearCustomColorValue">
                <svg
                  class="first:hover:fill-[#f1f1f1]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff9"
                    d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41z"
                  />
                </svg>
              </button>
            </div>
            <div
              class="h-max w-full flex-[2.8] gap-[6vh] flex flex-col items-center justify-start"
            >
              <div class="h-max w-max"></div>
              <div class="h-max w-max flex gap-[4vw]">
                <span
                  @click="clearColorSelections"
                  class="flex items-center justify-center cursor-pointer text-[1.4vw] gap-[.6vw] text-white hover:border-[#f1f1f1] border-[#fff9] border-md border-[2px] px-[3vw] rounded-md py-[1.8vh]"
                  >Cancel
                </span>
                <transition
                  @beforeEnter="
                    bringOpacity('sports_details_colors_mob_add_BTN')
                  "
                  @beforeLeave="
                    removeOpacity('sports_details_colors_mob_add_BTN')
                  "
                >
                  <button
                    v-show="customColor.length > 2"
                    @click="toggleSelect(customColor, 'addMore')"
                    class="sports_details_colors_mob_add_BTN text-[1.4vw] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] hover:border-[#f1f1f1] border-[#fff9] py-[2vh]"
                  >
                    Add More
                  </button>
                </transition>
                <transition
                  @beforeEnter="
                    bringOpacity('sports_details_colors_mob_done1_BTN')
                  "
                >
                  <button
                    v-show="
                      !userStore.preference.color.length > 0 &&
                      customColor.length > 2
                    "
                    @click="toggleSelect('done')"
                    class="sports_details_colors_mob_done1_BTN text-[1.4vw] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] hover:border-[#f1f1f1] border-[#fff9] py-[1vh]"
                  >
                    Done
                  </button>
                </transition>
                <button
                  v-show="userStore.preference.color.length > 0"
                  @click="toggleSelect('done')"
                  class="carpet_details_colors_mob_done_BTN text-[2vh] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] hover:border-[#f1f1f1] border-[#fff9] py-[1.8vh]"
                >
                  Done
                </button>
              </div>
            </div>
          </div>

          <div class="color-selection flex justify-between gap-[2.8vw] z-[9]">
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-gradient-to-br from-[#f44369] via-[#f4985a] to-[#b9dfee] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{
                selected: userStore.preference.color.includes('CustomColor'),
              }"
              @click="toggleSelect('CustomColor')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('CustomColor')"
                >Custom Color</span
              >
              <div v-show="userStore.preference.color.includes('CustomColor')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
              </div>
            </div>

            <!-- DESKTOP -->
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-[#333] bg-[#F5F5DC] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{
                selected: userStore.preference.color.includes('Beige'),
              }"
              @click="toggleSelect('Beige')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('Beige')"
                >Beige</span
              >
              <div v-show="userStore.preference.color.includes('Beige')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
              </div>
            </div>
            <!-- DESKTOP -->
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-[brown] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{
                selected: userStore.preference.color.includes('Brown'),
              }"
              @click="toggleSelect('Brown')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('Brown')"
                >Brown</span
              >
              <div v-show="userStore.preference.color.includes('Brown')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
              </div>
            </div>
            <!--  -->
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-gray-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{ selected: userStore.preference.color.includes('Grey') }"
              @click="toggleSelect('Grey')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('Grey')"
                >Grey</span
              >
              <!-- DESKTOP -->
              <div v-show="userStore.preference.color.includes('Grey')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
              </div>
            </div>
            <!--  -->
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-orange-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{
                selected: userStore.preference.color.includes('Orange'),
              }"
              @click="toggleSelect('Orange')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('Orange')"
                >Orange</span
              >
              <!-- DESKTOP -->
              <div v-show="userStore.preference.color.includes('Orange')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
              </div>
            </div>
            <!--  -->
          </div>
          <div class="color-selection flex justify-between gap-[2.8vw] z-[9]">
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-green-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{
                selected: userStore.preference.color.includes('Green'),
              }"
              @click="toggleSelect('Green')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('Green')"
                >Green</span
              >
              <div v-show="userStore.preference.color.includes('Green')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
                <!-- DESKTOP -->
              </div>
            </div>
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-blue-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{ selected: userStore.preference.color.includes('Blue') }"
              @click="toggleSelect('Blue')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('Blue')"
                >Blue</span
              >
              <div v-show="userStore.preference.color.includes('Blue')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
                <!-- DESKTOP -->
              </div>
            </div>
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-black rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{
                selected: userStore.preference.color.includes('Black'),
              }"
              @click="toggleSelect('Black')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('Black')"
                >Black</span
              >
              <div v-show="userStore.preference.color.includes('Black')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
                <!-- DESKTOP -->
              </div>
            </div>
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-white bg-pink-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{ selected: userStore.preference.color.includes('Pink') }"
              @click="toggleSelect('Pink')"
            >
              <!-- DESKTOP -->
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('Pink')"
                >Pink</span
              >
              <div v-show="userStore.preference.color.includes('Pink')">
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
                <!-- DESKTOP -->
              </div>
            </div>
            <div
              class="color_box_PC h-[18vh] sports_Colors_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full flex items-center justify-center text-[#444] bg-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
              :class="{
                selected: userStore.preference.color.includes('White'),
              }"
              @click="toggleSelect('White')"
            >
              <span
                class="text-[2.8vh]"
                v-show="!userStore.preference.color.includes('White')"
                >White</span
              >
              <div v-show="userStore.preference.color.includes('White')">
                <!-- DESKTOP -->
                <span
                  class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                  >Selected</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition>
      <div
        v-show="userStore.preference.color.length > 0"
        class="h-max w-full flex flex-col gap-[1vh] items-start bg-[#E5E4E2] py-[4vh] px-[4vw] rounded-md bg-opacity-[.5] shadow-lg"
      >
        <span class="text-detailsHeading_PC text-[2.4vw]"
          >Selected Colors:</span
        >
        <div class="w-full grid grid-cols-4 gap-[2vw] pt-[4vh]">
          <span
            v-for="color in removeCustomColor()"
            :key="color"
            :style="{ backgroundColor: getColorHex(color) }"
            class="text-center border border-black rounded-md py-[1.4vh] px-[.8vw] flex justify-between items-center overflow-hidden relative"
          >
            <div
              class="absolute h-full w-full left-0 top-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-[.6]"
            ></div>
            <span
              class="inline px-[2vw] rounded-sm py-[.4vh] font-[500] text-[#f1f1f1] text-[1.6vw] text-center z-[9]"
            >
              {{ color }}
            </span>
            <span
              @click="toggleSelect(color)"
              class="h-max w-max flex items-center bg-[#000] bg-opacity-[.2] px-[.4vw] py-[.6vh] rounded-full cursor-pointer border-[px] border-black z-[9]"
            >
              <svg
                class="inline-block h-[1.8vw]"
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
    </transition>
  </div>
</template>
<script setup>
import { ref } from "vue";

// PINIA
import useUserStore from "~/stores/user";

const userStore = useUserStore();
const customColor = ref("");
const selectedColors = ref([]);
const customColorArray = ref([]);
const isMultiColoredOpted = ref(false);
function clearColorSelections() {
  selectedColors.value = [];
  userStore.preference.color = [];
  isMultiColoredOpted.value = false;
}

function clearCustomColorValue() {
  customColor.value = "";
}
const removeCustomColor = () => {
  return userStore.preference.color.filter((color) => color !== "CustomColor");
};
const toggleSelect = (color, added) => {
  if (color.length < 3) {
    return;
  }
  if (color === "done") {
    const customColorValue = customColor.value.trim(); // Trim to remove any leading/trailing whitespace

    if (
      customColorValue !== "" &&
      !userStore.preference.color.includes(customColorValue)
    ) {
      userStore.preference.color.push(customColorValue);
    }
    customColor.value = "";
    isMultiColoredOpted.value = false;
    scrollToBottom();
    return;
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

.font-shadows {
  font-family: "Shadows Into Light", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
