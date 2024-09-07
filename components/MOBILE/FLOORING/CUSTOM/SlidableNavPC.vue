<!-- DesktopPersonalization.vue -->
<template>
  <div
    class="max-[990px]:hidden overflow-x-hidden bg-[#fff] shadow-sm py-[4vh] h-max max-w-screen mt-[8vh] mb-[4vh] font-outfit"
  >
    <div class="h-max w-full px-[4vw] pb-[6vh] text-center">
      <span
        class="text-[2.8vw] text-transparent bg-clip-text bg-gradient-to-r from-[#14213d] via-[#3d5a80] to-[#00b4d8] from-[10%] to-[90%]"
      >
        Personalize Your Order
      </span>
    </div>

    <div class="relative w-full overflow-x-hidden select-none">
      <div
        class="w-full h-full bg-[#00000] flex flex-col gap-[8vh] py-[2vh] items-center justify-between px-[4vw]"
      >
        <div class="h-max w-full flex justify-center gap-[2vw]">
          <div v-for="(category, index) in categories" :key="index">
            <button
              @click="selectCategory(category.name)"
              class="relative h-[20vh] w-[24vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
            >
              <NuxtImg
                class="absolute h-full w-full left-0 top-0 object-cover"
                :src="category.image"
                alt="category"
              />
              <div
                class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[1vw] py-[1.2vh]"
              >
                <div class="h-max w-full flex justify-end">
                  <svg
                    v-if="
                      !userStore.customPreference.category.includes(
                        category.name
                      )
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                    />
                  </svg>
                </div>
                <div class="h-max w-full flex flex-col items-start justify-end">
                  <span class="text-[2.4vh]">{{ category.label }}</span>
                  <span class="text-[1.6vh] text-[#ecececec]">{{
                    category.description
                  }}</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useUserStore from "~/stores/user";
const userStore = useUserStore();

// Define categories with image, name, label, and description
const categories = ref([
  {
    name: "Carpet",
    label: "Carpets",
    description: "Axminster | Hand Tufted | Printed & more",
    image: "/area-rugs.webp",
  },
  {
    name: "PVC",
    label: "PVC",
    description: "Option | Option | Option & more",
    image: "/pvc-flooring.webp",
  },
  {
    name: "Wooden",
    label: "Wooden",
    description: "Option | Option | Option & more",
    image: "/50002.jpg",
  },
  {
    name: "Rubber",
    label: "Rubber",
    description: "Option | Option | Option & more",
    image: "/raised-flooring.webp",
  },
]);

function selectCategory(category) {
  userStore.customPreference.category = category;
}
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
