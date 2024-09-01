<template>
  <div
    v-show="show"
    class="orderMethodWarningMOB h-screen w-screen bg-[#000] bg-opacity-[.2] backdrop-blur-[4px] fixed top-0 left-0 z-[9999]"
  >
    <div class="h-[100svh] w-full flex justify-center items-center">
      <div
        class="h-max w-[90vw] flex flex-col items-start gap-[4vh] bg-[#f1f1f1] pt-[2.8vh] rounded-lg"
      >
        <span class="text-detailsContainer_heading_MOB text-[#333] px-[3.2vw]"
          >WARNING:</span
        >
        <span class="text-[2vh] px-[3.2vw] text-[#555]"
          >Changing your order method will result in losing all previously saved
          items associated with this contact number/email. <br />
          <br />
          Are you sure you want to proceed?</span
        >
        <div
          class="h-max w-full flex justify-between gap-[4vw] border-t-[1.8px] border-[#ddd]"
        >
          <button
            class="px-[8vw] text-[2vh] font-[500] text-[#222] py-[2vh] w-1/2 text-center border-r-[1.8px] border-[#ddd] tracking-[.3vw]"
            @click="onNo"
          >
            NO
          </button>
          <button
            class="px-[8vw] text-[2vh] font-[500] text-[#222] py-[2vh] w-1/2 text-center border-[#ddd] tracking-[.3vw]"
            @click="onYes"
          >
            YES
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  onYes: {
    type: Function,
    required: true,
  },
  onNo: {
    type: Function,
    required: true,
  },
});
</script>
