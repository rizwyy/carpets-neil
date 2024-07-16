<template>
  <div
    class="overflow-x-hidden bg-[#edf2f4] shadow-sm py-[2vh] h-max w-screen mt-[8vh] mb-[4vh] font-outfit"
  >
    <div class="h-max w-full px-[4vw] pb-[2vh] text-center">
      <span
        class="text-[3.8vh] tracking-[-.3vw] text-transparent bg-clip-text bg-gradient-to-r from-[#14213d] via-[#3d5a80] to-[#00b4d8] from-[10%] to-[90%]"
        >Personalize Your Order.</span
      >
    </div>
    <div class="relative w-full overflow-x-auto no-scrollbar select-none">
      <div
        class="min-w-[140vw] h-full bg-[#00000] flex gap-[2vw] py-[2vh] items-center justify-between px-[8vw]"
      >
        <button
          @click="selectCategory('Carpet')"
          class="relative rounded-md shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <div
            v-if="userStore.customPreference.category.includes('Carpet')"
            class="h-full w-full absolute top-0 right-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-md font-[500]"
          >
            <span> Selected </span>
          </div>
          Carpet
        </button>
        <button
          @click="selectCategory('PVC')"
          class="relative rounded-md shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[4.6vw] py-[.8vh]"
        >
          PVC
          <div
            v-if="userStore.customPreference.category.includes('PVC')"
            class="h-full w-full absolute top-0 right-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-md font-[500]"
          >
            <span> Selected </span>
          </div>
        </button>
        <button
          @click="selectCategory('Wooden')"
          class="relative rounded-md shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          Wooden
          <div
            v-if="userStore.customPreference.category.includes('Wooden')"
            class="h-full w-full absolute top-0 right-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-md font-[500]"
          >
            <span> Selected </span>
          </div>
        </button>
        <button
          @click="selectCategory('Raised')"
          class="relative rounded-md shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          Raised
          <div
            v-if="userStore.customPreference.category.includes('Raised')"
            class="h-full w-full absolute top-0 right-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-md font-[500]"
          >
            <span> Selected </span>
          </div>
        </button>
        <button
          @click="selectCategory('Active')"
          href="/"
          class="relative rounded-md shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          Active
          <div
            v-if="userStore.customPreference.category.includes('Active')"
            class="h-full w-full absolute top-0 right-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-md font-[500]"
          >
            <span> Selected </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// PINIA
import { ref } from "vue";
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const selectedCategory = ref("");

function selectCategory(category) {
  userStore.customPreference.category = category;
}
</script>

<style>
/* Hide scrollbar for IE, Edge, and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari, and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
