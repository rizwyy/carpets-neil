<template>
  <div class="h-max w-max">
    <RaisedReviewMOB v-if="isMobile" />
    <RaisedReviewPC v-else />
  </div>
</template>

<script setup>
import RaisedReviewMOB from "./Raised-Review/RaisedReview_MOB.vue";
import RaisedReviewPC from "./Raised-Review/RaisedReview_PC.vue";
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
