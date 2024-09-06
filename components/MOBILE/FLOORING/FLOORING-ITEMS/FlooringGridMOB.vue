<template>
  <div
    class="min-[990px]:hidden h-max w-screen flex flex-col gap-[1.8vh] relative"
  >
    <div
      :class="[
        `min-[990px]:hidden h-full FlooringGridLoadingContainer_MOB w-screen overflow-x-hidden max-w-[100vw] text-[7.2vh] bg-white flex pt-[16svh] text-[#222] justify-center absolute z-[999] ${
          pageLoaded ? 'hidden' : ''
        }}`,
      ]"
    >
      <loadingIcon />
    </div>

    <div
      class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[1]"
    >
      <FlooringCategoryItem
        href="/flooring/carpets/details"
        title="Carpet Flooring"
        imgSrc="/carpets/carpetsCover.webp"
        altText="#"
        titleClass="flooringLayout_Carpet_Text"
        @load="handleImageLoad('flooringLayout_Carpet', 'flooringItem')"
      />
      <FlooringCategoryItem
        href="/flooring/wooden/details"
        title="Wooden Flooring"
        imgSrc="/wooden-flooring.webp"
        altText="engineeredWoodenFloor"
        titleClass="flooringLayout_Wood_Text"
        @load="handleImageLoad('flooringLayout_Wood', 'flooringItem')"
      />
    </div>

    <div
      class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
    >
      <FlooringCategoryItem
        href="/flooring/pvc/details"
        title="Vinyl Flooring"
        imgSrc="/pvc/vinyl-cover.webp"
        altText="#"
        titleClass="flooringLayout_Pvc_Text"
        @load="
          handleImageLoad('flooringLayout_Pvc', 'flooringItem', true, true)
        "
        loading="lazy"
      />
      <FlooringCategoryItem
        href="/flooring/gym/details"
        title="Gym Flooring"
        imgSrc="/40001.webp"
        altText="#"
        titleClass="flooringLayout_Gym_Text"
        @load="
          handleImageLoad('flooringLayout_Gym', 'flooringItem', true, true)
        "
        loading="lazy"
      />
    </div>

    <div
      class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
    >
      <FlooringCategoryItem
        href="/flooring/raised/details"
        title="Raised Flooring"
        imgSrc="/raised/raised-office.webp"
        altText="#"
        titleClass="flooringLayout_Raised_Text"
        @load="
          handleImageLoad('flooringLayout_Raised', 'flooringItem', true, true)
        "
        loading="lazy"
      />
      <FlooringCategoryItem
        href="/flooring/sports/details"
        title="Sports Flooring"
        imgSrc="/sports/outdoor.webp"
        altText="#"
        titleClass="flooringLayout_Sports_Text"
        @load="
          handleImageLoad('flooringLayout_Sports', 'flooringItem', true, true)
        "
        loading="lazy"
      />
    </div>
    <div
      class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
    >
      <FlooringCategoryItem
        href="/flooring/rubber-flooring/details"
        title="Rubber Flooring"
        imgSrc="/rubber-flooring.webp"
        altText="#"
        titleClass="flooringLayout_Rubber_Text"
        @load="
          handleImageLoad('flooringLayout_Rubber', 'flooringItem', true, true)
        "
        loading="lazy"
      />
      <FlooringCategoryItem
        href="/flooring/grass-flooring/details"
        title="Grass Flooring"
        imgSrc="/40004.webp"
        altText="#"
        titleClass="flooringLayout_Grass_Text"
        @load="
          handleImageLoad('flooringLayout_Grass', 'flooringItem', true, true)
        "
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import loadingIcon from "~/public/icons/loadingIcon.vue";

const pageLoaded = ref(false);
const FlooringCategoryItem = defineAsyncComponent(() =>
  import("../FLOORING-ITEMS/FlooringCategoryItem.vue")
);

onMounted(() => {
  setTimeout(() => {
    handleAutoAlpha("FlooringGridLoadingContainer_MOB", 0);
    pageLoaded.value = true;
  }, 1500);
});
</script>

<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
