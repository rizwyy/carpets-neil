<template>
  <!-- DESKTOP -->
  <div class="max-[990px]:hidden h-max w-screen px-[6vw]">
    <div
      v-show="
        userStore.preference.type !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.material !== ''
      "
      class="max-[990px]:hidden h-full w-full text-center py-[4vh] flex flex-col gap-[8.4vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <!-- DESKTOP -->
      <div
        class="h-max w-full flex items-center justify-between text-[3.8vh] z-[9] pl-[2vw]"
      >
        <span>Choose Your Budget</span>
        <button
          @click="clearBudgetSelections"
          v-if="selectedBudget.length"
          class="h-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
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
          <!-- DESKTOP -->
        </button>
      </div>

      <!-- DESKTOP -->
      <!-- NEW DESIGN -->
      <div
        class="h-max w-full flex flex-col justify-center items-center gap-[2vh] z-[9]"
      >
        <!-- VALUE -->
        <div
          v-if="
            userStore.preference.category !== 'Area Rugs' &&
            !(
              userStore.preference.category === 'Wall to Wall' &&
              userStore.preference.material === 'Nylon'
            ) &&
            !(
              userStore.preference.category === 'Runners' &&
              userStore.preference.material === 'Nylon'
            )
          "
          :class="[
            'h-[12vh] budgetItemPC w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedBudget === 'Value' },
          ]"
          @click="toggleSelect('Value')"
        >
          <div
            v-if="selectedBudget === 'Value'"
            class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <div
              class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
            >
              <span
                class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >
                Selected
              </span>
            </div>
          </div>

          <div
            class="h-full w-full bg-gradient-to-l from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1] rounded-full"
          ></div>

          <div
            class="text-[2.8vh] h-full h-full flex-1 flex justify-start items-center"
          >
            <span> Value </span>
          </div>
          <div
            class="font-[400] text-[2.4vh] text-left h-full flex-[2] flex justify-end items-center"
          >
            <span> BD. 5.99m<sup>2</sup> to BD. 9.99m<sup>2</sup></span>
          </div>
        </div>
        <!-- NOT AVAILABLE VALUE -->
        <div
          v-else
          :class="[
            'h-[12vh] w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
          ]"
        >
          <div
            class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
          >
            <span class="text-[2vh] font-[500] text-[#fff9]"
              >NOT ELIGIBLE WITH
              {{ userStore.preference.material.toUpperCase() }}</span
            >
          </div>
        </div>
        <!-- DESKTOP -->
        <!-- ESSENTIAL -->
        <div
          v-if="
            userStore.preference.category !== 'Area Rugs' &&
            !(
              userStore.preference.category === 'Wall to Wall' &&
              userStore.preference.material === 'Nylon'
            ) &&
            !(
              userStore.preference.category === 'Runners' &&
              userStore.preference.material === 'Nylon'
            )
          "
          :class="[
            'h-[12vh] budgetItemPC w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedBudget === 'Essential' },
          ]"
          @click="toggleSelect('Essential')"
        >
          <div
            v-if="selectedBudget === 'Essential'"
            class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <div
              class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
            >
              <span
                class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >
                Selected
              </span>
            </div>
          </div>

          <div
            class="h-full w-full bg-gradient-to-l from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1] rounded-full"
          ></div>

          <div
            class="text-[2.8vh] h-full h-full flex-1 flex justify-start items-center"
          >
            <span> Essential </span>
          </div>
          <div
            class="font-[400] text-[2.4vh] text-left h-full flex-[2] flex justify-end items-center"
          >
            <span>BD. 10m<sup>2</sup> to BD. 19.99m<sup>2</sup></span>
          </div>
        </div>
        <!-- NOT AVAILABLE ESSENTIALs -->
        <div
          v-else
          :class="[
            'h-[12vh] w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
          ]"
        >
          <div
            class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
          >
            <span class="text-[2vh] font-[500] text-[#fff9]"
              >NOT ELIGIBLE WITH
              {{ userStore.preference.material.toUpperCase() }}</span
            >
          </div>
        </div>
        <!-- DESKTOP -->
        <!-- PREMIER -->
        <div
          v-if="
            userStore.preference.category !== 'Area Rugs' &&
            userStore.preference.category !== 'Carpet Tiles' &&
            !(
              userStore.preference.category === 'Wall to Wall' &&
              userStore.preference.material === 'polypropylene'
            ) &&
            !(
              userStore.preference.category === 'Runners' &&
              userStore.preference.material === 'polypropylene'
            )
          "
          :class="[
            'h-[12vh] budgetItemPC w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedBudget === 'Premier' },
          ]"
          @click="toggleSelect('Premier')"
        >
          <div
            v-if="selectedBudget === 'Premier'"
            class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <div
              class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
            >
              <span
                class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >
                Selected
              </span>
            </div>
          </div>

          <div
            class="h-full w-full bg-gradient-to-l from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1] rounded-full"
          ></div>

          <!-- DESKTOP -->
          <div
            class="text-[2.8vh] h-full h-full flex-1 flex justify-start items-center"
          >
            <span> Premier </span>
          </div>
          <div
            class="font-[400] text-[2.4vh] text-left h-full flex-[2] flex justify-end items-center"
          >
            <span> BD. 20m<sup>2</sup> to BD. 24.99m<sup>2</sup></span>
          </div>
        </div>
        <!-- NOT AVAILABLE PREMIER -->
        <div
          v-else
          :class="[
            'h-[12vh] w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
          ]"
        >
          <div
            class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
          >
            <span class="text-[2vh] font-[500] text-[#fff9]"
              >NOT ELIGIBLE WITH
              {{ userStore.preference.material.toUpperCase() }}</span
            >
          </div>
        </div>
        <!-- DESKTOP -->
        <!-- SIGNATURE -->
        <div
          v-if="
            userStore.preference.category !== 'Area Rugs' &&
            userStore.preference.category !== 'Carpet Tiles' &&
            !(
              userStore.preference.category === 'Wall to Wall' &&
              userStore.preference.material === 'polypropylene'
            ) &&
            !(
              userStore.preference.category === 'Runners' &&
              userStore.preference.material === 'polypropylene'
            )
          "
          :class="[
            'h-[12vh] budgetItemPC w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedBudget === 'Signature' },
          ]"
          @click="toggleSelect('Signature')"
        >
          <div
            v-if="selectedBudget === 'Signature'"
            class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <div
              class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
            >
              <span
                class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >
                Selected
              </span>
            </div>
          </div>
          <!-- DESKTOP -->
          <div
            class="h-full w-full bg-gradient-to-l rounded-full from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1]"
          ></div>

          <div
            class="text-[2.8vh] h-full h-full flex-1 flex justify-start items-center"
          >
            <span> Signature </span>
          </div>
          <div
            class="font-[400] text-[2.4vh] text-left h-full flex-[2] flex justify-end items-center"
          >
            <span> BD. 25m<sup>2</sup> to BD. 29.99m<sup>2</sup></span>
          </div>
        </div>
        <!-- NOT AVAILABLE SIGNATURE -->
        <!-- DESKTOP -->
        <div
          v-else
          :class="[
            'h-[12vh] w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
          ]"
        >
          <div
            class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
          >
            <span class="text-[2vh] font-[500] text-[#fff9]"
              >NOT ELIGIBLE WITH
              {{ userStore.preference.material.toUpperCase() }}</span
            >
          </div>
        </div>
        <!-- ELITE -->
        <div
          v-if="
            userStore.preference.category === 'Area Rugs' ||
            (userStore.preference.category !== 'Carpet Tiles' &&
              !(
                userStore.preference.category === 'Wall to Wall' &&
                userStore.preference.material === 'polypropylene'
              ) &&
              !(
                userStore.preference.category === 'Runners' &&
                userStore.preference.material === 'polypropylene'
              ) &&
              !(
                userStore.preference.category === 'Wall to Wall' &&
                userStore.preference.material === 'Nylon'
              ) &&
              !(
                userStore.preference.category === 'Runners' &&
                userStore.preference.material === 'Nylon'
              ))
          "
          :class="[
            'h-[12vh] budgetItemPC w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedBudget === 'Elite' },
          ]"
          @click="toggleSelect('Elite')"
        >
          <div
            v-if="selectedBudget === 'Elite'"
            class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- DESKTOP -->
            <!-- Selected indicator without text -->
            <div
              class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
            >
              <span
                class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >
                Selected
              </span>
            </div>
          </div>

          <div
            class="h-full w-full bg-gradient-to-l from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1] rounded-full"
          ></div>

          <div
            class="text-[2.8vh] h-full h-full flex-1 flex justify-start items-center"
          >
            <span> Elite </span>
          </div>
          <!-- DESKTOP -->
          <div
            class="font-[400] text-[2.4vh] text-left h-full flex-[2] flex justify-end items-center"
          >
            <span> Over BD. 30 m<sup>2</sup></span>
          </div>
        </div>
        <!-- NOT AVAILABLE ELITE -->
        <div
          v-else
          :class="[
            'h-[12vh] w-[60%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
          ]"
        >
          <div
            class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
          >
            <!-- DESKTOP -->
            <span class="text-[2vh] font-[500] text-[#fff9]"
              >NOT ELIGIBLE WITH
              {{ userStore.preference.material.toUpperCase() }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>> -->

  <!-- MOBILE -->
  <div
    v-show="
      userStore.preference.category !== '' &&
      userStore.preference.type !== '' &&
      userStore.preference.color.length > 0 &&
      userStore.preference.material !== ''
    "
    class="min-[990px]:hidden h-max w-[100vw] text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <!-- MOBILE -->
    <div
      @click="() => console.log(selectedBudget.value)"
      class="h-max w-full flex items-center justify-between text-[3.4vh] z-[9] pl-[2vw]"
    >
      <span>Choose Your Budget</span>
      <button
        @click="clearBudgetSelections"
        v-if="selectedBudget.length"
        class="h-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-clearAllMOB rounded-md flex gap-[1vw] items-center"
      >
        Clear All<svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <!-- MOBILE -->
          <path
            fill="currentColor"
            d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
          />
        </svg>
      </button>
    </div>

    <!-- NEW DESIGN -->
    <div
      class="h-max w-full flex flex-col justify-center items-center gap-[1vh] z-[9]"
    >
      <!-- MOBILE -->
      <!-- VALUE -->
      <div
        v-if="
          userStore.preference.category !== 'Area Rugs' &&
          !(
            userStore.preference.category === 'Wall to Wall' &&
            userStore.preference.material === 'Nylon'
          ) &&
          !(
            userStore.preference.category === 'Runners' &&
            userStore.preference.material === 'Nylon'
          )
        "
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudget === 'Value' },
        ]"
        @click="toggleSelect('Value')"
      >
        <div
          v-if="selectedBudget === 'Value'"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <div
            class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
          >
            <span
              class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
            >
              Selected
            </span>
          </div>
        </div>

        <div
          class="h-full w-full bg-gradient-to-l from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1] rounded-full"
        ></div>

        <div
          class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
        >
          <span> Value </span>
        </div>
        <div
          class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center"
        >
          <span> BD. 5.99m<sup>2</sup> to BD. 9.99m<sup>2</sup></span>
        </div>
      </div>
      <!-- NOT AVAILABLE VALUE -->
      <!-- MOBILE -->
      <div
        v-else
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
        ]"
      >
        <div
          class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
        >
          <span class="text-[2vh] font-[500] text-white"
            >NOT ELIGIBLE WITH
            {{ userStore.preference.material.toUpperCase() }}</span
          >
        </div>
      </div>
      <!-- MOBILE -->
      <!-- ESSENTIAL -->
      <div
        v-if="
          userStore.preference.category !== 'Area Rugs' &&
          !(
            userStore.preference.category === 'Wall to Wall' &&
            userStore.preference.material === 'Nylon'
          ) &&
          !(
            userStore.preference.category === 'Runners' &&
            userStore.preference.material === 'Nylon'
          )
        "
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudget === 'Essential' },
        ]"
        @click="toggleSelect('Essential')"
      >
        <div
          v-if="selectedBudget === 'Essential'"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <!-- MOBILE -->
          <div
            class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
          >
            <span
              class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
            >
              Selected
            </span>
          </div>
        </div>

        <div
          class="h-full w-full bg-gradient-to-l from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1] rounded-full"
        ></div>

        <div
          class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
        >
          <span> Essential </span>
        </div>
        <div
          class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center"
        >
          <span>BD. 10m<sup>2</sup> to BD. 19.99m<sup>2</sup></span>
        </div>
      </div>
      <!-- MOBILE -->
      <!-- NOT AVAILABLE ESSENTIALs -->
      <div
        v-else
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
        ]"
      >
        <div
          class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
        >
          <span class="text-[2vh] font-[500] text-white"
            >NOT ELIGIBLE WITH
            {{ userStore.preference.material.toUpperCase() }}</span
          >
        </div>
      </div>
      <!-- PREMIER -->
      <!-- MOBILE -->
      <div
        v-if="
          userStore.preference.category !== 'Area Rugs' &&
          userStore.preference.category !== 'Carpet Tiles' &&
          !(
            userStore.preference.category === 'Wall to Wall' &&
            userStore.preference.material === 'polypropylene'
          ) &&
          !(
            userStore.preference.category === 'Runners' &&
            userStore.preference.material === 'polypropylene'
          )
        "
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudget === 'Premier' },
        ]"
        @click="toggleSelect('Premier')"
      >
        <div
          v-if="selectedBudget === 'Premier'"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <div
            class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
          >
            <span
              class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
            >
              Selected
            </span>
          </div>
        </div>

        <div
          class="h-full w-full bg-gradient-to-l from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1] rounded-full"
        ></div>
        <!-- MOBILE -->

        <div
          class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
        >
          <span> Premier </span>
        </div>
        <div
          class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center"
        >
          <span> BD. 20m<sup>2</sup> to BD. 24.99m<sup>2</sup></span>
        </div>
      </div>
      <!-- MOBILE -->
      <!-- NOT AVAILABLE PREMIER -->
      <div
        v-else
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
        ]"
      >
        <div
          class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
        >
          <span class="text-[2vh] font-[500] text-white"
            >NOT ELIGIBLE WITH
            {{ userStore.preference.material.toUpperCase() }}</span
          >
        </div>
      </div>
      <!-- SIGNATURE -->
      <!-- MOBILE -->
      <div
        v-if="
          userStore.preference.category !== 'Area Rugs' &&
          userStore.preference.category !== 'Carpet Tiles' &&
          !(
            userStore.preference.category === 'Wall to Wall' &&
            userStore.preference.material === 'polypropylene'
          ) &&
          !(
            userStore.preference.category === 'Runners' &&
            userStore.preference.material === 'polypropylene'
          )
        "
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudget === 'Signature' },
        ]"
        @click="toggleSelect('Signature')"
      >
        <div
          v-if="selectedBudget === 'Signature'"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- MOBILE -->
          <!-- Selected indicator without text -->
          <div
            class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
          >
            <span
              class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
            >
              Selected
            </span>
          </div>
        </div>
        <div
          class="h-full w-full bg-gradient-to-l rounded-full from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1]"
        ></div>

        <div
          class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
        >
          <span> Signature </span>
        </div>
        <div
          class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center"
        >
          <span> BD. 25m<sup>2</sup> to BD. 29.99m<sup>2</sup></span>
        </div>
      </div>
      <!-- MOBILE -->
      <!-- NOT AVAILABLE SIGNATURE -->
      <div
        v-else
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
        ]"
      >
        <div
          class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
        >
          <span class="text-[2vh] font-[500] text-white"
            >NOT ELIGIBLE WITH
            {{ userStore.preference.material.toUpperCase() }}</span
          >
        </div>
      </div>
      <!-- ELITE -->
      <!-- MOBILE -->
      <div
        v-if="
          userStore.preference.category === 'Area Rugs' ||
          (userStore.preference.category !== 'Carpet Tiles' &&
            !(
              userStore.preference.category === 'Wall to Wall' &&
              userStore.preference.material === 'polypropylene'
            ) &&
            !(
              userStore.preference.category === 'Runners' &&
              userStore.preference.material === 'polypropylene'
            ) &&
            !(
              userStore.preference.category === 'Wall to Wall' &&
              userStore.preference.material === 'Nylon'
            ) &&
            !(
              userStore.preference.category === 'Runners' &&
              userStore.preference.material === 'Nylon'
            ))
        "
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudget === 'Elite' },
        ]"
        @click="toggleSelect('Elite')"
      >
        <div
          v-if="selectedBudget === 'Elite'"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <div
            class="absolute left-0 top-0 h-full w-full flex items-center justify-center bg-[#000] bg-opacity-[.2] backdrop-blur-[1px] rounded-full"
          >
            <span
              class="bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
            >
              Selected
            </span>
          </div>
        </div>

        <div
          class="h-full w-full bg-gradient-to-l from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1] rounded-full"
        ></div>

        <div
          class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
        >
          <span> Elite </span>
        </div>
        <div
          class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center"
        >
          <span> Over BD. 30 m<sup>2</sup></span>
        </div>
      </div>
      <!-- NOT AVAILABLE ELITE -->
      <!-- MOBILE -->
      <div
        v-else
        :class="[
          'h-[10vh] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
        ]"
      >
        <div
          class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
        >
          <span class="text-[2vh] font-[500] text-white"
            >NOT ELIGIBLE WITH
            {{ userStore.preference.material.toUpperCase() }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// PINIA
import useUserStore from "../../../stores/user";
import Mobile from "~/layouts/Mobile.vue";
import Desktop from "~/layouts/Desktop.vue";
const userStore = useUserStore();

const selectedBudget = ref("");

function clearBudgetSelections() {
  selectedBudget.value = "";
  userStore.preference.budget = "";
}
const isMaterialSelected = (material) => {
  return userStore.preference.material.toLowerCase() === material.toLowerCase();
};
const isCategorySelected = (category) => {
  return userStore.preference.category.toLowerCase() === category.toLowerCase();
};
function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 200);
}
const toggleSelect = (type) => {
  if (selectedBudget.value === type) {
    selectedBudget.value = "";
    userStore.preference.budget = "";
  } else {
    scrollToBottom();
    selectedBudget.value = type;
    userStore.preference.budget = toRaw(selectedBudget.value);
  }
};
</script>

<style scoped>
.selected {
  border-radius: full; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
