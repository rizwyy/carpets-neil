<template>
  <section
    class="max-[990px]:hidden relative h-max w-full overflow-x-hidden py-[8h] font-outfit"
  >
    <!-- 2 * 3 LAYOUT -->
    <section class="h-max w-full flex flex-col gap-[6.2vh] px-[6vw]">
      <div class="h-max w-full flex justify-center">
        <span class="text-[2.8vw]">Shop By Categories</span>
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
          name="Wall Covering"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          src="/wall-to-wall.webp"
        />
      </div>
    </section>
    <div class="h-max w-screen px-[6vw] py-[8vh]">
      <FaqPC />
    </div>
    <FooterPC />
  </section>
</template>

<script setup>
import CategoryCardHeroPC from "./CategoryCard-HeroPC.vue";
import FaqPC from "./FaqPC.vue";
import FooterPC from "./FooterPC.vue";
import SearchBarPC from "../SearchBar/SearchBarPC.vue";
</script>

<style lang="scss" scoped></style>
