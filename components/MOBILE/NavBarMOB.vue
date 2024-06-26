<template>
  <div
    id="NavBarPC"
    class="h-[12vh] px-[6vw] w-full flex items-center justify-between relative z-[99] font-outfit-300"
  >
    <div class="h-max w-max">
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
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
      class="h-max w-max absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[5vw] text-[#333] tracking-[-.1vw]"
    >
      WOLTIZ / FLOORS
    </a>
    <div class="h-max w-max text-[4vw]">DESIGNER</div>
  </div>
</template>

<script setup></script>

<style scoped>
.font-outfit-300 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.font-outfit-400 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.font-outfit-500 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
