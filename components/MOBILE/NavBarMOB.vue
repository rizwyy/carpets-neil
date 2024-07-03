<template>
  <div
    id="NavBarPC"
    class="h-[12vh] px-[6vw] w-full flex items-center justify-between relative z-[99] font-outfit"
  >
    <div class="h-max w-max">
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 17h18M3 12h18M3 7h18"
          /></svg
      ></span>
    </div>
    <a
      href="/"
      class="h-max w-max absolute top-[50%] left-[50%] translate-x-[-58%] translate-y-[-50%] font-[300] text-[5vh] text-[#333] tracking-[-.1vw]"
    >
      WOLTIZ
    </a>
    <div class="h-max w-max text-[2vh] font-[500]">DESIGNER</div>
  </div>
</template>

<script setup></script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
</style>
