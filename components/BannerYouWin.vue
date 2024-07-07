<template>
  <div class="h-max w-screen flex items-center justify-center my-[2vh]">
    <div
      class="h-[24vh] w-[90%] relative rounded-md overflow-hidden shadow-md flex items-center justify-center"
    >
      <div
        class="absolute h-full w-full left-0 top-0 z-[-1] bg-gradient-to-br from-black to-[#fff] opacity-[.3]"
      ></div>
      <div class="absolute h-full w-full left-0 top-0 z-[-9]">
        <NuxtImg src="/runners.webp" class="h-full w-full object-cover" />
      </div>
      <span class="font-outfit text-[3.2vh] font-[500] text-[#f1f1f1]"
        >BANNER</span
      >
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
