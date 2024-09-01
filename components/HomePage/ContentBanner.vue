<template>
  <div
    class="HeroItem_Text flooringLayout_BG opacity-0 h-max w-screen flex items-center justify-center py-[10vh] bg-[#f1f1f1]"
  >
    <div class="h-[20vh] w-[75%] bg-white flex items-center justify-center">
      {{ content }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>
