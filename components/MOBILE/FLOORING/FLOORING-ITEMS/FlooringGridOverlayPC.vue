<template>
  <div
    class="max-[990px]:hidden h-max w-screen grid grid-cols-4 gap-[3.4svh] px-[3.2vw]"
  >
    <FlooringCategoryItem
      v-for="(category, index) in flooringCategoriesFlat"
      :key="category.title + index"
      :href="category.href"
      :title="category.title"
      :imgSrc="category.imgSrc"
      :altText="category.altText"
      :titleClass="category.titleClass"
      @load="
        handleImageLoad(
          category.loadArgs.percentage,
          category.loadArgs.layout,
          category.loadArgs.item,
          category.loadArgs.arg1 || false,
          category.loadArgs.arg2 || false
        )
      "
      :loading="category.loading"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

// Asynchronous component import
const FlooringCategoryItem = defineAsyncComponent(() =>
  import("./FlooringCategoryOverlayItemPC.vue")
);

// Flattened array for grid structure
const flooringCategoriesFlat = [
  {
    href: "/flooring/carpets/details",
    title: "Carpet",
    imgSrc: "/carpets/carpetsCover.webp",
    altText: "#",
    titleClass: "flooringLayout_Carpet_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_Carpet",
      item: "flooringItem",
    },
  },
  {
    href: "/flooring/wooden/details",
    title: "Wooden",
    imgSrc: "/wooden-flooring.webp",
    altText: "engineeredWoodenFloor",
    titleClass: "flooringLayout_Wood_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_Wood",
      item: "flooringItem",
    },
  },
  {
    href: "/flooring/pvc/details",
    title: "Vinyl's",
    imgSrc: "/pvc/vinyl-cover.webp",
    altText: "#",
    titleClass: "flooringLayout_Pvc_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_Pvc",
      item: "flooringItem",
      arg1: true,
      arg2: true,
    },
  },
  {
    href: "/flooring/gym/details",
    title: "Gym",
    imgSrc: "/40001.webp",
    altText: "#",
    titleClass: "flooringLayout_Gym_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_Gym",
      item: "flooringItem",
      arg1: true,
      arg2: true,
    },
  },
  {
    href: "/flooring/rubber-flooring/details",
    title: "Rubber Flooring",
    imgSrc: "/rubber-flooring.webp",
    altText: "#",
    titleClass: "flooringLayout_Rubber_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_Rubber",
      item: "flooringItem",
      arg1: true,
      arg2: true,
    },
  },
  {
    href: "/flooring/grass-flooring/details",
    title: "Grass Flooring",
    imgSrc: "/40004.webp",
    altText: "#",
    titleClass: "flooringLayout_Grass_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_Grass",
      item: "flooringItem",
      arg1: true,
      arg2: true,
    },
  },
  {
    href: "/flooring/epoxy/details",
    title: "Epoxy Flooring",
    imgSrc: "/epoxy/epoxyFlooring.webp",
    altText: "#",
    titleClass: "flooringLayout_epoxy_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_epoxy",
      item: "flooringItem",
      arg1: true,
      arg2: true,
    },
  },
  {
    href: "/flooring/stone/details",
    title: "Stone Flooring",
    imgSrc: "/stone/stoneFlooring.webp",
    altText: "#",
    titleClass: "flooringLayout_stone_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_stone",
      item: "flooringItem",
      arg1: true,
      arg2: true,
    },
  },
  {
    href: "/flooring/accessories/details",
    title: "Accessories",
    imgSrc: "/accessories/profile.webp",
    altText: "#",
    titleClass: "flooringLayout_accessories_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_accessories",
      item: "flooringItem",
      arg1: true,
      arg2: true,
    },
  },
  {
    href: "/flooring/services/details",
    title: "Services",
    imgSrc: "/serviceImg/carpetInstallation.webp",
    altText: "#",
    titleClass: "flooringLayout_service_Text",
    loading: "lazy",
    loadArgs: {
      percentage: 0.4,
      layout: "flooringLayout_service",
      item: "flooringItem",
      arg1: true,
      arg2: true,
    },
  },
];
</script>

<style>
.flooringItem_Overlay {
  backdrop-filter: blur(14px);
  opacity: 0.8;
}
</style>
