<script setup>
import { defineAsyncComponent } from "vue";

// Lazy-load the FlooringCategoryItem component
const FlooringCategoryItem = defineAsyncComponent(() =>
  import("./FlooringCategoryItem.vue")
);

// Lazy-load the ComingSoonItem component
const ComingSoonItem = defineAsyncComponent(() =>
  import("./CommingSoonItem.vue")
);
</script>

<template>
  <section class="h-max w-max min-[990px]:hidden font-outfit">
    <div class="h-max w-screen py-[2vh] text-[#333] px-[3.2vw]">
      <span class="flooringLayoutHeading text-[3.8vh] tracking-[-.1vw]"
        >Shop By Category</span
      >
    </div>
    <div class="h-max w-screen flex flex-col gap-[1.8vh]">
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

      <!-- Lazy-loaded COMING SOON ITEMS -->
      <div
        class="h-max w-screen flex justify-evenly gap-[1.8vh] px-[3.2vw] z-[9]"
      >
        <ComingSoonItem> Fitness Flooring </ComingSoonItem>
        <ComingSoonItem> Flooring Accessories </ComingSoonItem>
      </div>
    </div>
  </section>
</template>

<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
