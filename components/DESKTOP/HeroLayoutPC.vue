<template>
  <section
    class="max-[990px]:hidden relative h-max w-full overflow-x-hidden py-[6vh]"
  >
    <!-- 2 * 3 LAYOUT -->
    <section class="h-max w-full flex flex-col gap-[3.2vh] px-[6vw]">
      <div class="h-max w-[50%] flex justify-start">
        <span class="text-[3.8vh]">Shop By Categories</span>
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw]">
        <CategoryCardHeroPC
          name="Flooring"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          src="10001.jpg"
          :isAvailable="true"
          link="/flooring"
        />
        <CategoryCardHeroPC
          name="Furniture"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <CategoryCardHeroPC
          name="Blinds & Curtains"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
      <div class="h-max w-full flex justify-between gap-[2vw]">
        <CategoryCardHeroPC
          name="3-D Printed Decor"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          available
        />
        <CategoryCardHeroPC
          name="Textiles"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <CategoryCardHeroPC
          name="Surface Courier"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </section>
    <div class="h-max w-screen px-[6vw]">
      <FaqPC />
    </div>
  </section>
</template>

<script setup>
import CategoryCardHeroPC from "./CategoryCard-HeroPC.vue";
import FaqPC from "./FaqPC.vue";
</script>

<style lang="scss" scoped></style>
