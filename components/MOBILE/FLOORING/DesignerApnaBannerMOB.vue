<template>
  <DesignerFormMOB @close="handleCloseForm" v-if="isFormActive" />
  <section
    class="designerCardMOB opacity-0 translate-y-[6%] w-[90vw] mx-auto mt-[2vh] overflow-hidden rounded-lg shadow-md px-[5vw] pt-[3.4vh] pb-[2.8vh] text-center font-outfit flex items-center flex-col gap-[5.8vh]"
  >
    <div
      class="apnaBannerItem_Overlay backdrop-blur-[8px] absolute top-0 left-0 h-full w-full transition-all duration-[.4s] ease-in-out bg-gradient-to-b hover:to-[70%] to-transparent z-[-1]"
    ></div>
    <NuxtImg
      src="/bannerImage.png"
      decoding="async"
      alt="#"
      @load="handleImageLoad(0, 'apnaBannerIMG_PC', 'apnaBannerItem')"
      loading="lazy"
      class="apnaBannerIMG h-full w-full z-[-9] absolute top-0 left-0 object-cover"
    />

    <!-- First line -->
    <div
      class="apnaBannerItem_Text opacity-0 text-[#555] text-[4vh] tracking-[-.3vw]"
    >
      WOLTIZ
      <span class="text-[#222] font-[400] tracking-[0vw] text-[3.6vh]"
        >For Designers</span
      >
    </div>

    <!-- Second line -->
    <h2
      class="apnaBannerItem_Text opacity-0 text-[#333] text-[2.8vh] font-[400] pb-[2vh]"
    >
      Unlock Designer Discounts!
    </h2>

    <!-- Fifth line -->
    <div class="h-max w-full flex justify-end">
      <p
        class="apnaBannerItem_Text opacity-0 w-[72%] text-[#888] text-[2vh] font-[400]"
      >
        Are you a Designer? Unlock Exclusive Discounts Here!
      </p>
    </div>

    <!-- Button (Sign Up) -->
    <div
      class="h-max w-full flex justify-end gap-[4vw] pt-[2vh] pr-[1vw] pb-[1vh]"
    >
      <button
        @click="bringForm"
        class="apnaBannerItem_Text opacity-0 border-[2px] border-[#888] text-[#444] active:shadow-xl w-[45%] py-[1.8vh] shadow-md rounded-full transition-colors duration-300 text-[2.4vh] font-[500]"
      >
        Sign up
      </button>
    </div>
  </section>
</template>

<script setup>
import DesignerFormMOB from "./DesignerFormMOB.vue";

const isFormActive = ref(false);

// Function to handle the 'close' event emitted by the child component
function handleCloseForm() {
  isFormActive.value = false; // Close the form by setting this to false
  ENABLE_SCROLL();
}
const bringForm = () => {
  isFormActive.value = true;
  DISABLE_SCROLL();
};

onMounted(() => {
  if (process.client) {
    handleScrollTrigger("designerCardMOB");
  }
});
</script>

<style scoped>
/* Any additional styles if needed */
</style>
