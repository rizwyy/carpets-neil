<template>
  <!-- MOBILE -->
  <transition
    @beforeEnter="handleDetailsDOMEntry('carpet_Materials_Details_Mob')"
    ><div
      id="carpetMaterialsContainerMOB"
      v-show="
        userStore.preference.spec_1 !== '' && userStore.preference.spec_2 !== ''
      "
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div class="h-max w-full flex justify-between text-[1.5rem] z-[9]">
          <!-- MOBILE -->
          <span
            class="text-left text-balance carpet_Materials_Details_Mob-HEADING opacity-0 translate-x-[40%] text-detailsHeadCLR"
            >Choose your Material</span
          >
          <button
            @click="clearMaterialSelections"
            v-show="userStore.preference.spec_3 !== ''"
            class="h-max bg-white text-gray-500 px-[1.2vw] py-[.8vh] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
          >
            Clear All<Icon icon="material-symbols:cancel-outline-rounded" />
          </button>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- MOBILE -->
          <!-- Poly Propene Carpets -->
          <div
            :class="[
              'h-[7.2rem] carpet_Materials_Details_Mob-CONTAINER opacity-0 translate-y-[20%] overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Economical' },
            ]"
            @click="toggleSelect('Economical')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Economical'"
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
            <span>Economical</span>
          </div>
          <!-- MOBILE -->
          <!-- Durable carpets -->
          <div
            :class="[
              'h-[7.2rem] carpet_Materials_Details_Mob-CONTAINER opacity-0 translate-y-[20%] overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Durable' },
            ]"
            @click="toggleSelect('Durable')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Durable'"
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
              src="/colors/snow.webp"
              alt="#"
            />
            <span>Durable</span>
          </div>
        </div>
        <div
          v-show="userStore.preference.spec_1 !== 'Carpet Tiles'"
          class="h-max w-full flex justify-between gap-[2vw] z-[9]"
        >
          <!-- MOBILE -->
          <!-- Natural -->
          <div
            :class="[
              'h-[7.2rem] carpet_Materials_Details_Mob-CONTAINER opacity-0 translate-y-[20%] overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Natural' },
            ]"
            @click="toggleSelect('Natural')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Natural'"
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
              src="/carpets/sisal.webp"
              alt="#"
            />
            <span>Natural</span>
          </div>
          <!-- MOBILE -->
          <!-- Luxury -->
          <div
            :class="[
              'h-[7.2rem] carpet_Materials_Details_Mob-CONTAINER opacity-0 translate-y-[20%] overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[1.2rem] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Luxury' },
            ]"
            @click="toggleSelect('Luxury')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Luxury'"
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
              src="/carpets/Durable-carpet.webp"
              alt="#"
            />
            <!-- MOBILE -->
            <span>Luxury</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
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

const toggleSelect = (material) => {
  userStore.preference.budget = "";

  if (selectedMaterial.value === material) {
    selectedMaterial.value = "";
    userStore.preference.spec_3 = "";
  } else {
    scrollToEl("carpetColorsContainerMOB");
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
