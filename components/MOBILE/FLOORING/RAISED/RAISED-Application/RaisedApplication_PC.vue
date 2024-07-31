<template>
  <!-- DESKTOP -->
  <div
    v-show="userStore.preference.spec_1 !== ''"
    class="gymActivitesPC max-[990px]:hidden h-max w-screen px-[6vw]"
  >
    <div
      class="h-max w-full text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <div
        class="h-max w-full flex items-center justify-between text-[3.8vh] z-[9]"
      >
        <span> Choose Your Application</span>
        <!-- DESKTOP -->
        <button
          @click="clearAllSelections"
          v-show="spec_2.length"
          class="h-max w-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
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
      <!-- Data Center -->
      <div
        v-show="userStore.preference.spec_1 === 'Data Center'"
        class="h-max w-full flex flex-col gap-[2vh]"
      >
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Server Rooms -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Server Rooms') },
            ]"
            @click="toggleSelect('Server Rooms')"
          >
            <div
              v-show="spec_2.includes('Server Rooms')"
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
              src="/raised/cardio.webp"
              alt="cardio"
            />
            <span class="text-[3.4vh]">Server Rooms</span>
          </div>

          <!-- DESKTOP -->
          <!-- Telecom Rooms  -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Telecom Rooms') },
            ]"
            @click="toggleSelect('Telecom Rooms')"
          >
            <div
              v-show="spec_2.includes('Telecom Rooms')"
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
              src="/raised/functionalTraining.webp"
              alt="Telecom Rooms"
            />
            <span class="text-[3.4vh]">Telecom Rooms</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Telecom Rooms -->
          <!-- DESKTOP -->
          <div
            :class="[
              'h-[28vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Telecom Rooms') },
            ]"
            @click="toggleSelect('Telecom Rooms')"
          >
            <div
              v-show="spec_2.includes('Telecom Rooms')"
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
              src="/raised/machineTraining.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Telecom Rooms</span>
          </div>

          <!-- DESKTOP -->
          <!-- Free Weights -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Free Weights') },
            ]"
            @click="toggleSelect('Free Weights')"
          >
            <div
              v-show="spec_2.includes('Free Weights')"
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
              src="/raised/freeWeights.webp"
              alt="freeWeights"
            />
            <!-- DESKTOP -->
            <span class="text-[3.4vh]">Free Weights</span>
          </div>
        </div>
      </div>
      <!-- Commercial -->
      <div
        v-show="userStore.preference.spec_1 === 'Commercial'"
        class="h-max w-full flex flex-col gap-[2vh]"
      >
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Offices -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Offices') },
            ]"
            @click="toggleSelect('Offices')"
          >
            <div
              v-show="spec_2.includes('Offices')"
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
              src="/raised/dance.webp"
              alt="dance"
            />
            <span class="text-[3.4vh]">Offices</span>
          </div>

          <!-- DESKTOP -->
          <!-- Retail  -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Retail') },
            ]"
            @click="toggleSelect('Retail')"
          >
            <div
              v-show="spec_2.includes('Retail')"
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
              src="/raised/fitness.webp"
              alt="Retail"
            />
            <span class="text-[3.4vh]">Retail</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Hospitality -->
          <!-- DESKTOP -->
          <div
            :class="[
              'h-[28vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Hospitality') },
            ]"
            @click="toggleSelect('Hospitality')"
          >
            <div
              v-show="spec_2.includes('Hospitality')"
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
              src="/raised/zumba.webp"
              alt="groupTraining"
            />
            <span class="text-[3.4vh]">Hospitality</span>
          </div>

          <!-- DESKTOP -->
          <!-- Public Area -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Public Area') },
            ]"
            @click="toggleSelect('Public Area')"
          >
            <div
              v-show="spec_2.includes('Public Area')"
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
              src="/raised/steps.webp"
              alt=""
            />
            <!-- DESKTOP -->
            <span class="text-[3.4vh]">Public Area</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- TRX -->
          <!-- DESKTOP -->
          <div
            :class="[
              'h-[28vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('TRX') },
            ]"
            @click="toggleSelect('TRX')"
          >
            <div
              v-show="spec_2.includes('TRX')"
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
              src="/raised/trxTraining.webp"
              alt=""
            />
            <span class="text-[3.4vh]">TRX</span>
          </div>

          <!-- DESKTOP -->
          <!-- Pilates -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Pilates') },
            ]"
            @click="toggleSelect('Pilates')"
          >
            <div
              v-show="spec_2.includes('Pilates')"
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
              src="/raised/pilates.webp"
              alt=""
            />
            <!-- DESKTOP -->
            <span class="text-[3.4vh]">Pilates</span>
          </div>
        </div>
      </div>
      <!-- Commercial -->
      <div
        v-show="userStore.preference.spec_1 === 'Commercial'"
        class="h-max w-full flex flex-col gap-[2vh]"
      >
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Schools -->
          <div
            :class="[
              'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2 === 'Schools' },
            ]"
            @click="toggleSelect('Schools')"
          >
            <div
              v-show="spec_2 === 'Schools'"
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
              src="/raised/rubberFlooring.webp"
              alt="#"
            />
            <span class="text-[3.2vh]">Schools</span>
          </div>
          <!-- Kitchens -->
          <div
            :class="[
              'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2 === 'Kitchens' },
            ]"
            @click="toggleSelect('Kitchens')"
          >
            <div
              v-show="spec_2 === 'Kitchens'"
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
              src="/raised/pvcGymFlooring.webp"
              alt="#"
            />
            <span class="text-[3.2vh]">Kitchens</span>
          </div>
          <!-- DESKTOP -->
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Basements -->
          <div
            :class="[
              'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2 === 'Basements' },
            ]"
            @click="toggleSelect('Basements')"
          >
            <div
              v-show="spec_2 === 'Basements'"
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
              src="/raised/woodenGymFlooring.webp"
              alt="#"
            />
            <!-- DESKTOP -->
            <span class="text-[3.2vh]">Basements</span>
          </div>
          <!-- DESKTOP -->
          <!-- Swimming -->
          <div
            :class="[
              'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2 === 'Swimming' },
            ]"
            @click="toggleSelect('Swimming')"
          >
            <div
              v-show="spec_2 === 'Swimming'"
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
              src="/40004.jpg"
              alt="#"
            />
            <span class="text-[3.2vh]">Swimming</span>
          </div>
          <!-- DESKTOP -->
        </div>
      </div>
      <!-- Industrial -->
      <div
        v-show="userStore.preference.spec_1 === 'Industrial'"
        class="h-max w-full flex flex-col gap-[2vh]"
      >
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Industrial Facilities -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Industrial Facilities') },
            ]"
            @click="toggleSelect('Industrial Facilities')"
          >
            <div
              v-show="spec_2.includes('Industrial Facilities')"
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
              src="/raised/weightLifting.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Industrial Facilities</span>
          </div>

          <!-- DESKTOP -->
          <!-- Food Processing  -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Food Processing') },
            ]"
            @click="toggleSelect('Food Processing')"
          >
            <div
              v-show="spec_2.includes('Food Processing')"
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
              src="/raised/powerLifting.webp"
              alt="Food Processing"
            />
            <span class="text-[3.4vh]">Food Processing</span>
          </div>
        </div>
      </div>
      <!-- Health Care -->
      <div
        v-show="userStore.preference.spec_1 === 'Health Care'"
        class="h-max w-full flex flex-col gap-[2vh]"
      >
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Clean Rooms -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Clean Rooms') },
            ]"
            @click="toggleSelect('Clean Rooms')"
          >
            <div
              v-show="spec_2.includes('Clean Rooms')"
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
              src="/raised/judo.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Clean Rooms</span>
          </div>

          <!-- DESKTOP -->
          <!-- Facility Rooms  -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Facility Rooms') },
            ]"
            @click="toggleSelect('Facility Rooms')"
          >
            <div
              v-show="spec_2.includes('Facility Rooms')"
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
              src="/raised/kickBoxing.webp"
              alt="Facility Rooms"
            />
            <span class="text-[3.4vh]">Facility Rooms</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Karate -->
          <!-- DESKTOP -->
          <div
            :class="[
              'h-[28vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Karate') },
            ]"
            @click="toggleSelect('Karate')"
          >
            <div
              v-show="spec_2.includes('Karate')"
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
              src="/raised/karate.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Karate</span>
          </div>

          <!-- DESKTOP -->
          <!-- Boxing -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Boxing') },
            ]"
            @click="toggleSelect('Boxing')"
          >
            <div
              v-show="spec_2.includes('Boxing')"
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
              src="/raised/boxing.webp"
              alt=""
            />
            <!-- DESKTOP -->
            <span class="text-[3.4vh]">Boxing</span>
          </div>
        </div>
        <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
          <!-- Taekwondo -->
          <!-- DESKTOP -->
          <div
            :class="[
              'h-[28vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Taekwondo') },
            ]"
            @click="toggleSelect('Taekwondo')"
          >
            <div
              v-show="spec_2.includes('Taekwondo')"
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
              src="/raised/taekwondo.webp"
              alt=""
            />
            <span class="text-[3.4vh]">Taekwondo</span>
          </div>

          <!-- DESKTOP -->
          <!-- Akido -->
          <div
            :class="[
              'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
              { selected: spec_2.includes('Akido') },
            ]"
            @click="toggleSelect('Akido')"
          >
            <div
              v-show="spec_2.includes('Akido')"
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
              src="/raised/akido.webp"
              alt="akido"
            />
            <!-- DESKTOP -->
            <span class="text-[3.4vh]">Akido</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// PINIA
import useUserStore from "~/stores/user";
const userStore = useUserStore();
// COOKIES
import { useCookie } from "#app";

const userPreference = useCookie("userPreference");
const spec_2 = ref("");

function clearAllSelections() {
  spec_2.value = "";
  userStore.preference.spec_2 = "";
}

const toggleSelect = (type) => {
  if (spec_2.value === type) {
    spec_2.value = "";
    userStore.preference.spec_2 = "";
  } else {
    scrollToBottom();
    spec_2.value = type;
    userStore.preference.spec_2 = toRaw(spec_2.value);
  }
};

onMounted(() => {});
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
