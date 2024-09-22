<template>
  <div class="">
    <StoneBudgets_MOB v-if="isMobile" />
    <StoneBudgets_PC v-else />
  </div>
</template>

<script setup>
import StoneBudgets_MOB from "./STONE-Budgets/StoneBudgets_MOB.vue";
import StoneBudgets_PC from "./STONE-Budgets/StoneBudgets_PC.vue";

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
