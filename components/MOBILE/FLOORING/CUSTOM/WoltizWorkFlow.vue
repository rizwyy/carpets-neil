<template>
  <!-- *** <<<<<<<<<<<<<<  DESKTOP <<<<<<<<<<<<<<<  -->
  <div
    class="max-[990px]:hidden h-max max-w-screen overflow-x-hidden flex flex-col gap-[12vh] pt-[8vh] font-outfit"
  >
    <div class="h-max w-full text-center items-center flex flex-col gap-[1vh]">
      <span class="text-[2.8vw] w-[88%]">Customization Journey</span>
      <span class="text-[1.2vw] text-[#666]">Breaking Down Our Approach.</span>
    </div>
    <div class="h-max w-full flex flex-col gap-[12vh] py-[4vh] px-[4vw]">
      <!-- STEP 1 -->
      <div
        class="h-[42vh] w-full overflow-hidden pb-[2vh] flex items-center justify-between gap-[2vw]"
      >
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[2vh] py-[.4vh] px-[2vw]"
        >
          <span class="text-[2vh] font-[500] text-[#666]">STEP 1</span>
          <span class="text-[4.8vh] font-[500]">Design</span>
          <span class="text-[2.4vh]"
            >You can upload the design or Browse Products from the
            Catalog.</span
          >
          <a
            class="h-max w-max px-[2.4vw] py-[1.8vh] rounded-sm shadow-md bg-[#6CB4EE] text-[#fff] text-[2.6vh] font-[500]"
            href="#"
            >Chat with us</a
          >
        </div>
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/40003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/20003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/raised-flooring.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/area-rugs.webp"
            alt="#"
          />
        </div>
      </div>
      <!-- STEP 2 -->

      <div
        class="h-[42vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/40003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/20003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/raised-flooring.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/area-rugs.webp"
            alt="#"
          />
        </div>
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[2vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[2vh] font-[500] text-[#666]">STEP 2</span>
          <span class="text-[4.8vh] font-[500]">Customisation</span>
          <span class="text-[2.4vh]"
            >In this step, customize your order to your preferences and
            specifications.</span
          >
        </div>
      </div>
      <!-- STEP 3 -->

      <div
        class="h-[42vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[2vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[2vh] font-[500] text-[#666]">STEP 3</span>
          <span class="text-[4.2vh] font-[500]">Sample</span>
          <span class="text-[2.4vh]"
            >In step 3, we'll deliver a sample for your review.</span
          >
        </div>
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/40003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/20003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/raised-flooring.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/area-rugs.webp"
            alt="#"
          />
        </div>
      </div>
      <!-- STEP 4 -->

      <div
        class="h-[42vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/40003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/20003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/raised-flooring.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/area-rugs.webp"
            alt="#"
          />
        </div>
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[2vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[2vh] font-[500] text-[#666]">STEP 4</span>
          <span class="text-[4.2vh] font-[500]">Approval</span>
          <span class="text-[2.4vh]"
            >At this stage, we'll be waiting for your approval to proceed.
          </span>
        </div>
      </div>
      <!-- STEP 5 -->

      <div
        class="h-[42vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[2vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[2vh] font-[500] text-[#666]">STEP 5</span>
          <span class="text-[4.2vh] font-[500]">Production</span>
          <span class="text-[2.4vh]"
            >Once we receive your approval, we'll move forward to the production
            phase.
          </span>
        </div>
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
        </div>
      </div>
      <div
        class="h-[42vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#00000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
        </div>
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[2vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[2vh] font-[500] text-[#666]">STEP 6</span>
          <span class="text-[4.2vh] font-[500]">Delivery</span>
          <span class="text-[2.4vh]"
            >Your order will be securely packaged and promptly delivered.
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- *** <<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>  -->
  <!-- *** <<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>  -->
  <!-- *** <<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>  -->
  <!-- *** <<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>  -->
  <!-- *** <<<<<<<<<<<<<<  MOBILE <<<<<<<<<<<<<<<  -->
  <div
    class="min-[990px]:hidden h-max w-screen flex flex-col gap-[2vh] pt-[8vh] font-outfit"
  >
    <div class="h-max w-full text-center items-center flex flex-col gap-[1vh]">
      <span class="text-[3.8vh] w-[88%] tracking-[-.2vw]"
        >Customization Journey</span
      >
      <span class="text-[1.8vh] text-[#666]">Breaking Down Our Approach.</span>
    </div>
    <div class="h-max w-full flex flex-col gap-[7.2vh] py-[4vh] px-[4vw]">
      <!-- STEP 1 -->
      <div
        class="h-[28vh] w-full overflow-hidden pb-[2vh] flex items-center justify-between gap-[2vw]"
      >
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[1vh] py-[.4vh] px-[2vw]"
        >
          <span class="text-[1.6vh] font-[500] text-[#666]">STEP 1</span>
          <span class="text-[2.8vh] font-[500]">Design</span>
          <span class="text-[2vh]"
            >You can upload the design or Browse Products from the
            Catalog.</span
          >
          <a
            class="h-max w-max px-[2.4vw] py-[.8vh] rounded-sm shadow-md bg-[#6CB4EE] text-[#fff] text-[1.6vh] font-[500]"
            href="#"
            >Chat with us</a
          >
        </div>
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/40003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/20003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/raised-flooring.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/area-rugs.webp"
            alt="#"
          />
        </div>
      </div>
      <!-- STEP 2 -->

      <div
        class="h-[28vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/40003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/20003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/raised-flooring.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/area-rugs.webp"
            alt="#"
          />
        </div>
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[1vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[1.6vh] font-[500] text-[#666]">STEP 2</span>
          <span class="text-[2.8vh] font-[500]">Customisation</span>
          <span class="text-[2vh]"
            >In this step, customize your order to your preferences and
            specifications.</span
          >
        </div>
      </div>
      <!-- STEP 3 -->

      <div
        class="h-[28vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[1vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[1.6vh] font-[500] text-[#666]">STEP 3</span>
          <span class="text-[2.8vh] font-[500]">Sample</span>
          <span class="text-[2vh]"
            >In step 3, we'll deliver a sample for your review.</span
          >
        </div>
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/40003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/20003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/raised-flooring.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/area-rugs.webp"
            alt="#"
          />
        </div>
      </div>
      <!-- STEP 4 -->

      <div
        class="h-[28vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/40003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/pvc-flooring.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/20003.jpg"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/raised-flooring.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/area-rugs.webp"
            alt="#"
          />
        </div>
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[1vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[1.6vh] font-[500] text-[#666]">STEP 4</span>
          <span class="text-[2.8vh] font-[500]">Approval</span>
          <span class="text-[2vh]"
            >At this stage, we'll be waiting for your approval to proceed.
          </span>
        </div>
      </div>
      <!-- STEP 5 -->

      <div
        class="h-[28vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[1vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[1.6vh] font-[500] text-[#666]">STEP 5</span>
          <span class="text-[2.8vh] font-[500]">Production</span>
          <span class="text-[2vh]"
            >Once we receive your approval, we'll move forward to the production
            phase.
          </span>
        </div>
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#0000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/customise/production.webp"
            alt="#"
          />
        </div>
      </div>
      <div
        class="h-[28vh] w-full overflow-hiddenpy-[1vh] flex items-center justify-between gap-[2vw]"
      >
        <div class="h-full w-[50%] relative">
          <div
            class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-black to-[#00000] opacity-[.2] z-[1]"
          ></div>
          <NuxtImg
            v-if="userStore.customPreference.category === 'Active'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'PVC'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
          <NuxtImg
            format="webp"
            v-else-if="userStore.customPreference.category === 'Wooden'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
          <NuxtImg
            v-else-if="userStore.customPreference.category === 'Raised'"
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
          <NuxtImg
            v-else
            class="h-full w-full object-cover z-[-9]"
            src="/customise/delivery.webp"
            alt="#"
          />
        </div>
        <div
          class="h-full w-[50%] flex flex-col items-start gap-[1vh] py-[1vh] px-[2vw]"
        >
          <span class="text-[1.6vh] font-[500] text-[#666]">STEP 6</span>
          <span class="text-[2.8vh] font-[500]">Delivery</span>
          <span class="text-[2vh]"
            >Your order will be securely packaged and promptly delivered.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// PINIA
import useUserStore from "../../../stores/user";
const userStore = useUserStore();
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
