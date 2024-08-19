<script setup>
const { flooring, link } = defineProps(["flooring", "link"]);

const colorr = "gym";
</script>

<template>
  <div
    class="h-[8.2vh] floatingCTA w-[100vw] z-[99999] fixed bottom-[0vh] py-[1vh] backdrop-blur-[12px] bg-[#000] bg-opacity-[.8] left-[50%] translate-x-[-50%] flex font-outfit"
  >
    <div
      class="h-full w-[60%] border-r-[.1vw] flex items-center justify-center border-[#ececec9]"
    >
      <a
        href="/flooring/customize"
        class="text-[#ececec] font-[500] text-[2vh] flex items-center gap-[1vw] justify-center"
      >
        <span class="">CUSTOM {{ `${flooring}` }}</span>
        <svg
          class="h-[2.4vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2 6c0-1.505.78-3.08 2-4c0 .845.69 2 2 2a3 3 0 0 1 3 3c0 .386-.079.752-.212 1.091a74.515 74.515 0 0 1 2.191 1.808l-2.08 2.08a75.852 75.852 0 0 1-1.808-2.191A2.977 2.977 0 0 1 6 10c-2.21 0-4-1.79-4-4m12.152 6.848l1.341-1.341A4.446 4.446 0 0 0 17.5 12A4.5 4.5 0 0 0 22 7.5c0-.725-.188-1.401-.493-2.007L18 9l-2-2l3.507-3.507A4.446 4.446 0 0 0 17.5 3A4.5 4.5 0 0 0 13 7.5c0 .725.188 1.401.493 2.007L3 20l2 2l6.848-6.848a68.562 68.562 0 0 0 5.977 5.449l1.425 1.149l1.5-1.5l-1.149-1.425a68.562 68.562 0 0 0-5.449-5.977"
          /></svg
      ></a>
    </div>
    <div class="h-full w-[40%] flex items-center justify-center relative">
      <a
        class="text-[#ececec] font-[500] text-[2vh] flex gap-[1vw] items-center justify-center"
        ><span>CHAT </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[3vh]"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
          />
          <path
            fill="currentColor"
            d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
          /></svg
      ></a>
    </div>
  </div>
</template>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease-in-out infinite;
  -moz-animation: animatedgradient 6s ease-in-out infinite;
  animation: animatedgradient 6s ease-in-out infinite normal;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
