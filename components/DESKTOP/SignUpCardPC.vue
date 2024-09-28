<template>
  <div
    class="newsLetter_temp_div flex gap-[.4vw] opacity-0 invisible items-center translate-x-[50%] h-max w-max py-[1.8vh] bg-black text-[#f1f1f1] fixed top-[6vh] z-[9999] right-[1vw] px-[1vw] rounded-md bg-opacity-[.4] backdrop-blur-[12px]"
  >
    <Icon icon="material-symbols:download-done-rounded" class="text-[1.8rem]" />
    <span>Subscription successful! We’ll be in touch soon</span>
  </div>
  <section
    class="SingUpCardPC opacity-0 translate-y-[4%] w-[60vw] h-max mx-auto relative bg-gradient-to-br from-[#DCEDFD] rounded-lg shadow-lg px-[4vw] py-[6vh] relative font-outfit flex flex-col items-center gap-[2vh]"
  >
    <!-- Sign-up Header -->
    <h2 class="text-center text-[#333] font-[500] text-[2.5vw]">
      SIGN-UP FOR OFFERS!
    </h2>

    <!-- Description -->
    <p class="text-center text-[#777] text-[1.5vw] mt-[.5vh]">
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
        class="w-[20vw] h-[8vh] shadow-lg bg-inherit text-[#333] text-[1.4vw] tracking-[.1vw] font-[500] border-[#444] border-[.2vh] rounded-md hover:shadow-xl transition-colors duration-300"
      >
        SIGN UP
      </button>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
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
onMounted(() => {
  if (process.client) {
    handleScrollTrigger("SingUpCardPC");
  }
});
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
