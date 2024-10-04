<template>
  <section
    class="h-[100vh] w-screen overflow-x-hidden max-w-[100vw] bg-gradient-to-br from-[#f1f1f1] to-[#ededed] fixed top-0 left-0 font-outfit flex flex-col justify-start gap-[3rem] pt-[2rem]"
  >
    <div class="h-max w-[100%] px-[4vw] flex justify-between">
      <a
        href="/"
        class="h-max w-max font-[300] text-[3.8rem] text-[#555] leading-[4.8vw] tracking-[-.2vw]"
      >
        WOLTIZ
      </a>
    </div>
    <div class="h-max w-max px-[4vw] flex items-center gap-[.2vw]">
      <h2
        class="txt_Text opacity-0 h-max w-full font-[300] text-[3rem] text-[#222] leading-[4vw]"
      >
        Thanks, {{ firstName }}! You're ready to go
      </h2>
      <DoubleTickIcon
        class="txt_Text opacity-0 text-[7.2rem] text-[#666] max-[320px]:hidden"
      />
    </div>
    <div class="h-max w-[70%] px-[4vw]">
      <p class="txt_Text opacity-0 h-max w-[100%] text-[1.4rem] text-[#666]">
        One of our representatives will contact you soon to confirm the details.
        Please make sure to keep your phone line or email active to avoid any
        delays in communication. We appreciate your trust in us, and we look
        forward to delivering the best service!
      </p>
    </div>
    <div class="h-max w-full px-[4vw]">
      <div
        class="txt_Text opacity-0 h-max w-max py-[2.8vh] rounded-xl px-[2.4vw] flex flex-col gap-[1.6vh] text-[#222] bg-[#999] bg-opacity-[.2] backdrop-blur-[8px]"
      >
        <div
          class="flex items-center h-max w-full tracking-[.2vw] text-[#999] text-[1.4rem] font-[500]"
        >
          <span>WHAT NEXT</span>
        </div>
        <div class="flex items-center h-max w-full gap-[2vw] text-[1.2rem]">
          <span
            >- Our representative will contact you within 24 to 48 hours.</span
          >
        </div>
        <div class="flex items-center h-max w-full gap-[2vw] text-[1.2rem]">
          <span
            >- Please make sure your contact details are accurate and
            reachable.</span
          >
        </div>
      </div>
    </div>
    <a
      href="/"
      class="txt_Text opacity-0 h-max w-[92vw] text-[1.8rem] tracking-[.3vw] rounded-md py-[1.6rem] text-[#ededed] bg-[#222] text-center fixed bottom-[1.2rem] left-[50%] translate-x-[-50%] shadow-xl z-[99]"
    >
      CONFIRM & GO HOME
    </a>
  </section>
</template>

<script setup>
import DoubleTickIcon from "./../../public/icons/DoubleTickIcon.vue";
import TickIcon from "./../../public/icons/TickIcon.vue";
const userPreference = useCookie("userPreference");
const firstName = computed(() => {
  if (
    !userPreference ||
    !userPreference.value ||
    typeof userPreference.value.name !== "string"
  ) {
    return "";
  }

  const name = userPreference.value.name.trim().split(" ")[0];
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
});

onMounted(() => {
  handleImageLoad(0.4, "el", "txt");
});
</script>

<style lang="scss" scoped></style>
