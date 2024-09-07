<template>
  <div
    class="min-[990px]:hidden overflow-x-hidden bg-[#fff] shadow-sm py-[2vh] h-max w-screen mt-[2vh] font-outfit transition-all duration-[.2s] ease-in-out"
  >
    <div class="h-max w-full px-[4vw] pb-[2vh] text-center">
      <span
        class="text-[3.8vh] tracking-[-.3vw] text-transparent bg-clip-text bg-gradient-to-r from-[#14213d] via-[#3d5a80] to-[#00b4d8] from-[10%] to-[90%]"
      >
        Personalize Your Order
      </span>
    </div>

    <div
      id="scrollableContainer"
      class="relative w-full overflow-x-auto no-scrollbar select-none transition-all duration-[.2s] ease-in-out"
    >
      <div
        :class="[
          `w-max h-full bg-[#00000] flex gap-[4vw] py-[2vh] items-center justify-between px-[4vw] transition-all duration-[.4s] ease-in-out`,
        ]"
      >
        <div v-for="(category, index) in categories" :key="index">
          <button
            @click="selectCategory(category.name)"
            :class="[
              `relative slidableItem origin-center transition-all duration-[.4s] ease-in-out rounded-lg overflow-hidden shadow-md text-[2vh] block bg-gradient-to-t from-[#14213d] to-[#3d5a80]  text-white px-[3.8vw] py-[.8vh] ${
                userStore.customPreference.category.includes(category.name)
                  ? 'slidableNavItemActive w-[88vw] h-[24vh]'
                  : 'slidableNavItem w-[58vw]  h-[14vh]'
              }`,
            ]"
          >
            <NuxtImg
              class="absolute h-full w-full left-0 top-0 object-cover object-bottom"
              :src="category.image"
              alt="category"
            />
            <div
              class="absolute h-full w-full left-0 top-0 bg-black z-[1] bg-gradient-to-tr from-[#222] via-[#0000] to-[#0000] bg-opacity-[.4] flex flex-col items-center justify-between px-[2vw] py-[1vh]"
            >
              <div class="h-max w-full flex justify-end text-[#999]">
                <circleBold
                  v-if="
                    !userStore.customPreference.category.includes(category.name)
                  "
                />
                <circleBold v-else class="bg-[#fff] rounded-full" />
              </div>
              <div
                :class="[
                  `h-full w-full flex flex-col items-start transition-all duration-[.4s] ease-in-out ${
                    userStore.customPreference.category.includes(category.name)
                      ? 'justify-between'
                      : 'justify-end'
                  }`,
                ]"
              >
                <span
                  :class="[
                    `${
                      userStore.customPreference.category.includes(
                        category.name
                      )
                        ? 'text-[3.2vh]'
                        : 'text-[2.4vh]'
                    }`,
                  ]"
                  class=""
                  >{{ category.label }}</span
                >
                <div
                  v-show="
                    userStore.customPreference.category.includes(category.name)
                  "
                  class="h-max w-full flex justify-between"
                >
                  <div
                    class="h-max w-max flex flex-col items-start gap-[.8vh] py-[1.2vh] text-[1.8vh] font-[400] text-[#fff9]"
                  >
                    <span>- {{ category.desc1 }}</span>
                    <span>- {{ category.desc2 }}</span>
                    <span>- {{ category.desc3 }}</span>
                    <span>- {{ category.desc4 }}</span>
                  </div>
                  <div class="h-full w-max flex items-end pb-[1vh] pr-[1vw]">
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=97333008801"
                      class="px-[4vw] py-[1vh] border-[2px] border-[#fff9] text-[#e9e9e9] rounded-full text-[1.8vh] shadow-lg"
                    >
                      CHAT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import circleBold from "~/public/icons/circleBold.vue";
import useUserStore from "~/stores/user";

const userStore = useUserStore();

// Define categories with name, label, desc1, desc2, desc3, desc4, and image
const categories = ref([
  {
    name: "Carpet",
    label: "Carpets",
    desc1: "Axminster | Hand Tufted",
    desc2: "Printed & more",
    desc3: "Custom Designs",
    desc4: "Durable Materials",
    image: "/area-rugs.webp",
  },
  {
    name: "PVC",
    label: "PVC",
    desc1: "Vinyl Options",
    desc2: "Water Resistant",
    desc3: "Flexible Install",
    desc4: "Affordable Pricing",
    image: "/pvc/vinyl-cover.webp",
  },
  {
    name: "Wooden",
    label: "Wooden",
    desc1: "Engineered Wood",
    desc2: "Solid Hardwood",
    desc3: "Easy Maintenance",
    desc4: "Premium Finish",
    image: "/50002.jpg",
  },
  {
    name: "Rubber",
    label: "Rubber",
    desc1: "Shock Absorbent",
    desc2: "Slip Resistant",
    desc3: "Low Maintenance",
    desc4: "Eco-Friendly",
    image: "/rubber-flooring.webp",
  },
]);
function getElementDistanceFromLeft(element) {
  if (element) {
    // Get the distance from the left of the viewport
    const rect = element.getBoundingClientRect();
    console.log(rect);
    return rect.left; // This returns the distance from the left of the viewport
  }
  return 0;
}
function scrollContainer(container, scrollAmount) {
  if (container && container.scrollBy) {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}
function selectCategory(category) {
  const container = document.getElementById("scrollableContainer");
  setTimeout(() => {
    const activeItem = document.querySelector(".slidableNavItemActive");
    const scrollAmount = getElementDistanceFromLeft(activeItem);
    scrollContainer(container, scrollAmount - 40);
  }, 100);
  userStore.customPreference.category = category;
}
</script>

<style scoped>
/* Hide scrollbar */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
