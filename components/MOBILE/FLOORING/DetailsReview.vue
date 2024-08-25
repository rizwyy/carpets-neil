<template>
  <ReviewCardMOB :flooring="flooring" :link="link" v-if="isMobile" />
  <ReviewCardPC :flooring="flooring" :link="link" v-else />
</template>

<script setup>
const { flooring, link } = defineProps(["flooring", "link"]);

import ReviewCardMOB from "./DetailsReviewCards/ReviewCardMOB.vue";
import ReviewCardPC from "./DetailsReviewCards/ReviewCardPC.vue";

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
