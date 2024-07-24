<template>
  <div class="">
    <GymBudgets_MOB v-if="isMobile" />
    <GymBudgets_PC v-else />
  </div>
</template>

<script setup>
import GymBudgets_MOB from "./GYM-Budgets/GymBudgets_MOB.vue";
import GymBudgets_PC from "./GYM-Budgets/GymBudgets_PC.vue";

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
