<template>
  <div
    class="font-outfit h-max w-full pt-[.8rem] px-[2vw] flex flex-col items-center gap-[2vh]"
  >
    <div class="h-max w-full px-[1.8vw] text-left">
      <h2 class="text-[2rem] font-[500] leading-[2.4rem]">
        {{ item.question }}
      </h2>
    </div>
    <div class="h-max w-full px-[1.8vw] text-left">
      <p class="text-[1rem] text-[#999]">{{ item.description }}</p>
    </div>
  </div>
</template>
<script setup>
const { item } = defineProps(["item"]);
</script>

<style lang="scss" scoped></style>
