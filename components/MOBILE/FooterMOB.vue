<template>
  <div
    class="FooterContainerMOB opacity-0 min-[990px]:hidden overflow-hidden h-max max-w-[100vw] bg-gradient-to-t from-blue-200 to-[#fff] flex flex-col gap-[2rem] border-t-[1px] border-[#ececec] px-[6vw] pb-[2rem] pt-[2rem] font-outfit text-[#666]"
  >
    <div class="h-1/2 w-full flex justify-between flex-col gap-[4rem]">
      <div class="h-max w-max flex flex-col gap-[1rem]">
        <a href="/" class="text-[2.4rem] text-[#666] uppercase tracking-[-.4vw]"
          >Woltiz</a
        >
        <span class="text-[1rem] text-[#999] w-[40%]"
          >Delivering quality flooring solutions that bring comfort and elegance
          to every space.</span
        >
      </div>
    </div>
    <div
      class="h-1/2 w-full flex flex-col gap-[3rem] text-[.8rem] justify-between items-center"
    >
      <div class="h-max w-full flex justify-start gap-[4vw]">
        <a href="/about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            />
          </svg>
        </a>
        <a href="/about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a href="/about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
        </a>
      </div>
      <span class="font-bold">Under Dev | Demo</span>
      <span>© 2024 Woltiz. All rights reserved.</span>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (process.client) {
    handleScrollTrigger("FooterContainerMOB");
  }
});
</script>

<style lang="scss" scoped></style>
