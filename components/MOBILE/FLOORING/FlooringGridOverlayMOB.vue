<template>
  <div class="h-max w-screen flex flex-col gap-[3.4svh]">
    <div
      class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[1]"
    >
      <FlooringCategoryItem
        href="/flooring/carpets/details"
        title="Carpet"
        imgSrc="/carpets/carpetsCover.webp"
        altText="#"
        titleClass="flooringLayout_Carpet_Text"
        @load="handleImageLoad('flooringLayout_Carpet', 'flooringItem')"
      />
      <FlooringCategoryItem
        href="/flooring/wooden/details"
        title="Wooden"
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
        title="Vinyl's"
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
        title="Gym "
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
        title="Raised"
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
        title="Sport"
        imgSrc="/sports/outdoor.webp"
        altText="#"
        titleClass="flooringLayout_Sports_Text"
        @load="
          handleImageLoad('flooringLayout_Sports', 'flooringItem', true, true)
        "
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const FlooringCategoryItem = defineAsyncComponent(() =>
  import("./FlooringCategoryOverlayItem.vue")
);
</script>

<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
