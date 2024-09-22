<template>
  <div class="h-max w-max">
    <SearchIcon @click="handleClick" class="text-[2rem] cursor-pointer" />
  </div>
  <div
    @click.self="handleClose"
    v-if="isExpanded"
    class="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-[.6] z-[9999] backdrop-blur-[8px] flex flex-col items-center pt-[16vh]"
  >
    <div
      class="h-[40vh] w-[60vw] bg-white rounded-md overflow-hidden flex flex-col items-center justify-start"
    >
      <div
        class="h-max w-full flex items-center px-[2vw] pt-[2.8vh] pb-[2vh] border-b-[1px]"
      >
        <div class="flex h-max items-center relative justify-center">
          <div v-if="query === ''" class="h-full w-full flex items-center">
            <SearchIcon class="text-[#333] text-[1.4vw]" />
          </div>
          <a v-else :href="selectedUrl">
            <SearchIcon
              @click="onSearch"
              class="text-[#333] text-[1.4vw] cursor-pointer"
            />
          </a>
        </div>
        <div class="h-max w-full flex items-center px-[4vw]">
          <input
            @keydown.enter="handleEnterKey"
            v-model="query"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            type="text"
            placeholder="Find your dream product.."
            class="input_searchBar h-max w-full bg-inherit placeholder-[#999] text-[#333] rounded-l-sm text-[1rem] font-[400] flex-grow pl-[1vw] outline-none focus:outline-none"
          />
        </div>
        <div @click="handleClose" class="h-max w-max cursor-pointer">
          <span
            class="py-[1vh] px-[1vw] bg-[#ededed] rounded-md shadow-lg text-[.8rem]"
            >ESC</span
          >
        </div>
      </div>
      <div class="h-max w-full overflow-y-scroll">
        <ul v-auto-animate>
          <li
            v-for="(result, index) in filteredResults"
            :key="index"
            class="h-max w-full py-[1vh] px-[2vw] border-b-[1px] hover:bg-gray-200 cursor-pointer block text-black"
            @click="selectResult(result)"
          >
            {{ result.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchIcon from "~/public/icons/searchIcon.vue";
import { searchQueries } from "~/utils/searchQueries"; // Import the search queries

const query = ref("");

const selectedUrl = ref("");
const filteredResults = ref([]);
const isActive = ref(false);
const isExpanded = ref(false);

const onInput = () => {
  if (query.value.trim() === "") {
    filteredResults.value = [];
  } else {
    filteredResults.value = searchQueries.filter((searchQuery) =>
      searchQuery.label.toLowerCase().includes(query.value.toLowerCase())
    );
  }
};
// Add ESC key event listener
const handleEscKey = (event) => {
  if (event.key === "Escape") {
    handleClose();
  }
};
const handleEnterKey = () => {
  onSearch();
};

onMounted(() => {
  window.addEventListener("keydown", handleEscKey);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscKey);
});

function handleClick() {
  isExpanded.value = true;
  DISABLE_SCROLL();
}
function handleClose() {
  ENABLE_SCROLL();
  isExpanded.value = false;
}

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
</script>

<style>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
