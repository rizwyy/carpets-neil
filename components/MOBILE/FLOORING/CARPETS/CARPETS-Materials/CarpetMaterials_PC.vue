<template>
  <!-- DESKTOP -->
  <div class="max-[990px]:hidden h-max w-screen px-[6vw]">
    <transition
      @beforeEnter="handleDetailsDOMEntry('carpets_Materials_Details_PC')"
    >
      <div
        v-show="
          userStore.preference.spec_1 !== '' &&
          userStore.preference.spec_2 !== ''
        "
        class="h-max w-full text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#f1f1f1] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <!-- DESKTOP -->
        <div class="h-max w-full flex justify-between text-[3.8vh] z-[9]">
          <span
            class="carpets_Materials_Details_PC-HEADING text-detailsContainer_heading_PC opacity-0 text-left text-balance translate-x-[40%]"
            >Choose your Material</span
          >
          <button
            @click="clearMaterialSelections"
            v-show="userStore.preference.spec_3 !== ''"
            class="h-max bg-white text-gray-500 px-[2vw] py-[.8vh] text-[2.8vh] rounded-md flex gap-[.4vw] items-center"
          >
            <span class="text-[2.2vh]">Clear All</span><ClearAllIcon />
          </button>
          <!-- DESKTOP -->
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Poly Propene Carpets -->
          <div
            :class="[
              ' rounded-md h-[28vh] carpets_Materials_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'polypropylene' },
            ]"
            @click="toggleSelectMaterials('polypropylene')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'polypropylene'"
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
              src="/carpets/Polypropylene.webp"
              alt="#"
            />
            <span class="text-[3.2vh]">Polypropylene</span>
          </div>
          <!-- nylon carpets -->
          <div
            :class="[
              ' rounded-md h-[28vh] carpets_Materials_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Nylon' },
            ]"
            @click="toggleSelectMaterials('Nylon')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Nylon'"
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
              src="/colors/snow.webp"
              alt="#"
            />
            <span class="text-[3.2vh]">Nylon</span>
          </div>
          <!-- DESKTOP -->
        </div>
        <div
          v-show="userStore.preference.spec_1 !== 'Carpet Tiles'"
          class="h-max w-full flex justify-between gap-[2vw] z-[9]"
        >
          <!-- Sisal -->
          <div
            v-show="userStore.preference.category !== 'Carpet Tiles'"
            :class="[
              ' rounded-md h-[28vh] carpets_Materials_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Sisal' },
            ]"
            @click="toggleSelectMaterials('Sisal')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Sisal'"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-gradient-to-bl from-[#0000] to-black from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <NuxtImg
              quality="50"
              placeholder
              loading="lazy"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/carpets/sisal.webp"
              alt="#"
            />
            <!-- DESKTOP -->
            <span class="text-[3.2vh]">Sisal</span>
          </div>
          <!-- DESKTOP -->
          <!-- Wool -->
          <div
            v-show="userStore.preference.category !== 'Carpet Tiles'"
            :class="[
              ' rounded-md h-[28vh] carpets_Materials_Details_PC-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Wool' },
            ]"
            @click="toggleSelectMaterials('Wool')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Wool'"
              class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
            >
              <!-- Selected indicator without text -->
              <span
                class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                >Selected</span
              >
            </div>
            <div
              class="h-full w-full bg-gradient-to-bl from-[#0000] to-black from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
            ></div>
            <NuxtImg
              quality="50"
              placeholder
              loading="lazy"
              class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
              src="/wool-carpet.webp"
              alt="#"
            />
            <span class="text-[3.2vh]">Wool</span>
          </div>
          <!-- DESKTOP -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
// PINIA
const userStore = useUserStore();
import { ref } from "vue";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";
const { existingUser } = defineProps(["existingUser"]);
import useUserStore from "~/stores/user";

const selectedMaterial = ref("");
function clearMaterialSelections() {
  selectedMaterial.value = "";
  userStore.preference.spec_3 = "";
}

const toggleSelectMaterials = (material) => {
  userStore.preference.budget = "";

  if (selectedMaterial.value === material) {
    selectedMaterial.value = "";
    userStore.preference.spec_3 = "";
  } else {
    existingUser ? scrollBy(500) : scrollToBottom();
    selectedMaterial.value = material;
    userStore.preference.spec_3 = toRaw(selectedMaterial.value);
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
