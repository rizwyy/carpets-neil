<template>
  <section
    class="max-[990px]:hidden h-max max-w-[100vw] overflow-x-hidden flex items-center justify-between py-[4vh] px-[6vw] bg-[#f1f1f1] font-outfit"
  >
    <div class="h-full w-[35%] flex items-center justify-start">
      <button
        @click="
          giveAlert('Menu Page Under Development, Please come back later :(')
        "
      >
        <svg
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
          />
        </svg>
      </button>
    </div>
    <div class="h-full w-[25%] flex justify-center items-center">
      <a
        href="/"
        class="h-max w-max block font-[300] text-[2.8vw] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
    </div>
    <div class="h-full w-[35%] flex justify-end gap-[8vw] items-center">
      <a href="/designer" class="h-max w-max block text-[1.2vw] font-[500]"
        >DESIGNER</a
      >
    </div>
  </section>
</template>

<script setup>
function giveAlert(msg) {
  alert(msg);
}
</script>

<style lang="scss" scoped></style>
