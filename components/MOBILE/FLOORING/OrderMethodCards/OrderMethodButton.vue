<template>
  <button
    @click="onClick"
    :class="buttonClass"
    :style="{
      backgroundColor: containerBgColor,
      borderColor: selected ? selectedBorderColor : '#999',
      color: textColor,
    }"
    class="w-[44vw] h-[22svh] opacity-0 translate-y-[20%] rounded-2xl text-[2.8vh] font-[400] border-[2.8px] border-[#333] z-[999] text-white px-[2vw] flex flex-col items-start gap-[2vw] justify-between"
  >
    <div
      :class="[
        'h-max w-full px-[.4vw] flex',
        selected ? 'justify-between' : 'justify-start',
      ]"
    >
      <span :style="{ color: textColor }" class="pt-[1vh] text-start">
        {{ label }}
      </span>
      <div
        v-show="selected"
        class="selectedDiv h-full w-full flex justify-end pt-[1vh]"
      >
        <span
          :style="{
            color: selectedBorderColor,
          }"
          class="h-max w-max font-[600]"
          ><CircleBold
        /></span>
      </div>
    </div>
    <div
      class="h-max w-max flex w-full flex justify-start pb-[1vh] pl-[1vw] text-[5.2vh]"
    >
      <WhatsappIcon v-if="label === 'WhatsApp'" />
      <MailIcon v-else />
    </div>
  </button>
</template>

<script setup>
import CircleBold from "~/public/icons/circleBold.vue";
import MailIcon from "~/public/icons/mailIcon.vue";
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
});
</script>
