<template>
  <div class="h-max w-max">
    <WoodDesignMOB v-if="isMobile" />
    <WoodDesignPC v-else />
  </div>
</template>

<script setup>
import WoodDesignMOB from "./Wooden-Designs/WoodDesigns_MOB.vue";
import WoodDesignPC from "./Wooden-Designs/WoodDesigns_PC.vue";

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
