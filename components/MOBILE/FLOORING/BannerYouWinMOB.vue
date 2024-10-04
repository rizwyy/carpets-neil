<template>
  <div
    class="bannerYouWin_MOB opacity-0 min-[990px]:hidden h-max w-screen flex items-center justify-center my-[1rem] px-[3.2vw]"
  >
    <div
      class="h-[11rem] w-[100%] relative rounded-md overflow-hidden shadow-md flex flex-col gap-[0vh] items-center justify-center pt-[.4rem] pb-[.5rem]"
    >
      <div
        class="flooringBanner_Overlay absolute h-full w-full left-0 top-0 z-[-1] bg-gradient-to-br from-black to-[#fff9] opacity-0"
      ></div>
      <div class="absolute h-full w-full left-0 top-0 z-[-9]">
        <NuxtImg
          placeholder
          @load="
            handleImageLoad(0.4, 'flooring_Banner_Default', 'flooringBanner')
          "
          src="/bannerImg.webp"
          class="currentImg h-full w-full object-cover object-bottom flooring_Banner_Default_Img"
        />
      </div>
      <span
        class="font-outfit text-[2.8rem] font-[400] text-[#f1f1f1] flooringBanner_Text opacity-0"
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
  handleDOMEntry("bannerYouWin_MOB");
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
