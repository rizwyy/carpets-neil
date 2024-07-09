<template>
  <section
    class="max-[990px]:hidden h-max max-w-[100vw] overflow-x-hidden flex items-center justify-between py-[4vh] px-[6vw] bg-[#f1f1f1] font-outfit"
  >
    <div class="h-full w-max flex justify-between gap-[8vw] items-center">
      <a
        href="/"
        class="h-max w-max block font-[300] text-[4.8vh] text-[#333] tracking-[-.1vw]"
      >
        WOLTIZ
      </a>
      <div class="h-max w-max flex justify-center gap-[3.2vw] text-[2.4vh]">
        <a href="/">Home</a><a href="/about">About</a
        ><a href="/about">Contact</a><a href="/flooring">Shop</a>
      </div>
    </div>
    <div class="h-full w-max flex items-center justify-center gap-[2.8vw]">
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
  </section>
</template>

<script setup>
function giveAlert(msg) {
  alert(msg);
}
</script>

<style lang="scss" scoped></style>
