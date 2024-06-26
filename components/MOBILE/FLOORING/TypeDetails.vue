<template>
  <div
    class="h-max w-[96vw] text-center py-[4vh] flex flex-col gap-[1vh] font-outfit font-[400] bg-[#f1f1f1] rounded-md shadow-lg bg-opacity-[.6] px-[3vw]"
  >
    <div class="h-max w-full flex justify-start text-[3.4vh] z-[9]">
      <span>Choose Your Type</span>
    </div>
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <div
        class="h-[14vh] w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer"
        @click="toggleSelect('Solid')"
      >
        <div
          v-if="selectedTypes.includes('Solid')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12s12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3S2.7 17.128 2.7 12S6.872 2.7 12 2.7zm7.4 2.583l-7.505 9.371L8.388 9.08l-2.002 2.436l4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617z"
            />
          </svg>
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <img
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/solidCarpet.jpg"
          alt=""
        />
        <span>Solid</span>
      </div>
      <div
        class="h-[14vh] w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer"
        @click="toggleSelect('Textured')"
      >
        <div
          v-if="selectedTypes.includes('Textured')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12s12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3S2.7 17.128 2.7 12S6.872 2.7 12 2.7zm7.4 2.583l-7.505 9.371L8.388 9.08l-2.002 2.436l4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617z"
            />
          </svg>
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <img
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/texturedCarpet.jpeg"
          alt=""
        />
        <span>Textured</span>
      </div>
    </div>
    <div class="h-max w-full flex justify-between gap-[2vw] z-[9]">
      <div
        class="h-[14vh] w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer"
        @click="toggleSelect('Designed')"
      >
        <div
          v-if="selectedTypes.includes('Designed')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12s12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3S2.7 17.128 2.7 12S6.872 2.7 12 2.7zm7.4 2.583l-7.505 9.371L8.388 9.08l-2.002 2.436l4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617z"
            />
          </svg>
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <img
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/designedCarpet.jpg"
          alt=""
        />
        <span>Designed</span>
      </div>
      <div
        class="h-[14vh] w-full flex items-end justify-between text-[#f1f1f1] px-[1.6vw] py-[.8vh] text-[2.4vh] relative cursor-pointer"
        @click="toggleSelect('Customized')"
      >
        <div
          v-if="selectedTypes.includes('Customized')"
          class="selectedDiv h-full w-full from-[20%] absolute bottom-0 left-0 bg-opacity-[.3] z-[1] flex items-start justify-end px-[1vw] py-[1vh]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12s12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3S2.7 17.128 2.7 12S6.872 2.7 12 2.7zm7.4 2.583l-7.505 9.371L8.388 9.08l-2.002 2.436l4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617z"
            />
          </svg>
        </div>
        <div
          class="h-full w-full bg-gradient-to-b from-[#0000] to-black from-[60%] absolute bottom-0 left-0 bg-opacity-[.3] z-[-1]"
        ></div>
        <img
          class="h-full w-full object-cover absolute left-0 bottom-0 z-[-9]"
          src="/10001.jpg"
          alt=""
        />
        <span>Customized</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTypes = ref([]);

const toggleSelect = (type) => {
  if (selectedTypes.value.includes(type)) {
    selectedTypes.value = selectedTypes.value.filter((t) => t !== type);
  } else {
    selectedTypes.value.push(type);
  }
};
</script>

<style scoped>
.selectedDiv {
}
</style>
