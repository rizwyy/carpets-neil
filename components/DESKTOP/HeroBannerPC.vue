<template>
  <div
    class="h-max w-[80vw] rounded-md my-[6vh] shadow-xl bg-gradient-to-tr from-[#bde0fe] backdrop-blur-[8px] via-[#a2d2ff] to-[#7dd3fc] from-[1%] flex flex-col justify-center items-center z-[99] pb-[2vh] gap-[.2vh] pt-[3.2vh]"
  >
    <span
      class="w-[75%] text-[#fff] text-center font-[350] text-[4.4vw] leading-[8.4vh] py-[1vh] font-sans tracking-[-.1vw]"
      >Find the right
      <span class="font-domino text-[#1e3a8a] font-[300] tracking-[-.2vw]">
        decor</span
      >
      <br />
      right away.</span
    >
    <div class="h-max w-screen flex justify-center pt-[1.8vh] pb-[2.8vh]">
      <SearchBarPC />
    </div>
  </div>
</template>

<script setup>
import SearchBarPC from "../SearchBar/SearchBarPC.vue";
</script>

<style lang="scss" scoped></style>
