<template>
  <!-- MOBILE -->
  <transition
    @before-enter="handleDetailsDOMEntry('raised_Finishes_Details_Mob')"
  >
    <div
      v-show="
        userStore.preference.flooring === 'raised' &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        (userStore.preference.spec_3 === 'HPL' ||
          userStore.preference.spec_3 === 'PVC')
      "
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]"
    >
      <!-- MOBILE WOOD DESIGNS-->
      <div
        class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div class="h-max w-full flex justify-between text-[3.2vh] z-[9]">
          <!-- MOBILE -->
          <span
            class="text-left text-balance raised_Finishes_Details_Mob-HEADING opacity-0 translate-x-[40%]"
            >Choose your Finish</span
          >
          <button
            @click="clearAllSelections"
            v-show="userStore.preference.spec_4 !== ''"
            class="h-max bg-white text-gray-500 px-[1.2vw] py-[.8vh] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
          >
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
        <div
          class="relative w-full overflow-x-auto no-scrollbar select-none flex gap-[2vw]"
        >
          <!-- SLIDE 1 -->
          <div class="h-max w-full flex flex-col gap-[1vh]">
            <div class="w-[76vw] h-max flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Finish 1 -->
              <div
                :class="[
                  'h-[14vh] raised_Finishes_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_4 === 'Finish 1' },
                ]"
                @click="toggleSelect('Finish 1')"
              >
                <div
                  v-show="userStore.preference.spec_4 === 'Finish 1'"
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
                  v-show="userStore.preference.spec_3 === 'HPL'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/HPL-finish1.webp"
                  alt="#"
                />
                <NuxtImg
                  v-show="userStore.preference.spec_3 === 'PVC'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/PVC-finish1.webp"
                  alt="#"
                />
                <span>Finish 1</span>
              </div>
              <!-- MOBILE -->
              <!-- Finish 3 -->
              <div
                :class="[
                  'h-[14vh] raised_Finishes_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_4 === 'Finish 3' },
                ]"
                @click="toggleSelect('Finish 3')"
              >
                <div
                  v-show="userStore.preference.spec_4 === 'Finish 3'"
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
                  v-show="userStore.preference.spec_3 === 'HPL'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/HPL-finish3.webp"
                  alt="#"
                />
                <NuxtImg
                  v-show="userStore.preference.spec_3 === 'PVC'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/PVC-finish3.webp"
                  alt="#"
                />
                <span>Finish 3</span>
              </div>
            </div>
            <div class="h-max w-[76vw] flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Finish 2 -->
              <div
                :class="[
                  'h-[14vh] raised_Finishes_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_4 === 'Finish 2' },
                ]"
                @click="toggleSelect('Finish 2')"
              >
                <div
                  v-show="userStore.preference.spec_4 === 'Finish 2'"
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
                  v-show="userStore.preference.spec_3 === 'HPL'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/HPL-finish2.webp"
                  alt="#"
                />
                <NuxtImg
                  v-show="userStore.preference.spec_3 === 'PVC'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/PVC-finish2.webp"
                  alt="#"
                />
                <span>Finish 2</span>
              </div>
              <!-- MOBILE -->
              <!-- Finish 4 -->
              <div
                :class="[
                  'h-[14vh] raised_Finishes_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_4 === 'Finish 4' },
                ]"
                @click="toggleSelect('Finish 4')"
              >
                <div
                  v-show="userStore.preference.spec_4 === 'Finish 4'"
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
                  v-show="userStore.preference.spec_3 === 'HPL'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/HPL-finish4.webp"
                  alt="#"
                />
                <NuxtImg
                  v-show="userStore.preference.spec_3 === 'PVC'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/PVC-finish4.webp"
                  alt="#"
                />
                <!-- MOBILE -->
                <span>Finish 4</span>
              </div>
            </div>
          </div>
          <!-- SLIDE 2 -->
          <div class="h-max w-full flex flex-col gap-[1vh]">
            <div class="h-max w-[76vw] flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Custom I -->

              <!-- MOBILE -->
              <!-- Finish 5 -->
              <div
                :class="[
                  'h-[14vh] raised_Finishes_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_4 === 'Finish 5' },
                ]"
                @click="toggleSelect('Finish 5')"
              >
                <div
                  v-show="userStore.preference.spec_4 === 'Finish 5'"
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
                  v-show="userStore.preference.spec_3 === 'HPL'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/HPL-finish5.webp"
                  alt="#"
                />
                <NuxtImg
                  v-show="userStore.preference.spec_3 === 'PVC'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/PVC-finish5.webp"
                  alt="#"
                />
                <span>Finish 5</span>
              </div>

              <!-- MOBILE -->
              <div
                :class="[
                  'h-[14vh] raised_Finishes_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_4 === 'Finish 7' },
                ]"
                @click="toggleSelect('Finish 7')"
              >
                <div
                  v-show="userStore.preference.spec_4 === 'Finish 7'"
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
                  v-show="userStore.preference.spec_3 === 'HPL'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/HPL-finish7.webp"
                  alt="#"
                />
                <NuxtImg
                  v-show="userStore.preference.spec_3 === 'PVC'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/PVC-finish7.webp"
                  alt="#"
                />
                <!-- MOBILE -->
                <span>Finish 7</span>
              </div>
            </div>
            <div class="h-max w-[76vw] flex justify-between gap-[2vw] z-[9]">
              <div
                :class="[
                  'h-[14vh] raised_Finishes_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_4 === 'Finish 6' },
                ]"
                @click="toggleSelect('Finish 6')"
              >
                <div
                  v-show="userStore.preference.spec_4 === 'Finish 6'"
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
                  v-show="userStore.preference.spec_3 === 'HPL'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/HPL-finish6.webp"
                  alt="#"
                />
                <NuxtImg
                  v-show="userStore.preference.spec_3 === 'PVC'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/PVC-finish6.webp"
                  alt="#"
                />
                <span>Finish 6</span>
              </div>
              <div
                :class="[
                  'h-[14vh] raised_Finishes_Details_Mob-CONTAINER opacity-0 translate-y-[20%]  w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_4 === 'Finish 8' },
                ]"
                @click="toggleSelect('Finish 8')"
              >
                <div
                  v-show="userStore.preference.spec_4 === 'Finish 8'"
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
                  v-show="userStore.preference.spec_3 === 'HPL'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/HPL-finish8.webp"
                  alt="#"
                />
                <NuxtImg
                  v-show="userStore.preference.spec_3 === 'PVC'"
                  quality="50"
                  placeholder
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/raised/PVC-finish8.webp"
                  alt="#"
                />
                <span>Finish 8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { scrollToBottom } from "#imports";
// PINIA
const userStore = useUserStore();
// COOKIES
import useUserStore from "~/stores/user";

const spec_4 = ref("");

function clearAllSelections() {
  spec_4.value = "";
  userStore.preference.spec_4 = "";
}

const toggleSelect = (finish) => {
  userStore.preference.color = [];

  if (spec_4.value === finish) {
    spec_4.value = "";
    userStore.preference.spec_4 = "";
  } else {
    scrollToBottom();
    spec_4.value = finish;
    userStore.preference.spec_4 = toRaw(spec_4.value);
  }
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
