<template>
  <div class="h-[38vh] w-[32vw] relative overflow-hidden font-outfit">
    <NuxtImg
      class="h-full w-full absolute top-0 left-0 object-cover z-[-1]"
      src="/10001.jpg"
      alt="#"
    />
    <div
      class="z-[1] h-full w-full bg-gradient-to-r from-black to-[#0000] flex flex-col items-start justify-center px-[2vw] gap-[1vh]"
    >
      <span class="text-[3.2vh] text-[#f1f1f1]">{{ name }}</span>
      <span class="w-[60%] text-[2.4vh] text-[#ececec]">{{ desc }}</span>
      <a
        href="/flooring"
        class="text-[2vh] text-[#fff9] underline underline-offset-[.4vh]"
        >View All</a
      >
    </div>
    <div class="z-[9] h-full text-[#fff] w-full px-[2vw] gap-[1vh]">
      <span>NOT AVAILABLE</span>
    </div>
  </div>
</template>

<script setup>
const { name, desc, src } = defineProps(["name", "desc", "src"]);
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
