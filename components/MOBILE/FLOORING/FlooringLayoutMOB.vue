<script setup>
import Mobile from "~/layouts/Mobile.vue";
// COOKIES
import { useCookie } from "#app";
const userPreference = useCookie("userPreference");

import useUserStore from "../../../stores/user";
import HowWoltizWorks from "~/components/HowWoltizWorks.vue";
const userStore = useUserStore();

function setUserPreferenceCookie() {
  userPreference.value = userStore.preference;
  console.log("COOKIE SET::", toRaw(userPreference.value));
  navigateTo(`/carpet/details`);
}
const setCategory = (category) => {
  userStore.preference.category = category;
  userPreference.value = userStore.preference;
  console.log("COOKIE SET::", toRaw(userPreference.value));
};
const isExpanded = ref(false);

const scrollToBottom = () => {
  window.scrollBy({ top: window.innerHeight * 0.2, behavior: "smooth" });
};
function toggleExpansion() {
  if (isExpanded.value) {
    isExpanded.value = false;
  } else {
    isExpanded.value = true;
    scrollToBottom();
  }
}
</script>

<template>
  <section class="h-max w-max min-[990px]:hidden font-outfit">
    <div class="h-max w-screen py-[2vh] text-[#333] px-[3.2vw]">
      <span class="text-[3.8vh] tracking-[-.1vw]">Shop By Category</span>
    </div>
    <div class="h-max w-screen flex flex-col gap-[1.8vh]">
      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[1]"
      >
        <a
          href="/flooring/carpets/details"
          class="h-[24vh] w-[100%] overflow-hidden relative flex flex-col gap-[.8vh] items-start rounded-sm justify-between px-[2.4vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="text-[3.8vh] font-[400] leading-[3.8vh] z-[1] text-[#f1f1f1]"
            >Carpet <br />
            Flooring</span
          >
          <div class="h-max text-[#fff] w-full px-[2vw] flex justify-end">
            <span class="text-[2vh] border-b-[1px]">View All</span>
          </div>
          <div
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-br from-[#000] via-[#0000] to-[#000] from-[14%]"
          ></div>
          <NuxtImg
            loading="lazy"
            placeholder
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/10004.jpg"
            alt="#"
          />
        </a>
      </div>

      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
      >
        <div
          class="h-[24vh] w-[50%] rounded-sm overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span class="text-[3vh] font-[400] leading-[3.2vh] text-[#fff9]"
            >Active <br />
            Flooring</span
          >
          <div class="h-max w-full px-[2vw] flex justify-end">
            <!-- <a
              class="underline underline-offset-[.4vh] z-[99] text-[#e1e9e5] text-[1.8vh] font-[500] ml-[.2vw]"
              href="/active-floors"
              >view all</a
            > -->
          </div>
          <div
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-black"
          ></div>
          <!-- <NuxtImg 
           quality="50"
            loading="lazy"
            
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/40001.jpg"
            alt="#"
          /> -->
        </div>
        <div
          class="h-[24vh] w-[50%] rounded-sm overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span class="text-[3vh] font-[400] leading-[3.2vh] z-[1] text-[#fff9]"
            >Vinyl <br />
            Flooring</span
          >
          <div class="h-max w-full px-[2vw] flex justify-end">
            <!-- <a
              class="underline underline-offset-[.4vh] z-[99] text-[#e1e9e5] text-[1.8vh] font-[500] ml-[.2vw] z-[1]"
              href="/vinyl-floors"
              >view all</a
            > -->
          </div>
          <div
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-black"
          ></div>
          <!-- <NuxtImg
            loading="lazy"
            
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/80001.jpeg"
            alt="#"
          /> -->
        </div>
      </div>
      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
      >
        <div
          class="h-[24vh] w-[50%] rounded-sm overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span class="text-[3vh] font-[400] leading-[3.2vh] z-[1] text-[#fff9]"
            >Wooden <br />
            Flooring</span
          >
          <div class="h-max w-full px-[2vw] flex justify-end">
            <!-- <a
              class="underline underline-offset-[.4vh] z-[99] text-[#e1e9e5] text-[1.8vh] font-[500] ml-[.2vw] z-[1]"
              href="/flooring/carpets"
              >view all</a
            > -->
          </div>
          <div
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-black"
          ></div>
          <!-- <NuxtImg
            loading="lazy"
            
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/10001.jpg"
            alt="#"
          /> -->
        </div>
        <div
          class="h-[24vh] w-[50%] rounded-sm overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span class="text-[3vh] font-[400] leading-[3.2vh] text-[#fff9]"
            >Raised <br />
            Flooring</span
          >
          <div class="h-max w-full px-[2vw] flex justify-end">
            <!-- <a
              class="underline underline-offset-[.4vh] z-[99] text-[#e1e9e5] text-[1.8vh] font-[500] ml-[.2vw]"
              href="/raised-floors"
              >view all</a
            > -->
          </div>
          <div
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-black"
          ></div>
          <!-- <NuxtImg
            loading="lazy"
            
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/70001.jpg"
            alt="#"
          /> -->
        </div>
      </div>
      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
      >
        <div
          class="h-[24vh] w-[50%] rounded-sm overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span class="text-[3vh] font-[400] leading-[3.2vh] text-[#fff9]"
            >Flooring <br />
            Accessories</span
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
          class="h-[24vh] w-[50%] rounded-sm overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1.8vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <div
            class="h-max w-full absolute top-[50%] left-0 text-center z-[9] bg-[#888] bg-opacity-[.4] backdrop-blur-[8px] text-[#fcfcfc] text-[1.8vh] py-[.8vh]"
          >
            COMING SOON!
          </div>
          <span class="text-[3vh] font-[400] leading-[3.2vh] text-[#fff9]"
            >Explore <br />
            All Products
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
