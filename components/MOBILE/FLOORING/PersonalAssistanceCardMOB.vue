<template>
  <QuestionaireMOB
    @close="handleCloseForm"
    :formType="selectedFormType"
    v-if="isFormActive"
  />
  <section
    class="assistanceCardMOB opacity-0 translate-y-[6%] w-[90vw] mx-auto mt-[6vh] mb-[8vh]"
  >
    <!-- Title -->
    <h2 class="text-[#333] text-[1.8rem] tracking-[-.1vw] font-[400] mb-[4vh]">
      Personal assistance
    </h2>

    <!-- Assistance options -->
    <div class="space-y-[4vh]">
      <!-- Card 1: Book a home visit -->
      <button
        @click="bringForm('homeVisit')"
        class="flex items-center w-full px-[4vw] py-[1.8vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[6px] border-blue-200"
      >
        <div class="mr-[4vw]">
          <homeIcon class="text-[2.2rem] text-[#333]" />
        </div>
        <div class="flex-[8] text-start">
          <h3 class="text-[#333] font-[500] text-[1.2rem]">
            Book a home visit
          </h3>
          <p class="text-[#777] text-[1rem]">Bring our collection to you.</p>
        </div>
        <div class="ml-auto flex-[1]">
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
      </button>

      <!-- Card 2: Book a store Visit -->
      <button
        @click="bringForm('storeVisit')"
        class="flex items-center w-full px-[4vw] py-[1.8vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[6px] border-blue-200"
      >
        <div class="pr-[4vw] flex-[1]">
          <storeIcon class="text-[2.2rem] text-[#333]" />
        </div>
        <div class="flex-[8] text-start">
          <h3 class="text-[#333] font-[500] text-[1.2rem]">
            Book a store Visit
          </h3>
          <p class="text-[#777] text-[1rem]">Book your appointment now</p>
        </div>
        <div class="ml-auto flex-[1]">
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
      </button>

      <!-- Card 3: Chat with experts -->
      <button
        @click="bringForm('chat')"
        class="flex items-center w-full px-[4vw] py-[1.8vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[6px] border-blue-200"
      >
        <div class="pr-[4vw] flex-[1]">
          <chatIcon class="text-[2.2rem] text-[#333]" />
        </div>
        <div class="flex-[8] text-start">
          <h3 class="text-[#333] font-[500] text-[1.2rem] leading-[3.2vh]">
            Chat with our Experts
          </h3>
          <p class="text-[#777] text-[1rem]">For instant advice</p>
        </div>
        <div class="ml-auto flex-[1]">
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
      </button>

      <!-- Card 4: Request a Sample -->
      <button
        @click="bringForm('sampleDelivery')"
        class="flex items-center w-full px-[4vw] py-[1.8vh] bg-[#f1f1f1] rounded-lg shadow-md border-l-[6px] border-blue-200"
      >
        <div class="pr-[4vw] flex-[1]">
          <sampleIcon class="text-[2.2rem] text-[#333]" />
        </div>
        <div class="flex-[8] text-start">
          <h3 class="text-[#333] font-[500] text-[1.2rem] leading-[3.2vh]">
            Request a Sample
          </h3>
          <p class="text-[#777] text-[1rem]">See, Feel, Decide</p>
        </div>
        <div class="ml-auto flex-[1]">
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
      </button>
    </div>
  </section>
</template>

<script setup>
import storeIcon from "~/public/icons/storeIcon.vue";
import homeIcon from "~/public/icons/homeIcon.vue";
import chatIcon from "~/public/icons/chatIcon.vue";
import sampleIcon from "~/public/icons/sampleIcon.vue";
import PersonalAssistanceFormMOB from "./PersonalAssistanceFormMOB.vue";
import QuestionaireMOB from "./QuestionaireMOB.vue";

const isFormActive = ref(false);
const selectedFormType = ref("");

function handleCloseForm() {
  isFormActive.value = false;
  ENABLE_SCROLL();
}

const bringForm = (type) => {
  selectedFormType.value = type; // Set the form type
  isFormActive.value = true;
  DISABLE_SCROLL();
};

onMounted(() => {
  if (process.client) {
    handleScrollTrigger("assistanceCardMOB");
  }
});
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
