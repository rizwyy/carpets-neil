<template>
  <div
    v-if="isLoading"
    class="h-screen w-screen flex justify-center items-center bg-[#fff2] backdrop-blur-[8px] font-outfit"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-[6vh]" viewBox="0 0 24 24">
      <circle cx="18" cy="12" r="0" fill="currentColor">
        <animate
          attributeName="r"
          begin=".67"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate
          attributeName="r"
          begin=".33"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
      <circle cx="6" cy="12" r="0" fill="currentColor">
        <animate
          attributeName="r"
          begin="0"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
    </svg>
  </div>
  <div
    v-else
    class="h-screen absolute w-screen overflow-hidden bg-[#ececec] from-[1%] flex items-center justify-center z-[9999]"
  >
    <div
      class="flex h-full w-full items-center flex justify-center min-[990px]:gap-[5vh] gap-[4vh] flex-col px-[2vw] text-center max-[990px]:pb-[18vh]"
    >
      <span
        class="text-[#222] min-[990px]:text-[5vh] text-[3.2vh] font-outfit flex"
      >
        Sorry, Direct access to this page is restricted.
      </span>
      <span
        class="text-[#555] min-[990px]:text-[3vh] text-[1.8vh] font-outfit flex max-[990px]:w-[60%]"
      >
        You need to fill out the Details page before accessing this content
      </span>
      <a
        class="text-[2vh] max-[990px]:fixed bottom-[2vh] max-[990px]:w-[92vw] px-[4vw] min-[990px]:py-[2vh] rounded-sm py-[2vh] text-white bg-black tracking-[.2vw] font-outfit"
        href="/"
        >GO HOME</a
      >
    </div>
  </div>
</template>

<script setup>
import NavBarMOB from "./NavBarMOB.vue";

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>
.font-outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
