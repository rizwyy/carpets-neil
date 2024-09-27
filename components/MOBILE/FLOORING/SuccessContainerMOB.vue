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
      <Icon
        icon="charm:tick-double"
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
    <a
      href="/"
      class="txt_Text opacity-0 h-max w-[92vw] text-[1.2rem] tracking-[.4vw] rounded-md py-[1.2rem] text-[#ededed] bg-[#222] text-center fixed bottom-[2vh] left-[4vw] shadow-xl mt-[3rem] z-[99]"
    >
      GOT IT
    </a>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
const userPreference = useCookie("userPreference");

const firstName = computed(() => {
  try {
    // Check if userPreference, userPreference.value, and userPreference.value.name are defined and valid
    if (
      !userPreference ||
      !userPreference.value ||
      typeof userPreference.value.name !== "string"
    ) {
      return ""; // Return an empty string if the name is not valid
    }

    // Proceed with the name extraction and formatting if it's a valid string
    const name = userPreference.value.name.trim().split(" ")[0];
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  } catch (error) {
    // In case of any unexpected errors, handle it gracefully
    console.error("Error computing firstName:", error);
    return ""; // Return an empty string to prevent the app from crashing
  }
});

onMounted(() => {
  handleImageLoad(0.4, "el", "txt");
});
</script>

<style lang="scss" scoped></style>
