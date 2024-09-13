<template>
  <div class="HI"></div>
  <ServiceTypes_MOB v-if="isMobile" />
  <ServiceTypes_PC v-else />
</template>

<script setup>
import ServiceTypes_MOB from "./SERVICE-Types/ServiceTypes_MOB.vue";
import ServiceTypes_PC from "./SERVICE-Types/ServiceTypes_PC.vue";

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
