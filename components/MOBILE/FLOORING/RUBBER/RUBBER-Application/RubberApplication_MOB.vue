<template>
  <!-- MOBILE -->

  <div class="min-[990px]:hidden h-max w-screen flex justify-center pb-[10vh]">
    <div
      class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-gradient-to-br from-detailsFrom to-detailsTo rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <div
        class="raisedApplication_temp_div opacity-0 flex gap-[2vw] items-center invisible translate-y-[50%] h-max w-max py-[1.8vh] bg-black text-[#f1f1f1] fixed top-[2vh] z-[999] left-[50%] translate-x-[-50%] px-[4vw] rounded-md bg-opacity-[.4] backdrop-blur-[12px]"
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
      <!-- CUSTOM APPLICATION -->
      <div
        class="h-max w-full flex items-center justify-between text-[3.2vh] tracking-[-.07vw] z-[9]"
      >
        <span class="text-left text-balance tracking-[-.1vw]">
          {{
            spec_1 === "Others"
              ? "Add Custom Application"
              : "Choose Applications"
          }}</span
        >
        <button
          @click="clearAllSelections_spec2()"
          v-show="spec_1.length"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis"
          class="h-max bg-white text-gray-500 text-detailsContainer_clearAllText_MOB px-[2vw] py-[.8vh] text-[1.8vh] rounded-md flex gap-[1vw] items-center"
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
      <div class="h-max w-full relative flex flex-col gap-[1vh]">
        <!-- SPECIFY OVERLAY -->
        <transition @beforeEnter="bringOpacity('customApplicationOverlay')">
          <div
            v-show="spec_1 === 'Others'"
            class="customApplicationOverlay opacity-0 h-full w-full bg-black bg-opacity-[.7] backdrop-blur-[8px] rounded-md absolute top-0 left-0 z-[99] flex items-center justify-center flex-col gap-[2vh] overflow-hidden"
          >
            <div
              class="h-max w-[94%] flex flex-col items-start gap-[2vw] pt-[3.2vh]"
            >
              <span class="text-[#fff9] text-[2vh] text-left"
                >What kind of space are you looking to improve with a rubber
                floor? (e.g., office, data center, retail store)</span
              >
            </div>
            <div class="h-max w-full flex justify-center">
              <input
                class="h-[6vh] w-[94%] px-[4vw] bg-[#222] border-[#999] border-[1px] border-[#] rounded-md text-[#ececec]"
                type="text"
                v-model="customApplication"
                placeholder="Enter your Application"
              />
            </div>
            <div
              class="h-max w-full flex-col flex items-center pt-[2.4vh] pb-[2vh] justify-start"
            >
              <transition
                @beforeEnter="
                  bringOpacity('sports_details_activity_mob_add_BTN')
                "
              >
                <button
                  v-show="customApplication.length > 2"
                  @click="toggleSelect(customApplication, 'showAddedMsg')"
                  class="sports_details_activity_mob_add_BTN text-[2vh] border-[1px] rounded-sm px-[8vw] text-[#f1f1f1] border-[#ededed] py-[1vh]"
                >
                  ADD
                </button>
              </transition>
            </div>
          </div>
        </transition>
        <div class="h-max w-full flex flex-col gap-[1vh]">
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- Playfall Protec + -->
            <div
              :class="[
                'h-[14vh] overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
                class="h-full w-full bg-gradient-to-b from-slate-500 to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
              ></div>

              <span>Playfall Protec +</span>
            </div>

            <!-- MOBILE -->
            <!-- Gym Rubber -->
            <div
              :class="[
                'h-[14vh] overflow-hidden  w-full rounded-md text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
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
                class="h-full w-full bg-gradient-to-b from-slate-500 to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
              ></div>

              <span>Gym Rubber</span>
            </div>
          </div>
        </div>
        <div class="h-max w-full flex flex-col gap-[1vh]">
          <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
            <!-- MOBILE -->
            <!-- Sports Rubber -->
            <div
              :class="[
                'h-[14vh] overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
                class="h-full w-full bg-gradient-to-b from-slate-500 to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
              ></div>

              <span>Sports Rubber</span>
            </div>

            <!-- MOBILE -->
            <!-- Pool Rubber -->
            <div
              :class="[
                'h-[14vh] overflow-hidden  w-full rounded-md text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
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
                class="h-full w-full bg-gradient-to-b from-slate-500 to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
              ></div>

              <span>Pool Rubber</span>
            </div>
          </div>
        </div>
        <div
          :class="[
            'h-[14vh] overflow-hidden  w-full rounded-md  border-[2px] border-[#f1f1f1] bg-gradient-to-b from-slate-500 to-black from-[60%] flex items-end justify-between text-[#ededed] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
          <div
            class="h-full w-full bg-black absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>

          <span>Custom Application</span>
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
