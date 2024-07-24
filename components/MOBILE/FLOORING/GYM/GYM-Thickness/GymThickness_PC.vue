<template>
  <!-- DESKTOP -->
  <div
    v-show="
      userStore.preference.spec_1 !== '' &&
      userStore.preference.spec_2 !== '' &&
      userStore.preference.spec_3 !== ''
    "
    class="max-[990px]:hidden h-max w-screen px-[6vw]"
  >
    <div
      class="h-max w-full text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#f1f1f1] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <!-- DESKTOP -->
      <div class="h-max w-full flex justify-between text-[3.8vh] z-[9]">
        <span class="text-left text-balance">Choose your Thickness</span>
        <button
          @click="clearSurfaceFinish"
          v-if="selectedThickness"
          class="h-max bg-white text-gray-500 px-[2vw] py-[.8vh] text-[.8vh] rounded-md flex gap-[1vw] items-center"
        >
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
        <!-- DESKTOP -->
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- Matt Finish -->
        <div
          :class="[
            'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedThickness === 'Matt Finish' },
          ]"
          @click="toggleSelect('Matt Finish')"
        >
          <div
            v-if="selectedThickness === 'Matt Finish'"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
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
            src="/wooden/wooden-matteFinish.webp"
            alt="#"
          />
          <span class="text-[3.2vh]">Matt Finish</span>
        </div>
        <!-- Gloss Finish -->
        <div
          :class="[
            'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedThickness === 'Gloss Finish' },
          ]"
          @click="toggleSelect('Gloss Finish')"
        >
          <div
            v-if="selectedThickness === 'Gloss Finish'"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- DESKTOP -->
            <!-- Selected indicator without text -->
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >Selected</span
            >
          </div>
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <NuxtImg
            placeholder
            loading="lazy"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/wooden/wooden-gloss.webp"
            alt="#"
          />
          <span class="text-[3.2vh]">Gloss Finish</span>
        </div>
        <!-- DESKTOP -->
      </div>
    </div>
  </div>
</template>

<script setup>
// PINIA

const userStore = useUserStore();
import { ref } from "vue";
import useUserStore from "~/stores/user";

const selectedThickness = ref("");
function clearSurfaceFinish() {
  selectedThickness.value = "";
  userStore.preference.spec_4 = "";
}
function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 200);
}
const toggleSelect = (surface) => {
  if (selectedThickness.value === surface) {
    selectedThickness.value = "";
    userStore.preference.spec_4 = "";
  } else {
    scrollToBottom();
    selectedThickness.value = surface;
    userStore.preference.spec_4 = toRaw(selectedThickness.value);
  }
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
