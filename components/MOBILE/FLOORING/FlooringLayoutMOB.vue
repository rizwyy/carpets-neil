<script setup>
import Mobile from "~/layouts/Mobile.vue";
// COOKIES
import { useCookie } from "#app";
const userPreference = useCookie("userPreference");

import useUserStore from "../../../stores/user";
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
function toggleExpansion() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <Mobile>
    <div
      class="FAQSection h-max w-screen flex items-center justify-center py-[10vh] bg-[#f1f1f1]"
    >
      <div class="h-[20vh] w-[75%] bg-white flex items-center justify-center">
        How Woltiz Works - Video
      </div>
    </div>
    <div class="h-max w-screen py-[2vh] text-[#333] px-[2.4vw] text-[2.8vh]">
      <span>Shop by Categories</span>
    </div>
    <div class="h-max w-screen flex flex-col gap-[1vh]">
      <div class="h-max w-screen flex justify-evenly gap-[1vw] px-[2vw]">
        <div
          @click="toggleExpansion"
          class="h-[24vh] w-[100%] overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[2vw] pt-[1.8vh] pb-[1.2vh]"
        >
          <span
            class="text-[3vh] font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
            >Carpet <br />
            Flooring</span
          >
          <div class="h-max w-full px-[2vw] flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
              />
            </svg>
          </div>
          <div
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-br from-[#000] via-[#0000] to-[#000] from-[14%]"
          ></div>
          <img
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/10004.jpg"
            alt="#"
          />
        </div>
      </div>
      <!-- HTI -->
      <div
        v-show="isExpanded"
        class="carpetsCategory-container h-max w-screen flex flex-col justify-evenly gap-[1vh]"
      >
        <div class="h-max w-screen flex justify-center gap-[2vw] z-[9]">
          <a
            href="flooring/carpets/details"
            @click="setCategory('Wall to Wall')"
            class="h-[14vh] rounded-md w-[45%] overflow-hidden relative flex flex-col justify-end px-[2vw] pt-[1.8vh] pb-[.8vh]"
          >
            <span class="text-[2.4vh] font-[400] leading-[3.2vh] text-[#f1f1f1]"
              >Wall to Wall
            </span>
            <span
              class="text-[#fff9] text-[1.4vh] font-[500] underline underline-offset-[.4vh]"
              >View All</span
            >

            <div
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-t from-[#000] via-[#0000] to-[#000] from-[14%]"
            ></div>
            <img
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
              src="/wall-to-wall.jpg"
              alt="#"
            />
          </a>
          <a
            href="flooring/carpets/details"
            @click="setCategory('Carpet Tiles')"
            class="h-[14vh] rounded-md w-[45%] overflow-hidden relative flex flex-col justify-end px-[2vw] pt-[1.8vh] pb-[.8vh]"
          >
            <span
              class="text-[2.4vh] font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
              >Carpet Tiles</span
            >
            <span
              class="text-[#fff9] text-[1.4vh] font-[500] underline underline-offset-[.4vh]"
              >View All</span
            >
            <div
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-t from-[#000] via-[#0000] to-[#000] from-[14%]"
            ></div>
            <img
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
              src="/10003.jpg"
              alt="#"
            />
          </a>
        </div>
        <div class="h-max w-screen flex justify-center gap-[2vw] z-[9]">
          <a
            href="flooring/carpets/details"
            @click="setCategory('Area Rugs')"
            class="h-[14vh] rounded-md w-[45%] overflow-hidden relative flex flex-col justify-end px-[2vw] pt-[1.8vh] pb-[.8vh]"
          >
            <span
              class="text-[2.4vh] font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
              >Area Rugs</span
            >
            <span
              class="text-[#fff9] text-[1.4vh] font-[500] underline underline-offset-[.4vh]"
              >View All</span
            >

            <div
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-t from-[#000] via-[#0000] to-[#000] from-[14%]"
            ></div>
            <img
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
              src="/10009.jpg"
              alt="#"
            />
          </a>
          <a
            href="flooring/carpets/details"
            @click="setCategory('Runners')"
            class="h-[14vh] rounded-md w-[45%] overflow-hidden relative flex flex-col justify-end px-[2vw] pt-[1.8vh] pb-[.8vh]"
          >
            <span
              class="text-[2.4vh] font-[400] leading-[3.2vh] z-[1] text-[#f1f1f1]"
              >Runners
            </span>
            <span
              class="text-[#fff9] text-[1.4vh] font-[500] underline underline-offset-[.4vh]"
              >View All</span
            >

            <div
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-t from-[#000] via-[#0000] from-[14%]"
            ></div>
            <img
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
              src="/10006.jpg"
              alt="#"
            />
          </a>
        </div>
      </div>
      <div class="h-max w-screen flex justify-evenly gap-[1vw] px-[2vw]">
        <div
          class="h-[24vh] w-[50%] overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1vw] pt-[1.8vh] pb-[1.2vh]"
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
          <img
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/40001.jpg"
            alt="#"
          />
        </div>
        <div
          class="h-[24vh] w-[50%] overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1vw] pt-[1.8vh] pb-[1.2vh]"
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
          <img
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/60001.avif"
            alt="#"
          />
        </div>
      </div>
      <div class="h-max w-screen flex justify-evenly gap-[1vw] px-[2vw]">
        <div
          class="h-[24vh] w-[50%] overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1vw] pt-[1.8vh] pb-[1.2vh]"
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
          <img
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/60001.avif"
            alt="#"
          />
        </div>
        <div
          class="h-[24vh] w-[50%] overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1vw] pt-[1.8vh] pb-[1.2vh]"
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
          <img
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/70001.jpg"
            alt="#"
          />
        </div>
      </div>
      <div class="h-max w-screen flex justify-evenly gap-[1vw] px-[2vw]">
        <div
          class="h-[24vh] w-[50%] overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1vw] pt-[1.8vh] pb-[1.2vh]"
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
          <img
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/80001.jpeg"
            alt="#"
          />
        </div>
        <div
          class="h-[24vh] w-[50%] overflow-hidden relative flex flex-col gap-[.8vh] items-start justify-between px-[1vw] pt-[1.8vh] pb-[1.2vh]"
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
          <img
            class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
            src="/10001.jpg"
            alt="#"
          />
        </div>
      </div>
    </div>
  </Mobile>
</template>
