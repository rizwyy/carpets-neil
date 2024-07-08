<template>
  <div
    class="h-full w-screen overflow-hidden bg-gradient-to-b from-[#fff] via-[#f1f1f1] to-[#ececec] from-[1%] flex items-center justify-center"
  >
    <div
      class="flex h-max w-max items-center flex justify-center gap-[2vh] flex-col px-[2vw] text-center"
    >
      <span class="text-[#222] text-[3.2vh] font-outfit flex">
        Access to this page is restricted.<svg
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
            d="M5.636 5.636a9 9 0 1 0 12.728 12.728M5.636 5.636a9 9 0 1 1 12.728 12.728M5.636 5.636L12 12l6.364 6.364"
          />
        </svg>
      </span>
      <a
        class="text-[3.2vh] underline text-blue-600 underline-offset-[.4vh]"
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
