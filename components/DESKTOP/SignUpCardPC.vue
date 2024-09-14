<template>
  <section
    class="w-[60vw] h-max mx-auto relative bg-gradient-to-br from-blue-100 rounded-lg shadow-lg px-[4vw] py-[6vh] relative font-outfit flex flex-col items-center gap-[2vh]"
  >
    <div
      class="newsLetter_temp_div opacity-0 flex gap-[.4vw] items-center invisible translate-y-[50%] h-max w-max py-[1.8vh] bg-black text-[#f1f1f1] fixed bottom-[4vh] z-[9999] left-[50%] translate-x-[-50%] px-[1vw] rounded-md bg-opacity-[.4] backdrop-blur-[12px]"
    >
      <span>Subscription successful! We’ll be in touch soon.</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 14 14"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m4 8l2.05 1.64a.48.48 0 0 0 .4.1a.5.5 0 0 0 .34-.24L10 4" />
          <circle cx="7" cy="7" r="6.5" />
        </g>
      </svg>
    </div>
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
        v-model="emailIpt"
        type="email"
        placeholder="Enter email address"
        :class="`${
          emailInvalid ? 'border-red-500' : 'border-[#ededed]'
        } w-full h-[8vh] rounded-lg px-[2vw] text-[#333] text-[1.2vw] border-[.2vw]  focus:outline-none`"
      />
    </div>

    <!-- Sign-up Button -->
    <div class="h-max w-full flex justify-center pt-[5.4vh]">
      <button
        @click="handleAddEmailNewsletter"
        class="w-[20vw] h-[7vh] shadow-lg bg-inherit text-[#333] text-[1.4vw] tracking-[.1vw] font-[500] border-[#444] border-[.2vh] rounded-md hover:shadow-xl transition-colors duration-300"
      >
        SIGN UP
      </button>
    </div>
  </section>
</template>

<script setup>
const emailIpt = ref("");
const emailInvalid = ref(false);
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function handleAddEmailNewsletter() {
  if (isValidEmail(emailIpt.value)) {
    emailInvalid.value = false;
    handleAutoAlpha("newsLetter_temp_div", 1, 0, 1);
    setTimeout(() => {
      handleAutoAlpha("newsLetter_temp_div", 0, 0, "50%");
      emailIpt.value = "";
    }, 3000);
  } else {
    emailInvalid.value = true;
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
