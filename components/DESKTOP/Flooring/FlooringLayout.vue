<template>
  <section class="h-max max-w-[100vw] flex flex-col gap-[2.8vh] py-[6vh]">
    <div class="h-max w-full flex justify-between px-[6vw] gap-[2vw]">
      <CategoryCardHeroPC
        name="Carpet Flooring"
        desc="Durable, stylish carpet flooring enhances comfort, warmth, and aesthetic appeal in any space."
        :isAvailable="true"
        src="10004.jpg"
        link="/flooring/carpets/details"
      />

      <CategoryCardHeroPC
        name="Vinyl Flooring"
        src=""
        link="/carpets/details"
      />
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
</script>

<style lang="scss" scoped></style>
