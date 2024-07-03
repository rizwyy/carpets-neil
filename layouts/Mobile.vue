<template>
  <section class="min-[990px]:hidden h-max w-max font-outfit bg-white z-[-1]">
    <slot />
  </section>
</template>

<script setup></script>
<style scoped>
@media (prefers-color-scheme: dark) {
  body {
    background-color: #fff;
  }
}
</style>
