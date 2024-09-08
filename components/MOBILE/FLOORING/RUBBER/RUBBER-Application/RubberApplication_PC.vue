<template>
  <!-- DESKTOP -->
  <div class="raisedActivitesPC h-max w-screen px-[6vw]">
    <div
      class="max-[990px]:hidden h-max w-full px-[3vw] text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6]"
    >
      <div
        class="raisedApplication_temp_div opacity-0 flex gap-[2vw] items-center invisible translate-y-[50%] h-max w-max py-[1.8vh] bg-black text-[#f1f1f1] fixed bottom-[2vh] z-[999] left-[50%] translate-x-[-50%] px-[4vw] rounded-md bg-opacity-[.4] backdrop-blur-[12px]"
      >
        <span>
          {{ userStore.preference.spec_1 }} is added as an Application
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
        <span class="text-detailsContainer_heading_PC">
          {{
            spec_1 === "Others"
              ? "Add Custom Application"
              : "Choose Applications"
          }}</span
        >
        <!-- DESKTOP -->
        <button
          @click="clearAllSelections"
          v-show="spec_1.length"
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
        <div class="h-max w-full flex flex-col gap-[2vh]">
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Playfall Protec + -->
            <div
              :class="[
                'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_1.includes('Playfall Protec +') },
              ]"
              @click="toggleSelect('Playfall Protec +')"
            >
              <div
                v-show="spec_1.includes('Playfall Protec +')"
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

              <span class="text-[3.4vh]">Playfall Protec +</span>
            </div>

            <!-- DESKTOP -->
            <!-- Gym Rubber  -->
            <div
              :class="[
                'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_1.includes('Gym Rubber') },
              ]"
              @click="toggleSelect('Gym Rubber')"
            >
              <div
                v-show="spec_1.includes('Gym Rubber')"
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

              <span class="text-[3.4vh]">Gym Rubber</span>
            </div>
          </div>
        </div>
        <div class="h-max w-full flex flex-col gap-[2vh]">
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <div
              :class="[
                'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_1.includes('Pool Rubber') },
              ]"
              @click="toggleSelect('Pool Rubber')"
            >
              <div
                v-show="spec_1.includes('Pool Rubber')"
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

              <span class="text-[3.4vh]">Pool Rubber</span>
            </div>

            <!-- DESKTOP -->
            <!-- Sports Rubber  -->
            <div
              :class="[
                'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
                { selected: spec_1.includes('Sports Rubber') },
              ]"
              @click="toggleSelect('Sports Rubber')"
            >
              <div
                v-show="spec_1.includes('Sports Rubber')"
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

              <span class="text-[3.4vh]">Sports Rubber</span>
            </div>
          </div>
        </div>
        <div
          :class="[
            'h-[28vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            { selected: spec_1.includes('Others') },
          ]"
          @click="toggleSelect('Others')"
        >
          <div
            v-show="spec_1.includes('Others')"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >Selected</span
            >
          </div>

          <!-- DESKTOP -->
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 z-[-1]"
          ></div>

          <span class="text-[3.4vh]">Custom Application</span>
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

const spec_1 = ref("");

const customApplication = ref("");

function clearAllSelections_spec2() {
  spec_1.value = "";
  userStore.preference.spec_1 = "";
  customApplication.value = "";
}

const toggleSelect = (type, msg) => {
  if (msg === "showAddedMsg") {
    handleTempAnimation("raisedApplication_temp_div");
  }
  if (type === "Others") {
    spec_1.value = "Others";
    return;
  }

  if (spec_1.value === type) {
    userStore.preference.spec_1 = "";
    spec_1.value = "";
  } else {
    scrollToBottom();
    spec_1.value = type;
    userStore.preference.spec_2 = "";
    userStore.preference.spec_1 = toRaw(spec_1.value);
  }
  userStore.preference.flooring = "rubber";
  userStore.updateCart();
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border-radius: 0.375rem;
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
