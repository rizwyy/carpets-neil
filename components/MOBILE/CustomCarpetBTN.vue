<template>
  <button
    class="h-[12vh] w-[90vw] relative overflow-hidden flex items-center gap-[2vw] justify-center w-[52vw] text-[#fff] shadow-xl rounded-md bg-gradient-to-br from-[#0e0725] via-[#222d52] to-[#e536ab] px-[.8vh] py-[.8vh]"
  >
    <span class="text-[2.8vh] font font-[600]">Custom Carpets</span>

    <span
      class="absolute bottom-[1vh] right-[4vw] text-[#ececec] text-[1.6vh] font-[500] flex items-center gap-[.6vw]"
      >View All<svg
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
    </span>
  </button>
</template>

<script setup>
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(TextPlugin);
function animateText_CustomCarpets() {
  let tl = gsap.timeline();

  tl.to(".font", {
    duration: 3,
    text: "Custom Carpets",
    ease: "back.in",
  });
  tl.to(".font", {
    ease: "back.out",
    text: "Custom Rugs",
    duration: 2,
  });
  tl.to(".font", {
    duration: 2,
    text: "Customize",
    ease: "back.inOut",
  });
  tl.repeat(-1).yoyo(true);
}
onMounted(() => {
  animateText_CustomCarpets();
});
</script>

<style scoped>
.font {
  font-family: "Urbanist", sans-serif;
  font-style: normal;
  font-optical-sizing: auto;
}
</style>
