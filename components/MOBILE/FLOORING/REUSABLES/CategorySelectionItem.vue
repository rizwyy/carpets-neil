<template>
  <div
    :class="[
      'h-[14vh] overflow-hidden w-full rounded-md border-[2px] border-[#f1f1f1] flex items-end justify-between px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer',
      { selected: isSelected },
    ]"
    @click="toggleSelect"
  >
    <div
      v-show="isSelected"
      class="selectedDiv h-full w-full absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
    >
      <SelectedBadge />
    </div>
    <div
      class="h-full w-full bg-gradient-to-b from-transparent from-[20%] to-black absolute bottom-0 left-0 z-[-1]"
    ></div>
    <NuxtImg
      :src="imgSrc"
      class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9] rounded-md"
      alt=""
    />
    <span class="z-[9] text-[#f1f1f1]">{{ label }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SelectedBadge from "~/components/MOBILE/FLOORING/REUSABLES/SelectedBadge.vue";

const props = defineProps({
  label: String,
  imgSrc: String,
  isSelected: Boolean,
});

const emit = defineEmits(["toggle"]);

function toggleSelect() {
  emit("toggle");
}
</script>
