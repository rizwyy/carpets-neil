<script setup>
import useUserStore from "~/stores/user";
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";

const isOverlayActive = ref(false);
const userStore = useUserStore();
const fileInput = ref(null);

function hideCustomOverlay() {
  isOverlayActive.value = false;
  ENABLE_SCROLL();
}
function showCustomOverlay() {
  isOverlayActive.value = true;
  DISABLE_SCROLL();
}
const triggerFileInput = () => {
  fileInput.value.click();
};
</script>

<template>
  <div
    v-if="isOverlayActive"
    class="h-screen w-screen fixed top-0 left-0 bg-[#fff1] z-[999999] backdrop-blur-[18px] font-outfit"
  >
    <div class="h-[100svh] w-full flex items-center justify-center pb-[12svh]">
      <div
        class="w-[90vw] bg-black bg-opacity-[.7] backdrop-blur-[8px] rounded-2xl flex flex-col items-center justify-between gap-[4vh] pt-[2.8vh] pb-[1.8vh] relative"
      >
        <div
          class="h-max w-[94%] flex flex-col items-start gap-[2vw] pt-[3.2vh]"
        >
          <div class="h-max w-full flex justify-between items-center px-[1vw]">
            <span class="text-[#f9f9f9] w-full text-[3vh] text-left"
              >Specify Your Requirements
            </span>
            <ClearAllIcon
              @click="hideCustomOverlay"
              class="text-[#999] absolute top-[2vh] text-[3.2vh] right-[4vw]"
            />
          </div>
        </div>
        <div class="h-max w-full flex justify-center">
          <input
            class="h-[6vh] w-[88%] px-[4vw] bg-[#222] border-[#999] border-[1px] border-[#] rounded-md text-[#ececec]"
            type="text"
            placeholder="Enter your Requirements"
          />
        </div>
        <div
          class="h-max w-full flex items-center pt-[1vh] pb-[4vh] justify-between px-[6vw]"
        >
          <input
            ref="fileInput"
            type="file"
            class="hidden"
            @change="handleFileSelect"
          />
          <button
            @click="triggerFileInput"
            class="text-[2vh] border-[1px] rounded-md px-[8vw] text-[#f1f1f1] border-[#ededed] shadow-lg py-[1vh] active:scale-[.97] transition-all ease-in-out duration-300"
          >
            Upload Files
          </button>
          <button
            @click="hideCustomOverlay"
            class="text-[2vh] border-[1px] rounded-md px-[8vw] text-[#f1f1f1] border-[#ededed] shadow-lg py-[1vh] active:scale-[.97] transition-all ease-in-out duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    v-show="
      userStore.preference.spec_1 !== '' && userStore.preference.budget === ''
    "
    class="fixed bottom-0 left-0 w-full h-[8.2vh] z-[99999] backdrop-blur-lg bg-black bg-opacity-90 flex font-outfit"
  >
    <div
      class="flex items-center justify-center w-2/3 border-r border-gray-300"
    >
      <button
        @click="showCustomOverlay"
        class="font-medium text-[2.2vh] flex items-center justify-center gap-[1vw] bg-gradient-to-r from-white/70 via-cyan-100 to-white/70 bg-clip-text text-transparent animate-gradient"
      >
        CUSTOM <span>GRASS</span>
        <svg
          class="h-[2.4vh]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#e8e8e8"
            d="M2 6c0-1.505.78-3.08 2-4c0 .845.69 2 2 2a3 3 0 0 1 3 3c0 .386-.079.752-.212 1.091a74.515 74.515 0 0 1 2.191 1.808l-2.08 2.08a75.852 75.852 0 0 1-1.808-2.191A2.977 2.977 0 0 1 6 10c-2.21 0-4-1.79-4-4m12.152 6.848l1.341-1.341A4.446 4.446 0 0 0 17.5 12A4.5 4.5 0 0 0 22 7.5c0-.725-.188-1.401-.493-2.007L18 9l-2-2l3.507-3.507A4.446 4.446 0 0 0 17.5 3A4.5 4.5 0 0 0 13 7.5c0 .725.188 1.401.493 2.007L3 20l2 2l6.848-6.848a68.562 68.562 0 0 0 5.977 5.449l1.425 1.149l1.5-1.5l-1.149-1.425a68.562 68.562 0 0 0-5.449-5.977"
          />
        </svg>
      </button>
    </div>
    <div class="flex items-center justify-center w-1/3">
      <a
        class="text-gray-300 font-medium text-[2vh] flex gap-[1vw] items-center justify-center"
      >
        <span>CHAT </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[3vh]"
          viewBox="0 0 24 24"
        >
          <path
            fill="#E8E8E8"
            d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
          />
          <path
            fill="#E8E8E8"
            d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
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
