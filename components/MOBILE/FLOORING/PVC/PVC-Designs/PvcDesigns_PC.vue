<script setup>
// PINIA
import Mobile from "~/layouts/Mobile.vue";
const userStore = useUserStore();
import { ref } from "vue";
import Desktop from "~/layouts/Desktop.vue";
import useUserStore from "~/stores/user";

const selectedMaterial = ref("");
function clearMaterialSelections() {
  selectedMaterial.value = "";
  userStore.preference.spec_3 = "";
}

const toggleSelect = (material) => {
  if (selectedMaterial.value === material) {
    selectedMaterial.value = "";
    userStore.preference.spec_3 = "";
  } else {
    scrollToBottom();

    selectedMaterial.value = material;
    userStore.preference.spec_3 = toRaw(selectedMaterial.value);
  }
};
</script>

<template>
  <!-- DESKTOP -->
  <div
    class="max-[990px]:hidden h-max w-screen px-[6vw] pvcDesigns_Container_PC"
  >
    <transition @before-enter="handleDetailsDOMEntry('pvc_design_details_pc')">
      <div
        v-show="
          userStore.preference.flooring === 'PVC' &&
          userStore.preference.spec_1 !== '' &&
          userStore.preference.spec_2 !== ''
        "
        class="h-max w-full text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#f1f1f1] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <!-- DESKTOP -->
        <div class="h-max w-full flex justify-between text-[3.8vh] z-[9]">
          <span
            class="text-left text-balance pvc_design_details_pc-HEADING opacity-0 translate-x-[40%]"
            >Choose your Design</span
          >
          <button
            @click="clearMaterialSelections"
            v-show="userStore.preference.spec_3 !== ''"
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
          <!-- Plain -->
          <div
            :class="[
              'materialItem_PC overflow-hidden rounded-md h-[28vh] pvc_design_details_pc-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Plain' },
            ]"
            @click="toggleSelect('Plain')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Plain'"
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
            <span class="text-[3.2vh]">Plain</span>
          </div>
          <!-- DESKTOP -->
          <!-- Abstract -->
          <div
            v-show="userStore.preference.spec_3 === 'Abstract'"
            :class="[
              'materialItem_PC overflow-hidden rounded-md h-[28vh] pvc_design_details_pc-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Abstract' },
            ]"
            @click="toggleSelect('Abstract')"
          >
            <div
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
              src="/pvc/abstract-pvc.webp"
              alt="#"
            />
            <span class="text-[3.2vh]">Abstract</span>
          </div>
          <!-- Rugs -->
          <div
            v-show="userStore.preference.spec_3 === 'Rugs'"
            :class="[
              'materialItem_PC overflow-hidden rounded-md h-[28vh] pvc_design_details_pc-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Rugs' },
            ]"
            @click="toggleSelect('Rugs')"
          >
            <div
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
              src="/carpets/stripped.webp"
              alt="#"
            />
            <span class="text-[3.2vh]">Rugs</span>
          </div>

          <!-- DESKTOP -->
        </div>
        <div
          v-show="userStore.preference.spec_1 !== 'Woven Vinyl'"
          class="h-max w-full flex justify-between gap-[2vw] z-[9]"
        >
          <!-- Stone Effect -->
          <div
            :class="[
              'materialItem_PC overflow-hidden rounded-md h-[28vh] pvc_design_details_pc-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Stone Effect' },
            ]"
            @click="toggleSelect('Stone Effect')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Stone Effect'"
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
              src="/pvc/vinyl-stone.webp"
              alt="#"
            />
            <!-- DESKTOP -->
            <span class="text-[3.2vh]">Stone Effect</span>
          </div>

          <!-- Wood Effect -->
          <div
            :class="[
              'materialItem_PC overflow-hidden rounded-md h-[28vh] pvc_design_details_pc-CONTAINER opacity-0 translate-y-[20%] w-full  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.spec_3 === 'Wood Effect' },
            ]"
            @click="toggleSelect('Wood Effect')"
          >
            <div
              v-show="userStore.preference.spec_3 === 'Wood Effect'"
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
              class="h-full w-full object-bottom object-cover absolute left-0 bottom-0 z-[-9]"
              src="/pvc/wood-effect.webp"
              alt="#"
            />
            <span class="text-[3.2vh]">Wood Effect</span>
          </div>
          <!-- DESKTOP -->
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
