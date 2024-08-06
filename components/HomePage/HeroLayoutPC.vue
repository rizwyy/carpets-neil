<template>
  <div
    class="max-[990px]:hidden h-max w-screen max-w-[100vw] flex flex-col gap-[2vh] overflow-x-hidden min-[1590px]:max-w-[99.2vw]"
  >
    <NavBarPC />
    <HeroBannerPC />
    <HeroLayoutPC />
  </div>
</template>

<script setup>
import HeroBannerPC from "./../DESKTOP/HeroBannerPC.vue";
import HeroLayoutPC from "./../DESKTOP/HeroLayoutPC.vue";
import NavBarPC from "./../DESKTOP/NavBarPC.vue";
</script>
