<template>
  <section class="h-max w-max min-[990px]:hidden font-outfit">
    <div
      class="h-max w-screen py-[2vh] text-[#333] px-[2.4vw] font-[400] text-[3.2vh]"
    >
      <span>Shop by Categories</span>
    </div>
    <div class="h-max w-screen flex flex-col gap-[1.6vh]">
      <div
        class="h-max w-screen flex justify-evenly gap-[1.6vh] px-[2vw] bg-[#]"
      >
        <a
          href="/flooring"
          class="h-[24vh] z-[1] w-[50%] overflow-hidden rounded-md relative flex flex-col gap-[.8vh] items-start justify-between px-[2vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="flooringLayout_Flooring_Text opacity-0 text-[3vh] font-[500] tracking-[.1vw] leading-[3.2vh] text-[#f1f1f1]"
          >
            Flooring</span
          >
          <div class="h-max w-full px-[2vw] flex justify-end">
            <span
              class="flooringLayout_Flooring_Text opacity-0 border-b-[1px] z-[99] text-[#e1e9e5] text-viewAllMOB font-[400]"
              >View All</span
            >
          </div>
          <div
            class="absolute flooringLayout_Flooring_Overlay opacity-0 object-cover bottom-0 left-0 h-full w-full bg-gradient-to-br from-[#000] via-[#0000] to-[#000] from-[10%] via-[70%] z-[-1]"
          ></div>
          <NuxtImg
            @load="handleImageLoad('flooringLayout_Flooring', true, true)"
            preload
            placeholder
            loading="eager"
            class="absolute object-cover object-bottom bottom-0 left-0 h-full w-full z-[-99] flooringLayout_Img"
            src="/flooring1.webp"
            alt="#"
          />
        </a>
        <div
          class="h-[24vh] z-[1] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[2vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="flooringLayout_Text opacity-0 h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span
            class="flooringLayout_Text opacity-0 text-[3vh] font-[400] leading-[3.2vh] z-[1] text-[#fff9]"
            >Wall Covering</span
          >
          <div class="h-max w-full px-[2vw] flex justify-end">
            <!-- <a
              class="underline underline-offset-[.4vh] z-[99] text-[#e1e9e5] text-[1.8vh] font-[500] ml-[.2vw] z-[1]"
              href="/vinyl-floors"
              >view all</a
            > -->
          </div>
          <div
            class="flooringLayout_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-black"
          ></div>
          <NuxtImg
            @load="handleImageLoad('flooringLayout', true, true)"
            quality="20"
            loading="lazy"
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99] flooringLayout_Img"
            src="/wall-to-wall.webp"
            alt="#"
          />
        </div>
      </div>
    </div>
    <!-- CONTENT BANNER SECTION  -->
    <div
      class="contentBanner h-max w-screen flex items-center justify-center py-[10vh] bg-[#f1f1f1]"
    >
      <div class="h-[20vh] w-[75%] bg-white flex items-center justify-center">
        Content / Banner
      </div>
    </div>
    <!-- FAQ   SECTION  -->
    <div
      class="FAQSection h-max w-screen flex items-center justify-center py-[10vh] bg-[#f1f1f1]"
    >
      <div class="h-[20vh] w-[75%] bg-white flex items-center justify-center">
        FAQ
      </div>
    </div>
  </section>
</template>

<script setup>
import Mobile from "~/layouts/Mobile.vue";
</script>

<style>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
