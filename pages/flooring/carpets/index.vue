<template>
  <section class="h-max w-screen">
    <div
      class="h-max py-[4vh] flex items-end px-[4vw] text-[6vh] justify-start w-screen font-outfit-300"
    >
      Carpets
    </div>
    <div class="h-max w-max flex items-center justify-center pb-[4vh]">
      <SearchBarMOB />
    </div>

    <div
      class="h-max w-full relative flex flex-col gap-[1vh] items-center px-[2vw] bg-[#f1f1f1] z-[999] font-outfit-300"
    >
      <div class="h-[40vh] w-full flex justify-between">
        <div
          class="h-full w-[49%] relative rounded-b-md shadow-md py-[1vh] px-[1.4vw] flex flex-col items-start justify-end gap-[0vh]"
        >
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <img
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/10001.jpg"
            alt=""
          />
          <span class="text-[2.8vh] text-[#f1f1f1]">Wall-to-Wall </span>
          <a
            class="underline underline-offset-[.4vh] text-[#fff9] text-[1.6vh]"
            href="/flooring/carpets/wall-to-wall"
            >shop now</a
          >
        </div>
        <div
          class="h-full w-[49%] relative rounded-b-md shadow-md py-[1vh] px-[1.4vw] flex flex-col items-start justify-end gap-[0vh]"
        >
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <img
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/10003.jpg"
            alt="#"
          />
          <span class="text-[2.8vh] text-[#f1f1f1]">Carpet Tiles</span>
          <a
            class="underline underline-offset-[.4vh] text-[#fff9] text-[1.6vh]"
            href="/carpets/carpet-tiles"
            >shop now</a
          >
        </div>
      </div>
      <div class="h-[40vh] w-full flex justify-between">
        <div
          class="h-full w-[49%] relative rounded-b-md shadow-md py-[1vh] px-[1.4vw] flex flex-col items-start justify-end gap-[0vh]"
        >
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <img
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/10006.jpg"
            alt=""
          />
          <span class="text-[2.8vh] text-[#f1f1f1]">Area Rugs</span>
          <a
            class="underline underline-offset-[.4vh] text-[#fff9] text-[1.6vh]"
            href="/carpets/area-rugs"
            >shop now</a
          >
        </div>
        <div
          class="h-full w-[49%] relative rounded-b-md shadow-md py-[1vh] px-[1.4vw] flex flex-col items-start justify-end gap-[0vh]"
        >
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <img
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/10009.jpg"
            alt="#"
          />
          <span class="text-[2.8vh] text-[#f1f1f1]">Runners</span>
          <a
            class="underline underline-offset-[.4vh] text-[#fff9] text-[1.6vh]"
            href="/carpets/runners"
            >shop now</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchBarMOB from "~/components/MOBILE/SearchBarMOB.vue";
import useUserStore from "./../../stores/user";
const userStore = useUserStore();
</script>

<style scoped>
.font-outfit-300 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.font-outfit-400 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.font-outfit-500 {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
