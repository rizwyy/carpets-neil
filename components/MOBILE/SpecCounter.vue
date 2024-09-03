<template>
  <div class="relative inline-block">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-[4svh]"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3m-1-5v2a1 1 0 1 0 2 0v-2zm-2 3V4H4v15a1 1 0 0 0 1 1zM6 7h8v2H6zm0 4h8v2H6zm0 4h5v2H6z"
      />
    </svg>
    <!-- Circle Badge -->
    <div
      v-if="userStore.specCount > 0"
      class="absolute top-[-1.8svh] right-[-2vw] bg-slate-500 text-[1.6svh] font-[500] text-white flex items-center justify-center rounded-full w-[3svh] h-[3svh]"
    >
      {{ userStore.specCount }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useUserStore from "~/stores/user";

const userStore = useUserStore();

const specCount = computed(() => userStore.specCount);
</script>
