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
        class="font-outfit text-[4.2vw] flooringBannerPC_Text opacity-0 min-[1590px]:text-[7.2vh] font-[400] text-[#f6f6f6]"
        >{{
          `${userStore.customPreference.category} Flooring` || "Flooring"
        }}.</span
      >
      <!-- <button
        class="rounded-md shadow-lg min-[1590px]:text-[2.8vh] max-[990px]:px-[6vw] px-[2vw] py-[2vh] bg-[#fff3] backdrop-blur-[4px] text-[#fff] flex items-center gap-[.4vw]"
      >
        How Woltiz Works<svg
          class="min-[1590px]:h-[3.2vh] h-[2vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="m10 16.5l6-4.5l-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
          />
        </svg>
      </button> -->
    </div>
  </div>
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- MOBILE -->
  <div
    class="bannerYouWin_MOB opacity-0 min-[990px]:hidden h-max w-screen flex items-center justify-center my-[2vh] px-[3.2vw]"
  >
    <div
      class="h-[24vh] w-[100%] relative rounded-md overflow-hidden shadow-md flex flex-col gap-[0vh] items-center justify-center pt-[.8vh] pb-[1vh]"
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
        class="font-outfit text-bannerContainer_heading_MOB font-[400] text-[#f1f1f1] flooringBanner_Text opacity-0"
        >{{
          `${userStore.customPreference.category} Flooring` || "Flooring"
        }}.</span
      >
      <!-- <button
        class="flooringBanner_Text opacity-0 rounded-md font-outfit shadow-lg px-[2vw] py-[1.8vh] bg-[#000] bg-opacity-[.4] text-[1.8vh] backdrop-blur-[4px] text-[#f1f1f1] flex items-center gap-[.8vw] font-[500]"
      >
        See How Woltiz Works<svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fcfcfc"
            d="m10 16.5l6-4.5l-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
          />
        </svg>
      </button> -->
    </div>
  </div>
</template>

<script setup>
import LoadingIcon from "~/public/icons/loadingIcon.vue";
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
