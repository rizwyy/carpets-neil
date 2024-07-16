<template>
  <div
    class="overflow-x-hidden bg-[#fff] shadow-sm py-[2vh] h-max w-screen mt-[8vh] mb-[4vh] font-outfit"
  >
    <div class="h-max w-full px-[4vw] pb-[2vh] text-center">
      <span
        class="text-[3.8vh] tracking-[-.3vw] text-transparent bg-clip-text bg-gradient-to-r from-[#14213d] via-[#3d5a80] to-[#00b4d8] from-[10%] to-[90%]"
        >Personalize Your Order.</span
      >
    </div>
    <div class="relative w-full overflow-x-auto no-scrollbar select-none">
      <div
        class="min-w-[220vw] h-full bg-[#00000] flex gap-[2vw] py-[2vh] items-center justify-between px-[4vw]"
      >
        <button
          @click="selectCategory('Carpet')"
          class="relative h-[12vh] w-[38vw] rounded-lg overflow-hidden shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/area-rugs.webp"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-b from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex items-center justify-center text-[2.4vh]"
          >
            Carpets
          </div>
          <div
            v-if="userStore.customPreference.category.includes('Carpet')"
            class="h-full w-full absolute top-0 left-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-lg font-[500] z-[9]"
          >
            <span class="text-[2vh] tracking-[.1vw]"> Selected </span>
          </div>
          Carpet
        </button>
        <button
          @click="selectCategory('PVC')"
          class="relative h-[12vh] w-[38vw] rounded-lg overflow-hidden shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-b from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex items-center justify-center text-[2.4vh]"
          >
            PVC
          </div>
          <div
            v-if="userStore.customPreference.category.includes('PVC')"
            class="h-full w-full absolute top-0 left-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-lg font-[500] z-[9]"
          >
            <span class="text-[2vh] tracking-[.1vw]"> Selected </span>
          </div>
          Carpet
        </button>
        <button
          @click="selectCategory('Wooden')"
          class="relative h-[12vh] w-[38vw] rounded-lg overflow-hidden shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/50002.jpg"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-b from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex items-center justify-center text-[2.4vh]"
          >
            Wooden
          </div>
          <div
            v-if="userStore.customPreference.category.includes('Wooden')"
            class="h-full w-full absolute top-0 left-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-lg font-[500] z-[9]"
          >
            <span class="text-[2vh] tracking-[.1vw]"> Selected </span>
          </div>
          Carpet
        </button>
        <button
          @click="selectCategory('Raised')"
          class="relative h-[12vh] w-[38vw] rounded-lg overflow-hidden shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/raised-flooring.webp"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-b from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex items-center justify-center text-[2.4vh]"
          >
            Raised
          </div>
          <div
            v-if="userStore.customPreference.category.includes('Raised')"
            class="h-full w-full absolute top-0 left-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-lg font-[500] z-[9]"
          >
            <span class="text-[2vh] tracking-[.1vw]"> Selected </span>
          </div>
          Carpet
        </button>
        <button
          @click="selectCategory('Active')"
          class="relative h-[12vh] w-[38vw] rounded-lg overflow-hidden shadow-sm text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/40002.jpg"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-b from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex items-center justify-center text-[2.4vh]"
          >
            Active
          </div>
          <div
            v-if="userStore.customPreference.category.includes('Active')"
            class="h-full w-full absolute top-0 left-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-lg font-[500] z-[9]"
          >
            <span class="text-[2vh] tracking-[.1vw]"> Selected </span>
          </div>
          Carpet
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
