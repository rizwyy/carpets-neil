<template>
  <div
    class="h-[88vh] w-screen overflow-hidden bg-gradient-to-b from-[#fff] to-[#fff] flex items-center justify-center"
  >
    <div
      class="flex h-max w-max items-center flex flex-col justify-center gap-[2vh]"
    >
      <span class="text-[#222] text-[3.2vh] font-outfit w-[84%] text-left">
        This page is under development. Please check back soon.
      </span>
      <NuxtImg class="h-[16vh]" src="/workInProgress.png" />
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
