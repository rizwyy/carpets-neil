<template>
  <div
    class="faqMOB opacity-0 translate-y-[6%] h-full w-full faq-container mx-auto pt-[4vh] pb-[8vh] px-[4vw] max-w-xl font-outfit"
  >
    <h2
      class="text-[1.5rem] tracking-[-.1vw] w-[80%] leading-[4.8vh] font-[400] mb-[3rem]"
    >
      Frequently Asked Questions
    </h2>
    <!-- Show the first 5 FAQs initially and toggle between view more/less -->
    <ul v-auto-animate>
      <li v-for="(faq, index) in visibleFaqs" :key="index" class="mb-[2vh]">
        <!-- Question -->
        <button
          class="w-full text-left bg-gray-200 px-[2.4vw] py-[1.8vh] rounded-lg shadow-md transition-all duration-[.5] ease-in-out hover:bg-gray-200 active:shadow-lg"
          @click="toggleFAQ(index)"
        >
          <div class="flex justify-between items-center">
            <span class="text-[1rem] text-[#333] font-[400]">{{
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
          class="mt-[1.2vh] pt-[2vh] px-[3vw] py-[2vh] bg-gray-50 rounded-lg text-[#666] transition-all duration-300 ease-in-out"
        >
          {{ faq.answer }}
        </div>
      </li>
    </ul>

    <!-- View More / View Less Button -->
    <button
      v-if="faqs.length > 5"
      @click="toggleViewMore"
      class="w-full mt-[2vh] py-[1.8vh] px-[2vw] bg-[#999] text-white rounded-md shadow-lg"
    >
      {{ showMore ? "View Less" : "View More" }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import arrowUpIcon from "~/public/icons/arrowUpIcon.vue";
import arrowDownIcon from "~/public/icons/arrowDownIcon.vue";

// FAQ data
const faqs = ref([
  {
    question: "What types of flooring does Woltiz offer?",
    answer:
      "Woltiz offers a wide range of flooring options, including carpet, parquet, vinyl, raised floors, rubber flooring, artificial grass, and floor accessories.",
  },
  {
    question:
      "What are the differences between carpet, parquet, and vinyl flooring?",
    answer:
      "Carpet: Soft, comfortable, and available in various styles and textures.\n" +
      "Parquet: Durable, elegant, and made from natural wood.\n" +
      "Vinyl: Versatile, easy to maintain, and offers a variety of designs.",
  },
  {
    question: "What are the benefits of raised floors?",
    answer:
      "Raised floors provide flexibility for cable management, ventilation, and easy maintenance.",
  },
  {
    question: "What is the difference between SPC and WPC flooring?",
    answer:
      "SPC (Stone Plastic Composite): More durable, scratch-resistant, and water-resistant.\n" +
      "WPC (Wood Plastic Composite): Often used for outdoor decking due to its weather resistance.",
  },
  {
    question: "Do you offer flooring installation and repair services?",
    answer:
      "Yes, Woltiz provides professional flooring installation and repair services for all types of flooring.",
  },
  {
    question:
      "What is the difference between wall-to-wall carpet and area rugs?",
    answer:
      "Wall-to-wall carpet: Covers the entire floor.\n" +
      "Area rugs: Smaller, portable, and can be used to accentuate specific areas.",
  },
  {
    question: "What are the advantages of carpet tiles?",
    answer:
      "Carpet tiles are modular, easy to replace, and offer flexibility in design.",
  },
  {
    question: "What is the difference between Axminster and custom carpet?",
    answer:
      "Axminster carpet: A high-quality, intricately patterned carpet.\n" +
      "Custom carpet: Tailored to specific dimensions and design preferences.",
  },
  {
    question:
      "What is the difference between solidwood and engineered parquet?",
    answer:
      "Solidwood parquet: Made entirely from solid wood.\n" +
      "Engineered parquet: Has a wear layer of solid wood on top of a plywood core.",
  },
  {
    question: "What is the difference between laminated and bamboo parquet?",
    answer:
      "Laminated parquet: A more affordable option with a printed image layer.\n" +
      "Bamboo parquet: Made from bamboo, offering a unique look and eco-friendly properties.",
  },
  {
    question:
      "What is the difference between homogeneous and heterogeneous vinyl flooring?",
    answer:
      "Homogeneous: Uniform color and composition throughout.\n" +
      "Heterogeneous: Multiple layers with different properties.",
  },
  {
    question:
      "What is the difference between vinyl tile, lay-flat vinyl tile, and vinyl plank?",
    answer:
      "Vinyl tile: Square-shaped tiles.\n" +
      "Lay-flat vinyl tile: Large, flexible sheets.\n" +
      "Vinyl plank: Rectangular planks that mimic the appearance of wood.",
  },
  {
    question: "What are the different types of panels used in raised floors?",
    answer:
      "Bare panel: Cement core or wood core.\n" +
      "HPL panel: High-pressure laminate.\n" +
      "PVC panel: Polyvinyl chloride.\n" +
      "Perforation panel: Panels with holes for cable management.",
  },
  {
    question: "What are the benefits of rubber flooring?",
    answer:
      "Rubber flooring is durable, slip-resistant, and offers excellent shock absorption.",
  },
  {
    question: "What is the difference between rubber tiles, rolls, and mats?",
    answer:
      "Rubber tiles: Modular tiles.\n" +
      "Rubber rolls: Large, continuous sheets.\n" +
      "Rubber mats: Smaller, portable mats.",
  },
  {
    question: "What are the benefits of artificial grass?",
    answer:
      "Artificial grass is low-maintenance, durable, and environmentally friendly.",
  },
  {
    question: "Can artificial grass be used for indoor or outdoor spaces?",
    answer: "Artificial grass can be used both indoors and outdoors.",
  },
  {
    question: "What are trims, profiles, and stair rods used for?",
    answer:
      "These accessories provide a finished look and protect flooring edges.",
  },
  {
    question: "What types of floor cleaners do you recommend?",
    answer:
      "We offer a variety of floor cleaners suitable for different flooring types.",
  },
  {
    question: "What is the purpose of skirting?",
    answer: "Skirting covers the gap between the floor and walls.",
  },
  {
    question: "Do you offer professional flooring installation services?",
    answer: "Yes, we provide professional flooring installation services.",
  },
  {
    question: "What factors affect the cost of flooring installation?",
    answer:
      "Factors such as flooring type, size of the area, and complexity of the installation can influence the cost.",
  },
  {
    question: "Do you offer flooring repair services?",
    answer:
      "Yes, we offer flooring repair services for various types of flooring.",
  },
  {
    question: "What is the best flooring option for high-traffic areas?",
    answer:
      "Durable options like vinyl, engineered parquet, or rubber flooring are suitable for high-traffic areas.",
  },
  {
    question: "How do I choose the right flooring color and style for my home?",
    answer:
      "Consider your home's overall decor, personal preferences, and the amount of natural light.",
  },
  {
    question: "How often should I clean my floors?",
    answer:
      "Regular cleaning helps maintain the appearance and longevity of your flooring. Follow the manufacturer's recommendations for specific cleaning methods.",
  },
  {
    question: "Can you recommend flooring options for allergy sufferers?",
    answer:
      "Hard flooring options like vinyl or hardwood can be easier to clean and may be less prone to allergens.",
  },
  {
    question: "What is the warranty for your flooring products?",
    answer:
      "We offer warranties on our flooring products. Please refer to the specific product details for warranty information.",
  },
  {
    question:
      "Do you offer flooring solutions specifically designed for the Middle East climate?",
    answer:
      "Yes, we offer flooring options that are suitable for the hot and humid climate of the Middle East.",
  },
  {
    question:
      "Do you have experience working on large-scale flooring projects in the Middle East?",
    answer:
      "Yes, we have experience in handling large-scale flooring projects in the Middle East.",
  },
  {
    question:
      "Can you provide references for previous projects in the Middle East?",
    answer: "We can provide references upon request.",
  },
  {
    question: "Why should I choose Woltiz Flooring Company?",
    answer:
      "We offer a wide range of high-quality flooring options, professional installation services, and excellent customer service.",
  },
  {
    question: "How can I contact Woltiz Flooring Company?",
    answer:
      "You can contact us through our website, phone number, or email address.",
  },
  {
    question: "Do you offer financing options for flooring purchases?",
    answer: "Please inquire about financing options when contacting us.",
  },
  {
    question: "Can I visit your showroom to see your flooring products?",
    answer:
      "Yes, we invite you to visit our showroom to explore our flooring options.",
  },
]);

// Reactive variable to track expanded FAQs
const expandedIndex = ref(-1);

// Tracks whether the "View More" button is toggled
const showMore = ref(false);

// Computed property to control which FAQs are visible
const visibleFaqs = computed(() => {
  return showMore.value ? faqs.value : faqs.value.slice(0, 5);
});

// Toggle between viewing more and less FAQs
function toggleViewMore() {
  showMore.value = !showMore.value;
}

// Toggle the expanded state for FAQs
function toggleFAQ(index) {
  expandedIndex.value = expandedIndex.value === index ? -1 : index;
}

// Check if a specific FAQ is expanded
function isExpanded(index) {
  return expandedIndex.value === index;
}

onMounted(() => {
  if (process.client) {
    handleScrollTrigger("faqMOB");
  }
});
</script>

<style scoped>
/* Optional: Add your custom styles here */
</style>
