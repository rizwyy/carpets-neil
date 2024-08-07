<template>
  <button
    v-show="userStore.preference.spec_1 !== ''"
    @click="gsapScrollTo"
    class="fixed flex items-center justify-center bottom-[1.8vh] right-[1vw] px-[1.4vw] py-[2.4vh] hover:scale-[1.1] transition-all duration-[300ms] backdrop-blur-[12px] bg-[#BEBFC5] rounded-full z-[999] shadow-xl"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M12 13.825L8.1 17.7q-.275.275-.687.288T6.7 17.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213t.375-.062t.375.062t.325.213l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 11.7q-.275.275-.687.288T6.7 11.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 5.425t.375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"
      />
    </svg>
  </button>
</template>

<script setup>
import useUserStore from "./../../stores/user";
const userStore = useUserStore();
</script>
