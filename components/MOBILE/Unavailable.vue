<template>
  <div
    class="h-full w-screen overflow-hidden bg-gradient-to-b from-[#fff] via-[#f1f1f1] to-[#ececec] from-[1%] flex items-center justify-center"
  >
    <div
      class="flex h-max w-full items-center flex justify-center min-[990px]:gap-[4vh] gap-[2vh] flex-col px-[2vw] text-center"
    >
      <span
        class="text-[#222] min-[990px]:text-[5vh] text-[3.2vh] font-outfit flex"
      >
        Sorry, Direct access to this page is restricted.
      </span>
      <a
        class="text-[2.8vh] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[1vh] text-white bg-black"
        href="/"
        >Go Home</a
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
