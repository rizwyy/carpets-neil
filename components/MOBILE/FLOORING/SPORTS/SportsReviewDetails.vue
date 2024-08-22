<template>
  <div class="h-max w-max">
    <SportsReviewMOB v-if="isMobile" />
    <SportsReviewPC v-else />
  </div>
</template>

<script setup>
import SportsReviewMOB from "./SPORTS-Review/SportsReview_MOB.vue";
import SportsReviewPC from "./SPORTS-Review/SportsReview_PC.vue";
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
