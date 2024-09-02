<template>
  <button
    @click="onClick"
    :class="buttonClass"
    :style="{
      backgroundColor: containerBgColor,
      borderColor: selected ? selectedBorderColor : '#777',
      color: textColor,
    }"
    class="relative w-[44vw] h-[10vh] opacity-0 translate-y-[20%] rounded-lg text-[2.4vh] font-[400] border-[2.8px] border-[#333] z-[999] text-white px-[1vw] flex flex-col items-start gap-[2vw] justify-between shadow-lg"
  >
    <!-- Tick Icon in the top-right corner when selected -->
    <div
      v-show="selected"
      class="absolute right-0 top-0 mt-[0.5vh] mr-[0.5vw] flex items-center justify-center z-[99]"
    >
      <span
        :style="{ color: selectedBorderColor }"
        class="h-max w-max font-[600] text-[2.8vh]"
      >
        <TickCircleIcon />
      </span>
    </div>

    <div :class="['h-full w-full px-[2vw] flex items-center justify-center']">
      <div
        class="h-max w-max text-[3.8vh] flex-[1] pt-[.8vh]"
        :style="{ color: logoColor }"
      >
        <WhatsappIcon v-if="label === 'WhatsApp'" />
        <MailIcon v-else />
      </div>
      <div
        :style="{ color: textColor }"
        class="h-max w pt-[1vh] text-start font-[500] flex-[2]"
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
