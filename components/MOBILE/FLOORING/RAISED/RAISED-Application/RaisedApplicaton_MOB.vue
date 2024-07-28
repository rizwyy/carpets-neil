<template>
  <!-- MOBILE -->
  <div
    v-show="userStore.preference.spec_1 !== ''"
    class="min-[990px]:hidden h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <div
      class="h-max w-full flex items-center justify-between text-[3.2vh] tracking-[-.07vw] z-[9]"
    >
      <span class="text-left text-balance"> Choose Your Application</span>
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
    <!--Data Center -->
    <div
      v-show="userStore.preference.spec_1 === 'Data Center'"
      class="h-max w-full flex flex-col gap-[1vh]"
    >
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- MOBILE -->
        <!-- Server Rooms -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
          <NuxtImg
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/cardio.webp"
            alt=""
          />
          <span>Server Rooms</span>
        </div>

        <!-- MOBILE -->
        <!-- Telecom Rooms -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/machineTraining.webp"
            alt=""
          />
          <span>Telecom Rooms</span>
        </div>
      </div>
    </div>
    <!-- COMMERCIAL -->
    <div
      v-show="userStore.preference.spec_1 === 'Commercial'"
      class="h-max w-full flex flex-col gap-[1vh]"
    >
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- MOBILE -->
        <!-- Offices -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
          <NuxtImg
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/dance.webp"
            alt=""
          />
          <span>Offices</span>
        </div>

        <!-- MOBILE -->
        <!-- Retail -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/aerobics.webp"
            alt=""
          />
          <span>Retail</span>
        </div>
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- MOBILE -->
        <!-- Hospitality -->
        <div
          :class="[
            'h-[14vh] rounded-md  border-[2px] border-[#f1f1f1]  w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/zumba.webp"
            alt=""
          />
          <span>Hospitality</span>
        </div>

        <!-- MOBILE -->
        <!-- Public Area -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/steps.webp"
            alt=""
          />
          <span>Public Area</span>
        </div>
      </div>
    </div>
    <!-- STRENGTH AND CONDITIONING -->
    <div
      v-show="userStore.preference.spec_1 === 'Industrial'"
      class="h-max w-full flex flex-col gap-[1vh]"
    >
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- MOBILE -->
        <!-- Industrial Facilities -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
          <NuxtImg
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/Industrial Facilities.webp"
            alt=""
          />
          <span>Industrial Facilities</span>
        </div>

        <!-- MOBILE -->
        <!-- Food Processing -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/Food Processing.webp"
            alt=""
          />
          <span>Food Processing</span>
        </div>
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- MOBILE -->
        <!-- Chemical Lab -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/Chemical Lab.webp"
            alt=""
          />
          <span>Chemical Lab</span>
        </div>
      </div>
    </div>
    <!-- Health Care-->
    <div
      v-show="userStore.preference.spec_1 === 'Health Care'"
      class="h-max w-full flex flex-col gap-[1vh]"
    >
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- MOBILE -->
        <!-- Clean Rooms -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw]  relative cursor-pointer',
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
          <NuxtImg
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/judo.webp"
            alt=""
          />
          <span>Clean Rooms</span>
        </div>

        <!-- MOBILE -->
        <!-- Facility Rooms -->
        <div
          :class="[
            'h-[14vh] w-full rounded-md text-left leading-[3.4vh]  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[4.6vw] relative cursor-pointer',
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
            preload
            quality="50"
            placeholder
            loading="eager"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/raised/Facility Rooms.webp"
            alt=""
          />
          <span>Facility Rooms</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { scrollToBottom } from "~/utils/reusables";
// PINIA
import useUserStore from "~/stores/user";
const userStore = useUserStore();

const spec_2 = ref("");

function clearAllSelections_spec2() {
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
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
