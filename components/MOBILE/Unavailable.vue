<template>
  <div
    class="h-screen absolute w-screen overflow-hidden bg-[#ececec] from-[1%] flex items-center justify-center z-[9999]"
  >
    <div
      class="flex h-full w-full items-center flex justify-center min-[990px]:gap-[4vh] gap-[2vh] flex-col px-[2vw] text-center"
    >
      <span
        class="text-[#222] min-[990px]:text-[5vh] text-[3.2vh] font-outfit flex"
      >
        Direct access to this page is restricted.
      </span>
      <a
        class="text-[2.4vh] max-[990px]:fixed bottom-[2vh] max-[990px]:w-[92vw] px-[4vw] min-[990px]:py-[2vh] rounded-md py-[2vh] text-white bg-black"
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
