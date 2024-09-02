<template>
  <!-- DESKTOP -->
  <transition @beforeEnter="handleDetailsDOMEntry('gym_Activity_Details_PC')">
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
          <span
            class="gym_Activity_Details_PC-HEADING opacity-0 translate-x-[40%]"
          >
            Choose Your Activity
          </span>
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
        <!-- FITNESS -->
        <div
          v-show="userStore.preference.spec_1 === 'Fitness'"
          class="h-max w-full flex flex-col gap-[2vh]"
        >
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Cardio -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Cardio') },
              ]"
              @click="toggleSelect('Cardio')"
            >
              <div
                v-show="spec_2.includes('Cardio')"
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
                src="/gym/cardio.webp"
                alt="cardio"
              />
              <span class="text-[3.4vh]">Cardio</span>
            </div>

            <!-- DESKTOP -->
            <!-- Functional Training  -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Functional Training') },
              ]"
              @click="toggleSelect('Functional Training')"
            >
              <div
                v-show="spec_2.includes('Functional Training')"
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
                src="/gym/functionalTraining.webp"
                alt="Functional Training"
              />
              <span class="text-[3.4vh]">Functional Training</span>
            </div>
          </div>
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Machine Training -->
            <!-- DESKTOP -->
            <div
              :class="[
                'h-[28vh] rounded-md gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%]  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Machine Training') },
              ]"
              @click="toggleSelect('Machine Training')"
            >
              <div
                v-show="spec_2.includes('Machine Training')"
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
                src="/gym/machineTraining.webp"
                alt=""
              />
              <span class="text-[3.4vh]">Machine Training</span>
            </div>

            <!-- DESKTOP -->
            <!-- Free Weights -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
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
                src="/gym/freeWeights.webp"
                alt="freeWeights"
              />
              <!-- DESKTOP -->
              <span class="text-[3.4vh]">Free Weights</span>
            </div>
          </div>
        </div>
        <!-- GROUP TRAINING -->
        <div
          v-show="userStore.preference.spec_1 === 'Group Training'"
          class="h-max w-full flex flex-col gap-[2vh]"
        >
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Dance -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Dance') },
              ]"
              @click="toggleSelect('Dance')"
            >
              <div
                v-show="spec_2.includes('Dance')"
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
                src="/gym/dance.webp"
                alt="dance"
              />
              <span class="text-[3.4vh]">Dance</span>
            </div>

            <!-- DESKTOP -->
            <!-- Aerobic  -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Aerobic') },
              ]"
              @click="toggleSelect('Aerobic')"
            >
              <div
                v-show="spec_2.includes('Aerobic')"
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
                src="/gym/fitness.webp"
                alt="Aerobic"
              />
              <span class="text-[3.4vh]">Aerobic</span>
            </div>
          </div>
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Zumba -->
            <!-- DESKTOP -->
            <div
              :class="[
                'h-[28vh] rounded-md gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%]  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Zumba') },
              ]"
              @click="toggleSelect('Zumba')"
            >
              <div
                v-show="spec_2.includes('Zumba')"
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
                src="/gym/zumba.webp"
                alt="groupTraining"
              />
              <span class="text-[3.4vh]">Zumba</span>
            </div>

            <!-- DESKTOP -->
            <!-- Step -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Step') },
              ]"
              @click="toggleSelect('Step')"
            >
              <div
                v-show="spec_2.includes('Step')"
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
                src="/gym/steps.webp"
                alt=""
              />
              <!-- DESKTOP -->
              <span class="text-[3.4vh]">Step</span>
            </div>
          </div>
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- TRX -->
            <!-- DESKTOP -->
            <div
              :class="[
                'h-[28vh] rounded-md gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%]  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
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
                src="/gym/trxTraining.webp"
                alt=""
              />
              <span class="text-[3.4vh]">TRX</span>
            </div>

            <!-- DESKTOP -->
            <!-- Pilates -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
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
                src="/gym/pilates.webp"
                alt=""
              />
              <!-- DESKTOP -->
              <span class="text-[3.4vh]">Pilates</span>
            </div>
          </div>
        </div>
        <!-- STRENGTH & CONDITIONING -->
        <div
          v-show="userStore.preference.spec_1 === 'Strength'"
          class="h-max w-full flex flex-col gap-[2vh]"
        >
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Weightlifting -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Weightlifting') },
              ]"
              @click="toggleSelect('Weightlifting')"
            >
              <div
                v-show="spec_2.includes('Weightlifting')"
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
                src="/gym/weightLifting.webp"
                alt=""
              />
              <span class="text-[3.4vh]">Weightlifting</span>
            </div>

            <!-- DESKTOP -->
            <!-- Powerlifting  -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Powerlifting') },
              ]"
              @click="toggleSelect('Powerlifting')"
            >
              <div
                v-show="spec_2.includes('Powerlifting')"
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
                src="/gym/powerLifting.webp"
                alt="Powerlifting"
              />
              <span class="text-[3.4vh]">Powerlifting</span>
            </div>
          </div>
        </div>
        <!-- MARTIAL ARTS -->
        <div
          v-show="userStore.preference.spec_1 === 'Martial Arts'"
          class="h-max w-full flex flex-col gap-[2vh]"
        >
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Judo -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Judo') },
              ]"
              @click="toggleSelect('Judo')"
            >
              <div
                v-show="spec_2.includes('Judo')"
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
                src="/gym/judo.webp"
                alt=""
              />
              <span class="text-[3.4vh]">Judo</span>
            </div>

            <!-- DESKTOP -->
            <!-- Kickboxing  -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_2.includes('Kickboxing') },
              ]"
              @click="toggleSelect('Kickboxing')"
            >
              <div
                v-show="spec_2.includes('Kickboxing')"
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
                src="/gym/kickBoxing.webp"
                alt="Kickboxing"
              />
              <span class="text-[3.4vh]">Kickboxing</span>
            </div>
          </div>
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Karate -->
            <!-- DESKTOP -->
            <div
              :class="[
                'h-[28vh] rounded-md gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%]  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
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
                src="/gym/karate.webp"
                alt=""
              />
              <span class="text-[3.4vh]">Karate</span>
            </div>

            <!-- DESKTOP -->
            <!-- Boxing -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
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
                src="/gym/boxing.webp"
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
                'h-[28vh] rounded-md gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%]  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
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
                src="/gym/taekwondo.webp"
                alt=""
              />
              <span class="text-[3.4vh]">Taekwondo</span>
            </div>

            <!-- DESKTOP -->
            <!-- Akido -->
            <div
              :class="[
                'h-[28vh] w-full gym_Activity_Details_PC-CONTAINER opacity-0 translate-y-[20%] rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
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
                src="/gym/akido.webp"
                alt="akido"
              />
              <!-- DESKTOP -->
              <span class="text-[3.4vh]">Akido</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
