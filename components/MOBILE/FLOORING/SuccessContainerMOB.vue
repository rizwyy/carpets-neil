<template>
  <section
    class="h-[100vh] w-screen overflow-x-hidden max-w-[100vw] bg-gradient-to-br from-[#f1f1f1] to-[#ededed] fixed top-0 left-0 font-outfit flex flex-col justify-start gap-[3.2vh] pt-[4vh]"
  >
    <div class="h-max w-[100%] px-[4vw] flex justify-between">
      <h2
        class="h-max w-max font-[300] text-[5.4svh] text-[#555] leading-[4.8svh] tracking-[-.1vw]"
      >
        WOLTIZ
      </h2>
      <!-- <span
        class="h-max w-max font-[300] text-[2svh] text-[#999] leading-[4.8svh]"
      >
        explore
      </span> -->
    </div>
    <div
      class="h-max w-[75%] px-[4vw] flex flex-col items-start gap-[2svh] pt-[1svh]"
    >
      <DoubleTickIcon
        class="txt_Text opacity-0 text-[12svh] text-[#666] max-[320px]:hidden"
      />
      <h2
        class="txt_Text opacity-0 h-max w-full font-[300] text-[4.2svh] text-[#222] leading-[4.8svh]"
      >
        Thanks, {{ firstName }}! You're ready to go.
      </h2>
    </div>
    <div class="h-max w-[90%] px-[4vw]">
      <p class="txt_Text opacity-0 h-max w-[100%] text-[2svh] text-[#666]">
        One of our representatives will contact you soon to confirm the details.
        Please make sure to keep your phone line or email active to avoid any
        delays in communication. We appreciate your trust in us, and we look
        forward to delivering the best service!
      </p>
    </div>
    <div class="h-max w-full px-[4vw]">
      <div
        class="txt_Text opacity-0 h-max w-[100%] min-[990px]:w-[60%] py-[1.6svh] rounded-2xl px-[2.8vw] flex flex-col gap-[1.6svh] text-[#222] bg-[#999] bg-opacity-[.2] backdrop-blur-[8px]"
      >
        <div
          class="flex items-center h-max w-full min-[990px]:tracking-[.2vw] gap-[3vw] text-[#999] tracking-[.4vw] text-[1.8svh] font-[500]"
        >
          <span>WHAT NEXT</span>
        </div>
        <div class="flex items-center h-max w-full gap-[3vw] text-[2.0svh]">
          <span>- Our representative will contact you within 24 hours.</span>
        </div>
        <div class="flex items-center h-max w-full gap-[3vw] text-[2.0svh]">
          <span
            >- Please make sure your contact details are accurate and
            reachable.</span
          >
        </div>
      </div>
    </div>
    <a
      href="/"
      class="txt_Text opacity-0 h-max w-[92vw] text-[2.4svh] tracking-[.4vw] rounded-md py-[2.4svh] text-[#ededed] bg-[#222] text-center fixed bottom-[2vh] left-[4vw] shadow-xl mt-[6svh] z-[99]"
    >
      GOT IT
    </a>
  </section>
</template>

<script setup>
import DoubleTickIcon from "./../../public/icons/DoubleTickIcon.vue";
import TickIcon from "./../../public/icons/TickIcon.vue";
const userPreference = useCookie("userPreference");
const firstName = computed(() => {
  // Check if userPreference and userPreference.value are defined
  if (!userPreference || !userPreference.value || !userPreference.value.name) {
    return "";
  }

  // Proceed with the name extraction and formatting if everything is defined
  const name = userPreference.value.name.trim().split(" ")[0];
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});

onMounted(() => {
  handleImageLoad("el", "txt");
});
</script>

<style lang="scss" scoped></style>
