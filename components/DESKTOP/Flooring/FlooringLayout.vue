<template>
  <section
    class="h-max max-w-[100vw] flex flex-col gap-[2.8vh] py-[6vh] font-outfit"
  >
    <div class="h-max w-full flex justify-center">
      <span class="text-[2.8vw] border-b-[.4vh] font-[350] border-[#333]"
        >Shop By Flooring Category</span
      >
    </div>
    <div class="h-max w-full flex flex-col justify-between px-[6vw] gap-[0vh]">
      <a href="/flooring/carpets/details">
        <CategoryCardHeroPC
          name="Carpet Flooring"
          desc="Durable, stylish carpet flooring enhances comfort, warmth, and
      aesthetic appeal in any space."
          :isAvailable="true"
          src="10004.jpg"
        />
      </a>
    </div>
    <div class="h-max w-full flex justify-between px-[6vw] gap-[2vw]">
      <CategoryCardHeroPC
        name="Wooden Flooring"
        src="10003.jpg"
        link="/carpets/details"
      />

      <CategoryCardHeroPC
        name="Flooring Accessories"
        src=""
        link="/carpets/details"
      />
    </div>
    <div class="h-max w-full flex justify-between px-[6vw] gap-[2vw]">
      <CategoryCardHeroPC name="Raised Flooring" link="/carpets/details" />

      <CategoryCardHeroPC
        name="Explore All Products"
        src=""
        link="/carpets/details"
      />
    </div>
  </section>
</template>

<script setup>
import CategoryCardHeroPC from "./../CategoryCard-HeroPC.vue";
import { useCookie } from "#app";
const userPreference = useCookie("userPreference");

import useUserStore from "../../../stores/user";
const userStore = useUserStore();
const isCarpetExpanded = ref(false);
const setCategory = (category) => {
  userStore.preference.category = category;
  userPreference.value = userStore.preference;
  console.log("COOKIE SET::", toRaw(userPreference.value));
};
const scrollToBottom = () => {
  window.scrollBy({ top: window.innerHeight * 0.2, behavior: "smooth" });
};
function toggleExpansion() {
  if (isCarpetExpanded.value) {
    isCarpetExpanded.value = false;
  } else {
    isCarpetExpanded.value = true;
    scrollToBottom();
  }
}
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
