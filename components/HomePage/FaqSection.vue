<template>
  <div
    class="HeroItem_Text flooringLayout_BG opacity-0 h-max w-screen flex items-center justify-center py-[10vh] bg-[#f1f1f1]"
  >
    <div class="h-[20vh] w-[75%] bg-white flex items-center justify-center">
      {{ faqContent }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  faqContent: {
    type: String,
    required: true,
  },
});
</script>
