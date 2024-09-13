<template>
  <section
    class="w-[90vw] mx-auto mt-[2vh] relative overflow-hidden rounded-lg shadow-md px-[5vw] pt-[3.4vh] pb-[2.8vh] text-center font-outfit flex items-center flex-col gap-[5.8vh]"
  >
    <NuxtImg
      src="/bannerImage.png"
      decoding="async"
      alt="#"
      loading="lazy"
      class="apnaBannerIMG h-full w-full z-[-9] absolute top-0 left-0 object-cover"
    />

    <!-- First line -->
    <div class="text-[#555] text-[4vh] tracking-[-.3vw]">
      WOLTIZ
      <span class="text-[#222] font-[400] tracking-[0vw] text-[3.6vh]"
        >For Designers</span
      >
    </div>

    <!-- Second line -->
    <h2 class="text-[#333] text-[2.8vh] font-[400] pb-[2vh]">
      Unlock Designer Discounts!
    </h2>

    <!-- Fifth line -->
    <div class="h-max w-full flex justify-end">
      <p class="w-[72%] text-[#888] text-[2vh] font-[400]">
        Are you a Designer? Unlock Exclusive Discounts Here!
      </p>
    </div>

    <!-- Button (Sign Up) -->
    <div
      class="h-max w-full flex justify-end gap-[4vw] pt-[2vh] pr-[1vw] pb-[1vh]"
    >
      <a
        href="/contact"
        class="border-[2px] border-[#888] text-[#444] active:shadow-xl w-[45%] py-[1.8vh] shadow-md rounded-full transition-colors duration-300 text-[2.4vh] font-[500]"
      >
        Sign up
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
