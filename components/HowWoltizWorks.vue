<template>
  <div class="h-max max-w-screen px-[4.8vw]">
    <div
      class="HowWoltizWorks-section relative h-max w-full flex flex-col gap-[4vh] items-center font-outfit justify-center py-[6vh] px-[2vw]"
    >
      <NuxtImg
        src="/40004.jpg"
        class="h-full w-full absolute top-0 left-0 z-[-9] object-cover"
      />
      <div
        class="h-full w-full absolute top-0 left-0 z-[-1] bg-black opacity-[.4]"
      ></div>
      <span class="font-[400] text-bannerContainer_heading_MOB text-[#f1f1f1]"
        >You Win, We Win</span
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
</template>

<script setup></script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
