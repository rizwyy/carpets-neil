<template>
  <!-- MOBILE -->
  <div
    v-if="userStore.preference.spec_1 !== ''"
    class="min-[990px]:hidden h-max w-[96vw] relative text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <div
      class="h-max w-full flex items-center justify-between text-[3.2vh] tracking-[-.07vw] z-[9]"
    >
      <span class="text-left text-balance"> Choose Your Activity </span>
      <button
        @click="clearAllSelections_spec2()"
        v-show="spec_2.length"
        class="h-max bg-white text-gray-500 text-clearAllMOB px-[2vw] py-[.8vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
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

    <!--INDOOR -->
    <div class="h-max w-full relative flex flex-col gap-[1vh]">
      <!-- SPECIFY OVERLAY -->
      <transition @beforeEnter="bringOpacity('customActivityOverlay')">
        <div
          v-show="isCustomActivityOpted"
          class="customActivityOverlay opacity-0 h-full w-full bg-black bg-opacity-[.7] backdrop-blur-[8px] rounded-md absolute top-0 left-0 z-[99] flex items-center justify-center flex-col gap-[4vh]"
        >
          <div
            class="h-max w-[75%] flex-[2.4] flex justify-center items-center gap-[2vw] pt-[2vh]"
          >
            <span class="text-[#f1f1f1] text-[3.2vh] text-left"
              >Add Custom Activity</span
            >
            <svg
              @click="clearAllSelections_spec2()"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f1f1f1"
                d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
          </div>
          <div class="h-max w-full flex-0">
            <input
              class="h-[6vh] w-[80%] px-[4vw] bg-[#fff2] border-[2px] rounded-md text-[#fff]"
              type="text"
              v-model="customActivity"
              placeholder="Enter your Color"
            />
          </div>
          <div
            class="h-max w-full flex-[2.4] flex items-start justify-center pb-[2vh]"
          >
            <transition
              @beforeEnter="bringOpacity('sports_details_activity_mob_add_BTN')"
            >
              <button
                v-show="customActivity.length > 2"
                @click="toggleSelect(customActivity)"
                class="sports_details_activity_mob_add_BTN text-[2vh] border-[2px] rounded-md px-[4vw] text-[#f1f1f1] border-[#f1f1f1] py-[1vh]"
              >
                Add
              </button>
            </transition>
          </div>
        </div>
      </transition>
      <div
        v-if="userStore.preference.spec_1 === 'Indoor'"
        class="overflow-x-auto whitespace-nowrap h-max w-full"
      >
        <div class="h-max w-max flex space-x-[2vw]">
          <!-- SLIDE 1 -->
          <div class="h-max w-[80vw] flex flex-col gap-[1vh]">
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Volleyball -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden  text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                  { selected: spec_2.includes('Martial Arts') },
                ]"
                @click="toggleSelect('Martial Arts')"
              >
                <div
                  v-show="spec_2.includes('Martial Arts')"
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
                  src="/gym/martialArts.webp"
                  alt=""
                />
                <span>Martial Arts</span>
              </div>

              <!-- MOBILE -->
              <!-- Badminton -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden  text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                  { selected: spec_2.includes('Badminton') },
                ]"
                @click="toggleSelect('Badminton')"
              >
                <div
                  v-show="spec_2.includes('Badminton')"
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
                  class="h-full w-full object-right object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/sports/badminton.webp"
                  alt="badminton"
                />
                <span>Badminton</span>
              </div>
            </div>
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Basketball -->
              <div
                :class="[
                  'h-[14vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Basketball') },
                ]"
                @click="toggleSelect('Basketball')"
              >
                <div
                  v-show="spec_2.includes('Basketball')"
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
                  src="/sports/basketball.webp"
                  alt="basketball"
                />
                <span>Basketball</span>
              </div>

              <!-- MOBILE -->
              <!-- Squash -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden   border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Squash') },
                ]"
                @click="toggleSelect('Squash')"
              >
                <div
                  v-show="spec_2.includes('Squash')"
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
                  src="/sports/squash.webp"
                  alt=""
                />
                <span>Squash</span>
              </div>
            </div>
          </div>
          <!-- SLIDE 2 -->
          <div class="h-max w-[80vw] flex flex-col gap-[1vh]">
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Volleyball -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden   border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Volleyball') },
                ]"
                @click="toggleSelect('Volleyball')"
              >
                <div
                  v-show="spec_2.includes('Volleyball')"
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
                  src="/sports/volleyBallIndoor.webp"
                  alt=""
                />
                <span>Volleyball</span>
              </div>

              <!-- MOBILE -->
              <!-- Futsal -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden  text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                  { selected: spec_2.includes('Futsal') },
                ]"
                @click="toggleSelect('Futsal')"
              >
                <div
                  v-show="spec_2.includes('Futsal')"
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
                  src="/sports/futsal.webp"
                  alt="futsal"
                />
                <span>Futsal</span>
              </div>
            </div>
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Handball -->
              <div
                :class="[
                  'h-[14vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Handball') },
                ]"
                @click="toggleSelect('Handball')"
              >
                <div
                  v-show="spec_2.includes('Handball')"
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
                  src="/sports/handball.webp"
                  alt="handball"
                />
                <span>Handball</span>
              </div>

              <!-- MOBILE -->
              <!-- Table Tennis -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden   border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Table Tennis') },
                ]"
                @click="toggleSelect('Table Tennis')"
              >
                <div
                  v-show="spec_2.includes('Table Tennis')"
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
                  src="/sports/tableTennis.webp"
                  alt="Table Tennis"
                />
                <span>Table Tennis</span>
              </div>
            </div>
          </div>
          <!-- SLIDE 3 -->
          <div class="h-max w-[60vw] flex flex-col gap-[1vh]">
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Multi-Sport -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden   border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Multi-Sport') },
                ]"
                @click="toggleSelect('Multi-Sport')"
              >
                <div
                  v-show="spec_2.includes('Multi-Sport')"
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
                  src="/sports/multiSport.webp"
                  alt="multiSport "
                />
                <span>Multi-Sport</span>
              </div>
            </div>
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Others: Specify -->
              <div
                :class="[
                  'h-[14vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: customActivity > 2 },
                ]"
                @click="() => (isCustomActivityOpted = true)"
              >
                <div
                  v-show="customActivity > 2"
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
                  src="/gym/freeWeights.webp"
                  alt=""
                />
                <span>Others: Specify</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- OUTDOOR -->
      <div
        v-if="userStore.preference.spec_1 === 'Outdoor'"
        class="overflow-x-auto whitespace-nowrap h-max w-full"
      >
        <div class="h-max w-max flex space-x-[2vw]">
          <!-- SLIDE 1 -->
          <div class="h-max w-[80vw] flex flex-col gap-[1vh]">
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Tracks -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden   border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Tracks') },
                ]"
                @click="toggleSelect('Tracks')"
              >
                <div
                  v-show="spec_2.includes('Tracks')"
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
                  class="h-full w-full object-bottom object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/sports/outdoor.webp"
                  alt=""
                />
                <span>Tracks</span>
              </div>

              <!-- MOBILE -->
              <!-- Football -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                  { selected: spec_2.includes('Football') },
                ]"
                @click="toggleSelect('Football')"
              >
                <div
                  v-show="spec_2.includes('Football')"
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
                  src="/sports/footballOutdoor.webp"
                  alt="footballOutdoor"
                />
                <span>Football</span>
              </div>
            </div>
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Tennis -->
              <div
                :class="[
                  'h-[14vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Tennis') },
                ]"
                @click="toggleSelect('Tennis')"
              >
                <div
                  v-show="spec_2.includes('Tennis')"
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
                  src="/sports/tennis.webp"
                  alt="tennis"
                />
                <span>Tennis</span>
              </div>

              <!-- MOBILE -->
              <!-- Basketball -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md  overflow-hidden  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Basketball') },
                ]"
                @click="toggleSelect('Basketball')"
              >
                <div
                  v-show="spec_2.includes('Basketball')"
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
                  class="h-full w-full object-left object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/sports/basketBallOutdoor.webp"
                  alt="#"
                />
                <span>Basketball</span>
              </div>
            </div>
          </div>
          <!-- SLIDE 2 -->
          <div class="h-max w-[80vw] flex flex-col gap-[1vh]">
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Hockey -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden   border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Hockey') },
                ]"
                @click="toggleSelect('Hockey')"
              >
                <div
                  v-show="spec_2.includes('Hockey')"
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
                  src="/sports/hockey.webp"
                  alt=""
                />
                <span>Hockey</span>
              </div>

              <!-- MOBILE -->
              <!-- Pickleball -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden  text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
                  { selected: spec_2.includes('Pickleball') },
                ]"
                @click="toggleSelect('Pickleball')"
              >
                <div
                  v-show="spec_2.includes('Pickleball')"
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
                  loading="lazy"
                  class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/sports/Pickleball.webp"
                  alt=""
                />
                <span>Pickleball</span>
              </div>
            </div>
            <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
              <!-- MOBILE -->
              <!-- Padel -->
              <div
                :class="[
                  'h-[14vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Padel') },
                ]"
                @click="toggleSelect('Padel')"
              >
                <div
                  v-show="spec_2.includes('Padel')"
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
                  src="/sports/padel.webp"
                  alt=""
                />
                <span>Padel</span>
              </div>

              <!-- MOBILE -->
              <!-- Volleyball -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden   border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Volleyball') },
                ]"
                @click="toggleSelect('Volleyball')"
              >
                <div
                  v-show="spec_2.includes('Volleyball')"
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
                  src="/sports/volleyBallOutdoor.webp"
                  alt=""
                />
                <span>Volleyball</span>
              </div>
            </div>
          </div>
          <!-- SLIDE 3 -->
          <div class="h-max w-[60vw] flex flex-col gap-[1vh]">
            <div
              class="h-max w-full flex flex-col justify-between gap-[2vw] z-[9]"
            >
              <!-- MOBILE -->
              <!-- Multi-Sport -->
              <div
                :class="[
                  'h-[14vh] w-full rounded-md overflow-hidden   border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: spec_2.includes('Multi-Sport') },
                ]"
                @click="toggleSelect('Multi-Sport')"
              >
                <div
                  v-show="spec_2.includes('Multi-Sport')"
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
                  src="/sports/multiSport.webp"
                  alt=""
                />
                <span>Multi-Sport</span>
              </div>
              <div
                :class="[
                  'h-[14vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
                  { selected: customActivity > 2 },
                ]"
                @click="() => (isCustomActivityOpted = true)"
              >
                <div
                  v-show="customActivity > 2"
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
                  class="h-full object-top w-full object-cover absolute left-0 bottom-0 z-[-9]"
                  src="/sports/outdoor.webp"
                  alt=""
                />
                <span>Others: Specify</span>
              </div>
            </div>
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
const customActivity = ref("");
const spec_2 = ref("");
const isCustomActivityOpted = ref(false);
function clearAllSelections_spec2() {
  spec_2.value = "";
  userStore.preference.spec_2 = "";
  isCustomActivityOpted.value = false;
  customActivity.value = "";
}

const toggleSelect = (type) => {
  isCustomActivityOpted.value = false;
  if (spec_2.value === type) {
    spec_2.value = "";
    userStore.preference.spec_2 = "";
  } else {
    scrollToBottom();
    spec_2.value = type;
    userStore.preference.spec_2 = toRaw(spec_2.value);
  }
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
