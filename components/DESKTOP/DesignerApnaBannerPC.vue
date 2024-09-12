<template>
  <section
    class="w-[72vw] mx-auto relative overflow-hidden rounded-xl shadow-md px-[3vw] pt-[10vh] pb-[6vh] text-center font-outfit flex items-center flex-col gap-[8vh]"
  >
    <!-- First line -->
    <div class="text-[#f1f1f1] text-[3.2vw] tracking-[-.1vw]">
      WOLTIZ
      <span class="text-[#f1f1f1] font-[300] tracking-[0vw] text-[3vw]">
        For Designers
      </span>
    </div>

    <NuxtImg
      src="./apnaBannerIMG.webp"
      alt="#"
      class="h-full w-full object-cover z-[-9] absolute top-0 left-0 object-bottom"
    />
    <div
      class="h-full w-full absolute top-0 left-0 bg-gradient-to-br from-black opacity-[.6] z-[-1]"
    ></div>
    <!-- Second line -->
    <h2 class="text-[#f9f9f9] text-[2vw] font-[400]">
      Unlock Designer Discounts!
    </h2>

    <!-- Fifth line -->
    <p class="text-[#efefef] text-[1.8vw] font-[300]">
      Are you a Designer? Unlock Exclusive Discounts Here!
    </p>

    <!-- Button (Sign Up) -->
    <div class="h-max w-full flex justify-center gap-[3vw] pt-[2vh] pb-[2vh]">
      <a
        href="/contact"
        class="border-[2px] border-[#999] text-[#fff] hover:backdrop-blur-[8px] backdrop-blur-[18px] active:shadow-xl tracking-[.2vw] w-[40%] px-[3vw] py-[2.4vh] rounded-md transition-all duration-300 text-[1.8vw] font-[500]"
      >
        SIGN UP
      </a>
    </div>
  </section>
</template>

<script setup>
// Static display, no extra functionality needed
</script>

<style scoped>
/* Optional: Add any specific styles here if necessary */
</style>
