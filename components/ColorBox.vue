<script setup>
const { color } = defineProps(["color"]);
</script>
<template>
  <div :class="`bg-[#${color}]`" class="h-[12vh] w-[24vw] z-[99]"></div>
</template>

<style lang="scss" scoped></style>
