<template>
  <div
    v-show="userStore.preference.type.length > 0"
    class="container mx-auto p-[4vh] bg-[#f1f1f1] bg-opacity-60 rounded-md shadow-lg text-center flex flex-col gap-[2vh]"
  >
    <div
      class="header text-[3.4vh] text-left z-[9] h-max w-full items-center flex justify-between"
    >
      Choose Your Color
      <button
        @click="clearColorSelections"
        v-if="selectedColors.length"
        class="h-max bg-white text-gray-500 px-[2vw] py-[.8vh] text-xs rounded-md flex gap-[1vw] items-center"
      >
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
        </svg>
      </button>
    </div>
    <div class="color-selection flex justify-between gap-[4vw] z-[9]">
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-white bg-gray-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('Grey') }"
        @click="toggleSelect('Grey')"
      >
        <span v-if="!selectedColors.includes('Grey')">Grey</span>
        <template v-if="selectedColors.includes('Grey')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-[#333] bg-beige-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('Beige') }"
        @click="toggleSelect('Beige')"
      >
        <span v-if="!selectedColors.includes('Beige')">Beige</span>
        <template v-if="selectedColors.includes('Beige')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-white bg-[brown] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('Brown') }"
        @click="toggleSelect('Brown')"
      >
        <span v-if="!selectedColors.includes('Brown')">Brown</span>
        <template v-if="selectedColors.includes('Brown')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
    </div>
    <div class="color-selection flex justify-between gap-[4vw] z-[9]">
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-white bg-red-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('Red') }"
        @click="toggleSelect('Red')"
      >
        <span v-if="!selectedColors.includes('Red')">Red</span>
        <template v-if="selectedColors.includes('Red')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-white bg-green-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('Green') }"
        @click="toggleSelect('Green')"
      >
        <span v-if="!selectedColors.includes('Green')">Green</span>
        <template v-if="selectedColors.includes('Green')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-white bg-blue-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('Blue') }"
        @click="toggleSelect('Blue')"
      >
        <span v-if="!selectedColors.includes('Blue')">Blue</span>
        <template v-if="selectedColors.includes('Blue')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
    </div>
    <div class="color-selection flex justify-between gap-[4vw] z-[9]">
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-[#444] bg-white rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('White') }"
        @click="toggleSelect('White')"
      >
        <span v-if="!selectedColors.includes('White')">White</span>
        <template v-if="selectedColors.includes('White')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-white bg-black rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('Black') }"
        @click="toggleSelect('Black')"
      >
        <span v-if="!selectedColors.includes('Black')">Black</span>
        <template v-if="selectedColors.includes('Black')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
      <div
        class="color-box h-[10vh] w-full flex items-center justify-center text-white bg-pink-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
        :class="{ selected: selectedColors.includes('Pink') }"
        @click="toggleSelect('Pink')"
      >
        <span v-if="!selectedColors.includes('Pink')">Pink</span>
        <template v-if="selectedColors.includes('Pink')">
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// PINIA
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const selectedColors = ref([]);
function clearColorSelections() {
  selectedColors.value = [];
  userStore.preference.color = [];
}
function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 200);
}
const toggleSelect = (color) => {
  if (selectedColors.value.includes(color)) {
    selectedColors.value = selectedColors.value.filter((t) => t !== color);
    userStore.preference.color = toRaw(selectedColors.value);
  } else {
    scrollToBottom();
    selectedColors.value.push(color);
    userStore.preference.color = toRaw(selectedColors.value);
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
