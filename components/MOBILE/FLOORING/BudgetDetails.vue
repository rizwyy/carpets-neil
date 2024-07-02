<template>
  <div
    v-show="
      userStore.preference.type.length > 0 &&
      userStore.preference.color.length > 0
    "
    class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#ececec] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <div
      @click="() => console.log(selectedBudgets.value)"
      class="h-max w-full flex items-center justify-between text-[3.4vh] z-[9]"
    >
      <span>Choose Your Budget</span>
      <button
        @click="clearBudgetSelections"
        v-if="selectedBudgets.length"
        class="h-max bg-white text-gray-500 px-[2vw] py-[1.2vh] text-xs rounded-md flex gap-[1vw] items-center"
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
      <!-- VALUE -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  rounded-md  flex-col items-start justify-between flex text-[#f1f1f1] px-[1.6vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudgets.includes('Value') },
        ]"
        @click="toggleSelect('Value')"
      >
        <div
          v-if="selectedBudgets.includes('Value')"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>

        <div
          class="h-full w-full bg-gradient-to-tr from-[#000] to-[#A8D5BA] from-[14%] absolute bottom-0 left-0 z-[-1]"
        ></div>

        <span class="text-[2.4vh]">Value</span
        ><span class="font-[400] text-[2vh] text-left"
          >BD. 5.99 m<sup>2</sup> to <br />
          BD. 9.99 m<sup>2</sup>
        </span>
      </div>

      <!-- ESSENTIAL -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  rounded-md  flex-col items-start justify-between flex text-[#f1f1f1] px-[1.6vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudgets.includes('Essential') },
        ]"
        @click="toggleSelect('Essential')"
      >
        <div
          v-if="selectedBudgets.includes('Essential')"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>

        <div
          class="h-full w-full bg-gradient-to-tr from-[#000] to-[#7FC7FF] from-[14%] absolute bottom-0 left-0 z-[-1]"
        ></div>

        <span class="text-[2.4vh]">Essential</span
        ><span class="font-[400] text-[2vh] text-left"
          >BD. 10 m<sup>2</sup> to <br />
          BD. 19.99 m<sup>2</sup>
        </span>
      </div>
    </div>
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <!-- Premier -->
      <div
        :class="[
          'h-[14vh]  border-[2px] border-[#f1f1f1]   w-full flex flex-col items-start justify-between  text-[#f1f1f1] px-[1.6vw]  py-[1.2vh] text-[2.4vh] relative cursor-pointer rounded-md',
          { selected: selectedBudgets.includes('Premier') },
        ]"
        @click="toggleSelect('Premier')"
      >
        <div
          v-if="selectedBudgets.includes('Premier')"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>

        <div
          class="h-full w-full bg-gradient-to-tr from-[#000] via-[#FFD700] to-[#000] to-[200%] absolute bottom-0 left-0 z-[-1]"
        ></div>

        <span class="text-[2.4vh]">Premier</span
        ><span class="font-[400] text-[2vh] text-left"
          >BD. 20 m<sup>2</sup> to <br />
          BD. 24.99 m<sup>2</sup>
        </span>
      </div>

      <!-- SIGNATURE -->
      <div
        :class="[
          'h-[14vh] w-full  border-[2px] border-[#f1f1f1]  rounded-md  flex-col items-start justify-between flex text-[#f1f1f1] px-[1.6vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudgets.includes('Signature') },
        ]"
        @click="toggleSelect('Signature')"
      >
        <div
          v-if="selectedBudgets.includes('Signature')"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>
        <div
          class="h-full w-full bg-gradient-to-tr from-[#000] via-[#6A0DAD] to-[#000] to-[200%] absolute bottom-0 left-0 z-[-1]"
        ></div>

        <span class="text-[2.4vh]">Signature</span
        ><span class="font-[400] text-[2vh] text-left text-left"
          >BD. 25 m<sup>2</sup> to
          <br />
          BD. 29.99 m<sup>2</sup>
        </span>
      </div>
    </div>
    <!-- ELITE -->
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <div
        :class="[
          'h-[16vh] w-full shadow border-[2px] border-[#f1f1f1]  rounded-md  flex-col items-start justify-between flex text-[#f1f1f1] px-[1.6vw] py-[1.2vh] text-[2.4vh] relative cursor-pointer',
          { selected: selectedBudgets.includes('Elite') },
        ]"
        @click="toggleSelect('Elite')"
      >
        <div
          v-if="selectedBudgets.includes('Elite')"
          class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] rounded-md z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <!-- Selected indicator without text -->
          <span
            class="absolute top-1 right-1 bg-white text-gray-500 px-2 py-1 text-xs rounded-md"
            >Selected</span
          >
        </div>

        <div
          class="h-full w-full bg-gradient-to-tr from-[#000] to-[#DC143C] from-[14%] absolute bottom-0 left-0 z-[-1]"
        ></div>

        <span class="text-[2.4vh]">Elite</span
        ><span class="font-[400] text-[2vh] text-left"
          >Over BD. 30 m<sup>2</sup>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// PINIA
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const selectedBudgets = ref([]);

function clearBudgetSelections() {
  selectedBudgets.value = [];
  userStore.preference.budget = [];
}
function scrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 200);
}
const toggleSelect = (type) => {
  if (selectedBudgets.value.includes(type)) {
    selectedBudgets.value = selectedBudgets.value.filter((t) => t !== type);
    userStore.preference.budget = toRaw(selectedBudgets.value);
  } else {
    scrollToBottom();
    selectedBudgets.value.push(type);
    userStore.preference.budget = toRaw(selectedBudgets.value);
  }
};
</script>

<style scoped>
.selected {
  border-radius: 0px; /* Adjust this value as needed */
  border: 2px solid black; /* Adjust border color as needed */
}
</style>
