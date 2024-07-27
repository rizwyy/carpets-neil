<template>
  <!-- DESKTOP CARPETS-->
  <div class="max-[990px]:hidden h-max w-screen px-[6vw] flex justify-center">
    <div
      v-show="
        userStore.preference.category !== '' &&
        userStore.preference.type !== '' &&
        userStore.preference.material !== ''
      "
      class="container h-max w-full shadow-xl py-[4vh] px-[4vw] bg-[#f1f1f1] bg-opacity-60 rounded-md shadow-lg text-center flex flex-col gap-[2vh]"
    >
      <div
        class="header text-[3.8vh] text-left z-[9] h-max w-full items-center flex justify-between"
      >
        <span class="text-left text-balance"> Choose Your Color</span>
        <button
          @click="clearColorSelections"
          v-show="selectedColors.length"
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
        v-show="userStore.preference.flooring === 'Carpets'"
        class="h-max w-full flex flex-col gap-[2vh]"
      >
        <div class="color-selection flex justify-between gap-[4vw] z-[9]">
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-gradient-to-br from-[#f44369] via-[#f4985a] to-[#b9dfee] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: selectedColors.includes('MultiColored') }"
            @click="toggleSelect('MultiColored')"
          >
            <span
              class="text-[2.8vh]"
              v-show="!selectedColors.includes('MultiColored')"
              >Multi Colored</span
            >
            <div v-show="selectedColors.includes('MultiColored')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>

          <!-- DESKTOP -->
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-[#333] bg-[#F5F5DC] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: selectedColors.includes('Beige') }"
            @click="toggleSelect('Beige')"
          >
            <span
              class="text-[2.8vh]"
              v-show="!selectedColors.includes('Beige')"
              >Beige</span
            >
            <div v-show="selectedColors.includes('Beige')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <!-- DESKTOP -->
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-[brown] rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: selectedColors.includes('Brown') }"
            @click="toggleSelect('Brown')"
          >
            <span
              class="text-[2.8vh]"
              v-show="!selectedColors.includes('Brown')"
              >Brown</span
            >
            <div v-show="selectedColors.includes('Brown')">
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
            :class="{ selected: selectedColors.includes('Grey') }"
            @click="toggleSelect('Grey')"
          >
            <span class="text-[2.8vh]" v-show="!selectedColors.includes('Grey')"
              >Grey</span
            >
            <!-- DESKTOP -->
            <div v-show="selectedColors.includes('Grey')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-green-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: selectedColors.includes('Green') }"
            @click="toggleSelect('Green')"
          >
            <span
              class="text-[2.8vh]"
              v-show="!selectedColors.includes('Green')"
              >Green</span
            >
            <div v-show="selectedColors.includes('Green')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
              <!-- DESKTOP -->
            </div>
          </div>
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-blue-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: selectedColors.includes('Blue') }"
            @click="toggleSelect('Blue')"
          >
            <span class="text-[2.8vh]" v-show="!selectedColors.includes('Blue')"
              >Blue</span
            >
            <div v-show="selectedColors.includes('Blue')">
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
            :class="{ selected: selectedColors.includes('White') }"
            @click="toggleSelect('White')"
          >
            <span
              class="text-[2.8vh]"
              v-show="!selectedColors.includes('White')"
              >White</span
            >
            <div v-show="selectedColors.includes('White')">
              <!-- DESKTOP -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
          </div>
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-black rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: selectedColors.includes('Black') }"
            @click="toggleSelect('Black')"
          >
            <span
              class="text-[2.8vh]"
              v-show="!selectedColors.includes('Black')"
              >Black</span
            >
            <div v-show="selectedColors.includes('Black')">
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
              <!-- DESKTOP -->
            </div>
          </div>
          <div
            class="color_box_PC h-[24vh] w-full flex items-center justify-center text-white bg-pink-500 rounded-md cursor-pointer relative px-[1.6vw] py-[.8vh]"
            :class="{ selected: selectedColors.includes('Pink') }"
            @click="toggleSelect('Pink')"
          >
            <!-- DESKTOP -->
            <span class="text-[2.8vh]" v-show="!selectedColors.includes('Pink')"
              >Pink</span
            >
            <div v-show="selectedColors.includes('Pink')">
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

const selectedColors = ref([]);
function clearColorSelections() {
  selectedColors.value = [];
  userStore.preference.color = [];
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
