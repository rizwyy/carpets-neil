<template>
  <div
    class="max-[990px]:hidden h-max w-full flex items-center justify-center mt-[8vh]"
  >
    <div
      class="h-[38vh] w-[86%] relative rounded-md overflow-hidden shadow-md flex flex-col gap-[2vh] items-center justify-center"
    >
      <div
        class="absolute flooringBannerPC_Overlay backdrop-blur-[4px] h-full w-full left-0 top-0 z-[-1] bg-gradient-to-br flex items-center justify-center from-black via-[#666] to-[#333] opacity-[.3]"
      ></div>
      <div class="absolute h-full w-full left-0 top-0 z-[-9]">
        <NuxtImg
          placeholder="/bannerImg1.webp"
          @load="
            handleImageLoad(
              0.4,
              'flooring_Banner_DefaultPC',
              'flooringBannerPC'
            )
          "
          src="/bannerImg.webp"
          class="currentImg h-full w-full object-cover"
        />
      </div>
      <span
        class="font-outfit text-[4.2rem] flooringBannerPC_Text opacity-0 min-[1590px]:text-[5rem] font-[400] text-[#f6f6f6]"
        >{{
          `${userStore.customPreference.category} Flooring` || "Flooring"
        }}.</span
      >
    </div>
  </div>
</template>

<script setup>
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

onMounted(() => {
  handleDOMEntry("flooringBannerPC");
  setTimeout(() => {
    animateImageLOOP("currentImg", 1.4);
  }, 1200);
});
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
