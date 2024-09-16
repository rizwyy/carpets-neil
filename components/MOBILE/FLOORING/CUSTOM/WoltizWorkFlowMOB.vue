<template>
  <!-- *** MOBILE *** -->
  <div
    class="min-[990px]:hidden h-max w-screen flex flex-col gap-[8vh] py-[6vh] font-outfit"
  >
    <div class="h-max w-full text-center items-center flex flex-col gap-[1vh]">
      <span class="text-[3.5vh] w-[88%]">Customization Journey</span>
      <span class="text-[2vh] text-[#666]">Breaking Down Our Approach.</span>
    </div>

    <div class="h-max w-full flex flex-col gap-[8vh] py-[4vh] px-[4vw]">
      <!-- Render Steps Dynamically -->
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="`h-[28vh] w-full overflow-hidden flex items-center gap-[1vw]  step-${
          index + 5
        } ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`"
      >
        <!-- Image Section for mobile -->
        <div class="h-full w-[60%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            :src="
              getImageSource(userStore.customPreference.category, step.imageSrc)
            "
            class="h-full w-full object-cover z-[-9] rounded-md"
            alt="#"
          />
        </div>

        <!-- Text Section for mobile -->
        <div
          class="h-full w-[60%] flex flex-col items-start justify-between gap-[2vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[2vh] font-[500] text-[#999]"
            >STEP {{ index + 1 }}</span
          >
          <div class="h-max w-full flex flex-col gap-[1.6vh]">
            <span class="text-[2.8vh] font-[500]">{{ step.title }}</span>
            <span class="text-[1.8vh] w-[80%]">{{ step.description }}</span>
          </div>
          <div class="h-max w-full flex justify-end">
            <a
              v-if="index === 0"
              class="h-max w-max rounded-full text-blue-500 text-[2vh] font-[500] flex items-center"
              href="https://wa.me/917021949329"
              >Chat with us <ArrowRightIcon class="text-[2.8vh]"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowRightIcon from "~/public/icons/arrowRightIcon.vue";
import useUserStore from "../../../stores/user"; // Pinia store
import { handleScrollTrigger } from "#imports";

const userStore = useUserStore();

// Define the step data (same as the desktop version)
const steps = [
  {
    title: "Design",
    description:
      "You can upload the design or Browse Products from the Catalog.",
    imageSrc: "design",
  },
  {
    title: "Customisation",
    description:
      "In this step, customize your order to your preferences and specifications.",
    imageSrc: "customisation",
  },
  {
    title: "Sample",
    description: "In step 3, we'll deliver a sample for your review.",
    imageSrc: "sample",
  },
  {
    title: "Approval",
    description:
      "At this stage, we'll be waiting for your approval to proceed.",
    imageSrc: "approval",
  },
  {
    title: "Production",
    description:
      "Once we receive your approval, we'll move forward to the production phase.",
    imageSrc: "production",
  },
  {
    title: "Delivery",
    description: "Your order will be securely packaged and promptly delivered.",
    imageSrc: "delivery",
  },
];

// Function to determine the image source based on the step and category
const getImageSource = (category, stepImage) => {
  const images = {
    Active: {
      design: "/woltizWorkFlow/design.webp",
      customisation: "/woltizWorkFlow/customisation.webp",
      sample: "/woltizWorkFlow/sample.webp",
      approval: "/woltizWorkFlow/approval.webp",
      production: "/woltizWorkFlow/production.webp",
      delivery: "/woltizWorkFlow/delivery.webp",
    },
    PVC: {
      design: "/woltizWorkFlow/design.webp",
      customisation: "/woltizWorkFlow/customisation.webp",
      sample: "/woltizWorkFlow/sample.webp",
      approval: "/woltizWorkFlow/approval.webp",
      production: "/woltizWorkFlow/production.webp",
      delivery: "/woltizWorkFlow/delivery.webp",
    },
    Wooden: {
      design: "/woltizWorkFlow/design.webp",
      customisation: "/woltizWorkFlow/customisation.webp",
      sample: "/woltizWorkFlow/sample.webp",
      approval: "/woltizWorkFlow/approval.webp",
      production: "/woltizWorkFlow/production.webp",
      delivery: "/woltizWorkFlow/delivery.webp",
    },
    Raised: {
      design: "/raised-flooring.webp",
      customisation: "/raised-flooring.webp",
      sample: "/raised-flooring.webp",
      approval: "/raised-flooring.webp",
      production: "/customise/production.webp",
      delivery: "/customise/delivery.webp",
    },
    Default: {
      design: "/woltizWorkFlow/design.webp",
      customisation: "/woltizWorkFlow/customisation.webp",
      sample: "/woltizWorkFlow/sample.webp",
      approval: "/woltizWorkFlow/approval.webp",
      production: "/woltizWorkFlow/production.webp",
      delivery: "/woltizWorkFlow/delivery.webp",
    },
  };

  return images[category]?.[stepImage] || images["Default"][stepImage];
};

// On mount, trigger animations for each step
onMounted(() => {
  steps.forEach((_, index) => {
    handleScrollTrigger(`step-${index + 5}`);
  });
});
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
