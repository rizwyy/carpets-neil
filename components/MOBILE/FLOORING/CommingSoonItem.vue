<!-- ComingSoonItem.vue -->
<template>
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
    >
      <slot></slot>
    </span>
    <div class="h-max w-full px-[2vw] flex justify-end"></div>
    <div
      class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-black"
    ></div>
  </div>
</template>
