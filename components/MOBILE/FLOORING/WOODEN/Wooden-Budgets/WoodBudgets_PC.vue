<template>
  <!-- DESKTOP WOODEN BUDGETS-->
  <div class="max-[990px]:hidden h-max w-screen px-[6vw]">
    <div
      v-show="
        userStore.preference.flooring === 'Wooden' &&
        userStore.preference.category !== '' &&
        userStore.preference.type !== '' &&
        userStore.preference.material !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.surface !== ''
      "
      class="max-[990px]:hidden h-full w-full text-center py-[4vh] flex flex-col gap-[8.4vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <!-- DESKTOP -->
      <div
        class="h-max w-full flex items-center justify-between text-[3.8vh] z-[9] pl-[2vw]"
      >
        <span class="text-left text-balance">Choose Your Budget</span>
        <button
          @click="clearBudgetSelections"
          v-show="selectedBudget.length"
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
          v-show="
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
            v-show="selectedBudget === 'Value'"
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
          v-show="
            !(
              userStore.preference.category !== 'Area Rugs' &&
              !(
                userStore.preference.category === 'Wall to Wall' &&
                userStore.preference.material === 'Nylon'
              ) &&
              !(
                userStore.preference.category === 'Runners' &&
                userStore.preference.material === 'Nylon'
              )
            )
          "
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
          v-show="
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
            v-show="selectedBudget === 'Essential'"
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
          v-show="
            !(
              userStore.preference.category !== 'Area Rugs' &&
              !(
                userStore.preference.category === 'Wall to Wall' &&
                userStore.preference.material === 'Nylon'
              ) &&
              !(
                userStore.preference.category === 'Runners' &&
                userStore.preference.material === 'Nylon'
              )
            )
          "
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
          v-show="
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
            v-show="selectedBudget === 'Premier'"
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
          v-show="
            !(
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
            )
          "
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
          v-show="
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
            v-show="selectedBudget === 'Signature'"
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
          v-show="
            !(
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
            )
          "
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
          v-show="
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
            v-show="selectedBudget === 'Elite'"
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
          v-show="
            !(
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
            )
          "
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
</template>

<script setup>
import { ref } from "vue";
// PINIA

import useUserStore from "~/stores/user";
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
