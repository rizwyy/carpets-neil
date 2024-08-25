<template>
  <InfoCardMOB :flooring="flooring" v-if="isMobile" />
  <InfoCardPC :flooring="flooring" v-else />
</template>

<script setup>
const { flooring } = defineProps(["flooring"]);

import InfoCardMOB from "./InfoFormCards/InfoCardMOB.vue";
import InfoCardPC from "./InfoFormCards/InfoCardPC.vue";

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
