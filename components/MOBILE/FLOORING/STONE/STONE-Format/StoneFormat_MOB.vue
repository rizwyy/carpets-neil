<template>
  <!-- MOBILE -->
  <div class="min-[990px]:hidden h-max w-screen flex justify-center pb-[5rem]">
    <div
      id="stoneFormatContainerMOB"
      class="h-max w-[96vw] text-center py-[2rem] flex flex-col gap-[.5rem] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <div
        class="h-max w-full flex items-center justify-between text-[1.5rem] z-[9]"
      >
        <span class="text-left text-balance"> Choose Your Format </span>
        <button
          @click="clearAllSelections"
          v-show="spec_1.length"
          class="h-max bg-white text-gray-500 px-[1vw] py-[.4rem] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
        >
          Clear All
          <Icon icon="material-symbols:cancel-outline-rounded" />
        </button>
      </div>

      <!-- Flooring Options -->
      <div class="h-max w-full grid grid-cols-2 gap-[3.2vw]">
        <div
          class="h-max w-full z-[9]"
          v-for="floor in floors"
          :key="floor.name"
        >
          <div
            :class="[
              'h-[7.8rem] w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.4rem]  relative cursor-pointer',
              { selected: spec_1.includes(floor.name) },
            ]"
            @click="toggleSelect(floor.name)"
          >
            <div
              v-show="spec_1.includes(floor.name)"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.8rem] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <NuxtImg
              :src="floor.image"
              preload
              quality="50"
              placeholder
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              :alt="floor.name"
            />
            <span class="text-left text-balance text-[1.2rem]">{{
              floor.name
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
const { existingUser } = defineProps(["existingUser"]);

import { Icon } from "@iconify/vue/dist/iconify.js";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";
// PINIA Store
import useUserStore from "~/stores/user";
const userStore = useUserStore();

// Flooring types data
const floors = [
  { name: "Tiles", image: "/stone/stoneTiles.webp" },
  { name: "Slabs", image: "/stone/stoneSlabs.webp" },
];

// State for selected flooring
const spec_1 = ref("");

// Functions
function clearAllSelections() {
  spec_1.value = "";
  userStore.preference.spec_1 = "";
}

const toggleSelect = (category) => {
  if (spec_1.value === category) {
    spec_1.value = "";
    userStore.preference.spec_1 = "";
  } else {
    scrollToEl("stoneMaterialContainerMOB");
    spec_1.value = category;
    userStore.preference.spec_1 = toRaw(spec_1.value);
    userStore.preference.spec_2 = "";
    userStore.preference.flooring = "stone";
  }
};

onMounted(() => {});
</script>

<style scoped>
.selected {
  border: 2px solid #333;
  border-radius: 0.375rem;
}
</style>
