<template>
  <button
    v-show="show"
    @click="clear"
    class="h-max bg-white text-gray-500 px-[1vw] py-[.8vh] rounded-md flex gap-[1vw] items-center text-[1.8vh]"
  >
    Clear All
    <ClearAllIcon />
  </button>
</template>

<script setup>
import ClearAllIcon from "~/public/icons/clearAllIcon.vue";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["clear"]);

function clear() {
  emit("clear");
}
</script>
