<template>
  <div class="h-max w-max">
    <WoodenReviewMOB v-if="isMobile" />
    <WoodenReviewPC v-else />
  </div>
</template>

<script setup>
import WoodenReviewMOB from "./Wooden-Review/WoodenReview_MOB.vue";
import WoodenReviewPC from "./Wooden-Review/WoodenReview_PC.vue";
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
