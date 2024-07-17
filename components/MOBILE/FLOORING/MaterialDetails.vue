<template>
  <!-- DESKTOP -->
  <div class="max-[990px]:hidden h-max w-screen px-[6vw]">
    <div
      v-show="
        userStore.preference.category !== '' &&
        userStore.preference.type !== '' &&
        userStore.preference.color.length > 0
      "
      class="h-max w-full text-center py-[4vh] flex flex-col gap-[2vh] font-outfit font-[400] bg-[#f1f1f1] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
    >
      <!-- DESKTOP -->
      <div class="h-max w-full flex justify-between text-[3.8vh] z-[9]">
        <span>Choose your Material</span>
        <button
          @click="clearmaterialSelections"
          v-if="selectedmaterial"
          class="h-max bg-white text-gray-500 px-[2vw] py-[.8vh] text-[.8vh] rounded-md flex gap-[1vw] items-center"
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
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- Poly Propene Carpets -->
        <div
          :class="[
            'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedmaterial === 'polypropylene' },
          ]"
          @click="toggleSelect('polypropylene')"
        >
          <div
            v-if="selectedmaterial === 'polypropylene'"
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
            loading="lazy"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/carpets/Polypropylene.webp"
            alt="#"
          />
          <span class="text-[3.2vh]">Polypropylene</span>
        </div>
        <!-- nylon carpets -->
        <div
          :class="[
            'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedmaterial === 'Nylon' },
          ]"
          @click="toggleSelect('Nylon')"
        >
          <div
            v-if="selectedmaterial === 'Nylon'"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- DESKTOP -->
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
            placeholder
            loading="lazy"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/colors/snow.webp"
            alt="#"
          />
          <span class="text-[3.2vh]">Nylon</span>
        </div>
        <!-- DESKTOP -->
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
        <!-- Sisal -->
        <div
          v-show="userStore.preference.category !== 'Carpet Tiles'"
          :class="[
            'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedmaterial === 'Sisal' },
          ]"
          @click="toggleSelect('Sisal')"
        >
          <div
            v-if="selectedmaterial === 'Sisal'"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >Selected</span
            >
          </div>
          <div
            class="h-full w-full bg-gradient-to-bl from-[#0000] to-black from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <NuxtImg
            quality="50"
            placeholder
            loading="lazy"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/carpets/sisal.jpeg"
            alt="#"
          />
          <!-- DESKTOP -->
          <span class="text-[3.2vh]">Sisal</span>
        </div>
        <!-- DESKTOP -->
        <!-- Wool -->
        <div
          v-show="userStore.preference.category !== 'Carpet Tiles'"
          :class="[
            'materialItem_PC rounded-md h-[28vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.2vw] py-[1.4vh] text-[2.4vh] relative cursor-pointer',
            { selected: selectedmaterial === 'Wool' },
          ]"
          @click="toggleSelect('Wool')"
        >
          <div
            v-if="selectedmaterial === 'Wool'"
            class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
          >
            <!-- Selected indicator without text -->
            <span
              class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-[1.8vh] rounded-md"
              >Selected</span
            >
          </div>
          <div
            class="h-full w-full bg-gradient-to-bl from-[#0000] to-black from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <NuxtImg
            quality="50"
            placeholder
            loading="lazy"
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/wool-carpet.jpeg"
            alt="#"
          />
          <span class="text-[3.2vh]">Wool</span>
        </div>
        <!-- DESKTOP -->
      </div>
    </div>
  </div>
  <!-- -------------------------------- -->
  <!-- -------------------------------- -->
  <!-- -------------------------------- -->
  <!-- -------------------------------- -->
  <!-- -------------------------------- -->
  <!-- MOBILE -->
  <div
    v-show="
      userStore.preference.category !== '' &&
      userStore.preference.type !== '' &&
      userStore.preference.color.length > 0
    "
    class="min-[990px]:hidden h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#f1f1f1] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <div class="h-max w-full flex justify-between text-[3.2vh] z-[9]">
      <!-- MOBILE -->
      <span>Choose your Material</span>
      <button
        @click="clearmaterialSelections"
        v-if="selectedmaterial"
        class="h-max bg-white text-gray-500 px-[1.2vw] py-[.8vh] text-clearAllMOB rounded-md flex gap-[1vw] items-center"
      >
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
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <!-- MOBILE -->
      <!-- Poly Propene Carpets -->
      <div
        :class="[
          'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedmaterial === 'polypropylene' },
        ]"
        @click="toggleSelect('polypropylene')"
      >
        <div
          v-if="selectedmaterial === 'polypropylene'"
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
          loading="lazy"
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/carpets/Polypropylene.webp"
          alt="#"
        />
        <span>Polypropylene</span>
      </div>
      <!-- MOBILE -->
      <!-- nylon carpets -->
      <div
        :class="[
          'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedmaterial === 'Nylon' },
        ]"
        @click="toggleSelect('Nylon')"
      >
        <div
          v-if="selectedmaterial === 'Nylon'"
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
          placeholder
          loading="lazy"
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/colors/snow.webp"
          alt="#"
        />
        <span>Nylon</span>
      </div>
    </div>
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <!-- MOBILE -->
      <!-- Sisal -->
      <div
        v-show="userStore.preference.category !== 'Carpet Tiles'"
        :class="[
          'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedmaterial === 'Sisal' },
        ]"
        @click="toggleSelect('Sisal')"
      >
        <div
          v-if="selectedmaterial === 'Sisal'"
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
          loading="lazy"
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/carpets/sisal.jpeg"
          alt="#"
        />
        <span>Sisal</span>
      </div>
      <!-- MOBILE -->
      <!-- Wool -->
      <div
        v-show="userStore.preference.category !== 'Carpet Tiles'"
        :class="[
          'h-[14vh] w-full rounded-md  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedmaterial === 'Wool' },
        ]"
        @click="toggleSelect('Wool')"
      >
        <div
          v-if="selectedmaterial === 'Wool'"
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
          loading="lazy"
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/carpets/nylon-carpet.jpeg"
          alt="#"
        />
        <!-- MOBILE -->
        <span>Wool</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// PINIA
import Mobile from "~/layouts/Mobile.vue";
import useUserStore from "../../../stores/user";
const userStore = useUserStore();
import { ref } from "vue";
import Desktop from "~/layouts/Desktop.vue";

const selectedmaterial = ref("");
function clearmaterialSelections() {
  selectedmaterial.value = "";
  userStore.preference.material = "";
}
function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 200);
}
const toggleSelect = (material) => {
  if (selectedmaterial.value === material) {
    selectedmaterial.value = "";
    userStore.preference.material = "";
  } else {
    scrollToBottom();
    selectedmaterial.value = material;
    userStore.preference.material = toRaw(selectedmaterial.value);
  }
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
