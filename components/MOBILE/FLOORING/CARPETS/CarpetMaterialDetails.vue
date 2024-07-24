<template>
  <div class="h-max w-max">
    <CarpetMaterialsMOB v-if="isMobile" />
    <CarpetMaterialsPC v-else />
  </div>
</template>

<script setup>
import CarpetMaterialsMOB from "./CARPETS-Materials/CarpetMaterials_MOB.vue";
import CarpetMaterialsPC from "./CARPETS-Materials/CarpetMaterials_PC.vue";
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
