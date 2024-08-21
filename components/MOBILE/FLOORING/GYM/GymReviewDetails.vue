<template>
  <div class="h-max w-max">
    <GymReviewMOB v-if="isMobile" />
    <GymReviewPC v-else />
  </div>
</template>

<script setup>
import GymReviewMOB from "./GYM-Review/GymReview_MOB.vue";
import GymReviewPC from "./GYM-Review/GymReview_PC.vue";
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
