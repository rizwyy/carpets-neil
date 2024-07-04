<script setup>
const { name, desc, src, isAvailable, link } = defineProps([
  "name",
  "desc",
  "src",
  "isAvailable",
  "link",
]);
</script>
<template>
  <div class="h-[32vh] w-full relative overflow-hidden rounded-sm font-outfit">
    <NuxtImg
      class="h-full w-full absolute top-0 left-0 object-cover z-[-1]"
      :src="`/${src || '#'}`"
      alt="#"
    />
    <div
      class="z-[1] h-full w-full bg-gradient-to-r from-black to-[#0000] flex flex-col items-start justify-center px-[2vw] gap-[1vh]"
    >
      <span class="text-[3.2vh] text-[#f1f1f1]">{{ name }}</span>
      <span class="w-[60%] text-[2vh] text-[#ececec]">{{ desc }}</span>
      <a
        :href="link"
        class="text-[2vh] text-[#fff9] underline underline-offset-[.4vh]"
        >View All</a
      >
    </div>
    <div
      v-if="!isAvailable"
      class="z-[9] absolute top-0 left-0 h-full w-full bg-black bg-opacity-[.4] backdrop-blur-[1px] text-[#fff] w-full gap-[1vh] flex items-center justify-center"
    >
      <span class="w-full py-[.4vh] bg-[#444] bg-opacity-[.8] text-center"
        >NOT AVAILABLE</span
      >
    </div>
  </div>
</template>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
