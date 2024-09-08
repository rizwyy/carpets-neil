<template>
  <!-- DESKTOP -->
  <transition @beforeEnter="handleDetailsDOMEntry('carpets_Types_Details_PC')">
    <div
      v-show="userStore.preference.spec_1 !== ''"
      class="max-[990px]:hidden h-max w-screen px-[6vw]"
    >
      <div
        class="h-max w-full text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div class="h-max w-full flex items-center justify-between z-[9]">
          <span
            class="text-left text-detailsContainer_heading_PC text-balance carpets_Types_Details_PC-HEADING opacity-0 translate-x-[40%]"
          >
            Choose Your Type
          </span>
          <!-- DESKTOP -->
          <button
            @click="clearAllSelections"
            v-show="userStore.preference.spec_2.length"
            class="h-max w-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-[2.8vh] rounded-md flex gap-[.4vw] items-center"
          >
            <span class="text-[2.2vh]">Clear All</span><ClearAllIcon />
          </button>
          <!-- DESKTOP -->
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Solid -->
          <div
            :class="[
              'carpets_Types_Details_PC-CONTAINER overflow-hidden opacity-0 translate-y-[20%] h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_2.includes('Plain') },
            ]"
            @click="toggleSelect('Plain')"
          >
            <div
              v-show="userStore.preference.spec_2.includes('Plain')"
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
            <!-- DESKTOP -->
            <NuxtImg
              quality="50"
              placeholder
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/colors/snow.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Plain</span>
          </div>

          <!-- DESKTOP -->
          <!-- Textured -->
          <div
            v-show="userStore.preference.category !== 'Carpet Tiles'"
            :class="[
              'carpets_Types_Details_PC-CONTAINER overflow-hidden opacity-0 translate-y-[20%] h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_2.includes('Textured') },
            ]"
            @click="toggleSelect('Textured')"
          >
            <div
              v-show="userStore.preference.spec_2.includes('Textured')"
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
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/texturedCarpet.webp"
              alt="Textured"
            />
            <span class="text-[3.4vh]">Textured</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Designed -->
          <!-- DESKTOP -->
          <div
            :class="[
              'carpets_Types_Details_PC-CONTAINER overflow-hidden opacity-0 translate-y-[20%] h-[28vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_2.includes('Patterned') },
            ]"
            @click="toggleSelect('Patterned')"
          >
            <div
              v-show="userStore.preference.spec_2.includes('Patterned')"
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
              preload
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/carpets/patterned.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Patterned</span>
          </div>

          <!-- DESKTOP -->
          <!-- Customized -->
          <div
            :class="[
              'carpets_Types_Details_PC-CONTAINER overflow-hidden opacity-0 translate-y-[20%] h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_2.includes('Stripped') },
            ]"
            @click="toggleSelect('Stripped')"
          >
            <div
              v-show="userStore.preference.spec_2.includes('Stripped')"
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
              loading="eager"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/carpets/stripped.webp"
              alt=""
            />
            <!-- DESKTOP -->
            <span class="text-[3.4vh]">Stripped</span>
          </div>
        </div>
        <div>
          <!-- <RainBowBTN /> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";

// PINIA

const userStore = useUserStore();
// COOKIES
import useUserStore from "~/stores/user";
const selectedType = ref("");

const { existingUser } = defineProps(["existingUser"]);

function clearAllSelections() {
  spec_2.value = "";
  userStore.preference.spec_2 = "";
}

const toggleSelect = (type) => {
  if (selectedType.value === type) {
    selectedType.value = "";
    userStore.preference.spec_2 = "";
  } else {
    existingUser ? scrollBy(500) : scrollToBottom();
    selectedType.value = type;
    userStore.preference.spec_2 = toRaw(selectedType.value);
    userStore.updateCart();
  }
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
