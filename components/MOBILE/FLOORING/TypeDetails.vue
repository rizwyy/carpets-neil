<template>
  <div
    class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <div
      class="h-max w-full flex items-center justify-between text-[3.4vh] z-[9]"
    >
      <span> Choose Your Type </span>
      <button
        @click="clearAllSelections"
        v-if="selectedTypes.length"
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
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <!-- Solid -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedTypes.includes('Plain') },
        ]"
        @click="toggleSelect('Plain')"
      >
        <div
          v-if="selectedTypes.includes('Plain')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <NuxtImg
          quality="50"
          placeholder
          loading="lazy"
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/solidCarpet.jpg"
          alt=""
        />
        <span>Plain</span>
      </div>

      <!-- Textured -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedTypes.includes('Textured') },
        ]"
        @click="toggleSelect('Textured')"
      >
        <div
          v-if="selectedTypes.includes('Textured')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <NuxtImg
          quality="50"
          placeholder
          loading="lazy"
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/texturedCarpet.jpeg"
          alt=""
        />
        <span>Textured</span>
      </div>
    </div>
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <!-- Designed -->
      <div
        :class="[
          'h-[14vh]  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedTypes.includes('Patterned') },
        ]"
        @click="toggleSelect('Patterned')"
      >
        <div
          v-if="selectedTypes.includes('Patterned')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <NuxtImg
          quality="50"
          placeholder
          loading="lazy"
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/designedCarpet.jpg"
          alt=""
        />
        <span>Patterned</span>
      </div>

      <!-- Customized -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedTypes.includes('Stripped') },
        ]"
        @click="toggleSelect('Stripped')"
      >
        <div
          v-if="selectedTypes.includes('Stripped')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <NuxtImg
          quality="50"
          placeholder
          loading="lazy"
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/10001.jpg"
          alt=""
        />
        <span>Stripped</span>
      </div>
    </div>
    <div>
      <RainBowBTN />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import RainBowBTN from "./../../MOBILE/RainBowBTN.vue";
// PINIA
import useUserStore from "../../../stores/user";
const userStore = useUserStore();
// COOKIES
import { useCookie } from "#app";
import gsap from "gsap";
const userPreference = useCookie("userPreference");
const selectedTypes = ref([]);

function clearAllSelections() {
  selectedTypes.value = [];
  userStore.preference.type = [];
}
function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 200);
}
const toggleSelect = (type) => {
  if (selectedTypes.value.includes(type)) {
    selectedTypes.value = selectedTypes.value.filter((t) => t !== type);
    userStore.preference.type = toRaw(selectedTypes.value);
  } else {
    scrollToBottom();
    selectedTypes.value.push(type);
    userStore.preference.type = toRaw(selectedTypes.value);
  }
};

onMounted(() => {});
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
.rainbow-border {
  --border-color-1: #ff0000; /* Red */
  --border-color-2: #ffa500; /* Orange */
  --border-color-3: #ffff00; /* Yellow */
  --border-color-4: #00ff00; /* Green */
  --border-color-5: #0000ff; /* Blue */
  --border-color-6: #8a2be2; /* Indigo */
  --border-width: 2px; /* Border width */
  --border-gradient: linear-gradient(
    to right,
    var(--border-color-1),
    var(--border-color-2),
    var(--border-color-3),
    var(--border-color-4),
    var(--border-color-5),
    var(--border-color-6)
  );
}
</style>
