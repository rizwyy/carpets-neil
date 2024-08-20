<template>
  <div class="h-max w-max">
    <CarpetsReviewMOB v-if="isMobile" />
    <CarpetReviewPC v-else />
  </div>
</template>

<script setup>
import CarpetsReviewMOB from "./CARPETS-Review/CarpetReview_MOB.vue";
import CarpetReviewPC from "./CARPETS-Review/CarpetReview_PC.vue";
const isMobile = ref(false);
onMounted(() => {
  if (window.innerWidth < 990) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});
</script>

<style scoped></style>
