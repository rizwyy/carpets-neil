<template>
  <div class="h-max w-max">
    <SportsOrderMethodsMOB v-if="isMobile" />
    <SportsOrderMethodsPC v-else />
  </div>
</template>

<script setup>
import SportsOrderMethodsMOB from "./SPORTS-OrderMethods/SportsOrderMethods_MOB.vue";
import SportsOrderMethodsPC from "./SPORTS-OrderMethods/SportsOrderMethods_PC.vue";
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
