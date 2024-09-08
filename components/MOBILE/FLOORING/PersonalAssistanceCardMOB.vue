<template>
  <section class="w-[90vw] mx-auto mt-[6vh] mb-[8vh]">
    <!-- Title -->
    <h2 class="text-[#333] text-[3.8vh] tracking-[-.1vw] font-[400] mb-[4vh]">
      Personal assistance
    </h2>

    <!-- Assistance options -->
    <div class="space-y-[4vh]">
      <!-- Card 1: Book a home visit -->
      <a
        href="/contact"
        class="flex items-center px-[4vw] py-[1.8vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[6px] border-blue-200"
      >
        <div class="mr-[4vw]">
          <homeIcon class="text-[4.8vh] text-[#333]" />
        </div>
        <div class="flex-1">
          <h3 class="text-[#333] font-[500] text-[5vw]">Book a home visit</h3>
          <p class="text-[#777] text-[4vw]">
            Our experts will help you find your dream floor
          </p>
        </div>
        <div class="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[6vw] w-[6vw] text-[#777]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </a>

      <!-- Card 2: Book a store appointment -->
      <a
        href="/contact"
        class="flex items-center px-[4vw] py-[1.8vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[6px] border-blue-200"
      >
        <div class="pr-[4vw]">
          <storeIcon class="text-[4.8vh] text-[#333]" />
        </div>
        <div class="flex-1">
          <h3 class="text-[#333] font-[500] text-[5vw]">
            Book a store appointment
          </h3>
          <p class="text-[#777] text-[4vw]">Over 150 locations</p>
        </div>
        <div class="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[6vw] w-[6vw] text-[#777]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </a>

      <!-- Card 3: Chat with experts -->
      <a
        href="/contact"
        class="flex items-center px-[4vw] py-[1.8vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[6px] border-blue-200"
      >
        <div class="pr-[4vw]">
          <chatIcon class="text-[4.8vh] text-[#333]" />
        </div>
        <div class="flex-1">
          <h3 class="text-[#333] font-[500] text-[5vw] leading-[3.2vh]">
            Chat with our expert advisors
          </h3>
          <p class="text-[#777] text-[4vw]">For instant advice</p>
        </div>
        <div class="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[6vw] w-[6vw] text-[#777]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import storeIcon from "~/public/icons/storeIcon.vue";
import homeIcon from "~/public/icons/homeIcon.vue";
import chatIcon from "~/public/icons/chatIcon.vue";
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
