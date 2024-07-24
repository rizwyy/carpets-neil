<template>
  <div class="h-max w-max">
    <HeroMOB v-if="isMobile" />
    <HeroPC v-else />
  </div>
</template>

<script setup>
import HeroPC from "./../components/HomePage/HeroLayoutPC.vue";
import HeroMOB from "./../components/HomePage/HeroLayoutMOB.vue";

const isMobile = ref(false);
onMounted(() => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>
