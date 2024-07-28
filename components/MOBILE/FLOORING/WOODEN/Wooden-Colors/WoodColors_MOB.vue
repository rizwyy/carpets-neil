<template>
  <!-- MOBILE -->
  <div
    v-show="
      userStore.preference.category !== '' &&
      userStore.preference.type !== '' &&
      userStore.preference.material !== ''
    "
    class="min-[990px]:hidden h-max w-screen container mx-auto p-[4vh] bg-[#f1f1f1] bg-opacity-60 rounded-md shadow-lg text-center flex flex-col gap-[2vh]"
  >
    <div
      class="header text-[3.4vh] text-left z-[9] h-max w-full items-center flex justify-between"
    >
      <span class="text-left text-balance"> Choose Your Color </span>

      <button
        @click="clearColorSelections"
        v-show="selectedColors.length"
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
      v-show="userStore.preference.flooring === 'Wooden'"
      class="h-max w-full relative flex flex-col gap-[2vh]"
    >
      <div
        v-show="isMultiColoredOpted"
        class="h-full w-full bg-black bg-opacity-[.7] backdrop-blur-[8px] rounded-md absolute top-0 left-0 z-[99] flex items-center justify-center flex-col gap-[4vh]"
      >
        <span class="text-[#f1f1f1] text-[3.2vh]">Enter Your Color</span>
        <input
          class="h-[6vh] w-[80%] px-[4vw] bg-[#fff2] border-[2px] rounded-md text-[#fff]"
          type="text"
          v-model="customColor"
          placeholder="Enter your Color"
        />
        <button
          @click="toggleSelect(customColor)"
          class="text-[2vh] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[1vh]"
        >
          Add
        </button>
      </div>
      <div class="color-selection flex justify-between gap-[4vw] z-[9]">
        <div
          class="color-box h-[10vh] w-full flex items-center justify-center text-white bg-gradient-to-br from-[#f44369] via-[#f4985a] to-[#b9dfee] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh] leading-[2.4vh]"
          :class="{ selected: selectedColors.includes('CustomColor') }"
          @click="toggleSelect('CustomColor')"
        >
          <!-- MOBILE -->
          <span v-show="!selectedColors.includes('CustomColor')"
            >Custom Color</span
          >
          <div v-show="selectedColors.includes('CustomColor')">
            <span class="h-full w-full text-[2vh]">Add More +</span>
          </div>
        </div>

        <!-- MOBILE -->
        <div
          class="color-box h-[10vh] w-full flex items-center justify-center text-[#fff] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
          :class="{ selected: selectedColors.includes('Beige') }"
          @click="toggleSelect('Beige')"
        >
          <NuxtImg
            class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
            src="/colors/beige-wood.webp"
          />
          <span v-show="!selectedColors.includes('Beige')">Beige</span>
          <!-- MOBILE -->
          <div v-show="selectedColors.includes('Beige')">
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >Selected</span
            >
          </div>
        </div>
        <div
          class="color-box h-[10vh] w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
          :class="{ selected: selectedColors.includes('Brown') }"
          @click="toggleSelect('Brown')"
        >
          <!-- MOBILE -->
          <NuxtImg
            class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
            src="/colors/brown-wood.webp"
          />
          <span v-show="!selectedColors.includes('Brown')">Brown</span>
          <div v-show="selectedColors.includes('Brown')">
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
          class="color-box h-[10vh] relative w-full flex items-center justify-center text-white rounded-md cursor-pointer px-[1.6vw] py-[.8vh]"
          :class="{ selected: selectedColors.includes('Grey') }"
          @click="toggleSelect('Grey')"
        >
          <NuxtImg
            class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
            src="/colors/grey-wood.webp"
          />
          <span v-show="!selectedColors.includes('Grey')">Grey</span>
          <div v-show="selectedColors.includes('Grey')">
            <!-- MOBILE -->
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >Selected</span
            >
          </div>
        </div>
        <div
          class="color-box h-[10vh] w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
          :class="{ selected: selectedColors.includes('Dark Brown') }"
          @click="toggleSelect('Dark Brown')"
        >
          <!-- MOBILE -->
          <NuxtImg
            class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
            src="/colors/brown.webp"
          />
          <span v-show="!selectedColors.includes('Dark Brown')"
            >Dark Brown</span
          >
          <div v-show="selectedColors.includes('Dark Brown')">
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >Selected</span
            >
          </div>
          <!-- MOBILE -->
        </div>
      </div>
      <div class="color-selection flex justify-between gap-[4vw] z-[9]">
        <!-- MOBILE -->
        <div
          class="color-box h-[10vh] w-full flex items-center justify-center text-[#444] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
          :class="{ selected: selectedColors.includes('White') }"
          @click="toggleSelect('White')"
        >
          <NuxtImg
            class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
            src="/colors/white-wood.webp"
          />
          <!-- MOBILE -->
          <span v-show="!selectedColors.includes('White')">White</span>
          <div v-show="selectedColors.includes('White')">
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >Selected</span
            >
          </div>
        </div>
        <div
          class="color-box h-[10vh] w-full flex items-center justify-center text-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
          :class="{ selected: selectedColors.includes('Black') }"
          @click="toggleSelect('Black')"
        >
          <!-- MOBILE -->
          <NuxtImg
            class="h-full w-full absolute top-0 left-0 right-0 z-[-1] rounded-md"
            src="/colors/black.webp"
          />
          <span v-show="!selectedColors.includes('Black')">Black</span>
          <div v-show="selectedColors.includes('Black')">
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
      <div class="w-full grid grid-cols-4 gap-[2vw]">
        <span
          v-for="color in removeCustomColor()"
          :key="color"
          :style="{ backgroundColor: getColorHex(color) }"
          class="text-center border border-black rounded-md py-[.4vh] px-[1vw]"
        >
          <span
            class="inline bg-[#000] bg-opacity-[.2] px-[2vw] rounded-sm py-[.2vh] font-[00] backdrop-blur-[8px] text-white text-[1.6vh]"
          >
            {{ color }}
          </span>
        </span>
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
const toggleSelect = (color) => {
  if (color === "CustomColor") {
    isMultiColoredOpted.value = true;
    selectedColors.value.push("CustomColor");
    return;
  }
  if (selectedColors.value.includes(color)) {
    selectedColors.value = selectedColors.value.filter((t) => t !== color);
    userStore.preference.color = toRaw(selectedColors.value);
    isMultiColoredOpted.value = false;
  } else {
    scrollToBottom();
    isMultiColoredOpted.value = false;
    selectedColors.value.push(color);
    userStore.preference.color = toRaw(selectedColors.value);
    customColor.value = "";
  }
};
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
