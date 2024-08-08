<template>
  <!-- DESKTOP GYM COLOR DETAILS-->
  <div class="max-[990px]:hidden h-max w-screen px-[6vw]">
    <div
      v-show="
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.spec_3 !== '' &&
        userStore.preference.spec_3 !== 'Bare' &&
        (userStore.preference.spec_4 !== '' ||
          userStore.preference.spec_3 === 'Perforated')
      "
      class="container h-max w-full shadow-xl py-[4vh] px-[4vw] bg-[#f1f1f1] bg-opacity-60 rounded-md shadow-lg text-center flex flex-col gap-[2vh]"
    >
      <div
        class="header text-[3.8vh] text-left z-[9] h-max w-full items-center flex justify-between"
      >
        Choose Your Color
        <button
          @click="clearColorSelections"
          v-show="userStore.preference.color.length > 0"
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
        v-show="userStore.preference.flooring === 'raised'"
        class="h-max w-full flex flex-col gap-[2vh]"
      >
        <div class="color-selection flex justify-between gap-[4vw] z-[9]">
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-gradient-to-br from-[#f44369] via-[#f4985a] to-[#b9dfee] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{
              selected: userStore.preference.color.includes('Custom Color'),
            }"
            @click="toggleSelect('Custom Color')"
          >
            <span
              class="text-[2.8vh]"
              v-show="!userStore.preference.color.includes('Custom Color')"
              >Custom Color</span
            >
            <div v-show="userStore.preference.color.includes('Custom Color')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>

          <!-- DESKTOP -->
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-[#333] bg-[#F5F5DC] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Beige') }"
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
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-[brown] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Brown') }"
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
        </div>
        <div class="color-selection flex justify-between gap-[4vw] z-[9]">
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-gray-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
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
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-green-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Green') }"
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
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-blue-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
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
        </div>
        <div class="color-selection flex justify-between gap-[4vw] z-[9]">
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-[#444] bg-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('White') }"
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
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-black rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: userStore.preference.color.includes('Black') }"
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
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-pink-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
  if (color === "done") {
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
