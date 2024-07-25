<template>
  <!-- DESKTOP -->
  <div
    class="max-[990px]:hidden overflow-x-hidden bg-[#fff] shadow-sm py-[4vh] h-max max-w-screen mt-[8vh] mb-[4vh] font-outfit"
  >
    <div class="h-max w-full px-[4vw] pb-[6vh] text-center">
      <span
        class="text-[2.8vw] text-transparent bg-clip-text bg-gradient-to-r from-[#14213d] via-[#3d5a80] to-[#00b4d8] from-[10%] to-[90%]"
        >Personalize Your Order</span
      >
    </div>
    <div class="relative w-full overflow-x-hidden select-none">
      <div
        class="w-full h-full bg-[#00000] flex flex-col gap-[8vh] py-[2vh] items-center justify-between px-[4vw]"
      >
        <div class="h-max w-full flex justify-center gap-[2vw]">
          <button
            @click="selectCategory('Carpet')"
            class="relative h-[20vh] w-[24vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
          >
            <NuxtImg
              class="absolute h-full w-full left-0 top-0 object-cover"
              src="/area-rugs.webp"
              alt="#"
            />
            <div
              class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[1vw] py-[1.2vh]"
            >
              <div class="h-max w-full flex justify-end">
                <svg
                  v-if="!userStore.customPreference.category.includes('Carpet')"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  />
                </svg>
              </div>
              <div class="h-max w-full flex flex-col items-start justify-end">
                <span class="text-[2.4vh]">Carpets</span>
                <span class="text-[1.6vh] text-[#ecececec]"
                  >Axminster | Hand Tufted | Printed & more</span
                >
              </div>
            </div>
          </button>
          <button
            @click="selectCategory('PVC')"
            class="relative h-[20vh] w-[24vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
          >
            <NuxtImg
              class="absolute h-full w-full left-0 top-0 object-cover"
              src="/pvc-flooring.webp"
              alt="#"
            />
            <div
              class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[1vw] py-[1.2vh]"
            >
              <div class="h-max w-full flex justify-end">
                <svg
                  v-if="!userStore.customPreference.category.includes('PVC')"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  />
                </svg>
              </div>
              <div class="h-max w-full flex flex-col items-start justify-end">
                <span class="text-[2.4vh]">PVC</span>
                <span class="text-[1.6vh] text-[#ecececec]"
                  >Option | Option | Option & more</span
                >
              </div>
            </div>
          </button>
          <button
            @click="selectCategory('Wooden')"
            class="relative h-[20vh] w-[24vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
          >
            <NuxtImg
              class="absolute h-full w-full left-0 top-0 object-cover"
              src="/50002.jpg"
              alt="#"
            />
            <div
              class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[1vw] py-[1.2vh]"
            >
              <div class="h-max w-full flex justify-end">
                <svg
                  v-if="!userStore.customPreference.category.includes('Wooden')"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  />
                </svg>
              </div>
              <div class="h-max w-full flex flex-col items-start justify-end">
                <span class="text-[2.4vh]">Wooden</span>
                <span class="text-[1.6vh] text-[#ecececec]"
                  >Option | Option | Option & more</span
                >
              </div>
            </div>
          </button>
        </div>
        <div class="h-max w-full flex justify-center gap-[2vw]">
          <button
            @click="selectCategory('Raised')"
            class="relative h-[20vh] w-[24vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
          >
            <NuxtImg
              class="absolute h-full w-full left-0 top-0 object-cover"
              src="/raised-flooring.webp"
              alt="#"
            />
            <div
              class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[1vw] py-[1.2vh]"
            >
              <div class="h-max w-full flex justify-end">
                <svg
                  v-if="!userStore.customPreference.category.includes('Raised')"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  />
                </svg>
              </div>
              <div class="h-max w-full flex flex-col items-start justify-end">
                <span class="text-[2.4vh]">Raised</span>
                <span class="text-[1.6vh] text-[#ecececec]"
                  >Option | Option | Option & more</span
                >
              </div>
            </div>
          </button>
          <button
            @click="selectCategory('Active')"
            class="relative h-[20vh] w-[24vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
          >
            <NuxtImg
              class="absolute h-full w-full left-0 top-0 object-cover"
              src="/40002.jpg"
              alt="#"
            />
            <div
              class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[1vw] py-[1.2vh]"
            >
              <div class="h-max w-full flex justify-end">
                <svg
                  v-if="!userStore.customPreference.category.includes('Active')"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  />
                </svg>
              </div>
              <div class="h-max w-full flex flex-col items-start justify-end">
                <span class="text-[2.4vh]">Active</span>
                <span class="text-[1.6vh] text-[#ecececec]"
                  >Option | Option | Option & more</span
                >
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- MOBILE -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <div
    class="min-[990px]:hidden overflow-x-hidden bg-[#fff] shadow-sm py-[2vh] h-max w-screen mt-[2vh] font-outfit"
  >
    <div class="h-max w-full px-[4vw] pb-[2vh] text-center">
      <span
        class="text-[3.8vh] tracking-[-.3vw] text-transparent bg-clip-text bg-gradient-to-r from-[#14213d] via-[#3d5a80] to-[#00b4d8] from-[10%] to-[90%]"
        >Personalize Your Order</span
      >
    </div>
    <div class="relative w-full overflow-x-auto no-scrollbar select-none">
      <div
        class="w-max h-full bg-[#00000] flex gap-[4vw] py-[2vh] items-center justify-between px-[4vw]"
      >
        <button
          @click="selectCategory('Carpet')"
          class="relative h-[14vh] w-[58vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover object-bottom"
            src="/area-rugs.webp"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[2vw] py-[1vh]"
          >
            <div class="h-max w-full flex justify-end">
              <svg
                v-if="!userStore.customPreference.category.includes('Carpet')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                />
              </svg>
            </div>
            <div class="h-max w-full flex flex-col items-start justify-end">
              <span class="text-[2.4vh]">Carpets</span>
              <span class="text-[1.6vh] text-[#ecececec]"
                >Axminster | Hand Tufted | Printed etc</span
              >
            </div>
          </div>
        </button>
        <button
          @click="selectCategory('PVC')"
          class="relative h-[14vh] w-[58vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/pvc/pvc-flooring.webp"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[2vw] py-[1vh]"
          >
            <div class="h-max w-full flex justify-end">
              <svg
                v-if="!userStore.customPreference.category.includes('PVC')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                />
              </svg>
            </div>
            <div class="h-max w-full flex flex-col items-start justify-end">
              <span class="text-[2.4vh]">PVC</span>
              <span class="text-[1.6vh] text-[#ecececec]"
                >Option | Option | Option & more</span
              >
            </div>
          </div>
          <!-- <div
            v-if="userStore.customPreference.category.includes('Carpet')"
            class="h-full w-full absolute top-0 left-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-lg font-[500] z-[9]"
          >
            <span class="text-[2vh] tracking-[.1vw]"> Selected </span>
          </div> -->
        </button>
        <button
          @click="selectCategory('Wooden')"
          class="relative h-[14vh] w-[58vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/50002.jpg"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[2vw] py-[1vh]"
          >
            <div class="h-max w-full flex justify-end">
              <svg
                v-if="!userStore.customPreference.category.includes('Wooden')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                />
              </svg>
            </div>
            <div class="h-max w-full flex flex-col items-start justify-end">
              <span class="text-[2.4vh]">Wooden</span>
              <span class="text-[1.6vh] text-[#ecececec]"
                >Option | Option | Option & more</span
              >
            </div>
          </div>
          <!-- <div
            v-if="userStore.customPreference.category.includes('Carpet')"
            class="h-full w-full absolute top-0 left-0 bg-[#333] bg-opacity-[.5] backdrop-blur-[4px] text-white text-center flex items-center justify-center text-[1.8vh] rounded-lg font-[500] z-[9]"
          >
            <span class="text-[2vh] tracking-[.1vw]"> Selected </span>
          </div> -->
        </button>
        <button
          @click="selectCategory('Raised')"
          class="relative h-[14vh] w-[58vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/raised-flooring.webp"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[2vw] py-[1vh]"
          >
            <div class="h-max w-full flex justify-end">
              <svg
                v-if="!userStore.customPreference.category.includes('Raised')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                />
              </svg>
            </div>
            <div class="h-max w-full flex flex-col items-start justify-end">
              <span class="text-[2.4vh]">Raised</span>
              <span class="text-[1.6vh] text-[#ecececec]"
                >Option | Option | Option & more</span
              >
            </div>
          </div>
        </button>
        <button
          @click="selectCategory('Active')"
          class="relative h-[14vh] w-[58vw] rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80] text-white px-[3.8vw] py-[.8vh]"
        >
          <NuxtImg
            class="absolute h-full w-full left-0 top-0 object-cover"
            src="/40002.jpg"
            alt="#"
          />
          <div
            class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[2vw] py-[1vh]"
          >
            <div class="h-max w-full flex justify-end">
              <svg
                v-if="!userStore.customPreference.category.includes('Active')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                />
              </svg>
            </div>
            <div class="h-max w-full flex flex-col items-start justify-end">
              <span class="text-[2.4vh]">Active</span>
              <span class="text-[1.6vh] text-[#ecececec]"
                >Option | Option | Option & more</span
              >
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// PINIA
import { ref } from "vue";
import useUserStore from "../../../stores/user";
const userStore = useUserStore();

const selectedCategory = ref("");

function selectCategory(category) {
  userStore.customPreference.category = category;
}
</script>

<style>
/* Hide scrollbar for IE, Edge, and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari, and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
