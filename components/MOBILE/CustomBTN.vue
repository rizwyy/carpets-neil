<script setup>
import Desktop from "~/layouts/Desktop.vue";
import Mobile from "~/layouts/Mobile.vue";
const { heading, link } = defineProps(["heading", "link"]);

onMounted(() => {
  handleDOMEntry("customBTN");
});
</script>
<template>
  <div
    class="max-[990px]:hidden h-[16vh] relative overflow-hidden block flex items-center gap-[2vw] justify-center w-[58vw] bg-[#ececec] shadow-xl backdrop-blur-[14px] overflow-hidden rounded-md px-[.8vh] py-[.8vh]"
  >
    <span class="text-[3.6vh] text-[#000] font font-[600] z-[9]"
      >Custom Carpets</span
    >
    <div
      class="h-full w-full absolute top-[0%] left-0 z-[-9] backdrop-blur-[14px]"
    ></div>
    <!--  -->
    <NuxtImg
      class="absolute h-full w-full object-cover scale-[1.2]"
      src="/customCarpetsBG.png"
      alt="bgImage"
    />

    <a
      href="/flooring/carpets/custom-carpets"
      class="absolute bottom-[1vh] right-[4vw] z-[99] text-[#222] text-gridContainer_anchor_MOB font-[500] flex items-center gap-[.6vw]"
    >
      View All<svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
        />
      </svg>
    </a>
  </div>
  <div class="customBTN opacity-0 h-max w-max min-[990px]:hidden">
    <a
      :ref="link"
      class="h-[12vh] w-[90vw] relative overflow-hidden block flex items-center gap-[2vw] justify-center w-[52vw] bg-[#ececec] shadow-xl backdrop-blur-[14px] overflow-hidden rounded-md px-[.8vh] py-[.8vh]"
    >
      <span class="text-[3.2vh] text-[#000] font font-[500] z-[9]">{{
        heading
      }}</span>
      <div
        class="h-full w-full absolute top-[0%] left-0 z-[-9] backdrop-blur-[14px]"
      ></div>
      <!--  -->
      <NuxtImg
        class="absolute h-full w-full object-cover scale-[1.2]"
        src="/customCarpetsBG.png"
        alt="bgImage"
      />

      <a
        :href="link"
        class="absolute bottom-[1vh] right-[4vw] z-[99] text-[#222] text-gridContainer_anchor_MOB font-[500] flex items-center gap-[.6vw]"
      >
        View All<svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
          />
        </svg>
      </a>
    </a>
  </div>
</template>

<style scoped>
.font {
  font-family: "Urbanist", sans-serif;
  font-style: normal;
  font-optical-sizing: auto;
}
</style>
