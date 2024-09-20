<template>
  <!-- MOBILE -->
  <transition @before-enter="handleDetailsDOMEntry('mat_Activity_Details_Mob')">
    <div
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div
          class="h-max w-full flex items-center justify-between text-[3.2vh] tracking-[-.07vw] z-[9]"
        >
          <span
            class="text-left text-balance mat_Activity_Details_Mob-HEADING opacity-0 translate-x-[40%]"
          >
            Choose the Base
          </span>
          <button
            @click="clearAllSelections_spec1()"
            v-show="userStore.preference.spec_1 !== ''"
            class="h-max bg-white text-gray-500 text-detailsContainer_clearAllText_MOB px-[2vw] py-[.8vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
          >
            <!-- MOBILE -->
            Clear All<svg
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

        <!-- BOXES -->
        <div class="h-max w-full relative flex flex-col gap-[1vh]">
          <div class="overflow-x-auto whitespace-nowrap h-max w-full">
            <div class="h-max w-max flex space-x-[2vw]">
              <!-- SLIDE 1 -->
              <div class="h-max w-[80vw] flex flex-col gap-[1vh]">
                <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
                  <!-- Aluminum -->
                  <div
                    :class="[
                      'h-[14vh] mat_Activity_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full rounded-md overflow-hidden  text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                      { selected: spec_1.includes('Aluminum') },
                    ]"
                    @click="toggleSelect('Aluminum')"
                  >
                    <div
                      v-show="spec_1.includes('Aluminum')"
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
                      src="/mats/aluminum.webp"
                      alt="Aluminum"
                    />
                    <span>Aluminum</span>
                  </div>

                  <!-- Rubber -->
                  <div
                    :class="[
                      'h-[14vh] mat_Activity_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full rounded-md overflow-hidden  text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                      { selected: spec_1.includes('Rubber') },
                    ]"
                    @click="toggleSelect('Rubber')"
                  >
                    <div
                      v-show="spec_1.includes('Rubber')"
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
                      src="/mats/rubber.webp"
                      alt="Rubber"
                    />
                    <span>Rubber</span>
                  </div>
                </div>

                <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
                  <!-- PVC -->
                  <div
                    :class="[
                      'h-[14vh] mat_Activity_Details_Mob-CONTAINER overflow-hidden opacity-0 translate-y-[20%] w-full rounded-md overflow-hidden  text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                      { selected: spec_1.includes('PVC') },
                    ]"
                    @click="toggleSelect('PVC')"
                  >
                    <div
                      v-show="spec_1.includes('PVC')"
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
                      src="/mats/pvc.webp"
                      alt="PVC"
                    />
                    <span>PVC</span>
                  </div>
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
const { existingUser } = defineProps(["existingUser"]);

// PINIA
import useUserStore from "~/stores/user";
const userStore = useUserStore();
const customActivity = ref("");
const spec_1 = ref("");
const isCustomActivityOpted = ref(false);
function clearAllSelections_spec1() {
  spec_1.value = "";
  userStore.preference.spec_1 = "";
  isCustomActivityOpted.value = false;
  customActivity.value = "";
}

const toggleSelect = (type) => {
  isCustomActivityOpted.value = false;
  if (spec_1.value === type) {
    spec_1.value = "";
    userStore.preference.spec_1 = "";
  } else {
    existingUser ? scrollBy(500) : scrollToBottom();

    spec_1.value = type;
    userStore.preference.spec_1 = toRaw(spec_1.value);
  }
  userStore.preference.flooring = "mat";
  userStore.updateCart();
};
</script>

<style scoped>
.selected {
  border-radius: 0.375rem;
  border: 2px solid #333;
}
</style>
