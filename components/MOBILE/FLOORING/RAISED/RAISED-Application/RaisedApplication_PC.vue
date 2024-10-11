<template>
  <!-- DESKTOP -->
  <div class="raisedActivitesPC h-max w-screen px-[6vw]">
    <transition
      @beforeEnter="handleDetailsDOMEntry('raised_Application_Details_PC')"
    >
      <div
        id="raisedApplicationContainerPC"
        v-show="userStore.preference.spec_1 !== ''"
        class="max-[990px]:hidden h-max w-full px-[3vw] text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6]"
      >
        <div
          class="raisedApplication_temp_div opacity-0 flex gap-[2vw] items-center invisible translate-y-[50%] h-max w-max py-[1.8vh] bg-black text-[#f1f1f1] fixed bottom-[2vh] z-[999] left-[50%] translate-x-[-50%] px-[4vw] rounded-md bg-opacity-[.4] backdrop-blur-[12px]"
        >
          <span>
            {{ userStore.preference.spec_2 }} is added as an Application
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="m4 8l2.05 1.64a.48.48 0 0 0 .4.1a.5.5 0 0 0 .34-.24L10 4"
              />
              <circle cx="7" cy="7" r="6.5" />
            </g>
          </svg>
        </div>
        <div
          class="h-max w-full flex items-center justify-between text-[3.8vh] z-[9] pb-[4vh]"
        >
          <span
            class="raised_Application_Details_PC-HEADING opacity-0 translate-x-[40%] text-detailsContainer_heading_PC"
          >
            Choose Your Application</span
          >
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
        <!-- SPECIFY OVERLAY -->
        <div class="h-max w-full relative flex flex-col gap-[1vh]">
          <transition @beforeEnter="bringOpacity('customApplicationOverlay')">
            <div
              v-show="userStore.preference.spec_1 === 'Others'"
              class="customApplicationOverlay opacity-0 h-full w-full bg-black bg-opacity-[.8] backdrop-blur-[8px] rounded-md absolute top-0 left-0 z-[99] flex items-center justify-center flex-col gap-[8vh]"
            >
              <div
                class="h-max w-[75%] flex-[2.4] flex justify-center items-center gap-[2vw] pt-[2vh]"
              >
                <span class="text-[#f1f1f1] text-[2.4vw] text-left"
                  >Add Custom Application</span
                >
              </div>
              <div
                class="h-max w-full flex-[2] flex items-center justify-center gap-[2vw]"
              >
                <input
                  maxlength="16"
                  @keyup.enter="toggleSelect(customApplication, 'showAddedMsg')"
                  class="h-[6vh] w-[50%] px-[4vw] bg-inherit outline-none focus:border-[#fff] rounded-t-md border-[#fff9] text-[2vw] border-b-[2px] text-[#fff] py-[2vh]"
                  type="text"
                  v-model="customApplication"
                  placeholder="Enter your Application"
                />
                <button @click="clearCustomApplication">
                  <svg
                    class="first:hover:fill-[#f1f1f1]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff9"
                      d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41z"
                    />
                  </svg>
                </button>
              </div>
              <div
                class="h-max w-full flex-[2.4] flex items-center items-center justify-center gap-[4vw] pb-[2vh]"
              >
                <button
                  v-show="customApplication.length < 3"
                  @click="cancelCustomApplication"
                  class="text-[1.2vw] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[1.8vh]"
                >
                  Cancel
                </button>
                <transition
                  @beforeEnter="
                    bringOpacity('raised_details_activity_mob_add_BTN')
                  "
                >
                  <button
                    v-show="customApplication.length > 2"
                    @click="toggleSelect(customApplication, 'showAddedMsg')"
                    class="raised_details_activity_mob_add_BTN text-[1.2vw] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[1.8vh]"
                  >
                    Add
                  </button>
                </transition>
              </div>
            </div>
          </transition>
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
                  src="/raised/raised-serverRooms.webp"
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
                  src="/raised/raised-telecomRooms.webp"
                  alt="Telecom Rooms"
                />
                <span class="text-[3.4vh]">Telecom Rooms</span>
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
                  src="/raised/raised-office.webp"
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
                  src="/raised/raised-retail.webp"
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
                  src="/raised/raised-hospitality.webp"
                  alt="Raised Hospitality Flooring"
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
                  src="/raised/raised-public.webp"
                  alt="#"
                />
                <!-- DESKTOP -->
                <span class="text-[3.4vh]">Public Area</span>
              </div>
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
                  src="/raised/raised-industryFlooring.webp"
                  alt="#"
                />
                <span class="text-[3.4vh]">Industrial Facilities</span>
              </div>

              <!-- DESKTOP -->
              <!-- Chemical Lab  -->
              <div
                :class="[
                  'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: spec_2.includes('Chemical Lab') },
                ]"
                @click="toggleSelect('Chemical Lab')"
              >
                <div
                  v-show="spec_2.includes('Chemical Lab')"
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
                  src="/raised/raised-lab4.webp"
                  alt="Chemical Lab"
                />
                <span class="text-[3.4vh]">Chemical Lab</span>
              </div>
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
                  src="/raised/raised-food.webp"
                  alt="Food Processing"
                />
                <span class="text-[3.4vh]">Food Processing</span>
              </div>
            </div>
          </div>
          <!-- Health Care -->
          <div
            v-show="userStore.preference.spec_1 === 'Healthcare'"
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
                  src="/raised/raised-cleanRooms.webp"
                  alt="#"
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
                  src="/raised/raised-facilityRooms.webp"
                  alt="Facility Rooms"
                />
                <span class="text-[3.4vh]">Facility Rooms</span>
              </div>
            </div>
          </div>
          <!-- ACTIVITIES -->
          <div
            v-show="
              userStore.preference.spec_1 === 'Activities' ||
              userStore.preference.spec_1 === 'Others'
            "
            class="h-max w-full flex flex-col gap-[2vh]"
          >
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- Schools -->
              <div
                :class="[
                  'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: spec_2.includes('Schools') },
                ]"
                @click="toggleSelect('Schools')"
              >
                <div
                  v-show="spec_2.includes('Schools')"
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
                  src="/raised/raised-schools.webp"
                  alt="#"
                />
                <span class="text-[3.4vh]">Schools</span>
              </div>

              <!-- DESKTOP -->
              <!-- Kitchens  -->
              <div
                :class="[
                  'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: spec_2.includes('Kitchens') },
                ]"
                @click="toggleSelect('Kitchens')"
              >
                <div
                  v-show="spec_2.includes('Kitchens')"
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
                  src="/raised/raised-kitchenFlooring.webp"
                  alt="Kitchens"
                />
                <span class="text-[3.4vh]">Kitchens</span>
              </div>
            </div>
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- Basements -->
              <div
                :class="[
                  'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: spec_2.includes('Basements') },
                ]"
                @click="toggleSelect('Basements')"
              >
                <div
                  v-show="spec_2.includes('Basements')"
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
                  src="/raised/raised-commercial.webp"
                  alt="#"
                />
                <span class="text-[3.4vh]">Basements</span>
              </div>

              <!-- DESKTOP -->
              <!-- Swimming  -->
              <div
                :class="[
                  'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                  { selected: spec_2.includes('Swimming') },
                ]"
                @click="toggleSelect('Swimming')"
              >
                <div
                  v-show="spec_2.includes('Swimming')"
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
                  src="/raised/raised-swimming.webp"
                  alt="Swimming"
                />
                <span class="text-[3.4vh]">Swimming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
// PINIA
const { existingUser } = defineProps(["existingUser"]);

import useUserStore from "~/stores/user";
const userStore = useUserStore();

const spec_2 = ref("");

const isCustomAreaOpted = ref(false);
const customApplication = ref("");
function clearCustomApplication() {
  customApplication.value = "";
}
function cancelCustomApplication() {
  isCustomAreaOpted.value = false;
  userStore.preference.spec_1 = "";
}

const toggleSelect = (type, msg) => {
  if (msg === "showAddedMsg") {
    handleTempAnimation("raisedApplication_temp_div");
  }
  if (spec_2.value === type) {
    spec_2.value = "";
    userStore.preference.spec_2 = "";
  } else {
    existingUser ? scrollBy(500) : scrollToBottom();
    spec_2.value = type;
    userStore.preference.spec_2 = toRaw(spec_2.value);
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
