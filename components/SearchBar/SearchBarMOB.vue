<template>
  <div
    class="min-[990px]:hidden relative h-max w-screen flex flex-col items-center justify-center my-[1.8vh] px-[8vw] font-outfit"
  >
    <div
      class="div_searchBar h-max w-full flex items-center bg-[#f7f5f2] px-[1vw] rounded-lg shadow-md"
    >
      <input
        v-model="query"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        type="text"
        placeholder="Find your dream product..."
        class="input_searchBar h-max w-full bg-[#f7f5f2] text-[2vh] font-[400] flex-grow py-[1.8vh] rounded-sm pl-[4vw] outline-none focus:outline-none"
      />
      <div
        @click="onSearch"
        class="flex h-full items-center relative justify-center px-[2.4vw] py-[1.2vh] rounded-full bg-[#013912]"
      >
        <div v-if="query === ''" class="h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#f1f1f1"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            />
          </svg>
        </div>
        <a v-else href="flooring/carpets/details">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#f1f1f1"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      v-if="filteredResults.length && isActive"
      class="w-full bg-white border rounded-b-md mt-1 z-10"
    >
      <ul>
        <a
          href="/flooring/carpets/details"
          v-for="(result, index) in filteredResults"
          :key="index"
          class="px-4 py-2 hover:bg-gray-200 cursor-pointer block"
          @click="selectResult(result)"
        >
          {{ result }}
        </a>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useUserStore from "../../../stores/user";
const userStore = useUserStore();
const query = ref("");
const results = ref([
  "Carpet",
  "Furniture",
  "Blinds & Curtains",
  "Beige Carpets",
  "Grey Carpets",
]);
const filteredResults = ref([]);
const isActive = ref(false);

const onInput = () => {
  if (query.value.trim() === "") {
    filteredResults.value = [];
  } else {
    filteredResults.value = results.value.filter((result) =>
      result.toLowerCase().includes(query.value.toLowerCase())
    );
  }
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
  if (query.value.length < 3) {
    return;
  }

  selectResult("Carpet");
};
</script>

<style>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
