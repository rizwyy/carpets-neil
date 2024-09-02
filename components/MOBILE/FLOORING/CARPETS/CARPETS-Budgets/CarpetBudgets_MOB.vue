<template>
  <!-- MOBILE -->
  <transition @beforeEnter="handleDetailsDOMEntry('carpet_Budget_Details_Mob')">
    <div
      v-show="
        userStore.preference.spec_1 !== '' &&
        userStore.preference.spec_2 !== '' &&
        userStore.preference.color.length > 0 &&
        userStore.preference.spec_3 !== ''
      "
      class="h-max w-screen flex justify-center pb-[10vh]"
    >
      <div
        class="min-[990px]:hidden h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
      >
        <!-- MOBILE -->
        <div
          class="h-max w-full flex items-center justify-between text-[3.4vh] z-[9] pl-[2vw]"
        >
          <span
            class="text-left text-balance carpet_Budget_Details_Mob-HEADING text-detailsHeadCLR"
            >Choose Your Budget</span
          >
          <button
            @click="clearBudgetSelections"
            v-show="userStore.preference.budget !== ''"
            class="h-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-detailsContainer_clearAllText_MOB rounded-md flex gap-[1vw] items-center"
          >
            Clear All<ClearAllIcon />
          </button>
        </div>

        <!-- NEW DESIGN -->
        <div
          class="h-max w-full flex flex-col justify-center items-center gap-[1vh] z-[9]"
        >
          <!-- MOBILE -->
          <!-- VALUE -->
          <div
            v-show="
              userStore.preference.spec_1 !== 'Area Rugs' &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'Nylon'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'Nylon'
              ) &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'Sisal'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'Sisal'
              ) &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'Wool'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'Wool'
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.budget === 'Value' },
            ]"
            @click="toggleSelect('Value')"
          >
            <div
              v-show="userStore.preference.budget === 'Value'"
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
              class="h-full w-full bg-gradient-to-bl from-[#111] to-[#55AAFF] from-[84%] absolute bottom-0 left-0 z-[-1] rounded-full"
            ></div>

            <div
              class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center text-right"
            >
              <span> Value </span>
            </div>
            <div
              class="font-[400] text-[2vh] text-left h-full flex-[3] flex justify-end items-center"
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
          <!-- NOT AVAILABLE VALUE -->
          <!-- MOBILE -->
          <div
            v-show="
              !(
                userStore.preference.spec_1 !== 'Area Rugs' &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Nylon'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Nylon'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Sisal'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Sisal'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Wool'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Wool'
                )
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
            ]"
          >
            <div
              class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
            >
              <span class="text-[2vh] font-[500] text-white"
                >NOT ELIGIBLE WITH
                {{ userStore.preference.spec_3.toUpperCase() }}</span
              >
            </div>
          </div>
          <!-- MOBILE -->
          <!-- ESSENTIAL -->
          <div
            v-show="
              userStore.preference.spec_1 !== 'Area Rugs' &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'Sisal'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'Sisal'
              ) &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'Wool'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'Wool'
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.budget === 'Essential' },
            ]"
            @click="toggleSelect('Essential')"
          >
            <div
              v-show="userStore.preference.budget === 'Essential'"
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
              class="h-full w-full bg-gradient-to-bl from-[#111] to-[#55AAFF] from-[74%] absolute bottom-0 left-0 z-[-1] rounded-full"
            ></div>

            <div
              class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
            >
              <span> Essential </span>
            </div>
            <div
              class="font-[400] text-[2vh] text-left h-full flex-[2.5] flex justify-end text-right items-center"
            >
              <span>
                {{
                  convertCurrency(10, "BD", userStore.preference.country)
                }}m<sup>2</sup> to
                {{
                  convertCurrency(19.99, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>
          <!-- MOBILE -->
          <!-- NOT AVAILABLE ESSENTIALs -->
          <div
            v-show="
              !(
                userStore.preference.spec_1 !== 'Area Rugs' &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Sisal'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Sisal'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Wool'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Wool'
                )
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
            ]"
          >
            <div
              class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
            >
              <span class="text-[2vh] font-[500] text-white"
                >NOT ELIGIBLE WITH
                {{ userStore.preference.spec_3.toUpperCase() }}</span
              >
            </div>
          </div>
          <!-- PREMIER -->
          <!-- MOBILE -->
          <div
            v-show="
              userStore.preference.spec_1 !== 'Area Rugs' &&
              userStore.preference.spec_1 !== 'Carpet Tiles' &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'polypropylene'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'polypropylene'
              ) &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'Wool'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'Wool'
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.budget === 'Premier' },
            ]"
            @click="toggleSelect('Premier')"
          >
            <div
              v-show="userStore.preference.budget === 'Premier'"
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
              class="h-full w-full bg-gradient-to-bl from-[#111] to-[#55AAFF] from-[64%] absolute bottom-0 left-0 z-[-1] rounded-full"
            ></div>
            <!-- MOBILE -->

            <div
              class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
            >
              <span> Premier </span>
            </div>
            <div
              class="font-[400] text-[2vh] text-left h-full flex-[2.8] flex justify-end items-center text-right"
            >
              <span>
                {{
                  convertCurrency(20, "BD", userStore.preference.country)
                }}m<sup>2</sup> to
                {{
                  convertCurrency(24.99, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>
          <!-- MOBILE -->
          <!-- NOT AVAILABLE PREMIER -->
          <div
            v-show="
              !(
                userStore.preference.spec_1 !== 'Area Rugs' &&
                userStore.preference.spec_1 !== 'Carpet Tiles' &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'polypropylene'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'polypropylene'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Wool'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Wool'
                )
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
            ]"
          >
            <div
              class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
            >
              <span class="text-[2vh] font-[500] text-white"
                >NOT ELIGIBLE WITH
                {{ userStore.preference.spec_3.toUpperCase() }}</span
              >
            </div>
          </div>
          <!-- SIGNATURE -->
          <!-- MOBILE -->
          <div
            v-show="
              userStore.preference.spec_1 !== 'Area Rugs' &&
              userStore.preference.spec_1 !== 'Carpet Tiles' &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'polypropylene'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'polypropylene'
              ) &&
              !(
                userStore.preference.spec_1 === 'Wall to Wall' &&
                userStore.preference.spec_3 === 'Nylon'
              ) &&
              !(
                userStore.preference.spec_1 === 'Runners' &&
                userStore.preference.spec_3 === 'Nylon'
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.budget === 'Signature' },
            ]"
            @click="toggleSelect('Signature')"
          >
            <div
              v-show="userStore.preference.budget === 'Signature'"
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
              class="h-full w-full bg-gradient-to-bl from-[#111] to-[#55AAFF] from-[54%] absolute bottom-0 left-0 z-[-1] rounded-full"
            ></div>

            <div
              class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center text-right"
            >
              <span> Signature </span>
            </div>
            <div
              class="font-[400] text-[2vh] text-left h-full flex-[3] flex justify-end items-center"
            >
              <span>
                {{
                  convertCurrency(25, "BD", userStore.preference.country)
                }}m<sup>2</sup> to
                {{
                  convertCurrency(29.99, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>
          <!-- MOBILE -->
          <!-- NOT AVAILABLE SIGNATURE -->
          <div
            v-show="
              !(
                userStore.preference.spec_1 !== 'Area Rugs' &&
                userStore.preference.spec_1 !== 'Carpet Tiles' &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'polypropylene'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'polypropylene'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Nylon'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Nylon'
                )
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
            ]"
          >
            <div
              class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
            >
              <span class="text-[2vh] font-[500] text-white"
                >NOT ELIGIBLE WITH
                {{ userStore.preference.spec_3.toUpperCase() }}</span
              >
            </div>
          </div>
          <!-- ELITE -->
          <!-- MOBILE -->
          <div
            v-show="
              userStore.preference.spec_1 === 'Area Rugs' ||
              (userStore.preference.spec_1 !== 'Carpet Tiles' &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'polypropylene'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'polypropylene'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Nylon'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Nylon'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Wall to Wall' &&
                  userStore.preference.spec_3 === 'Sisal'
                ) &&
                !(
                  userStore.preference.spec_1 === 'Runners' &&
                  userStore.preference.spec_3 === 'Sisal'
                ))
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  items-center justify-between flex text-[#f1f1f1] px-[4.8vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
              { selected: userStore.preference.budget === 'Elite' },
            ]"
            @click="toggleSelect('Elite')"
          >
            <div
              v-show="userStore.preference.budget === 'Elite'"
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
              class="h-full w-full bg-gradient-to-bl from-[#111] to-[#55AAFF] from-[26%] absolute bottom-0 left-0 z-[-1] rounded-full"
            ></div>

            <div
              class="text-[2.4vh] h-full h-full flex-1 flex justify-start items-center"
            >
              <span> Elite </span>
            </div>
            <div
              class="font-[400] text-[2vh] text-left h-full flex-[2] flex justify-end items-center"
            >
              <span>
                Over
                {{
                  convertCurrency(30, "BD", userStore.preference.country)
                }}m<sup>2</sup></span
              >
            </div>
          </div>
          <!-- NOT AVAILABLE ELITE -->
          <!-- MOBILE -->
          <div
            v-show="
              !(
                userStore.preference.spec_1 === 'Area Rugs' ||
                (userStore.preference.spec_1 !== 'Carpet Tiles' &&
                  !(
                    userStore.preference.spec_1 === 'Wall to Wall' &&
                    userStore.preference.spec_3 === 'polypropylene'
                  ) &&
                  !(
                    userStore.preference.spec_1 === 'Runners' &&
                    userStore.preference.spec_3 === 'polypropylene'
                  ) &&
                  !(
                    userStore.preference.spec_1 === 'Wall to Wall' &&
                    userStore.preference.spec_3 === 'Nylon'
                  ) &&
                  !(
                    userStore.preference.spec_1 === 'Runners' &&
                    userStore.preference.spec_3 === 'Nylon'
                  ) &&
                  !(
                    userStore.preference.spec_1 === 'Wall to Wall' &&
                    userStore.preference.spec_3 === 'Sisal'
                  ) &&
                  !(
                    userStore.preference.spec_1 === 'Runners' &&
                    userStore.preference.spec_3 === 'Sisal'
                  ))
              )
            "
            :class="[
              'h-[10vh] carpet_Budget_Details_Mob-CONTAINER  w-[100%] shadow border-[2px] border-[#f1f1f1] overflow-hidden  rounded-full  text-[#f1f1f1] px-[4.8vw] py-[1.2vh] relative cursor-pointer',
            ]"
          >
            <div
              class="h-full w-full flex items-center justify-center bg-black bg-opacity-[.9] absolute bottom-0 left-0 z-[9] rounded-full"
            >
              <span class="text-[2vh] font-[500] text-white"
                >NOT ELIGIBLE WITH
                {{ userStore.preference.spec_3.toUpperCase() }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";

const { existingUser } = defineProps(["existingUser"]);

import useUserStore from "~/stores/user";
const userStore = useUserStore();

const selectedBudget = ref("");

function clearBudgetSelections() {
  selectedBudget.value = "";
  userStore.preference.budget = "";
}

const toggleSelect = (type) => {
  if (selectedBudget.value === type) {
    selectedBudget.value = "";
    userStore.preference.budget = "";
  } else {
    existingUser ? scrollBy(600) : scrollToBottom();

    selectedBudget.value = type;
    userStore.preference.budget = toRaw(selectedBudget.value);
    userStore.updateCart();
  }
};
</script>

<style scoped>
.selected {
  border-radius: full; /* Adjust this value as needed */
  border: 0px solid #333; /* Adjust border color as needed */
}
</style>
