<template>
  <section
    class="h-[100vh] w-screen overflow-x-hidden max-w-[100vw] bg-gradient-to-br from-[#f1f1f1] to-[#ededed] fixed top-0 left-0 font-outfit flex flex-col justify-start gap-[1.8rem] pt-[2rem]"
  >
    <div class="h-max w-[100%] px-[4vw] flex justify-between">
      <h2
        class="h-max w-max font-[300] text-[2.9rem] text-[#555] leading-[2.4rem] tracking-[-.07rem]"
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
      class="h-max w-[75%] px-[4vw] flex flex-col items-start gap-[1rem] pt-[.4rem]"
    >
      <DoubleTickIcon
        class="txt_Text opacity-0 text-[6rem] text-[#666] max-[320px]:hidden"
      />
      <h2
        class="txt_Text opacity-0 h-max w-full font-[300] text-[2.1rem] text-[#222] leading-[2.4rem]"
      >
        Thanks, {{ firstName }}! You're ready to go.
      </h2>
    </div>
    <div class="h-max w-[90%] px-[4vw]">
      <p class="txt_Text opacity-0 h-max w-[100%] text-[1rem] text-[#666]">
        One of our representatives will contact you soon to confirm the details.
        Please make sure to keep your phone line or email active to avoid any
        delays in communication. We appreciate your trust in us, and we look
        forward to delivering the best service!
      </p>
    </div>
    <div class="h-max w-full px-[4vw]">
      <div
        class="txt_Text opacity-0 h-max w-[100%] min-[990px]:w-[60%] py-[.8rem] rounded-2xl px-[2.8vw] flex flex-col gap-[.8rem] text-[#222] bg-[#999] bg-opacity-[.2] backdrop-blur-[8px]"
      >
        <div
          class="flex items-center h-max w-full min-[990px]:tracking-[.2vw] gap-[3vw] text-[#999] tracking-[.4vw] text-[.9rem] font-[500]"
        >
          <span>WHAT NEXT</span>
        </div>
        <div class="flex items-center h-max w-full gap-[3vw] text-[1rem]">
          <span>- Our representative will contact you within 24 hours.</span>
        </div>
        <div class="flex items-center h-max w-full gap-[3vw] text-[1rem]">
          <span
            >- Please make sure your contact details are accurate and
            reachable.</span
          >
        </div>
      </div>
    </div>
    <a
      href="/"
      class="txt_Text opacity-0 h-max w-[92vw] text-[1.2rem] tracking-[.4vw] rounded-md py-[1.2rem] text-[#ededed] bg-[#222] text-center fixed bottom-[2vh] left-[4vw] shadow-xl mt-[3rem] z-[99]"
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
  // Check if userPreference, userPreference.value, and userPreference.value.name are defined and valid
  if (
    !userPreference ||
    !userPreference.value ||
    typeof userPreference.value.name !== "string"
  ) {
    return "";
  }

  // Proceed with the name extraction and formatting if it's a valid string
  const name = userPreference.value.name.trim().split(" ")[0];
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});

onMounted(() => {
  handleImageLoad(0.4, "el", "txt");
});
</script>

<style lang="scss" scoped></style>
