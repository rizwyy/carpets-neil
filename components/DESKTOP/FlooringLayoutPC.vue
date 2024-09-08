<template>
  <section
    class="h-max max-w-[100vw] flex flex-col gap-[4.8vh] min-[1590px]:gap-[4vh] py-[6vh] pb-[14vh] font-outfit"
  >
    <div class="h-max w-full flex justify-center min-[1590px]:py-[2vh]">
      <span class="text-[2.8vw] font-[4000]">Shop By Flooring Category</span>
    </div>
    <div
      class="h-max w-full flex justify-between px-[6vw] gap-[.4vw] min-[1590px]:gap-[2.4vw]"
    >
      <a href="/flooring/carpets/details">
        <CategoryCardHeroPC
          name="Carpet Flooring"
          desc="Durable, stylish carpet flooring enhances comfort, warmth, and
      aesthetic appeal in any space."
          :isAvailable="true"
          src="/carpets/carpetsCover.webp"
        />
      </a>
      <a href="/flooring/wooden/details">
        <CategoryCardHeroPC
          name="Wooden Flooring"
          desc="Durable, stylish carpet flooring enhances comfort, warmth, and
      aesthetic appeal in any space."
          :isAvailable="true"
          src="60002.jpg"
        />
      </a>
    </div>
    <div
      class="h-max w-full flex justify-between px-[6vw] gap-[.4vw] min-[1590px]:gap-[2.4vw]"
    >
      <a href="/flooring/pvc/details">
        <CategoryCardHeroPC
          name="Vinly Flooring"
          desc="Durable, stylish vinyl tiles offer sleek, resilient, and low-maintenance flooring for any modern space."
          src="/pvc/vinyl-cover.webp"
          :isAvailable="true"
          link="/flooring/pvc/details"
        />
      </a>
      <a href="/flooring/gym/details">
        <CategoryCardHeroPC
          name="Gym Flooring"
          desc="Durable, stylish carpet flooring enhances comfort, warmth, and
      aesthetic appeal in any space."
          :isAvailable="true"
          src="40001.webp"
          link="/flooring/gym/details"
        />
      </a>
    </div>
    <div
      class="h-max w-full flex justify-between px-[6vw] gap-[.4vw] min-[1590px]:gap-[2.4vw]"
    >
      <a href="/flooring/sports/details">
        <CategoryCardHeroPC
          name="Sports Flooring"
          desc="Durable, stylish carpet flooring enhances comfort, warmth, and
      aesthetic appeal in any space."
          :isAvailable="true"
          src="40002.jpg"
          link="/flooring/sports/details"
        />
      </a>

      <a href="/flooring/raised/details">
        <CategoryCardHeroPC
          name="Raised Flooring"
          desc="Durable, stylish carpet flooring enhances comfort, warmth, and
      aesthetic appeal in any space."
          :isAvailable="true"
          src="raised-flooring.webp"
          link="/flooring/raised/details"
        />
      </a>
    </div>
    <div
      class="h-max w-full flex justify-between px-[6vw] gap-[.4vw] min-[1590px]:gap-[2.4vw]"
    >
      <a href="/flooring/rubber-flooring/details">
        <CategoryCardHeroPC
          name="Rubber Flooring"
          desc="Durable and slip-resistant, rubber flooring offers excellent shock absorption and easy maintenance, making it ideal for high-traffic areas, gyms, and playrooms."
          :isAvailable="true"
          src="/rubber-flooring.webp"
          link="/flooring/rubber-flooring/details"
        />
      </a>

      <a href="/flooring/grass-flooring/details">
        <CategoryCardHeroPC
          name="Grass Flooring"
          desc="Lush and low-maintenance, grass flooring provides a natural look and feel, perfect for outdoor spaces & patios with the added benefit of weather resistance."
          :isAvailable="true"
          src="/40004.webp"
          link="/flooring/grass-flooring/details"
        />
      </a>
    </div>
  </section>
</template>

<script setup>
import CategoryCardHeroPC from "./CategoryCard-HeroPC.vue";
import { useCookie } from "#app";
const userPreference = useCookie("userPreference");

import useUserStore from "../../stores/user";
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
