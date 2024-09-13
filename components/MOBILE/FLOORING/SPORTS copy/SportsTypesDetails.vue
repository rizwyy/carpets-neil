<template>
  <SportTypes_MOB v-if="isMobile" />
  <SportTypes_PC v-else />
</template>

<script setup>
import SportTypes_MOB from "./SPORTS-Types/SportTypes_MOB.vue";
import SportTypes_PC from "./SPORTS-Types/SportTypes_PC.vue";

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
