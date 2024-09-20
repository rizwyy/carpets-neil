<template>
  <!-- MOBILE -->
  <transition @before-enter="handleDetailsDOMEntry('mat_Type_Details_Mob')">
    <div
      v-show="userStore.preference.mat === 'mat'"
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div class="h-max w-full flex justify-between text-[3.2vh] z-[9]">
          <!-- MOBILE -->
          <span
            class="text-left text-balance mat_Type_Details_Mob-HEADING opacity-0 translate-x-[40%]"
          >
            Choose Type
          </span>
          <button
            @click="clearMaterialSelections"
            v-show="userStore.preference.spec_3 !== ''"
            class="h-max bg-white text-gray-500 px-[1.2vw] py-[.8vh] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
          >
            Clear All
            <svg
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

        <!-- MAT TYPES -->
        <div class="overflow-x-auto whitespace-nowrap h-max w-full">
          <div class="h-max w-max flex space-x-[2vw]">
            <!-- SLIDE 1 -->
            <div class="h-max w-[80vw] flex flex-col gap-[1vh]">
              <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
                <!-- MOBILE -->
                <!-- Solid -->
                <div
                  :class="[
                    'h-[14vh] mat_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full rounded-md text-left leading-[3.4vh] border-[2px] border-[#f1f1f1] w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                    { selected: userStore.preference.spec_3.includes('Solid') },
                  ]"
                  @click="toggleSelect('Solid')"
                >
                  <div
                    v-show="userStore.preference.spec_3.includes('Solid')"
                    class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
                  >
                    <span
                      class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                    >
                      Selected
                    </span>
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
                    src="/mats/solidMat.webp"
                    alt="Solid Mat"
                  />
                  <span>Solid</span>
                </div>

                <!-- MOBILE -->
                <!-- Printed -->
                <div
                  :class="[
                    'h-[14vh] mat_Type_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full rounded-md text-left leading-[3.4vh] border-[2px] border-[#f1f1f1] w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                    {
                      selected: userStore.preference.spec_3.includes('Printed'),
                    },
                  ]"
                  @click="toggleSelect('Printed')"
                >
                  <div
                    v-show="userStore.preference.spec_3.includes('Printed')"
                    class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
                  >
                    <span
                      class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
                    >
                      Selected
                    </span>
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
                    src="/mats/printedMat.webp"
                    alt="Printed Mat"
                  />
                  <span>Printed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
// PINIA
const { existingUser } = defineProps(["existingUser"]);

const userStore = useUserStore();
import useUserStore from "~/stores/user";

const spec_3 = ref("");
function clearMaterialSelections() {
  spec_3.value = "";
  userStore.preference.spec_3 = "";
}

const toggleSelect = (type) => {
  if (spec_3.value === type) {
    spec_3.value = "";
    userStore.preference.spec_3 = "";
  } else {
    existingUser ? scrollBy(500) : scrollToBottom();

    spec_3.value = type;
    userStore.preference.spec_3 = toRaw(spec_3.value);
  }
  userStore.updateCart();
};
</script>

<style scoped>
.selected {
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
