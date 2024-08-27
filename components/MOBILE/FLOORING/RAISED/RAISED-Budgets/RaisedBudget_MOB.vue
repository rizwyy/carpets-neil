<template>
  <!-- MOBILE -->
  <transition @beforeEnter="handleDetailsDOMEntry('raised_Budget_Details_Mob')">
    <div
      v-show="
        userStore.preference.flooring === 'raised' &&
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.spec_3 !== '' &&
        userStore.preference.color.length > 0
      "
      class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <!-- MOBILE -->
        <div
          class="h-max w-full flex items-center justify-between text-[3.4vh] z-[9] pl-[2vw]"
        >
          <span
            class="raised_Budget_Details_Mob-HEADING opacity-0 translate-x-[40%]"
            >Choose Your Budget</span
          >
          <button
            @click="clearBudgetSelections"
            v-show="budget.length"
            class="h-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
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
            :class="[
              'h-[10vh] raised_Budget_Details_Mob-CONTAINER opacity-0 translate-y-[20%] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: budget === 'Value' },
            ]"
            @click="toggleSelect('Value')"
          >
            <div
              v-show="budget === 'Value'"
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
              class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center text-right"
            >
              <span>
                {{
                  convertCurrency(5.99, "BD", userStore.preference.country)
                }}m<sup>2</sup> to
                {{
                  convertCurrency(9.99, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>

          <!-- MOBILE -->
          <!-- ESSENTIAL -->
          <div
            :class="[
              'h-[10vh] raised_Budget_Details_Mob-CONTAINER opacity-0 translate-y-[20%] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: budget === 'Essential' },
            ]"
            @click="toggleSelect('Essential')"
          >
            <div
              v-show="budget === 'Essential'"
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
              class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center text-right"
            >
              <span>
                {{
                  convertCurrency(10, "BD", userStore.preference.country)
                }}m<sup>2</sup>
                to
                {{
                  convertCurrency(19.99, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>
          <!-- MOBILE -->

          <!-- PREMIER -->
          <!-- MOBILE -->
          <div
            :class="[
              'h-[10vh] raised_Budget_Details_Mob-CONTAINER opacity-0 translate-y-[20%] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: budget === 'Premier' },
            ]"
            @click="toggleSelect('Premier')"
          >
            <div
              v-show="budget === 'Premier'"
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
              class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center text-right"
            >
              <span>
                {{
                  convertCurrency(20, "BD", userStore.preference.country)
                }}m<sup>2</sup>
                to
                {{
                  convertCurrency(24.99, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>
          <!-- MOBILE -->
          <!-- SIGNATURE -->
          <!-- MOBILE -->
          <div
            :class="[
              'h-[10vh] raised_Budget_Details_Mob-CONTAINER opacity-0 translate-y-[20%] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: budget === 'Signature' },
            ]"
            @click="toggleSelect('Signature')"
          >
            <div
              v-show="budget === 'Signature'"
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
              class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center text-right"
            >
              <span>
                {{
                  convertCurrency(25, "BD", userStore.preference.country)
                }}m<sup>2</sup>
                to
                {{
                  convertCurrency(29.99, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>
          <div
            :class="[
              'h-[10vh] raised_Budget_Details_Mob-CONTAINER opacity-0 translate-y-[20%] w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: budget === 'Elite' },
            ]"
            @click="toggleSelect('Elite')"
          >
            <div
              v-show="budget === 'Elite'"
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
              class="h-full w-full bg-gradient-to-l rounded-full from-[#000] to-[#666] from-[44%] absolute bottom-0 left-0 z-[-1]"
            ></div>

            <div
              class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
            >
              <span> Elite </span>
            </div>
            <div
              class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center text-right"
            >
              <span>
                Over
                {{
                  convertCurrency(30, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>
        </div>
        <!-- ELITE -->
        <!-- MOBILE -->
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import useUserStore from "~/stores/user";

const userStore = useUserStore();

const budget = ref("");

function clearBudgetSelections() {
  budget.value = "";
  userStore.preference.budget = "";
}

const toggleSelect = (type) => {
  if (budget.value === type) {
    budget.value = "";
    userStore.preference.budget = "";
  } else {
    scrollToBottom();
    budget.value = type;
    userStore.preference.budget = toRaw(budget.value);
  }
};
</script>

<style scoped>
.selected {
  border-radius: full; /* Adjust this value as needed */
  border: 0px solid #333; /* Adjust border color as needed */
}
</style>
