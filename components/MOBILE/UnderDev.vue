<template>
  <div
    class="h-[88vh] w-screen overflow-hidden bg-gradient-to-b from-[#fff] via-[#f1f1f1] to-[#ececec] from-[1%] flex items-center justify-center"
  >
    <div
      class="flex h-max w-max items-center flex flex-col justify-center gap-[2vh] px-[2vw] text-center"
    >
      <span class="text-[#222] text-[4.2vh] font-outfit">
        This page is under development. Please check back soon.
      </span>
      <NuxtImg class="h-[18vh]" src="/workInProgress.png" />
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
