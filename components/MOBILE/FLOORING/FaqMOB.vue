<template>
  <div
    class="h-full w-full faq-container mx-auto py-[4vh] px-[4vw] max-w-xl font-outfit"
  >
    <h2 class="text-3xl font-[400] mb-[5.2vh]">Frequently Asked Questions</h2>

    <div v-for="(faq, index) in faqs" :key="index" class="mb-[2vh]">
      <!-- Question -->
      <button
        class="w-full text-left bg-gray-100 px-[2.4vw] py-[1.8vh] rounded-lg shadow-md transition-all duration-[.5] ease-in-out hover:bg-gray-200 active:shadow-lg"
        @click="toggleFAQ(index)"
      >
        <div class="flex justify-between items-center">
          <span class="text-[2vh] text-[#333] font-[400]">{{
            faq.question
          }}</span>
          <span class="ml-[2vw]">
            <arrowUpIcon v-if="isExpanded(index)" /> <arrowDownIcon v-else />
          </span>
        </div>
      </button>

      <!-- Answer (conditionally rendered) -->
      <div
        v-show="isExpanded(index)"
        class="mt-[2vh] pt-[2vh] px-[3vw] py-[2vh] bg-gray-50 rounded-lg text-[#666] transition-all duration-300 ease-in-out"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import arrowUpIcon from "~/public/icons/arrowUpIcon.vue";
import arrowDownIcon from "~/public/icons/arrowDownIcon.vue";

// Define the FAQ data for Woltiz
const faqs = ref([
  {
    question: "What types of flooring does Woltiz offer?",
    answer:
      "Woltiz offers a wide range of flooring options including hardwood, laminate, vinyl, carpet, and tile. Each option is available in various styles and finishes to suit your home or business.",
  },
  {
    question: "Do you offer flooring installation services?",
    answer:
      "Yes, Woltiz provides professional installation services for all types of flooring. Our team of certified installers ensures a perfect fit and finish for every project.",
  },
  {
    question: "Can I get a free estimate for my flooring project?",
    answer:
      "Absolutely! Woltiz offers free measuring and planning services to help you choose the right flooring and get an accurate estimate. Schedule your appointment online or contact us directly.",
  },
  {
    question: "How do I care for my new flooring from Woltiz?",
    answer:
      "We provide detailed care instructions for each type of flooring. Generally, we recommend regular cleaning with products specifically designed for your flooring type to maintain its beauty and durability.",
  },
  {
    question: "What warranties do you offer on your flooring?",
    answer:
      "Woltiz offers warranties that vary depending on the type of flooring you choose. Our warranties cover wear, tear, and manufacturing defects to give you peace of mind with your new floor.",
  },
]);

// Reactive variable to track expanded questions
const expandedIndex = ref(-1);

// Toggle the expanded state
function toggleFAQ(index) {
  expandedIndex.value = expandedIndex.value === index ? -1 : index;
}

// Check if a specific FAQ is expanded
function isExpanded(index) {
  return expandedIndex.value === index;
}
</script>

<style scoped></style>
