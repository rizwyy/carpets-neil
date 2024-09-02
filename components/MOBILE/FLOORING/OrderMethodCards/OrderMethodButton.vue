<template>
  <button
    @click="onClick"
    :class="buttonClass"
    :style="{
      backgroundColor: containerBgColor,
      borderColor: selected ? selectedBorderColor : '#777',
      color: textColor,
    }"
    class="relative w-[80vw] min-w-[150px] max-w-[300px] h-[8vh] min-h-[48px] max-h-[60px] rounded-lg text-[2.2vh] font-medium border-[2.8px] border-[#333] z-[999] text-white px-[4vw] flex items-center justify-between shadow-xl transition-all duration-300 ease-in-out"
    aria-label="button"
  >
    <!-- Tick Icon in the top-right corner when selected -->
    <div
      v-show="selected"
      class="absolute right-0 top-0 mt-[0.5vh] mr-[0.5vw] flex items-center justify-center z-[99]"
    >
      <span
        :style="{ color: selectedBorderColor }"
        class="font-semibold text-[2.6vh]"
      >
        <TickCircleIcon />
      </span>
    </div>

    <div class="flex items-center gap-[2vw] w-full">
      <!-- Icon Section -->
      <div
        class="text-[2.8vh] flex-shrink-0 flex items-center justify-center"
        :style="{ color: logoColor }"
        aria-label="icon"
      >
        <WhatsappIcon v-if="label === 'WhatsApp'" />
        <MailIcon v-else />
      </div>
      <!-- Text Section -->
      <div
        :style="{ color: textColor }"
        class="flex-1 text-start font-medium text-[2vh]"
        aria-label="button text"
      >
        {{ label }}
      </div>
    </div>
  </button>
</template>

<script setup>
import MailIcon from "~/public/icons/mailIcon.vue";
import TickCircleIcon from "~/public/icons/tickCircleIcon.vue";
import WhatsappIcon from "~/public/icons/whatsappIcon.vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
    required: true,
  },
  buttonClass: {
    type: String,
    default: "",
  },
  containerBgColor: {
    type: String,
    default: "#111", // Default background color
  },
  selectedBorderColor: {
    type: String,
    default: "#00ff00", // Default border color when selected
  },
  textColor: {
    type: String,
    default: "#FFFFFF", // Default text color
  },
  logoColor: {
    type: String,
    default: "#FFFFFF", // Default logo color
  },
});
</script>

<style scoped>
/* Scoped styles for custom adjustments */
button {
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effects */
  touch-action: manipulation; /* Prevents delay on touch devices */
}

button:hover {
  transform: translateY(-2px); /* Subtle lift effect on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slight shadow enhancement */
}
</style>
