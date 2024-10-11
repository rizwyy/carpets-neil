<template>
  <section
    class="flooringLayoutPC invisible opacity-0 h-max max-w-[100vw] flex flex-col gap-[4.8vh] min-[1590px]:gap-[4vh] py-[6vh] pb-[14vh] font-outfit"
  >
    <div class="h-max w-full flex justify-center min-[1590px]:py-[2vh]">
      <span class="text-[2.8rem] font-[400]">Shop By Flooring Category</span>
    </div>

    <!-- Category Cards Loop -->
    <div
      v-for="(flooringRow, index) in flooringCategories"
      :key="index"
      class="h-max w-full flex justify-between px-[6vw] gap-[.4vw] min-[1590px]:gap-[2.4vw]"
    >
      <FlooringCategoryItem
        v-for="category in flooringRow"
        :key="category.name"
        :name="category.name"
        :desc="category.desc"
        :src="category.src"
        :isAvailable="category.isAvailable"
        :link="category.link"
        :altText="`Woltiz ${category.name}`"
        @load="
          handleImageLoad(
            0.4,
            'flooringLayout_' + category.name.replace(/\s+/g, ''),
            'flooringItem',
            true,
            true
          )
        "
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup>
const FlooringCategoryItem = defineAsyncComponent({
  loader: () => import("./CategoryCard-HeroPC.vue"),
});

// Flooring categories array (DRY: Don't Repeat Yourself)
const flooringCategories = [
  // Row 1
  [
    {
      name: "Carpet Flooring",
      desc: "Durable, stylish carpet flooring enhances comfort, warmth, and aesthetic appeal in any space.",
      isAvailable: true,
      src: "/carpets/carpetsCover.webp",
      link: "/flooring/carpets/details",
    },
    {
      name: "Wooden Flooring",
      desc: "Durable, stylish wooden flooring enhances comfort, warmth, and aesthetic appeal in any space.",
      isAvailable: true,
      src: "/wooden-flooring.webp",
      link: "/flooring/wooden/details",
    },
  ],
  // Row 2
  [
    {
      name: "Vinyl Flooring",
      desc: "Durable, stylish vinyl tiles offer sleek, resilient, and low-maintenance flooring for any modern space.",
      isAvailable: true,
      src: "/pvc/vinyl-cover.webp",
      link: "/flooring/pvc/details",
    },
    {
      name: "Gym Flooring",
      desc: "Durable, stylish gym flooring enhances comfort and safety in workout spaces.",
      isAvailable: true,
      src: "40001.webp",
      link: "/flooring/gym/details",
    },
  ],
  // Row 3
  [
    {
      name: "Sports Flooring",
      desc: "Durable sports flooring ensures enhanced safety and performance in sports areas.",
      isAvailable: true,
      src: "sports-flooring.webp",
      link: "/flooring/sports/details",
    },
    {
      name: "Raised Flooring",
      desc: "Stylish raised flooring offers practical solutions for easy access to utilities underneath.",
      isAvailable: true,
      src: "/raised/raised-office.webp",
      link: "/flooring/raised/details",
    },
  ],
  // Row 4
  [
    {
      name: "Rubber Flooring",
      desc: "Durable and slip-resistant, rubber flooring offers excellent shock absorption and easy maintenance, ideal for gym & playrooms",
      isAvailable: true,
      src: "/rubber-flooring.webp",
      link: "/flooring/rubber-flooring/details",
    },
    {
      name: "Grass Flooring",
      desc: "Lush and low-maintenance, grass flooring provides a natural look, perfect for outdoor spaces & patios with added weather resistance.",
      isAvailable: true,
      src: "/40004.webp",
      link: "/flooring/grass-flooring/details",
    },
  ],
  // Row 5
  [
    {
      name: "Epoxy Flooring",
      desc: "Durable and slip-resistant, rubber flooring offers excellent shock absorption and easy maintenance, ideal for gym & playrooms",
      isAvailable: true,
      src: "/epoxy/epoxyFlooring.webp",
      link: "/flooring/epoxy/details",
    },
    {
      name: "Stone Flooring",
      desc: "Lush and low-maintenance, grass flooring provides a natural look, perfect for outdoor spaces & patios with added weather resistance.",
      isAvailable: true,
      src: "/stone/stoneFlooring.webp",
      link: "/flooring/stone/details",
    },
  ],
  // Row 6

  [
    {
      name: "Flooring Services",
      desc: "Durable and slip-resistant, rubber flooring offers excellent shock absorption and easy maintenance, ideal for gym & playrooms",
      isAvailable: true,
      src: "/flooringServiceBanner.webp",
      link: "/flooring/services/details",
    },
    {
      name: "Flooring Accessories",
      desc: "Lush and low-maintenance, grass flooring provides a natural look, perfect for outdoor spaces & patios with added weather resistance.",
      isAvailable: true,
      src: "/flooringAccessories.webp",
      link: "/flooring/accessories/details",
    },
  ],
];

onMounted(() => {
  handleAutoAlpha("flooringLayoutPC", 1);
});
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
