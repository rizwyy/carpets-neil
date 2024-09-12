<template>
  <section class="w-[60vw] mx-auto mt-[6vh] mb-[8vh]">
    <PersonalAssistanceFormPC @close="handleCloseForm" v-if="isFormActive" />
    <!-- Title -->
    <h2
      class="text-[#333] text-center text-[2.5vw] tracking-[-.05vw] font-[400] mb-[8vh]"
    >
      Personal Assistance
    </h2>

    <!-- Assistance options -->
    <div class="space-y-[4vh]">
      <!-- Card 1: Book a home visit -->
      <button
        @click="bringForm"
        class="active:scale-[1] hover:translate-x-[1%] transition-all duration-[.2s] ease-in-out flex items-center px-[2vw] py-[2vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[8px] border-blue-200 w-full"
      >
        <div class="mr-[2vw] flex-[1]">
          <homeIcon class="text-[2.5vw] text-[#333]" />
        </div>
        <div class="flex-[18] flex flex-col items-start">
          <h3 class="text-[#333] font-[500] text-[1.5vw]">Book a home visit</h3>
          <p class="text-[#777] text-[1.2vw]">Bring our collection to you.</p>
        </div>
        <div class="ml-auto flex-[1]">
          <arrowDownIcon class="text-[2.4vw]" />
        </div>
      </button>

      <!-- Card 2: Book a store Visit -->
      <button
        @click="bringForm"
        class="active:scale-[1] hover:translate-x-[1%] transition-all duration-[.2s] ease-in-out flex items-center px-[2vw] py-[2vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[8px] border-blue-200 w-full"
      >
        <div class="mr-[2vw] flex-[1]">
          <storeIcon class="text-[2.5vw] text-[#333]" />
        </div>
        <div class="flex-[18] flex flex-col items-start">
          <h3 class="text-[#333] font-[500] text-[1.5vw]">
            Book a store Visit
          </h3>
          <p class="text-[#777] text-[1.2vw]">Book your appointment now</p>
        </div>
        <div class="ml-auto flex-[1]">
          <arrowDownIcon class="text-[2.4vw]" />
        </div>
      </button>

      <!-- Card 3: Chat with experts -->
      <button
        @click="bringForm"
        class="active:scale-[1] hover:translate-x-[1%] transition-all duration-[.2s] ease-in-out flex items-center px-[2vw] py-[2vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[8px] border-blue-200 w-full"
      >
        <div class="mr-[2vw] flex-[1]">
          <chatIcon class="text-[2.5vw] text-[#333]" />
        </div>
        <div class="flex-[18] flex flex-col items-start">
          <h3 class="text-[#333] font-[500] text-[1.5vw]">
            Chat with our Experts
          </h3>
          <p class="text-[#777] text-[1.2vw]">For instant advice</p>
        </div>
        <div class="ml-auto flex-[1]">
          <arrowDownIcon class="text-[2.4vw]" />
        </div>
      </button>
      <!-- Card 4: Request a Sample -->
      <button
        @click="bringForm"
        class="active:scale-[1] hover:translate-x-[1%] transition-all duration-[.2s] ease-in-out flex items-center px-[2vw] py-[2vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[8px] border-blue-200 w-full"
      >
        <div class="mr-[2vw] flex-[1]">
          <sampleIcon class="text-[2.5vw] text-[#333]" />
        </div>
        <div class="flex-[18] flex flex-col items-start">
          <h3 class="text-[#333] font-[500] text-[1.5vw]">Request a Sample</h3>
          <p class="text-[#777] text-[1.2vw]">See, Feel, Decide</p>
        </div>
        <div class="ml-auto flex-[1]">
          <arrowDownIcon class="text-[2.4vw]" />
        </div>
      </button>
    </div>
  </section>
</template>

<script setup>
import storeIcon from "~/public/icons/storeIcon.vue";
import homeIcon from "~/public/icons/homeIcon.vue";
import chatIcon from "~/public/icons/chatIcon.vue";
import sampleIcon from "~/public/icons/sampleIcon.vue";
import PersonalAssistanceFormPC from "./PersonalAssistanceFormPC.vue";
import arrowDownIcon from "~/public/icons/arrowRightIcon.vue";

// Define a ref variable in the parent
const isFormActive = ref(false);

// Function to handle the 'close' event emitted by the child component
function handleCloseForm() {
  isFormActive.value = false; // Close the form by setting this to false
  ENABLE_SCROLL();
}
const bringForm = () => {
  isFormActive.value = true;
  DISABLE_SCROLL();
};
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
