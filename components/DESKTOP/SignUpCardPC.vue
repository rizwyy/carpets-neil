<template>
  <section
    class="w-[60vw] h-max mx-auto bg-gradient-to-br from-blue-100 rounded-lg shadow-lg px-[4vw] py-[6vh] relative font-outfit flex flex-col items-center gap-[2vh]"
  >
    <!-- Sign-up Header -->
    <h2 class="text-center text-[#333] font-[500] text-[2.5vw]">
      SIGN-UP FOR OFFERS!
    </h2>

    <!-- Description -->
    <p class="text-center text-[#777] text-[1.5vw]">
      Receive the latest offers, promotions, and news straight to your inbox.
    </p>

    <!-- Email Input Field -->
    <div class="h-max w-full pt-[4vh]">
      <input
        type="email"
        placeholder="Enter email address"
        class="w-full h-[8vh] rounded-lg px-[2vw] text-[#333] text-[1.2vw] border-[.2vh] border-[#ededed] focus:outline-none"
      />
    </div>

    <!-- Sign-up Button -->
    <div class="h-max w-full flex justify-center pt-[5.4vh]">
      <a href="/contact">
        <button
          class="w-[20vw] h-[7vh] shadow-lg bg-inherit text-[#333] text-[1.4vw] tracking-[.1vw] font-[500] border-[#444] border-[.2vh] rounded-md hover:shadow-xl transition-colors duration-300"
        >
          SIGN UP
        </button>
      </a>
    </div>
  </section>
</template>

<script setup>
// No close button for PC version as per your requirement
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
