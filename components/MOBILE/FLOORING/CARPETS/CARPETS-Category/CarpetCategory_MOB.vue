<template>
  <!-- MOBILE -->
  <div class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]">
    <div
      class="carpets_Category_Details_Mob h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <div
        class="h-max w-full flex items-center justify-between text-[3.2vh] z-[9]"
      >
        <span
          class="text-left text-balance carpet_Category_Details_Mob-HEADING text-detailsHeadCLR"
        >
          Choose Your Category
        </span>
        <button
          @click="clearAllSelections"
          v-show="userStore.preference.spec_1.length"
          class="h-max bg-white text-gray-500 px-[1vw] py-[.8vh] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
        >
          Clear All<ClearAllIcon />
        </button>
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- Wall To Wall -->
        <div
          :class="[
            'h-[14vh] carpet_Category_Details_Mob-CONTAINER overflow-hidden w-full rounded-md border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            {
              selected: userStore.preference.spec_1.includes('Wall to Wall'),
            },
          ]"
          @click="toggleSelect('Wall to Wall')"
        >
          <div
            v-show="userStore.preference.spec_1.includes('Wall to Wall')"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh] rounded-md"
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/wall-to-wall.webp"
            alt=""
          />
          <span>Wall to Wall</span>
        </div>

        <!-- Carpet Tiles -->
        <div
          :class="[
            'h-[14vh] carpet_Category_Details_Mob-CONTAINER overflow-hidden w-full rounded-md border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            {
              selected: userStore.preference.spec_1.includes('Carpet Tiles'),
            },
          ]"
          @click="toggleSelect('Carpet Tiles')"
        >
          <div
            v-show="userStore.preference.spec_1.includes('Carpet Tiles')"
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/carpet-tiles.webp"
            alt=""
          />
          <span>Carpet Tiles</span>
        </div>
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- Area Rugs -->
        <div
          :class="[
            'h-[14vh] carpet_Category_Details_Mob-CONTAINER overflow-hidden rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            { selected: userStore.preference.spec_1.includes('Area Rugs') },
          ]"
          @click="toggleSelect('Area Rugs')"
        >
          <div
            v-show="userStore.preference.spec_1.includes('Area Rugs')"
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/area-rugs.webp"
            alt=""
          />
          <span>Area Rugs</span>
        </div>

        <!-- Customized -->
        <div
          :class="[
            'h-[14vh] carpet_Category_Details_Mob-CONTAINER overflow-hidden w-full rounded-md border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            { selected: userStore.preference.spec_1.includes('Runners') },
          ]"
          @click="toggleSelect('Runners')"
        >
          <div
            v-show="userStore.preference.spec_1.includes('Runners')"
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/runners.webp"
            alt=""
          />
          <span>Runners</span>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";

// PINIA

import useUserStore from "~/stores/user";
const userStore = useUserStore();
// COOKIES

const { existingUser } = defineProps(["existingUser"]);

const spec_1 = ref("");

function clearAllSelections() {
  spec_1.value = "";
  userStore.preference.spec_1 = "";
}

const toggleSelect = (category) => {
  if (spec_1.value === category) {
    spec_1.value = "";
    userStore.preference.spec_1 = "";
  } else {
    existingUser ? scrollBy(500) : scrollToBottom();

    spec_1.value = category;
    userStore.preference.spec_1 = toRaw(spec_1.value);
    userStore.preference.flooring = "Carpets";
    userStore.preference.budget = "";
    userStore.preference.spec_3 = "";
  }
  userStore.updateCart();
};
</script>

<style scoped>
.selected {
  border-radius: 0.375rem; /* Adjust this value as needed */
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
