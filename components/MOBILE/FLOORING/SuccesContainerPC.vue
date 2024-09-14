<template>
  <section
    class="h-[100vh] w-screen overflow-x-hidden max-w-[100vw] bg-gradient-to-br from-[#f1f1f1] to-[#ededed] fixed top-0 left-0 font-outfit flex flex-col justify-start gap-[3.2vw] pt-[4vw]"
  >
    <div class="h-max w-[100%] px-[4vw] flex justify-between">
      <h2
        class="h-max w-max font-[300] text-[4vw] text-[#555] leading-[4.8vw] tracking-[-.2vw]"
      >
        WOLTIZ
      </h2>
    </div>
    <div class="h-max w-max px-[4vw] flex items-center gap-[.2vw] pt-[1vw]">
      <h2
        class="txt_Text opacity-0 h-max w-full font-[300] text-[3.2vw] text-[#222] leading-[4vw]"
      >
        Thanks, {{ firstName }}! You're ready to go
      </h2>
      <DoubleTickIcon
        class="txt_Text opacity-0 text-[8vw] text-[#666] max-[320px]:hidden"
      />
    </div>
    <div class="h-max w-[70%] px-[4vw]">
      <p class="txt_Text opacity-0 h-max w-[100%] text-[1.2vw] text-[#666]">
        One of our representatives will contact you soon to confirm the details.
        Please make sure to keep your phone line or email active to avoid any
        delays in communication. We appreciate your trust in us, and we look
        forward to delivering the best service!
      </p>
    </div>
    <div class="h-max w-full px-[4vw]">
      <div
        class="txt_Text opacity-0 h-max w-max py-[1.6vw] rounded-2xl px-[2vw] flex flex-col gap-[1.6vh] text-[#222] bg-[#999] bg-opacity-[.2] backdrop-blur-[8px]"
      >
        <div
          class="flex items-center h-max w-full tracking-[.2vw] gap-[2vw] text-[#999] text-[1.2vw] font-[500]"
        >
          <span>WHAT NEXT</span>
        </div>
        <div class="flex items-center h-max w-full gap-[2vw] text-[1.2vw]">
          <span
            >- Our representative will contact you within 24 to 48 hours.</span
          >
        </div>
        <div class="flex items-center h-max w-full gap-[2vw] text-[1.2vw]">
          <span
            >- Please make sure your contact details are accurate and
            reachable.</span
          >
        </div>
      </div>
    </div>
    <a
      href="/"
      class="txt_Text opacity-0 h-max w-[92vw] text-[1.8vw] tracking-[.3vw] rounded-md py-[2.8vh] text-[#ededed] bg-[#222] text-center fixed bottom-[2vh] left-[4vw] shadow-xl z-[99]"
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
