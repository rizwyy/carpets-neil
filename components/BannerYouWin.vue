<template>
  <div>
    <BannerYouWinPC v-if="!isMobile" />
    <BannerYouWinMOB v-else />
  </div>
</template>

<script setup>
import BannerYouWinPC from "./MOBILE/FLOORING/BannerYouWinPC.vue";
import BannerYouWinMOB from "./MOBILE/FLOORING/BannerYouWinMOB.vue";

const isMobile = ref(true);

onMounted(() => {
  if (window.innerWidth > 990) {
    isMobile.value = false;
  } else {
    isMobile.value = true;
  }
});
</script>
