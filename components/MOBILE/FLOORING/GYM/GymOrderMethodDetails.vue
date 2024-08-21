<template>
  <div class="h-max w-max">
    <GymOrderMethodsMOB v-if="isMobile" />
    <GymOrderMethodsPC v-else />
  </div>
</template>

<script setup>
import GymOrderMethodsMOB from "./GYM-OrderMethods/GymOrderMethods_MOB.vue";
import GymOrderMethodsPC from "./GYM-OrderMethods/GymOrderMethods_PC.vue";
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
