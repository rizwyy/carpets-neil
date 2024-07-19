<template>
  <!-- DESKTOP -->
  <div
    class="max-[990px]:hidden h-max max-w-screen overflow-x-hidden font-outfit px-[14vw] py-[4vh]"
  >
    <div
      class="h-max w-full flex flex-col items-center rounded-lg overflow-hidden relative justify-between gap-[6.2vh] pb-[8.2vh] pt-[4.2vh]"
    >
      <div
        class="h-full w-full absolute top-0 left-0 z-[-1] bg-gradient-to-br from-[#14213d] via-[#0077b6] to-[#0077b6] opacity-[.8] blur-[2px]"
      ></div>
      <div class="h-max w-max text-[#f1f1f1]">
        <span class="text-[4.8vh]"> Discuss Your Project</span>
      </div>
      <div
        class="h-max w-max flex flex-col gap-[3.2vh] items-center justify-center"
      >
        <div class="h-max w-max flex justify-between gap-[3.2vw]">
          <button
            class="px-[6vw] py-[4.8vh] text-[3.2vh] bg-[#fff4] text-[#fff] backdrop-blur-[4px] rounded-md flex items-center gap-[1vw]"
          >
            Upload<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20zm5-12.15L9.125 9.725q-.3.3-.712.288T7.7 9.7q-.275-.3-.288-.7t.288-.7l3.6-3.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l3.6 3.6q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L13 7.85V15q0 .425-.288.713T12 16t-.712-.288T11 15z"
              />
            </svg>
          </button>
          <button
            class="px-[6vw] py-[4.8vh] text-[3.2vh] bg-[#fff4] text-[#fff] backdrop-blur-[4px] rounded-md flex items-center gap-[1vw]"
          >
            Browse<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 20v-5h7v5zm9 0v-9h7v9zm-9-7V4h7v9zm9-4V4h7v5z"
              />
            </svg>
          </button>
          <button
            class="px-[6vw] py-[6vh] text-[3.2vh] bg-[#fff4] text-[#fff] font-[500] backdrop-blur-[4px] rounded-md flex items-center gap-[1vw]"
          >
            Chat<svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  <!--  -->
  <!--  -->
  <!--  -->
  <!-- MOBILE -->
  <div class="min-[990px]:hidden h-max w-screen font-outfit px-[4vw] py-[4vh]">
    <div
      class="h-max w-full flex flex-col items-center rounded-lg overflow-hidden relative justify-between gap-[4vh] pt-[3.2vh] pb-[4vh]"
    >
      <div
        class="h-full w-full absolute top-0 left-0 z-[-1] bg-gradient-to-br from-[#14213d] via-[#0077b6] to-[#0077b6] opacity-[.8] blur-[2px]"
      ></div>
      <div class="h-max w-max text-[#f1f1f1]">
        <span class="text-[3.8vh]"> Discuss Your Project</span>
      </div>
      <div
        class="h-max w-max flex flex-col gap-[3.2vh] items-center justify-center"
      >
        <div class="h-max w-max flex gap-[8vw]">
          <button
            class="px-[6vw] py-[2vh] bg-[#fff4] text-[#fff] font-[500] backdrop-blur-[4px] rounded-md flex items-center gap-[1vw]"
          >
            Upload<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20zm5-12.15L9.125 9.725q-.3.3-.712.288T7.7 9.7q-.275-.3-.288-.7t.288-.7l3.6-3.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l3.6 3.6q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L13 7.85V15q0 .425-.288.713T12 16t-.712-.288T11 15z"
              />
            </svg>
          </button>
          <button
            class="px-[6vw] py-[2vh] bg-[#fff4] text-[#fff] font-[500] backdrop-blur-[4px] rounded-md flex items-center gap-[1vw]"
          >
            Browse<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 20v-5h7v5zm9 0v-9h7v9zm-9-7V4h7v9zm9-4V4h7v5z"
              />
            </svg>
          </button>
        </div>
        <div class="h-max w-max">
          <button
            class="px-[8vw] py-[2vh] bg-[#fff4] text-[#fff] font-[500] backdrop-blur-[4px] rounded-md flex items-center gap-[1vw]"
          >
            Chat<svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
