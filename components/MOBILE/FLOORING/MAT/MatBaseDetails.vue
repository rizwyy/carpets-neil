<template>
  <SportActivity_MOB v-if="isMobile" />
  <SportActivity_PC v-else />
</template>

<script setup>
import SportActivity_MOB from "./SPORTS-Activities/SportActivity_MOB.vue";
import SportActivity_PC from "./SPORTS-Activities/SportActivity_PC.vue";

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
