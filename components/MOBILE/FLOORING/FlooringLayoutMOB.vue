<script setup></script>

<template>
  <section class="h-max w-max min-[990px]:hidden font-outfit">
    <div class="h-max w-screen py-[2vh] text-[#333] px-[3.2vw]">
      <span class="flooringLayoutHeading text-[3.8vh] tracking-[-.1vw]"
        >Shop By Category</span
      >
    </div>
    <div class="h-max w-screen flex flex-col gap-[1.8vh]">
      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[1]"
      >
        <a
          href="/flooring/carpets/details"
          class="h-[24vh] w-[50%] overflow-hidden relative flex flex-col gap-[.8vh] items-start rounded-md justify-between px-[2.4vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="flooringItem_Text flooringLayout_Carpet_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
            >Carpet <br />
            Flooring</span
          >
          <div class="h-max text-[#fff] w-full px-[2vw] flex justify-end">
            <span
              class="flooringItem_Text flooringLayout_Wood_Text text-[2vh] font-[500] border-b-[1px] opacity-0"
              >view all</span
            >
          </div>
          <div
            class="flooringItem_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-gradient-to-br from-[#000] to-transparent"
          ></div>
          <NuxtImg
            preload
            @load="handleImageLoad('flooringLayout_Carpet', 'flooringItem')"
            loading="eager"
            placeholder
            class="flooringItem_Img flooringLayout_Carpet_Img absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/carpets/carpetsCover.webp"
            alt="#"
          />
        </a>
        <a
          href="/flooring/wooden/details"
          class="h-[24vh] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="flooringItem_Text flooringLayout_Wood_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
            >Wooden <br />
            Flooring</span
          >
          <div class="h-max text-[#fff] w-full px-[2vw] flex justify-end">
            <span
              class="flooringItem_Text flooringLayout_Wood_Text text-[2vh] font-[500] border-b-[1px] opacity-0"
              >view all</span
            >
          </div>
          <div
            class="flooringItem_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-gradient-to-br from-[#000] to-transparent"
          ></div>
          <NuxtImg
            preload
            @load="handleImageLoad('flooringLayout_Wood', 'flooringItem')"
            quality="50"
            placeholder
            loading="eager"
            class="flooringItem_Img flooringLayout_Wood_Img absolute object-bottom object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/wooden-flooring.webp"
            alt="engineeredWoodenFloor"
          />
        </a>
      </div>

      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
      >
        <!-- href="/flooring/pvc/details" -->
        <a
          href="/flooring/pvc/details"
          class="h-[24vh] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="flooringItem_Text flooringLayout_Pvc_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] text-[#f1f1f1]"
            >Vinyl <br />
            Flooring</span
          >
          <div
            class="flooringItem_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-gradient-to-br from-[#000] to-transparent"
          ></div>
          <div class="h-max text-[#fff] w-full px-[2vw] flex justify-end">
            <span
              class="flooringItem_Text flooringLayout_Wood_Text text-[2vh] font-[500] border-b-[1px] opacity-0"
              >view all</span
            >
          </div>
          <NuxtImg
            @load="
              handleImageLoad('flooringLayout_Pvc', 'flooringItem', true, true)
            "
            placeholder
            quality="50"
            loading="lazy"
            class="flooringItem_Img flooringLayout_Pvc_Img absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/pvc/vinyl-cover.webp"
            alt="#"
          />
        </a>
        <a
          href="/flooring/gym/details"
          class="h-[24vh] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="flooringItem_Text flooringLayout_Gym_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
            >Gym <br />
            Flooring</span
          >
          <div class="h-max text-[#fff] w-full px-[2vw] flex justify-end">
            <span
              class="flooringItem_Text flooringLayout_Wood_Text text-[2vh] font-[500] border-b-[1px] opacity-0"
              >view all</span
            >
          </div>
          <div
            class="flooringItem_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-gradient-to-br from-[#000] to-transparent"
          ></div>
          <NuxtImg
            @load="
              handleImageLoad('flooringLayout_Gym', 'flooringItem', true, true)
            "
            loading="lazy"
            placeholder
            class="flooringItem_Img flooringLayout_Gym_Img absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/40001.webp"
            alt="#"
          />
        </a>
      </div>
      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
      >
        <a
          href="/flooring/raised/details"
          class="h-[24vh] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="flooringItem_Text flooringLayout_Raised_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
            >Raised <br />
            Flooring</span
          >
          <div class="h-max text-[#fff] w-full px-[2vw] flex justify-end">
            <span
              class="flooringItem_Text flooringLayout_Wood_Text text-[2vh] font-[500] border-b-[1px] opacity-0"
              >view all</span
            >
          </div>
          <div
            class="flooringItem_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-gradient-to-br from-[#000] to-transparent"
          ></div>
          <NuxtImg
            @load="
              handleImageLoad(
                'flooringLayout_Raised',
                'flooringItem',
                true,
                true
              )
            "
            placeholder
            loading="lazy"
            class="flooringItem_Img flooringLayout_Raised_Img absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/raised/raised-office.webp"
            alt="#"
          />
        </a>
        <a
          href="/flooring/sports/details"
          class="h-[24vh] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="flooringItem_Text flooringLayout_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] text-[#f1f1f1]"
            >Sports <br />
            Flooring</span
          >
          <div class="h-max text-[#fff] w-full px-[2vw] flex justify-end">
            <span
              class="flooringItem_Text flooringLayout_Wood_Text text-[2vh] font-[500] border-b-[1px] opacity-0"
              >view all</span
            >
          </div>
          <div
            class="flooringItem_Overlay absolute object-cover bottom-0 left-0 h-full w-full z-[-9] bg-gradient-to-br from-[#000] to-transparent"
          ></div>
          <NuxtImg
            @load="
              handleImageLoad(
                'flooringLayout_Sports',
                'flooringItem',
                true,
                true
              )
            "
            loading="lazy"
            class="absolute object-top object-cover bottom-0 left-0 h-full w-full z-[-99] flooringLayout_Sports_Img"
            src="/sports/outdoor.webp"
            alt="#"
          />
        </a>
      </div>
      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
      >
        <div
          class="h-[24vh] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span
            class="flooringItem flooringLayout_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] text-[#fff9]"
            >Fitness <br />
            Flooring</span
          >
          <div class="h-max w-full px-[2vw] flex justify-end">
            <!-- <a
              class="underline underline-offset-[.4vh] z-[99] text-[#e1e9e5] text-[1.8vh] font-[500] ml-[.2vw] text-[#e1e9e5]"
              href="/accessories"
              >view all</a
            > -->
          </div>
          <div
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-black"
          ></div>
          <!-- <NuxtImg
            loading="lazy"
            placeholder
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/80001.jpeg"
            alt="#"
          /> -->
        </div>
        <div
          class="h-[24vh] w-[50%] rounded-md overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span
            class="flooringItem flooringLayout_Text opacity-0 text-gridContainer_heading_MOB font-[400] leading-[3.2vh] text-[#fff9]"
            >Flooring <br />
            Accessories
          </span>
          <div class="h-max w-full px-[2vw] flex justify-end">
            <!-- <a
              class="underline underline-offset-[.4vh] z-[99] text-[#e1e9e5] text-[1.8vh] font-[500] ml-[.2vw]"
              href="#"
              >view all</a
            > -->
          </div>
          <div
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-black"
          ></div>
          <!-- <NuxtImg
            loading="lazy"
            placeholder
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/10001.jpg"
            alt="#"
          /> -->
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
