<template>
  <!-- MOBILE -->
  <transition @before-enter="handleDetailsDOMEntry('stone_Type_Details_Mob')">
    <div
      v-show="userStore.preference.spec_1 !== ''"
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[5rem]"
    >
      <div
        class="h-max w-[96vw] text-center py-[2rem] flex flex-col gap-[.5rem] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div
          class="h-max w-full flex items-center justify-between text-[1.5rem] z-[9]"
        >
          <span
            class="text-left text-balance stone_Type_Details_Mob-HEADING opacity-0 translate-x-[40%]"
          >
            Choose Your Material
          </span>
          <button
            @click="clearAllSelections"
            v-show="spec_2.length"
            class="h-max bg-white text-gray-500 px-[1vw] py-[.4rem] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
          >
            Clear All<Icon icon="material-symbols:cancel-outline-rounded" />
          </button>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.4rem] text-[1.2rem] relative cursor-pointer',
              { selected: spec_2.includes('Granite') },
            ]"
            @click="toggleSelect('Granite')"
          >
            <div
              v-show="spec_2.includes('Granite')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
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
              src="/stone/stoneGranite.webp"
              alt="#"
            />
            <span class="text-left text-balance">Granite</span>
          </div>

          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.4rem] text-[1.2rem] relative cursor-pointer',
              { selected: spec_2.includes('Marble') },
            ]"
            @click="toggleSelect('Marble')"
          >
            <div
              v-show="spec_2.includes('Marble')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.9rem] rounded-md"
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
              src="/stone/stoneMarble.webp"
              alt="Marble stone Flooring by Woltiz"
            />
            <span class="text-left text-balance">Marble</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <div
            :class="[
              'h-[7.8rem] stone_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.4rem] text-[1.2rem] relative cursor-pointer',
              { selected: spec_2.includes('Porcelain') },
            ]"
            @click="toggleSelect('Porcelain')"
          >
            <div
              v-show="spec_2.includes('Porcelain')"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[.5rem]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[.8rem] rounded-md"
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
              src="/stone/stonePorcelain.webp"
              alt=""
            />
            <span class="text-left text-balance">Porcelain</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const { existingUser } = defineProps(["existingUser"]);

// PINIA
const userStore = useUserStore();
import { Icon } from "@iconify/vue/dist/iconify.js";
// COOKIES
import useUserStore from "~/stores/user";

const spec_2 = ref("");

function clearAllSelections() {
  spec_2.value = "";
  userStore.preference.spec_2 = "";
}

const toggleSelect = (category) => {
  if (spec_2.value === category) {
    spec_2.value = "";
    userStore.preference.spec_2 = "";
  } else {
    userStore.preference.color = [];
    existingUser ? scrollBy(500) : scrollToBottom();
    spec_2.value = category;
    userStore.preference.spec_2 = toRaw(spec_2.value);
  }
  console.log("Updated color array:", userStore.preference.color);
};

onMounted(() => {});
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
