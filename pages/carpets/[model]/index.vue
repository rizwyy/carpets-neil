<template>
  <section class="h-max w-max font-outfit-300">
    <div
      class="h-max w-max py-[4vh] px-[2vw] text-[5vh] flex flex-col justify-start gap-[1vh]"
    >
      <span> Type & Color </span>
    </div>

    <section
      class="h-max w-screen flex flex-col gap-[1.4vh] items-center px-[3vw] py-[2vh]"
    >
      <div class="text-[2.8vh] h-max w-full text-start">
        <span>Choose Your Type</span>
      </div>

      <div class="h-max w-full flex justify-between gap-[2vw]">
        <div
          class="h-[18vh] w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.8vh] relative"
        >
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <img
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/solidCarpet.jpg"
            alt=""
          />
          <span>Solid</span>
          <a
            class="text-[1.8vh] text-[#fff9] underline underline-offset-[.4vh]"
            :href="`${$route.params.model}/solid`"
            >view all</a
          >
        </div>
        <div
          class="h-[18vh] w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.8vh] relative"
        >
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <img
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/texturedCarpet.jpeg"
            alt=""
          />
          <span>Textured</span>
          <a
            class="text-[1.8vh] text-[#fff9] underline underline-offset-[.4vh]"
            :href="`${$route.params.model}/textured`"
            >view all</a
          >
        </div>
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw]">
        <div
          class="h-[18vh] w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.8vh] relative"
        >
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <img
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/designedCarpet.jpg"
            alt=""
          />
          <span>Designed</span>
          <a
            class="text-[1.8vh] text-[#fff9] underline underline-offset-[.4vh]"
            href="/auth"
            >view all</a
          >
        </div>
        <div
          class="h-[18vh] w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.8vh] relative"
        >
          <div
            class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
          ></div>
          <img
            class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
            src="/10001.jpg"
            alt=""
          />
          <span>Customized</span>
          <a
            class="text-[1.8vh] text-[#fff9] underline underline-offset-[.4vh]"
            href="/auth"
            >view all</a
          >
        </div>
      </div>
    </section>
    <div class="h-max w-max py-[2vh] px-[3vw] text-[3vh]">
      Choose Your Color
    </div>
    <div class="h-max w-screen px-[3vw] grid grid-cols-3 gap-[4vh]">
      <ColorBox :color="color" v-for="color in colors" :key="color" />
    </div>
  </section>
</template>

<script setup>
import ColorBox from "./../../../components/ColorBox.vue";
const colors = ["333", "ff9", "999", "f1f1f1"];

import useUserStore from "./../../../stores/user";
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
