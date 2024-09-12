<template>
  <section
    class="w-[90vw] mx-auto mt-[2vh] relative overflow-hidden rounded-lg shadow-md px-[5vw] pt-[5.4vh] pb-[2.8vh] text-center font-outfit flex items-center flex-col gap-[4.2vh]"
  >
    <NuxtImg
      src="./apnaBannerIMG.webp"
      loading="lazy"
      decoding="async"
      alt="#"
      class="h-full w-full object-cover z-[-9] absolute top-0 left-0"
    />
    <div
      class="h-full w-full absolute top-0 left-0 bg-gradient-to-br from-black opacity-[.6] z-[-1]"
    ></div>
    <!-- First line -->
    <div class="text-[#f1f1f1] text-[4vh] tracking-[-.2vw]">
      WOLTIZ
      <span class="text-[#f1f1f1] font-[400] tracking-[0vw] text-[3.2vh]"
        >For Designers</span
      >
    </div>

    <!-- Second line -->
    <h2 class="text-[#ededed] text-[3.2vh] font-[400]">
      Unlock Designer discount
    </h2>

    <!-- Fifth line -->
    <p class="text-[#e9e9e9] text-[2.4vh] font-[400]">
      Are you a Designer? Unlock Exclusive Discounts Here!
    </p>

    <!-- Button (Sign Up) -->
    <div class="h-max w-full flex justify-center gap-[4vw] pt-[2vh] pb-[1vh]">
      <a
        href="/contact"
        class="border-[2px] border-[#fff9] bg-black bg-opacity-[.4] text-[#fff] backdrop-blur-[4px] active:shadow-xl tracking-[.6vw] w-full px-[4vw] py-[2vh] shadow-xl rounded-md transition-colors duration-300 text-[2.4vh] font-[500]"
      >
        SIGN UP
      </a>
    </div>
  </section>
</template>

<script setup>
// No functionality needed for static display
</script>

<style scoped>
/* Any additional styles if needed */
</style>
