<script setup>
import { defineAsyncComponent } from "vue";

// Lazy-load components
const HeroItem = defineAsyncComponent(() =>
  import("./../HomePage/HeroItem.vue")
);
const ContentBanner = defineAsyncComponent(() =>
  import("./../HomePage/ContentBanner.vue")
);
const FaqSection = defineAsyncComponent(() =>
  import("./../HomePage/FaqSection.vue")
);
</script>

<template>
  <section class="h-max w-max min-[990px]:hidden font-outfit">
    <div
      class="h-max w-screen py-[2vh] text-[#333] px-[2.4vw] font-[400] text-[3.2vh]"
    >
      <span class="HeroItem_Text opacity-0">Shop by Categories</span>
    </div>
    <div class="h-max w-screen flex flex-col gap-[1.6vh]">
      <div
        class="h-max w-screen flex justify-evenly gap-[1.6vh] px-[2vw] bg-[#]"
      >
        <HeroItem
          href="/flooring"
          title="Flooring"
          imgSrc="/flooring1.webp"
          @load="handleImageLoad('flooringLayout_Flooring', 'HeroItem')"
        />
        <HeroItem
          title="Wall Covering"
          imgSrc="/wall-to-wall.webp"
          @load="handleImageLoad('flooringLayout_WallToWall', 'HeroItem')"
        />
      </div>
    </div>

    <!-- CONTENT BANNER SECTION  -->
    <ContentBanner content="Content / Banner" />

    <!-- FAQ SECTION  -->
    <FaqSection faqContent="FAQ" />
  </section>
</template>

<style>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
