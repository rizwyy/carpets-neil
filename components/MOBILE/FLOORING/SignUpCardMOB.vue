<template>
  <section
    class="w-[90vw] h-max mx-auto bg-gradient-to-br from-blue-100 rounded-lg shadow-lg px-[5vw] py-[4.2vh] relative font-outfit"
  >
    <!-- Close button (if needed for some functionality) -->

    <!-- Sign-up Header -->
    <h2
      class="text-center text-[#333] font-[500] text-gridContainer_heading_MOB mb-[4vh]"
    >
      SIGN-UP FOR OFFERS!
    </h2>

    <!-- Description -->
    <p class="text-center text-[#777] text-[4vw] mb-[6vh]">
      Receive the latest offers, promotions, and news straight to your inbox.
    </p>

    <!-- Email Input Field -->
    <div class="mb-[3vh]">
      <input
        type="email"
        placeholder="Enter email address"
        class="w-full h-[6vh] rounded-lg px-[3vw] text-[#333] text-[4vw] border-[.2vh] border-[#ededed] focus:outline-none"
      />
    </div>

    <a href="/contact">
      <!-- Sign-up Button -->
      <button
        class="w-full h-[7vh] shadow-lg bg-inherit text-[#333] text-[2.4vh] tracking-[.1vw] font-[500] border-[#444] border-[.2vh] rounded-md hover:bg-[#333] hover:text-[#fff] transition-colors duration-300"
      >
        SIGN UP
      </button>
    </a>
  </section>
</template>

<script setup>
// If you want a close functionality, you can handle it here, or remove the button if not needed.
function handleClose() {
  console.log("Close button clicked");
  // Logic to handle the closing of the section (if required)
}
</script>

<style scoped>
/* Optional: Additional styles can be added here if needed */
</style>
