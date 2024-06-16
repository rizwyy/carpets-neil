<template>
  <div class="h-max w-max py-[3vh] px-[4vw] text-[5vh]">Yarn Selection</div>
  <section class="h-max w-screen flex flex-col gap-[4vh] py- px-[4vw]">
    <a
      :href="`/carpets/${$route.params.model}/${$route.params.yarn}/details`"
      class="h-[18vh] w-full flex items-end px-[2.4vw] py-[1vh] justify-between relative"
    >
      <div
        class="bg-gradient-to-t from-black to-[#0000] h-full w-full absolute bottom-0 left-0 z-[-1] opacity-[.8]"
      ></div>
      <img
        class="h-full w-full absolute bottom-0 left-0 z-[-9] object-cover"
        src="/recreational.jpg"
        alt=""
      />
      <span class="text-[#f1f1f1] text-[3.2vh]">Wool</span>
      <div
        class="h-max w-max flex items-center text-[1.8vh] text-[#fff9] gap-[0vw]"
      >
        <span class="underline underline-offset-[.4vh]">View All</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff9"
              d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
            />
          </svg>
        </span>
      </div>
    </a>
    <a
      :href="`/${$route.params.yarn}/yarn`"
      class="h-[18vh] w-full flex items-end px-[2.4vw] py-[1vh] justify-between relative"
    >
      <div
        class="bg-gradient-to-t from-black to-[#0000] h-full w-full absolute bottom-0 left-0 z-[-1] opacity-[.8]"
      ></div>
      <img
        class="h-full w-full absolute bottom-0 left-0 z-[-9] object-cover"
        src="/40004.jpg"
        alt=""
      />
      <span class="text-[#f1f1f1] text-[3.2vh]">Wool-Blend</span>
      <div
        class="h-max w-max flex items-center text-[1.8vh] text-[#fff9] gap-[0vw]"
      >
        <span class="underline underline-offset-[.4vh]">View All</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff9"
              d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
            />
          </svg>
        </span>
      </div>
    </a>
    <a
      href=""
      class="h-[18vh] w-full flex items-end px-[2.4vw] py-[1vh] justify-between relative"
    >
      <div
        class="bg-gradient-to-t from-black to-[#0000] h-full w-full absolute bottom-0 left-0 z-[-1] opacity-[.8]"
      ></div>
      <img
        class="h-full w-full absolute bottom-0 left-0 z-[-9] object-cover"
        src="/40001.jpg"
        alt=""
      />
      <span class="text-[#f1f1f1] text-[3.2vh]">Nylon</span>
      <div
        class="h-max w-max flex items-center text-[1.8vh] text-[#fff9] gap-[0vw]"
      >
        <span class="underline underline-offset-[.4vh]">View All</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff9"
              d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
            />
          </svg>
        </span>
      </div>
    </a>
    <a
      href=""
      class="h-[18vh] w-full flex items-end px-[2.4vw] py-[1vh] justify-between relative"
    >
      <div
        class="bg-gradient-to-t from-black to-[#0000] h-full w-full absolute bottom-0 left-0 z-[-1] opacity-[.8]"
      ></div>
      <img
        class="h-full w-full absolute bottom-0 left-0 z-[-9] object-cover"
        src="/40001.jpg"
        alt=""
      />
      <span class="text-[#f1f1f1] text-[3.2vh]">Polypropylene</span>
      <div
        class="h-max w-max flex items-center text-[1.8vh] text-[#fff9] gap-[0vw]"
      >
        <span class="underline underline-offset-[.4vh]">View All</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff9"
              d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
            />
          </svg>
        </span>
      </div>
    </a>
  </section>
</template>

<script setup>
import { useCookie } from "#app";
import useUserStore from "./../../../../stores/user";
const userStore = useUserStore();
const route = useRoute();
// const myCookie = useCookie("myCookieName");
const colors = ["000", "ff9", "ececec", "f1f1f1"];

const setCookie = () => {
  const fullPath = route.fullPath;
  myCookie.value = fullPath;
  console.log("Cookie set:", toRaw(myCookie.value));
};
</script>

<style lang="scss" scoped></style>
