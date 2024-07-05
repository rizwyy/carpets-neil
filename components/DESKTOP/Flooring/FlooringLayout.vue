<template>
  <section
    class="h-max max-w-[100vw] flex flex-col gap-[2.8vh] py-[6vh] font-outfit"
  >
    <div class="h-max w-full flex flex-col justify-between px-[6vw] gap-[0vh]">
      <CategoryCardHeroPC
        @click="toggleExpansion"
        name="Carpet Flooring"
        desc="Durable, stylish carpet flooring enhances comfort, warmth, and
      aesthetic appeal in any space."
        :isAvailable="true"
        src="10004.jpg"
      />
      <div
        v-if="isCarpetExpanded"
        class="h-max w-full flex gap-[2vw] px-[2vw] justify-evenly py-[2vh]"
      >
        <div class="h-full w-full bg-white">
          <a
            href="/flooring/carpets/details"
            @click="setCategory('Wall to Wall')"
            class="categoryItem z-[9] h-[32vh] w-full overflow-hidden relative flex flex-col items-start justify-between py-[2.4vh] px-[1vw]"
          >
            <div
              class="h-full w-full absolute left-0 top-0 py-[.4vh] bg-gradient-to-br from-[black] to-[#0000] bg-opacity-[.4] flex-col"
            ></div>
            <span
              class="text-[3.2vh] font-[400] leading-[3.2vh] text-[#f1f1f1] z-[99]"
              >Wall to Wall
            </span>
            <span
              class="text-[#fff9] w-full text-end text-[2vh] font-[500] z-[99] underline underline-offset-[.4vh]"
              >View All</span
            >
            <div
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-t from-[#000] via-[#0000] to-[#000] from-[14%]"
            ></div>
            <NuxtImg
              quality="50"
              preload
              loading="eager"
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
              src="/wall-to-wall.webp"
              alt="#"
            />
          </a>
        </div>
        <div class="h-full w-full bg-white">
          <a
            href="/flooring/carpets/details"
            @click="setCategory('Carpet Tiles')"
            class="categoryItem z-[9] h-[32vh] w-full overflow-hidden relative flex flex-col items-start justify-between py-[2.4vh] px-[1vw]"
          >
            <div
              class="h-full w-full absolute left-0 top-0 py-[.4vh] bg-gradient-to-br from-[black] to-[#0000] bg-opacity-[.4] flex-col"
            ></div>
            <span
              class="text-[3.2vh] font-[400] leading-[3.2vh] text-[#f1f1f1] z-[99]"
              >Carpet Tiles
            </span>
            <span
              class="text-[#fff9] w-full text-end text-[2vh] font-[500] z-[99] underline underline-offset-[.4vh]"
              >View All</span
            >
            <div
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-t from-[#000] via-[#0000] to-[#000] from-[14%]"
            ></div>
            <NuxtImg
              quality="50"
              preload
              loading="eager"
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
              src="/carpet-tiles.webp"
              alt="#"
            />
          </a>
        </div>
        <div class="h-full w-full bg-white">
          <a
            href="/flooring/carpets/details"
            @click="setCategory('Runners')"
            class="categoryItem z-[9] h-[32vh] w-full overflow-hidden relative flex flex-col items-start justify-between py-[2.4vh] px-[1vw]"
          >
            <div
              class="h-full w-full absolute left-0 top-0 py-[.4vh] bg-gradient-to-br from-[black] to-[#0000] bg-opacity-[.4] flex-col"
            ></div>
            <span
              class="text-[3.2vh] font-[400] leading-[3.2vh] text-[#f1f1f1] z-[99]"
              >Runners
            </span>
            <span
              class="text-[#fff9] w-full text-end text-[2vh] font-[500] z-[99] underline underline-offset-[.4vh]"
              >View All</span
            >
            <div
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-t from-[#000] via-[#0000] to-[#000] from-[14%]"
            ></div>
            <NuxtImg
              quality="50"
              preload
              loading="eager"
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
              src="/runners.webp"
              alt="#"
            />
          </a>
        </div>
        <div class="h-full w-full bg-white">
          <a
            href="/flooring/carpets/details"
            @click="setCategory('Area Rugs')"
            class="categoryItem z-[9] h-[32vh] w-full overflow-hidden relative flex flex-col items-start justify-between py-[2.4vh] px-[1vw]"
          >
            <div
              class="h-full w-full absolute left-0 top-0 py-[.4vh] bg-gradient-to-br from-[black] to-[#0000] bg-opacity-[.4] flex-col"
            ></div>
            <span
              class="text-[3.2vh] font-[400] leading-[3.2vh] text-[#f1f1f1] z-[99]"
              >Area Rugs
            </span>
            <span
              class="text-[#fff9] w-full text-end text-[2vh] font-[500] z-[99] underline underline-offset-[.4vh]"
              >View All</span
            >
            <div
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-9] opacity-[.7] bg-gradient-to-t from-[#000] via-[#0000] to-[#000] from-[14%]"
            ></div>
            <NuxtImg
              quality="50"
              preload
              loading="eager"
              class="absolute object-cover bottom-0 left-0 h-full w-full z-[-99]"
              src="/area-rugs.webp"
              alt="#"
            />
          </a>
        </div>
      </div>
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
