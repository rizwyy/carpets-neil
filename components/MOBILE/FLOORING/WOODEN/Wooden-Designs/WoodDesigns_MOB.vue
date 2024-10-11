<template>
  <transition
    @before-enter="handleDetailsDOMEntry('wooden_Design_Details_Mob')"
  >
    <!-- MOBILE WOOD DESIGNS-->
    <div
      id="woodDesignContainerMOB"
      v-show="
        userStore.preference.flooring === 'Wooden' &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== ''
      "
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <div class="h-max w-full flex justify-between text-[1.5rem] z-[9]">
          <!-- MOBILE -->
          <span class="text-left text-balance wooden_Design_Details_Mob-HEADING"
            >Choose your Design</span
          >
          <button
            @click="clearMaterialSelections"
            v-show="userStore.preference.spec_3 !== ''"
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
          v-show="userStore.preference.spec_2 === 'Cork Floor'"
          class="h-max w-full flex flex-col gap-[1vh]"
        >
          <div class="w-[90vw] h-max flex justify-between gap-[2vw] z-[9]">
            <!-- MOBILE -->
            <!-- Planks -->
            <div
              :class="[
                'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: userStore.preference.spec_3 === 'Planks' },
              ]"
              @click="toggleSelect('Planks')"
            >
              <div
                v-show="userStore.preference.spec_3 === 'Planks'"
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
                v-show="userStore.preference.spec_2 !== 'Cork Floor'"
                quality="50"
                placeholder
                loading="lazy"
                class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                src="/wooden/plank-wood.webp"
                alt="#"
              />
              <NuxtImg
                quality="50"
                placeholder
                loading="lazy"
                class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                src="/wooden/cork-planks.webp"
                alt="#"
              />
              <span>Planks</span>
            </div>
            <!-- MOBILE -->
            <!-- Tiles -->
            <div
              :class="[
                'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: userStore.preference.spec_3 === 'Tiles' },
              ]"
              @click="toggleSelect('Tiles')"
            >
              <div
                v-show="userStore.preference.spec_3 === 'Tiles'"
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
                src="/wooden/wooden-cork1.webp"
                alt="#"
              />
              <span>Tiles</span>
            </div>
          </div>
        </div>
        <div
          v-show="!(userStore.preference.spec_2 === 'Cork Floor')"
          class="relative w-full overflow-x-auto no-scrollbar select-none flex gap-[2vw]"
        >
          <!-- SLIDE 1 -->
          <div class="h-max w-full flex flex-col gap-[1vh]">
            <div class="w-[76vw] h-max flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Plain Planks -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Plain Planks' },
                ]"
                @click="toggleSelect('Plain Planks')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Plain Planks'"
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
                  src="/wooden/plank-wood.webp"
                  alt="#"
                />
                <span>Plain Planks</span>
              </div>
              <!-- MOBILE -->
              <!-- Herringbone -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Herringbone' },
                ]"
                @click="toggleSelect('Herringbone')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Herringbone'"
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
                  src="/wooden/wooden-herringbone.webp"
                  alt="#"
                />
                <span>Herringbone</span>
              </div>
            </div>
            <div class="h-max w-[76vw] flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Chevron -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Chevron' },
                ]"
                @click="toggleSelect('Chevron')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Chevron'"
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
                  src="/wooden/wooden-chevron.webp"
                  alt="#"
                />
                <span>Chevron</span>
              </div>
              <!-- MOBILE -->
              <!-- Basket Weave -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Basket Weave' },
                ]"
                @click="toggleSelect('Basket Weave')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Basket Weave'"
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
                  src="/wooden/wooden-basketWeave.webp"
                  alt="#"
                />
                <!-- MOBILE -->
                <span>Basket Weave</span>
              </div>
            </div>
          </div>
          <!-- SLIDE 2 -->
          <div class="h-max w-full flex flex-col gap-[1vh]">
            <div class="h-max w-[76vw] flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Custom I -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Custom I' },
                ]"
                @click="toggleSelect('Custom I')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Custom I'"
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
                  src="/wooden/custom1.webp"
                  alt="#"
                />
                <span>Custom I</span>
              </div>
              <!-- MOBILE -->
              <!-- Custom II -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Custom II' },
                ]"
                @click="toggleSelect('Custom II')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Custom II'"
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
                  src="/wooden/custom2.webp"
                  alt="#"
                />
                <span>Custom II</span>
              </div>
            </div>
            <div class="h-max w-[76vw] flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Custom III -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Custom III' },
                ]"
                @click="toggleSelect('Custom III')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Custom III'"
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
                  src="/wooden/custom3.webp"
                  alt="#"
                />
                <span>Custom III</span>
              </div>
              <!-- MOBILE -->
              <!-- Custom IV -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Custom IV' },
                ]"
                @click="toggleSelect('Custom IV')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Custom IV'"
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
                  src="/wooden/custom4.webp"
                  alt="#"
                />
                <!-- MOBILE -->
                <span>Custom IV</span>
              </div>
            </div>
          </div>
          <!-- SLIDE 3 -->
          <div class="h-max w-full flex flex-col gap-[1vh]">
            <div class="h-max w-[76vw] flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Custom V -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Custom V' },
                ]"
                @click="toggleSelect('Custom V')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Custom V'"
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
                  src="/wooden/custom5.webp"
                  alt="#"
                />
                <span>Custom V</span>
              </div>
              <!-- MOBILE -->
              <!-- Custom VI -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Custom VI' },
                ]"
                @click="toggleSelect('Custom VI')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Custom VI'"
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
                  src="/wooden/custom6.webp"
                  alt="#"
                />
                <span>Custom VI</span>
              </div>
            </div>
            <div class="h-max w-[76vw] flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Custom VII -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Custom VII' },
                ]"
                @click="toggleSelect('Custom VII')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Custom VII'"
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
                  src="/wooden/custom7.webp"
                  alt="#"
                />
                <span>Custom VII</span>
              </div>
              <!-- MOBILE -->
              <!-- Custom VIII -->
              <div
                :class="[
                  'h-[7.2rem]  wooden_Design_Details_Mob-CONTAINER overflow-hidden w-full rounded-md  border-[2px] border-[#f1f1f1] flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: userStore.preference.spec_3 === 'Custom VIII' },
                ]"
                @click="toggleSelect('Custom VIII')"
              >
                <div
                  v-show="userStore.preference.spec_3 === 'Custom VIII'"
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
                  src="/wooden/custom8.webp"
                  alt="#"
                />
                <!-- MOBILE -->
                <span>Custom VIII</span>
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
const userStore = useUserStore();
import { ref } from "vue";
import useUserStore from "~/stores/user";

const { existingUser } = defineProps(["existingUser"]);

const selectedMaterial = ref("");
function clearMaterialSelections() {
  selectedMaterial.value = "";
  userStore.preference.spec_3 = "";
}

const toggleSelect = (material) => {
  if (userStore.preference.spec_3 === material) {
    selectedMaterial.value = "";
    userStore.preference.spec_3 = "";
  } else {
    scrollToEl("woodColorsContainerMOB");
    selectedMaterial.value = material;
    userStore.preference.spec_3 = toRaw(selectedMaterial.value);
    userStore.updateCart();
  }
};
</script>

<style scoped>
.selected {
  border-radius: 2px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
