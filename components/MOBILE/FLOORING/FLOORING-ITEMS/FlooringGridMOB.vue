<template>
  <div
    class="min-[990px]:hidden h-max w-screen flex flex-col gap-[.8rem] relative"
  >
    <div
      class="h-max w-screen flex justify-evenly gap-[.8rem] px-[3.2vw] z-[1]"
    >
      <FlooringCategoryItem
        href="/flooring/carpets/details"
        title="Carpet Flooring"
        imgSrc="/carpets/carpetsCover.webp"
        altText="#"
        titleClass="flooringLayout_Carpet_Text"
        @load="handleImageLoad(0.4, 'flooringLayout_Carpet', 'flooringItem')"
      />
      <FlooringCategoryItem
        href="/flooring/wooden/details"
        title="Wooden Flooring"
        imgSrc="/wooden-flooring.webp"
        altText="engineeredWoodenFloor"
        titleClass="flooringLayout_Wood_Text"
        @load="handleImageLoad(0.4, 'flooringLayout_Wood', 'flooringItem')"
      />
    </div>

    <div
      class="h-max w-screen flex justify-evenly gap-[.8rem] px-[3.2vw] z-[9]"
    >
      <FlooringCategoryItem
        href="/flooring/pvc/details"
        title="Vinyl Flooring"
        imgSrc="/pvc/vinyl-cover.webp"
        altText="#"
        titleClass="flooringLayout_Pvc_Text"
        @load="
          handleImageLoad(0.4, 'flooringLayout_Pvc', 'flooringItem', true, true)
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
          handleImageLoad(0.4, 'flooringLayout_Gym', 'flooringItem', true, true)
        "
        loading="lazy"
      />
    </div>

    <div
      class="h-max w-screen flex justify-evenly gap-[.8rem] px-[3.2vw] z-[9]"
    >
      <FlooringCategoryItem
        href="/flooring/raised/details"
        title="Raised Flooring"
        imgSrc="/raised/raised-office.webp"
        altText="#"
        titleClass="flooringLayout_Raised_Text"
        @load="
          handleImageLoad(
            0.4,
            'flooringLayout_Raised',
            'flooringItem',
            true,
            true
          )
        "
        loading="lazy"
      />
      <FlooringCategoryItem
        href="/flooring/sports/details"
        title="Sports Flooring"
        imgSrc="sports-flooring.webp"
        altText="#"
        titleClass="flooringLayout_Sports_Text"
        @load="
          handleImageLoad(
            0.4,
            'flooringLayout_Sports',
            'flooringItem',
            true,
            true
          )
        "
        loading="lazy"
      />
    </div>
    <div
      class="h-max w-screen flex justify-evenly gap-[.8rem] px-[3.2vw] z-[9]"
    >
      <FlooringCategoryItem
        href="/flooring/rubber-flooring/details"
        title="Rubber Flooring"
        imgSrc="/rubber-flooring.webp"
        altText="#"
        titleClass="flooringLayout_Rubber_Text"
        @load="
          handleImageLoad(
            0.4,
            'flooringLayout_Rubber',
            'flooringItem',
            true,
            true
          )
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
          handleImageLoad(
            0.4,
            'flooringLayout_Grass',
            'flooringItem',
            true,
            true
          )
        "
        loading="lazy"
      />
    </div>
    <div
      class="h-max w-screen flex justify-evenly gap-[.8rem] px-[3.2vw] z-[9]"
    >
      <FlooringCategoryItem
        href="/flooring/epoxy/details"
        title="Epoxy Flooring"
        imgSrc="/epoxy/epoxyFlooring.webp"
        altText="Woltiz Epoxy Flooring"
        titleClass="flooring-epoxy_Text"
        @load="
          handleImageLoad(
            0.4,
            'flooringLayout_epoxy',
            'flooringItem',
            true,
            true
          )
        "
        loading="lazy"
      />
      <FlooringCategoryItem
        href="/flooring/stone/details"
        title="Stone Flooring"
        imgSrc="/stone/stoneFlooring.webp"
        altText="Woltiz Stone Flooring"
        titleClass="flooringLayout_stone_Text"
        @load="
          handleImageLoad(
            0.4,
            'flooringLayout_stone',
            'flooringItem',
            true,
            true
          )
        "
        loading="lazy"
      />
    </div>
    <div
      class="h-max w-screen flex justify-evenly gap-[.8rem] px-[3.2vw] z-[9]"
    >
      <FlooringCategoryItem
        href="/flooring/services/details"
        title="Flooring Services"
        imgSrc="/flooringServiceBanner.webp"
        altText="Woltiz Flooring Services"
        titleClass="flooring-services_Text"
        @load="
          handleImageLoad(
            0.4,
            'flooringLayout_Services',
            'flooringItem',
            true,
            true
          )
        "
        loading="lazy"
      />
      <FlooringCategoryItem
        href="/flooring/accessories/details"
        title="Flooring Accessories"
        imgSrc="/flooringAccessories.webp"
        altText="Woltiz Flooring Accessories"
        titleClass="flooringLayout_Accessories_Text"
        @load="
          handleImageLoad(
            0.4,
            'flooringLayout_Accessories',
            'flooringItem',
            true,
            true
          )
        "
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import loadingIcon from "~/public/icons/loadingIcon.vue";

const FlooringCategoryItem = defineAsyncComponent(() =>
  import("../FLOORING-ITEMS/FlooringCategoryItem.vue")
);
</script>

<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
