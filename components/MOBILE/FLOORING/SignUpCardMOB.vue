<template>
  <section
    class="signUpCardMOB opacity-0 translate-y-[6%] w-[90vw] h-max mx-auto bg-gradient-to-br from-blue-100 rounded-lg shadow-lg px-[5vw] py-[2rem] relative font-outfit"
  >
    <div
      class="newsLetter_temp_div_MOB opacity-0 flex gap-[2vw] items-center invisible translate-y-[50%] h-max w-max py-[.8rem] bg-black text-[#f1f1f1] fixed top-[1rem] z-[999] left-[50%] translate-x-[-50%] px-[4vw] rounded-md bg-opacity-[.4] backdrop-blur-[12px]"
    >
      <span>Email Added! We’ll be in touch soon.</span>
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
    <h2
      class="text-center text-[#333] font-[500] text-gridContainer_heading_MOB mb-[2rem]"
    >
      SIGN-UP FOR OFFERS!
    </h2>

    <!-- Description -->
    <p class="text-center text-[#777] text-[1rem] mb-[2.4rem]">
      Receive the latest offers, promotions, and news straight to your inbox.
    </p>

    <!-- Email Input Field -->
    <div class="mb-[2.8rem]">
      <input
        v-model="emailIpt"
        type="email"
        placeholder="Enter email address"
        :class="`w-full h-[3rem] rounded-lg px-[3vw] text-[#333] text-[1rem] border-[.1rem] focus:outline-none ${
          emailInvalid ? 'border-red-500' : 'border-[#ededed]'
        }`"
      />
    </div>

    <!-- Sign-up Button -->
    <button
      @click="handleAddEmailNewsletter"
      class="w-full h-[3.8rem] shadow-lg bg-inherit text-[#333] text-[1.2rem] tracking-[.1vw] font-[500] border-[#444] border-[.1rem] rounded-md hover:bg-[#333] hover:text-[#fff] transition-colors duration-300"
    >
      SIGN UP
    </button>
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
    handleAutoAlpha("newsLetter_temp_div_MOB", 1, 0, 1);
    setTimeout(() => {
      handleAutoAlpha("newsLetter_temp_div_MOB", 0, 0, "50%");
      emailIpt.value = "";
    }, 3000);
  } else {
    emailInvalid.value = true;
  }
}

onMounted(() => {
  if (process.client) {
    handleScrollTrigger("signUpCardMOB");
  }
});
</script>

<style scoped>
/* Optional: Additional styles can be added here if needed */
</style>
