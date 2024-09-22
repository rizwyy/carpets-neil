<template>
  <div
    class="min-[990px]:hidden searchBarMOB opacity-0 translate-y-[-20%] relative h-max w-screen flex flex-col items-center justify-center my-[1.8vh] px-[8vw] font-outfit"
  >
    <div
      class="div_searchBar h-[7.2vh] w-full flex items-center bg-[#f7f5f2] pl-[1vw] rounded-lg shadow-md overflow-hidden"
    >
      <input
        v-model="query"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        type="text"
        placeholder="Find your dream product..."
        class="input_searchBar h-max w-full bg-[#f7f5f2] text-[1rem] py-[1.8vh] font-[400] flex-grow pl-[4vw] outline-none focus:outline-none"
      />
      <div
        @click="onSearch"
        class="flex h-full w-max items-center relative justify-center px-[4vw] rounded-r-md bg-[#000]"
      >
        <div v-if="query === ''" class="h-full w-full">
          <div class="h-full w-max flex items-center">
            <SearchIcon class="text-white text-[1.2rem]" />
          </div>
        </div>
        <a v-else :href="selectedUrl">
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
      <ul v-auto-animate>
        <li
          v-for="(result, index) in filteredResults"
          :key="index"
          class="px-4 py-2 hover:bg-gray-200 cursor-pointer block"
          @click="selectResult(result)"
        >
          {{ result.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { searchQueries } from "~/utils/searchQueries"; // Import the search queries
import useUserStore from "../../../stores/user";
import SearchIcon from "~/public/icons/searchIcon.vue";

const userStore = useUserStore();
const query = ref("");
const filteredResults = ref([]);
const isActive = ref(false);
const selectedUrl = ref("");

const onInput = () => {
  if (query.value.trim() === "") {
    filteredResults.value = [];
  } else {
    filteredResults.value = searchQueries.filter((searchQuery) =>
      searchQuery.label.toLowerCase().includes(query.value.toLowerCase())
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
  query.value = result.label;
  selectedUrl.value = result.url;
  filteredResults.value = [];
  isActive.value = false;
};

const onSearch = () => {
  if (query.value.length < 3) {
    return;
  }

  const found = searchQueries.find(
    (searchQuery) =>
      searchQuery.label.toLowerCase() === query.value.toLowerCase()
  );
  if (found) {
    selectedUrl.value = found.url;
  } else {
    // If no match found, you can set a default URL or handle it as needed
    selectedUrl.value = "/flooring";
  }
};

onMounted(() => {
  handleDOMEntry("searchBarMOB");
});
</script>

<style>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
