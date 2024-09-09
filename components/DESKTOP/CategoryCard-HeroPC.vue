<script setup>
const { name, desc, src, isAvailable, link, loading } = defineProps([
  "name",
  "desc",
  "src",
  "isAvailable",
  "link",
  "loading",
]);
</script>
<template>
  <div
    class="h-[42vh] min-[1590px]:h-[36vh] min-[1590px]:w-[32vw] w-[42vw] relative overflow-hidden rounded-xl font-outfit shadow-xl"
  >
    <NuxtImg
      class="h-full w-full absolute top-0 left-0 object-cover z-[-1]"
      :src="`/${src || '#'}`"
      loading="lazy"
      preload
      placeholder
      alt="#"
    />
    <div class="h-full w-full absolute top-0 left-0 object-cover z-[-1]"></div>
    <div
      class="z-[1] h-full w-full bg-gradient-to-r from-black to-[#0000] flex flex-col items-start justify-center px-[2vw] gap-[2vh]"
    >
      <span
        class="text-gridContainer_heading_PC min-[1590px]:text-[1.8vw] font-[400] text-[#f1f1f1]"
        >{{ name }}</span
      >
      <span
        class="w-[60%] text-gridContainer_desc_PC text-[#ececec] min-[1590px]:text-[1.8vh]"
        >{{ desc }}</span
      >
      <a
        :href="link"
        class="text-gridContainer_anchor_PC min-[1590px]:text-[1.8vh] text-[#fff] font-[400] underline underline-offset-[.5vh]"
        >view all</a
      >
    </div>
    <div
      v-if="!isAvailable"
      class="z-[9] absolute top-0 left-0 h-full w-full bg-black bg-opacity-[.4] backdrop-blur-[1px] text-[#fff] w-full gap-[1vh] flex items-center justify-center"
    >
      <span
        class="w-full py-[2vh] min-[1590px]:py-[1.8vh] min-[1590px]:text-[2.4vh] bg-[#444] bg-opacity-[.8] text-center"
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
