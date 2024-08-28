<template>
  <div class="h-max w-screen pt-[8vh] px-[2vw] font-outfit">
    <span class="text-detailsContainer_heading_MOB">Discover</span>
  </div>
  <div
    class="h-max w-screen overflow-hidden py-[4vh] px-[2vw] relative font-outfit"
  >
    <div
      class="h-[52vh] w-full object-cover rounded-md overflow-hidden relative"
    >
      <NuxtImg
        loading="lazy"
        class="absolute top-0 left-0 h-full w-full object-cover"
        src="/Content/ASTRUM.webp"
        alt="#"
      />
    </div>
    <div class="h-full w-full absolute top-0 left-0"></div>
    <div
      class="h-full w-full absolute top-0 left-0 flex flex-col items-start justify-evenly py-[4vh] px-[2vw]"
    >
      <div
        class="h-[50%] w-full flex justify-start flex-col gap-[3.2vh] pt-[4vh] px-[4vw]"
      >
        <span class="text-[2.8vh] text-[#e8e8e8]">Lorem, ipsum.</span>
        <span class="text-[5.2vh] tracking-[.2vw] uppercase text-[#f1f1f1]"
          >Strata</span
        >
        <span class="text-[2.4vh] text-[#fff9]">Lorem ipsum dolor sit.</span>
      </div>
      <div
        class="h-[50%] w-full flex justify-between items-end gap-[2vh] pb-[2vh] px-[4vw]"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[6vh]"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#fff9" stroke-width="1.5">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" opacity=".5" />
              <circle cx="19" cy="12" r="2" />
            </g>
          </svg>
        </span>
        <span
          class="text-[2.4vh] w-max tracking-[.2vw] text-[#e8e8e8] flex items-center"
          >shop now<svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[3.2vh]"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
            /></svg
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
