<template>
  <transition @before-enter="handleDetailsDOMEntry('stone_Finish_Details_Mob')">
    <!-- MOBILE -->
    <div
      v-show="
        userStore.preference.flooring === 'stone' &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== ''
      "
      class="h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="min-[990px]:hidden h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#f1f1f1] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div class="h-max w-full flex justify-between text-[1.5rem] z-[9]">
          <!-- MOBILE -->
          <span class="text-left text-balance stone_Finish_Details_Mob-HEADING"
            >Choose your Shade</span
          >
          <button
            @click="clearSurfaceFinish"
            v-show="userStore.preference.spec_4"
            class="h-max bg-white text-gray-500 px-[1.2vw] py-[.8vh] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
          >
            Clear All<Icon icon="material-symbols:cancel-outline-rounded" />
          </button>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- MOBILE -->
          <!-- Light -->
          <div
            :class="[
              'h-[14vh] stone_Finish_Details_Mob-CONTAINER overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_4.includes('Light') },
            ]"
            @click="toggleSelect('Light')"
          >
            <div
              v-show="userStore.preference.spec_4.includes('Light')"
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
              src="/stone/stoneLight.webp"
              alt="#"
            />
            <span>Light</span>
          </div>
          <!-- MOBILE -->
          <!-- Medium -->
          <div
            :class="[
              'h-[14vh] stone_Finish_Details_Mob-CONTAINER overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              {
                selected: userStore.preference.spec_4.includes('Medium'),
              },
            ]"
            @click="toggleSelect('Medium')"
          >
            <div
              v-show="userStore.preference.spec_4.includes('Medium')"
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
              placeholder
              loading="lazy"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/stone/stoneMedium.webp"
              alt="#"
            />
            <span>Medium</span>
          </div>
          <!-- Dark -->
          <div
            :class="[
              'h-[14vh] stone_Finish_Details_Mob-CONTAINER overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              {
                selected: userStore.preference.spec_4.includes('Dark'),
              },
            ]"
            @click="toggleSelect('Dark')"
          >
            <div
              v-show="userStore.preference.spec_4.includes('Dark')"
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
              placeholder
              loading="lazy"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/stone/stoneDark.webp"
              alt="#"
            />
            <span>Dark</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
// PINIA
const userStore = useUserStore();
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";
import useUserStore from "~/stores/user";

const { existingUser } = defineProps(["existingUser"]);

const selectedSurfaceFinish = ref("");
function clearSurfaceFinish() {
  selectedSurfaceFinish.value = "";
  userStore.preference.spec_4 = "";
}
const toggleSelect = (surface) => {
  // Ensure spec_4 is an array
  if (!Array.isArray(userStore.preference.spec_4)) {
    userStore.preference.spec_4 = [];
  }

  const index = userStore.preference.spec_4.indexOf(surface);

  // Clear the array before performing the rest of the operations
  userStore.preference.spec_4 = [];

  if (index !== -1) {
    userStore.preference.spec_4.splice(index, 1);
  } else {
    userStore.preference.spec_4.push(surface);
    existingUser ? scrollBy(600) : scrollToBottom();
  }
};
</script>

<style scoped>
.selected {
  border-radius: 2px; /* Adjust this value as needed */
  border: 3px solid #333; /* Adjust border color as needed */
}
</style>
