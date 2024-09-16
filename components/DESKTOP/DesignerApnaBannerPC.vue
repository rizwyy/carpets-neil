<template>
  <DesignerFormPC @close="handleCloseForm" v-if="isFormActive" />
  <section
    class="DesignerApnaPC opacity-0 translate-y-[6%] w-[82vw] mx-auto rounded-xl shadow-md px-[3vw] pt-[8vh] pb-[8vh] text-center font-outfit flex items-center flex-col gap-[10vh]"
  >
    <!-- First line -->
    <div
      class="apnaBannerItem_Text opacity-0 text-[#555] text-[3.8vw] tracking-[-.1vw]"
    >
      WOLTIZ
      <span class="text-[#222] font-[300] tracking-[0vw] text-[3vw]">
        For Designers
      </span>
    </div>

    <NuxtImg
      @load="handleImageLoad(0, 'apnaBannerIMG_PC', 'apnaBannerItem')"
      src="/group54.webp"
      alt="#"
      decoding="async"
      loading="lazy"
      class="apnaBannerIMG_PC h-full w-full z-[-9] absolute top-0 left-0 object-cover"
    />
    <!-- Content Overlay -->
    <div
      class="apnaBannerItem_Overlay backdrop-blur-[8px] absolute top-0 left-0 h-full w-full transition-all duration-[.4s] ease-in-out bg-gradient-to-b hover:to-[70%] to-transparent z-[-1]"
    ></div>
    <!-- Second line -->
    <h2
      class="text-[#333] text-[2.4vw] font-[400] apnaBannerItem_Text opacity-0"
    >
      Unlock Designer Discounts!
    </h2>
    <div class="h-max w-full">
      <!-- Fifth line -->
      <p
        class="text-[#666] text-[1.8vw] font-[300] apnaBannerItem_Text opacity-0"
      >
        Are you a Designer? Unlock Exclusive Discounts Here!
      </p>
    </div>

    <!-- Button (Sign Up) -->
    <div
      class="h-max w-full flex justify-center gap-[3vw] pt-[2vh] pb-[2vh] apnaBannerItem_Text opacity-0"
    >
      <button
        @click="bringForm"
        class="border-[2px] border-[#999] text-[#333] hover:shadow-lg backdrop-blur-[18px] active:shadow-xl tracking-[.2vw] w-[40%] px-[3vw] py-[2.4vh] rounded-md transition-all duration-300 text-[1.8vw] font-[500]"
      >
        SIGN UP
      </button>
    </div>
  </section>
</template>

<script setup>
// Static display, no extra functionality needed\
import DesignerFormPC from "./DesignerFormPC.vue";

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
  handleScrollTrigger("DesignerApnaPC");
});
</script>

<style scoped>
/* Optional: Add any specific styles here if necessary */
</style>
