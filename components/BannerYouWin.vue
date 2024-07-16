<template>
  <div
    class="max-[990px]:hidden h-max w-full flex items-center justify-center my-[2vh]"
  >
    <div
      class="h-[38vh] w-[90%] relative rounded-md overflow-hidden shadow-md flex flex-col gap-[2vh] items-center justify-center"
    >
      <div
        class="absolute h-full w-full left-0 top-0 z-[-1] bg-gradient-to-br from-black to-[#f5f3f1] opacity-[.6]"
      ></div>
      <div class="absolute h-full w-full left-0 top-0 z-[-9]">
        <NuxtImg src="/runners.webp" class="h-full w-full object-cover" />
      </div>
      <span class="font-outfit text-bannerMOB font-[400] text-[#f6f6f6]"
        >{{
          `${userStore.customPreference.category} Flooring` || "Flooring"
        }}.</span
      >
      <button
        class="rounded-md shadow-lg max-[990px]:px-[6vw] px-[2vw] py-[2vh] bg-[#fcfcfc] text-[#333] flex items-center gap-[.4vw]"
      >
        How Woltiz Works<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#222"
            d="m10 16.5l6-4.5l-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
          />
        </svg>
      </button>
    </div>
  </div>
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- MOBILE -->
  <div
    class="min-[990px]:hidden h-max w-screen flex items-center justify-center my-[2vh] px-[3.2vw]"
  >
    <div
      class="h-[24vh] w-[100%] relative rounded-md overflow-hidden shadow-md flex flex-col gap-[0vh] items-center justify-center pt-[4.8vh] pb-[1vh]"
    >
      <div
        class="absolute h-full w-full left-0 top-0 z-[-1] bg-gradient-to-br from-black to-[#fff9] opacity-[.6]"
      ></div>
      <div class="absolute h-full w-full left-0 top-0 z-[-9]">
        <NuxtImg
          v-if="userStore.customPreference.category === 'Carpet'"
          src="/area-rugs.webp"
          class="h-full w-full object-cover"
        />
        <NuxtImg
          v-else-if="userStore.customPreference.category === 'PVC'"
          src="/pvc-flooring.webp"
          class="h-full w-full object-cover"
        />
        <NuxtImg
          v-else-if="userStore.customPreference.category === 'Wooden'"
          src="/50002.jpg"
          class="h-full w-full object-cover"
        />
        <NuxtImg
          v-else-if="userStore.customPreference.category === 'Raised'"
          src="/raised-flooring.webp"
          class="h-full w-full object-cover"
        />
        <NuxtImg
          v-else-if="userStore.customPreference.category === 'Active'"
          src="/40002.jpg"
          class="h-full w-full object-cover"
        />
        <NuxtImg
          v-else
          src="/runners.webp"
          class="h-full w-full object-cover"
        />
      </div>
      <span class="font-outfit text-bannerMOB font-[400] text-[#f6f6f6]"
        >{{
          `${userStore.customPreference.category} Flooring` || "Flooring"
        }}.</span
      >
      <button
        class="rounded-md font-outfit shadow-lg px-[2vw] py-[1.8vh] bg-[#000] bg-opacity-[.4] text-[1.8vh] backdrop-blur-[4px] text-[#f1f1f1] flex items-center gap-[.8vw] font-[500]"
      >
        See How Woltiz Works<svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fcfcfc"
            d="m10 16.5l6-4.5l-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import useUserStore from "../../../stores/user";
const userStore = useUserStore();
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
