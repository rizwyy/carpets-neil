<template>
  <div class="h-max w-screen mx-auto">
    <ul
      v-auto-animate
      class="h-max max-w-screen overflow-x-hidden w-full grid grid-cols-3 gap-[1rem] px-[2vw]"
    >
      <li
        class="h-max w-full"
        v-for="(item, index) in flooringItems"
        :key="index"
      >
        <FlooringCategoryItem
          :href="item.href"
          :title="item.title"
          :imgSrc="item.imgSrc"
          :altText="item.altText"
          :titleClass="item.titleClass"
          @load="
            handleImageLoad(
              item.opacity,
              item.titleClass,
              'flooringItem',
              item.lazy,
              item.additionalOptions
            )
          "
          :loading="item.lazy ? 'lazy' : undefined"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";

const FlooringCategoryItem = defineAsyncComponent(() =>
  import("./FlooringCategoryOverlayItemMOB.vue")
);

const flooringItems = ref([
  {
    href: "/flooring/carpets/details",
    title: "Carpet",
    imgSrc: "/carpets/carpetsCover.webp",
    altText: "#",
    titleClass: "flooringLayout_Carpet_Text",
    opacity: 0.4,
    lazy: false,
    additionalOptions: false,
  },
  {
    href: "/flooring/wooden/details",
    title: "Wooden",
    imgSrc: "/wooden-flooring.webp",
    altText: "engineeredWoodenFloor",
    titleClass: "flooringLayout_Wood_Text",
    opacity: 0.4,
    lazy: false,
    additionalOptions: false,
  },
  {
    href: "/flooring/pvc/details",
    title: "Vinyl's",
    imgSrc: "/pvc/vinyl-cover.webp",
    altText: "#",
    titleClass: "flooringLayout_Pvc_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/gym/details",
    title: "Gym",
    imgSrc: "/40001.webp",
    altText: "#",
    titleClass: "flooringLayout_Gym_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/raised/details",
    title: "Raised",
    imgSrc: "/raised/raised-office.webp",
    altText: "#",
    titleClass: "flooringLayout_Raised_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/sports/details",
    title: "Sport",
    imgSrc: "/sports/outdoor.webp",
    altText: "#",
    titleClass: "flooringLayout_Sports_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/rubber-flooring/details",
    title: "Rubber",
    imgSrc: "/rubber-flooring.webp",
    altText: "#",
    titleClass: "flooringLayout_Rubber_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/grass-flooring/details",
    title: "Grass",
    imgSrc: "/40004.webp",
    altText: "#",
    titleClass: "flooringLayout_Grass_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/stone/details",
    title: "Stone",
    imgSrc: "/stone/stoneFlooring.webp",
    altText: "#",
    titleClass: "flooringLayout_Grass_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/epoxy/details",
    title: "Epoxy",
    imgSrc: "/epoxy/epoxyFlooring.webp",
    altText: "#",
    titleClass: "flooringLayout_Grass_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/accessories/details",
    title: "Accessory",
    imgSrc: "/accessories/profile.webp",
    altText: "#",
    titleClass: "flooringLayout_Grass_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
  {
    href: "/flooring/epoxy/details",
    title: "Services",
    imgSrc: "/serviceImg/selfLeveling.webp",
    altText: "#",
    titleClass: "flooringLayout_Grass_Text",
    opacity: 0.4,
    lazy: true,
    additionalOptions: true,
  },
]);
</script>

<style scoped>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
