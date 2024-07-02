<template>
  <div
    v-show="
      userStore.preference.type.length > 0 &&
      userStore.preference.color.length > 0 &&
      userStore.preference.budget.length > 0
    "
    class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#f1f1f1] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <div class="h-max w-full flex justify-between text-[3.4vh] z-[9]">
      <span>Choose your Material</span>
      <button
        @click="clearmaterialSelections"
        v-if="selectedmaterials.length"
        class="h-max bg-white text-gray-500 px-[2vw] py-[.8vh] text-xs rounded-md flex gap-[1vw] items-center"
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
      <!-- Wool -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedmaterials.includes('Wool') },
        ]"
        @click="toggleSelect('Wool')"
      >
        <div
          v-if="selectedmaterials.includes('Wool')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <img
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/wool-carpet.jpeg"
          alt="#"
        />
        <span>Wool</span>
      </div>
      <!-- Wool-Blend -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedmaterials.includes('Wool-Blend') },
        ]"
        @click="toggleSelect('Wool-Blend')"
      >
        <div
          v-if="selectedmaterials.includes('Wool-Blend')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <img
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/wool-carpet.jpeg"
          alt="#"
        />
        <span>Wool-Blend</span>
      </div>
    </div>
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <!-- nylon carpets -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedmaterials.includes('Nylon') },
        ]"
        @click="toggleSelect('Nylon')"
      >
        <div
          v-if="selectedmaterials.includes('Nylon')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <img
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/carpets/nylon-carpet.jpeg"
          alt="#"
        />
        <span>Nylon</span>
      </div>
      <!-- Poly Propene Carpets -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  w flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedmaterials.includes('polypropylene') },
        ]"
        @click="toggleSelect('polypropylene')"
      >
        <div
          v-if="selectedmaterials.includes('polypropylene')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <img
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/carpets/polypropylene-carpet.jpeg"
          alt="#"
        />
        <span>Polypropylene</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// PINIA
import useUserStore from "../../../stores/user";
const userStore = useUserStore();
import { ref } from "vue";

const selectedmaterials = ref([]);
function clearmaterialSelections() {
  selectedmaterials.value = [];
  userStore.preference.material = [];
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
  if (selectedmaterials.value.includes(material)) {
    selectedmaterials.value = selectedmaterials.value.filter(
      (t) => t !== material
    );
    userStore.preference.material = toRaw(selectedmaterials.value);
  } else {
    scrollToBottom();
    selectedmaterials.value.push(material);
    userStore.preference.material = toRaw(selectedmaterials.value);
  }
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid #333; /* Adjust border color as needed */
}
</style>
