<template>
  <div
    class="relative h-max w-screen flex flex-col items-center justify-center mt-[2vh]"
  >
    <div class="h-max w-full flex items-center pl-[8vw]">
      <input
        v-model="query"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        type="text"
        placeholder="Search..."
        class="w-full flex-grow py-[1vh] border-b-[1px] border-black rounded-sm pl-[4vw] outline-none focus:outline-none"
      />
      <button
        @click="onSearch"
        class="flex items-center justify-center bg-white text-black pr-[8vw]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="filteredResults.length && isActive"
      class="w-full bg-white border rounded-b-md mt-1 z-10"
    >
      <ul>
        <li
          v-for="(result, index) in filteredResults"
          :key="index"
          class="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          @click="selectResult(result)"
        >
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const query = ref("");
const results = ref(["Carpet", "Furniture", "Blinds & Curtains", "Result 4"]);
const filteredResults = ref([]);
const isActive = ref(false);

const onInput = () => {
  filteredResults.value = results.value.filter((result) =>
    result.toLowerCase().includes(query.value.toLowerCase())
  );
};

const onFocus = () => {
  isActive.value = true;
};

const onBlur = () => {
  setTimeout(() => {
    isActive.value = false;
  }, 100);
};

const selectResult = (result) => {
  query.value = result;
  filteredResults.value = [];
  isActive.value = false;
};

const onSearch = () => {
  // Handle the search action
  console.log("Search:", query.value);
};
</script>

<style scoped>
/* You can add any additional styling here */
</style>
