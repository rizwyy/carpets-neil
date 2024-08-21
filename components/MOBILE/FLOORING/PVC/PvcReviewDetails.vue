<template>
  <div class="h-max w-max">
    <PvcReviewMOB v-if="isMobile" />
    <PvcReviewPC v-else />
  </div>
</template>

<script setup>
import PvcReviewMOB from "./PVC-Review/PvcReview_MOB.vue";
import PvcReviewPC from "./PVC-Review/PvcReview_PC.vue";
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
